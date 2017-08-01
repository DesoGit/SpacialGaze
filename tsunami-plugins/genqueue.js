'use strict';

const fs = require('fs');
const path = require('path');

const requestsFile = path.resolve(__dirname, '../config/chat-plugins/genrequests.json');

//const permittedGenners = ['desokoro', 'lombres']
//const permittedGennersByNames = ['Desokoro', 'Lombres']

let genRequests = {requests: [], blacklist: [], permittedGenners: [], permittedGennersByNames: []};
try {
	genRequests = require(requestsFile);	
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
}

if (!(genRequests || typeof genRequests === 'object')) genRequests = {requests: [], blacklist: [], permittedGenners: [], permittedGennersByNames: []};

function writeGenRequests() {
	fs.writeFileSync(requestsFile, JSON.stringify(genRequests));
}

exports.commands = {
	genreq: function (target, room, user) {
		if (genRequests.blacklist.includes(user.userid)) return false;
		if (user.locked || !user.autoconfirmed) return this.errorReply('You do not have adequate permissions to request a gen.');
		if (!target) return this.errorReply("Please specify something for the gen request.");
		if (target.length > 180) return this.sendReply('|html|<font color="EF4333">Please use a link shortener like <a href="http://pastebin.com">Pastebin</a></font>');
		if (target.includes("pornhub" || "xvideos" || "xnxx")) return this.errorReply('You are not permitted to link those things.');
				if (target.includes("http://" || ".com")) { 
			target = '<a href=' + target + '>' + 'Gen Request' + '</a>';
		}
		genRequests.requests.push({username: user.name, request: target, time: new Date().toUTCString()});
		writeGenRequests();
		this.sendReply("Your gen request was successfully added to the queue.");
	},

	reqview: function (target, room, user) {
                if (user.userid !== 'desokoro') return this.errorReply('You aren\'t permitted to use this command.');
		//if (!this.can('hotpatch')) return false;
		if (!genRequests.requests.length) return this.errorReply('There are no current genning requests.');
		let output = `There are <b>${genRequests.requests.length}</b> users who requested genning:<br />`;
		for (let i = 0; i < genRequests.requests.length; i++) {
			output += `<b>${genRequests.requests[i].username}</b>: ${genRequests.requests[i].request} (${genRequests.requests[i].time}).<br />`;
		}
		this.sendReplyBox(output);
	},

        gbl: 'genblacklist',
	genblacklist: function (target, room, user) {
                if (user.userid !== 'desokoro') return this.errorReply('You aren\'t permitted to use this command.');
		//if (!this.can('hotpatch')) return false;
		if (!target) return this.errorReply('Please specify a target.');
		let blacklisted = toId(target);
		if (genRequests.blacklist.includes(blacklisted)) return this.errorReply(`${target} is already present on the genning blacklist.`);
		genRequests.blacklist.push(blacklisted);
		writeGenRequests();
		this.sendReply(`${target} was added to the genning blacklist.`);
		// Notify the user that they were blacklisted, if they are online.
		if (Users(blacklisted)) Users(blacklisted).popup(`You were added to the genning blacklist by ${user.name}. If you feel this is unfair, please PM an administrator (~) or the user who blacklisted you.`);
	},

        gwl: 'genunblacklist',
        genwhitelist: 'genunblacklist',
	genunblacklist: function (target, room, user) {
                if (user.userid !== 'desokoro') return this.errorReply('You aren\'t permitted to use this command.');
		//if (!this.can('hotpatch')) return false;
		if (!target) return this.errorReply("Please specify a target.");
		let blacklisted = toId(target);
		if (!genRequests.blacklist.includes(blacklisted)) return this.errorReply(`${target} is currently not on the genning blacklist.`);
		genRequests.blacklist.splice(genRequests.blacklist.indexOf(blacklisted), 1);
		writeGenRequests();
		this.sendReply(`${target} was removed from the genning blacklist.`);
		// Notify the user that they were unblacklisted, if they are online.
		if (Users(blacklisted)) Users(blacklisted).popup(`You were removed from the genning blacklist by ${user.name}.`);
	},

        vbl: 'blacklistview',
        blv: 'blacklistview',
	blacklistview: function (target, room, user) {
                if (user.userid !== 'desokoro') return this.errorReply('You aren\'t permitted to use this command.');
		//if (!this.can('hotpatch')) return false;
		if (!genRequests.blacklist.length) return this.errorReply("There are currently no users on the genning blacklist.");
		let output = `There are <b>${genRequests.blacklist.length}</b> users on the genning blacklist:<br />`;
		for (let i = 0; i < genRequests.blacklist.length; i++) {
			output += `<i>${genRequests.blacklist[i]}</i><br />`;
		}
		this.sendReplyBox(output);
	},

        delreq: 'reqclear',
	reqclear: function (target, room, user) {
                if (user.userid !== 'desokoro') return this.errorReply('You aren\'t permitted to use this command.');
		//if (!this.can('hotpatch')) return false;
		if (!(target || target === 'force')) {
			this.errorReply("WARNING: This will reset all genning requests on the server.");
			this.errorReply("If you wish to continue, use /reqclear force.");
			return;
		}
		// Really lazy hack for doing this - just reset everything in genRequests.requests.
		genRequests.requests = [];
		writeGenRequests();
		this.sendReply("All genning requests were erased from the server.");
	},

	genguide: function (target, room, user) {
	this.sendReplyBox('<center><h3>GENNING GUIDE</h3></center><center><h4>genreq (request): Requests a gen for those who can gen and are permitted by Tsunami to do so</h4></center><center><h4>viewgenners: View eligible genners</h4></center><center><h4>reportgenner: Reports a genner to Desokoro; use only if absolutely needed</h4></center><center><h2>More commands available to all users will be listed here in the future</h2></center>');
	},

	staffgenguide: function (target, room, user) {
	if (!genRequests.permittedGenners.includes(user.userid) || !genRequests.permittedGennersByNames.includes(user.name)) return this.errorReply('You are not permitted to view this.');
	this.sendReplyBox('<center><h3>GENNING RESPONSE GUIDE</h3></center><center></h1>reqclear: Clears all requests</h1></center><center></h1>vbl: Views all blacklisted users</h1></center><center></h1>gbl: Blacklists a user.</h1></center><center></h1>gwl: Un-blacklists a user</h1></center>');
	},

	genneradd: function (target, room, user) {
	if (user.userid !== 'desokoro') return this.errorReply('You are not permitted to use this command.');
	if (!target) return this.errorReply('Please specify a target.')
	let targetUser = Users(toId(target));
	if (!targetUser) return this.errorReply('The target user ' + target + ' could not be found. Please check your spelling!');
		if (genRequests.permittedGenners.includes(targetUser.userid) || genRequests.permittedGennersByNames.includes(targetUser.name)) return this.errorReply(`${target} is already present on the permitted genners list.`);
		genRequests.permittedGenners.push(targetUser.userid);
		genRequests.permittedGennersByNames.push(targetUser.name);
		writeGenRequests();
	this.sendReply('You have successfully added ' + targetUser.name + ' to the permitted genners list!');
	console.log(targetUser.name + ' was added to the permitted genners list by ' + user.name + '.');
	},

	removegenner: function (target, room, user) {
	if (user.userid !== 'desokoro') return this.errorReply('You are not permitted to use this command.');
	if (!target) return this.errorReply('Please specify a target.');
	let targetUser = Users(toId(target));
	if (!targetUser) return this.errorReply('The target user ' + target + ' was not found. Check your spelling!');
	if (!genRequests.permittedGenners.includes(targetUser.userid) || !genRequests.permittedGennersByNames.includes(targetUser.name)) return this.errorReply('The target ' + target + ' is not on the permitted genners list.');
		genRequests.permittedGenners.splice(genRequests.permittedGenners.indexOf(targetUser.userid), 1);
		genRequests.permittedGennersByNames.splice(genRequests.permittedGennersByNames.indexOf(targetUser.name), 1);
		writeGenRequests();
	this.sendReply(target + ' was successfully removed from the permitted genners list.');
	console.log(target + ' was removed from the genners list by ' + user.name);
	},

	viewgenners: function (target, room, user) {
	for (let i = 0; i <  genRequests.permittedGennersByNames.length; i++) { this.sendReplyBox(genRequests.permittedGennersByNames[i]);   }
	},

	reportgenner: function (target, room, user) {
	//let CaseSensitiveArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	if (genRequests.blacklist.includes(user.userid)) return this.errorReply('You are not allowed to partake in any genning services.');
	if (user.canTalk) return this.errorReply('You are currently unable to be trusted due to your disciplinary status; your report will not be accepted.');
	if (!user.autoconfirmed) return this.errorReply('You are not autoconfirmed and your report will not be accepted.');
	if (!target) return this.errorReply('Please specify a target.');
	if (!genRequests.permittedGenners.includes(target) && !genRequests.permittedGennersByNames.includes(target)) return this.errorReply('The user you have reported is not a valid genner.');
	if (target === 'desokoro' || target === 'Desokoro') return this.errorReply('Reporting the owner of the server to himself won\'t do you much good...');
	//if (CaseSensitiveArray.includes(target)) this.errorReply('Only lowercase letters and numbers can be used to report a genner.');
	this.parse('/tell Desokoro, TOKEN OF AUTHENTICITY: ' + user.name + '|' + Math.floor(Math.random() * 20) + '|' +  + Math.floor(Math.random() * 20) + '|' + Math.floor(Math.random() * 20) + '. Reporting genner ' + target + ' for misconduct.');
	},

	gensyscredits: function (target, room, user, connection) {
	this.sendReplyBox('Thank ' + '<font color=' + Tsunami.nameColor('Mystifi', false) + '>' + Chat.escapeHTML('Mystifi') + '</font>' + ' for essentially building the framework for the genning request system!. The system is maintained by ' + '<font color=' + Tsunami.nameColor('Desokoro', false) + '>' + Chat.escapeHTML('Desokoro') + '</font>' + '.');
	},
};

