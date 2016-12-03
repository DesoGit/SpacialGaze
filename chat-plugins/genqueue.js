'use strict';

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
for (let i = 0; i <  GenReqArray.length; i++) { this.sendReplyBox(GenReqArray[i]); /* Do   whatever you need to do with the array information, using  GenReqArray[i]*/  }
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
    };
