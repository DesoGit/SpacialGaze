'use strict';

const fs = require('fs');
const path = require('path');

const requestsFile = path.resolve(__dirname, '../config/chat-plugins/genrequests.json');

let genRequests = {requests: [], blacklist: []};
try {
	genRequests = require(requestsFile);	
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
}

if (!(genRequests || typeof genRequests === 'object')) genRequests = {requests: [], blacklist: {}};

function writeGenRequests() {
	fs.writeFileSync(requestsFile, JSON.stringify(genRequests));
}

exports.commands = {
	genreq: function (target, room, user) {
		if (genRequests.blacklist.includes(user.userid)) return false;
		if (user.locked || !user.autoconfirmed) return this.errorReply('You do not have adequate permissions to request a gen.');
		if (!target) return this.errorReply("Please specify something for the gen request.");
		genRequests.requests.push({username: user.name, request: target, time: new Date().toUTCString()});
		writeGenRequests();
		this.sendReply("Your gen request was successfully added to the queue.");
	},

	reqview: function (target, room, user) {
		if (!this.can('hotpatch')) return false;
		if (!genRequests.requests.length) return this.errorReply('There are no current genning requests.');
		let output = `There are <b>${genRequests.requests.length}</b> users who requested genning:<br />`;
		for (let i = 0; i < genRequests.requests.length; i++) {
			output += `<b>${genRequests.requests[i].username}</b>: ${genRequests.requests[i].request} (${genRequests.requests[i].time}).`;
		}
		this.sendReplyBox(output);
	},

	genblacklist: function (target, room, user) {
		if (!this.can('hotpatch')) return false;
		if (!target) return this.errorReply('Please specify a target.');
		let blacklisted = toId(target);
		if (genRequests.blacklist.includes(blacklisted)) return this.errorReply(`${target} is already present on the genning blacklist.`);
		genRequests.blacklist.push(blacklisted);
		writeGenRequests();
		this.sendReply(`${target} was added to the genning blacklist.`);
		// Notify the user that they were blacklisted, if they are online.
		if (Users(blacklisted)) Users(blacklisted).popup(`You were added to the genning blacklist by ${user.name}. If you feel this is unfair, please PM an administrator (~) or the user who blacklisted you.`);
	},

	genunblacklist: function (target, room, user) {
		if (!this.can('hotpatch')) return false;
		if (!target) return this.errorReply("Please specify a target.");
		let blacklisted = toId(target);
		if (!genRequests.blacklist.includes(blacklisted)) return this.errorReply(`${target} is currently not on the genning blacklist.`);
		genRequests.blacklist.splice(genRequests.blacklist.indexOf(blacklisted), 1);
		writeGenRequests();
		this.sendReply(`${target} was removed from the genning blacklist.`);
		// Notify the user that they were unblacklisted, if they are online.
		if (Users(blacklisted)) Users(blacklisted).popup(`You were removed from the genning blacklist by ${user.name}.`);
	},

	blacklistview: function (target, room, user) {
		if (!this.can('hotpatch')) return false;
		if (!genRequests.blacklist.length) return this.errorReply("There are currently no users on the genning blacklist.");
		let output = `There are <b>${genRequests.blacklist.length}</b> users on the genning blacklist:<br />`;
		for (let i = 0; i < genRequests.blacklist.length; i++) {
			output += `<i>${genRequests.blacklist[i]}</i><br />`;
		}
		this.sendReplyBox(output);
	},

	reqclear: function (target, room, user) {
		if (!this.can('hotpatch')) return false;
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
};