/*'use strict';

let GenReqArray = []

exports.commands = {
genreq: function (target, room, user) {
if (user.isBlacklisted === true) return this.errorReply('You are blacklisted.');
if (user.locked) return this.errorReply('You do not have adequate permissions to request a gen.');
if (!user.autoconfirmed) return this.errorReply('You do not have adequate permissions to request a gen.');
//if (GenReqArray.length === 0) {
GenReqArray.push(user.userid);
//}
},

reqview: function (target, room, user) {
if (user.userid !== 'desokoro') return this.errorReply('Only Desokoro is permitted to use this.');
if (GenReqArray.length === 0) return this.errorReply('Nobody has requested a gen.');
for (let i = 0; i <  GenReqArray.length; i++) { this.sendReplyBox(GenReqArray[i]);   }
},

genblacklist: function (target, room, user) {
if (user.userid !== 'desokoro') return this.errorReply('You lack the permissions to use this.');
if (!target) return this.errorReply('Please specify a target.');
let targetUser = Users(toId(target));
if (!targetUser) return this.errorReply(target + ' could not be found. Check your spelling.');
if (targetUser.isBlacklisted === true) return this.errorReply(targetUser.username + ' is already blacklisted.');
targetUser.isBlacklisted = true;
this.sendReply(targetUser + ' is now blacklisted.');
},

genwhitelist: function (target, room, user) {
if (user.userid !== 'desokoro') return this.errorReply('You lack the permissions to use this.');
if (!target) return this.errorReply('Please specify a target.');
let targetUser = Users(toId(target));
if (!targetUser) return this.errorReply(target + ' could not be found. Check your spelling.');
if (targetUser.isBlacklisted === false) return this.errorReply(targetUser.username + ' is not blacklisted.');
targetUser.isBlacklisted = false;
this.sendReply(targetUser + ' is no longer blacklisted.');
},

blacklistview: function (target, room, user) {
if (user.userid !== 'desokoro') return this.errorReply('You lack the permissions to use this.');
if (!target) return this.errorReply('Please specify a target.');
let targetUser = Users(toId(target));
if (!targetUser) this.errorReply (target + ' could not be found. Check your spelling.');
if (targetUser.isBlacklisted === true) return this.sendReply('This user is blacklisted.');
else return this.sendReply('This user is not blacklisted.');
},

reqclear: function (target, room, user) {
if (user.userid !== 'desokoro') return this.errorReply('You lack the permissions to use this.');
GenReqArray = []
    this.sendReply('All requests have been cleared.');
console.log('Gen requests have been cleared by ' + user.name);
},
    };*/
