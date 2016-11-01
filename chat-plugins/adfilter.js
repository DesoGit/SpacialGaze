'use strict';
const fs = require('fs');
let adWhitelist = ['tsunami'];
let adRegex = new RegExp("(play.pokemonshowdown.com\\/~~)(?!(" + adWhitelist.join('|') + "))", "g");
Config.chatfilter = function (message, user, room, connection, targetUser) {
        user.lastActive = Date.now();
        if (!Users(targetUser)) {
            targetUser = room;
        }
        
        //Advertising
        let pre_matches = (message.match(/psim|psim.us|psim us|psm.us|PSIM|psm us/g) || []).length;
  			let final_check = (pre_matches >= 1 ? adWhitelist.filter(server => { return ~message.indexOf(server); }).length : 0);
        if (!user.can('lock') && (pre_matches >= 1 && final_check === 0 || pre_matches >= 2 && final_check >= 1 || message.match(adRegex))) {
            let target = message;
            message = '>> Advertiser: [ ' + user.getIdentity() + ' ] ( Towards -> ' + (targetUser.id ? targetUser.id : targetUser.getIdentity()) + ' ) Message: [ ' + target + ' ]';                                           
            if (Rooms.get('staff')) { 
                    Rooms.get('staff').add('|raw|<div class="broadcast-red">' + user.name + ' has advertised, and was locked.</div>').update();
                    Rooms.get('staff').add('|c|~Server|' + message + '').update();
            }
            if (Rooms.get('upperstaff')) {
                    Rooms.get('upperstaff').add('|raw|<div class="broadcast-red">' + user.name + ' has advertised, and was locked.</div>').update();
                    Rooms.get('upperstaff').add('|c|~Server|' + message + '').update();
            }                                           
            Punishments.lock(user, Date.now() + 7 * 24 * 60 * 60 * 1000, "");
            fs.appendFile('logs/modlog/modlog_staff.txt', '[' + (new Date().toJSON()) + '] (staff) ' + user.name + ' was locked from talking for Advertising (' + connection.ip + ')\n');
            Monitor.log(user.name + " has been locked for attempting to advertise");
            this.globalModlog("LOCK", user.name, " by server");
            user.popup('You have been locked for attempting to advertise. \n\n Pm a %, @, &, or ~ to appeal your lock.');
            return false;
        }
        return message;
};
