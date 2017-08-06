/*
Factions
Idea by Desokoro
Coded by ?
----------------------------------------------------------------------------------
Basis of factions:
Users can create factions using /faction create (name), (desc), (tag [4 characters]) if they are either ranked or have five users (including themselves) 'sponsoring' the faction. Users can use /faction sponsor (name) to do this.

Users can join existing factions using /faction join (name); using /faction list will show all joinable factions.

Users can invite people to their factions with /faction invite (user).

Users can privatize their factions if they are ranked and use /faction privatize; note that you must be the faction owner to do this.

Users can only join one faction at a time.

Users can block faction invites using /faction blockinvites.

Users can remove users from their faction using /faction kick (user); this will simply eject them without banning them.

Users can ban users from their faction using /faction ban (user); this will alt/ip ban them.

Users can unban users from their faction using /faction unban (user); this will obv unban their ip/alts.

There are three faction ranks: Leader, Noble and Commoner. Leaders own the server and can do anything to the faction. Nobles act as moderators and can do the majority of faction-related changes. Commoners are regular users and do not have many faction-related powers.

New tour mode: Faction Tours - Two or more factions of equal size spar in a single elimination tour (any tier); the winner has x amount of bucks distributed to the Faction Bank, which can then be distributed equally among all users within the faction using /faction bank distribute, with x equalling (the amount of winners within the faction * the amount of matches the player who won for their faction played) / the amount of Pokemon that fainted during the faction tour (if this number is 0, this automatically equals 1)

Users can view their faction bank total by using /faction bank total; using /faction bank (name) total will display a specific factions' total and /faction bank ladder will display the top ten factions' bank totals.

You can view a faction's profile using /faction profile (name) [if no name is specified, it defaults to your own faction. If you aren't in a faction, it asks you to specify a faction]

In a faction profile, you can see the owner (Leader), Nobles and Commoners, the total usercount, the faction slogan and their collective win total (including a breakdown of how many wins a faction member has representing the faction).
--------------------------------------------------------------------------------------------------------------------
*/
/*
Factions
Idea by Desokoro
Coded by ?
----------------------------------------------------------------------------------
Basis of factions:
Users can create factions using /faction create (name), (desc), (tag [4 characters]) if they are either ranked or have five users (including themselves) 'sponsoring' the faction. Users can use /faction sponsor (name) to do this.

Users can join existing factions using /faction join (name); using /faction list will show all joinable factions.

Users can invite people to their factions with /faction invite (user).

Users can privatize their factions if they are ranked and use /faction privatize; note that you must be the faction owner to do this.

Users can only join one faction at a time.

Users can block faction invites using /faction blockinvites.

Users can remove users from their faction using /faction kick (user); this will simply eject them without banning them.

Users can ban users from their faction using /faction ban (user); this will alt/ip ban them.

Users can unban users from their faction using /faction unban (user); this will obv unban their ip/alts.

There are three faction ranks: Leader, Noble and Commoner. Leaders own the server and can do anything to the faction. Nobles act as moderators and can do the majority of faction-related changes. Commoners are regular users and do not have many faction-related powers.

New tour mode: Faction Tours - Two or more factions of equal size spar in a single elimination tour (any tier); the winner has x amount of bucks distributed to the Faction Bank, which can then be distributed equally among all users within the faction using /faction bank distribute, with x equalling (the amount of winners within the faction * the amount of matches the player who won for their faction played) / the amount of Pokemon that fainted during the faction tour (if this number is 0, this automatically equals 1)

Users can view their faction bank total by using /faction bank total; using /faction bank (name) total will display a specific factions' total and /faction bank ladder will display the top ten factions' bank totals.

You can view a faction's profile using /faction profile (name) [if no name is specified, it defaults to your own faction. If you aren't in a faction, it asks you to specify a faction]

In a faction profile, you can see the owner (Leader), Nobles and Commoners, the total usercount, the faction slogan and their collective win total (including a breakdown of how many wins a faction member has representing the faction).
--------------------------------------------------------------------------------------------------------------------
*/
'use strict';

const fs = require('fs');

let factions = {};

try {
	factions = JSON.parse(fs.readFileSync('config/factions.json'));
} catch (e) {
	fs.writeFileSync('config/factions.json', '{}');
}

function writeFactions(obj) {
	fs.writeFileSync('config/factions.json', obj);
	return true;
}

exports.commands = {
	faction: {
		create: function (target, room, user) {
			if (!user.can('broadcast')) return this.sendReply('You must be global voice to create a faction.');
			let targets = target.split(',');
			if (targets.length !== 3) return this.parse('/factionhelp');
			if (targets[0].length > 20) return this.sendReply('Name cannot exceed 20 characters.');
			if (targets[1].length > 150) return this.sendReply('Description cannot exceed 150 characters.');
			if (targets[2].length !== 4) return this.sendReply('Tag must be exactly 4 characters long.');
			let curFactions = Object.getOwnPropertyNames(factions);
			let pass = true;
			if (!factions) {
				return this.sendReply('debugerror 1');
			} else {
				for (let i in curFactions) {
					if (toId(curFactions[i]) === toId(target[0])) pass = false;
				}
				if (pass) {
					factions[toId(target[0])] = {
						name: target[0],
						desc: target[1],
						tag: target[2],
						members: {},
					};
					let status = writeFactions(factions);
					if (status) {
						return this.sendReply('debugerror3');
					} else return this.sendReply('Success!');
				} else return this.sendReply('Specified faction already exists.');
			}
		},
	},

	factionhelp: function (target, room, user) {
		let factionHelp = 'Faction Guide can be found <a href=http://pastebin.com/3Wqzzghp>here</a>.';
		this.sendReplyBox(factionHelp);
	},
};
