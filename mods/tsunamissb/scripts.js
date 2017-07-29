// Custom Tsunami scripts.
'use strict';

exports.BattleScripts = {
	randomTsuStaffTeam: function (side) {
		let userid = toId(side.name);
		let team = [];
		let variant = this.random(2);
		let sets = {
			// Admins:
			'~Desokoro': {
				species: 'Gyarados',
				ability: 'Wave Call',
				item: 'Leftovers',
				gender: 'M',
				shiny: true,
				moves: ['Substitute', 'Dragon Dance', 'Bounce',
				],
				signatureMove: 'Tsunami Crash',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Adamant',
			},
			'~Mosmero': {
				species: 'Gastly',
				ability: 'Mosmic Power',
				item: 'Life Orb',
				gender: '',
				moves: ['Shadow Ball', 'Sludge Bomb', 'Giga Drain',
				],
				signatureMove: 'Mosmero Beam',
				evs: {
					hp: 4,
					spa: 252,
					spe: 252,
				},
				nature: 'Modest',
			},
			'~HoeenHero': {
				species: 'Ludicolo',
				ability: 'Programmer\'s Domain',
				item: 'Leftovers',
				gender: 'M',
				moves: [
					['Hydro Pump', 'Scald'][variant], 'Ice Beam', 'Giga Drain',
				],
				signatureMove: 'Scripting',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Modest',
			},
			'~Tsunami Prince': {
				species: 'Darkrai',
				ability: 'Death Boost',
				item: 'Darkiniumz',
				gender: 'M',
				moves: ['Nightmare', 'Dark Pulse', 'Shadow Ball'
				],
				signatureMove: 'Overpower',
				evs: {
					spa: 252,
					spe: 252,
					hp: 6,
				},
				nature: 'Timid',
			},
			// Global Leaders:
			'&MechSteelix': {
				species: 'Mega-Steelix',
				ability: 'Sandbox',
				item: 'Lum Berry',
				gender: 'M',
				moves: ['Curse', 'Sleep Talk', 'Earthquake',
				],
				signatureMove: 'Deep Sleep',
				evs: {
					hp: 252,
					atk: 4,
					def: 252,
				},
				nature: 'Impish',
			},
			
			// Global Moderators:
			'@Admewn': {
				species: 'Mew',
				ability: 'Protean',
				item: 'Expert Belt',
				moves: ['Earth Power', 'Oblivion Wing', 'Shadow Ball',
				],
				signatureMove: 'Mewtation',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Timid',
			},
			'@CubsFan38': {
				species: 'Mamoswine',
				ability: 'Chilly Penguinn',
				item: 'Life Orb',
				gender: 'M',
				moves: ['Ice Shard', 'Knock Off', 'Earthquake',
				],
				signatureMove: 'Penguin\'s Shower',
				evs: {
					hp: 4,
					atk: 252,
					spe: 252,
				},
				nature: 'Jolly',
			},
			'@TheRittz': {
				species: 'Mega-Venusaur',
				ability: 'Paradoxical Prowess',
				item: 'Black Sludge',
				gender: 'M',
				moves: ['Substitute', 'Leech Seed', 'Toxic',
				],
				signatureMove: 'Everlasting Annoyingness',
				evs: {
					hp: 252,
					def: 128,
					spd: 128,
				},
				nature: 'Calm',
			},
			// Global Drivers:
			'%Kraken Mare': {
				species: 'Gardevoir-Mega',
				ability: 'krakensboost',
				shiny: true,
				item: 'Focus Sash',
				gender: 'F',
				moves: ['Moonblast', 'Calm Mind', 'Psychic',
				],
				signatureMove: 'Revenge of Kraken Mare',
				evs: {
					hp: 248,
					spa: 252,
					def: 8,
				},
				nature: 'Modest',
			},
			// Bots:
			'*Tidal Wave Bot': {
				species: 'Magikarp',
				ability: 'Loading...',
				item: 'Temp. Name',
				shiny: true,
				moves: ['Wild Charge', 'Shift Gear', 'Gear Grind'
				],
				signatureMove: 'Server Guardian',
				evs: {
					hp: 4,
					atk: 252,
					spe: 252,
				},
				nature: 'Adament',
			},
			'*Stabby the Krabby': {
				species: 'Krabby',
				ability: 'Ready to Stab',
				item: 'Eviolite',
				gender: 'M',
				moves: ['Crabhammer', 'Swords Dance', 'Knock Off'
				],
				baseSignatureMove: "stabstab",
				signatureMove: 'Stab Stab',
				evs: {
					atk: 252,
					spe: 252,
					hp: 6,
				},
				nature: 'Adamant',
			},
			// Global Voices:
			'+xcmr': {
				species: 'Meowth',
				ability: 'Feline Fury',
				item: 'Eviolite',
				gender: 'M',
				moves: ['U-turn', 'Fake Out', 'Knock Off',
				],
				signatureMove: 'Kitty Crush',
				evs: {
					atk: 252,
					spd: 4,
					spe: 252,
				},
				nature: 'Jolly',
			},
			/******************
			Waiting for move to be ready.
			'+C733937123':{
				species: 'Chesnaught',
				ability: 'Paladin Armour',
				item: 'Shining Blade and Glowing Armour',
				gender: 'M',
				moves: ['Leaf Blade', 'Smart Strike', 'Sacred Sword',
				],
				signatureMove: 'Paladin Strike',
				evs: {
					atk: 252,
					spd: 128,
					spe: 128,
				},
				nature: 'Adamant',
			},
			*************************/
			//Former Staff + Regs
			
		};
		// convert moves to ids.
		for (let k in sets) {
			sets[k].moves = sets[k].moves.map(toId);
			sets[k].baseSignatureMove = toId(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		let pool = Dex.shuffle(Object.keys(sets));
		for (let i = 0; i < 6; i++) {
			if (i === 1) {
 				let monIds = pool.slice(0, 6).map(function (p) {
 					return toId(p);
 				});
 				for (let mon in sets) {
 					if (toId(mon) === userid && monIds.indexOf(userid) === -1) {
 						pool[1] = mon;
 						break;
 					}
 				}
 			}
 			let set = sets[pool[i]];
			set.level = 100;
			set.name = pool[i];
			if (!set.ivs) {
				set.ivs = {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				};
			} else {
				for (let iv in {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) {
				set.evs = {
					hp: 84,
					atk: 84,
					def: 84,
					spa: 84,
					spd: 84,
					spe: 84,
				};
			}
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}
		return team;
	},
};
