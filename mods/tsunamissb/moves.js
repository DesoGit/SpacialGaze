"use strict";

exports.BattleMovedex = {
	// HoeenHero
	scripting: {
		category: "Status",
		id: "scripting",
		isViable: true,
		isNonstandard: true,
		name: "Scripting",
		pp: 10,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		priority: 0,
		self: {
			boosts: {
				spa: 2,
				spd: 1,
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('', '>>> let p=p2.pokemon.find(p => p.speciesid===\'ludicolo\'); battle.boost({spa:1,spe:1},p); battle.setWeather(\'raindance\', p); for(let i in p1.pokemon) if(p1.pokemon[i].isActive) { p1.pokemon[i].setStatus(\'confusion\'); break;}');
			this.add('-anim', source, "Calm Mind", target);
			this.add('-anim', source, "Geomancy", target);
		},
		weather: 'raindance',
		target: "Normal",
		type: "Psychic",
	},
	// Kraken Mare
	revengeofkrakenmare: {
		category: "Special",
		accuracy: true,
		basePower: 77000,
		id: "revengeofkrakenmare",
		isViable: true,
		isNonstandard: true,
		name: "Revenge of Kraken Mare",
		pp: 0.625,
		priority: 5,
		selfdestruct: "always",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Surf", target);
		},
		onHit: function (target, source, move) {
			this.add('c|%Kraken Mare â˜|If I go down I\'m taking you with me!');
		},
		target: "Normal",
		type: "Water",
	},
	// Desokoro
	tsunamicrash: {
		category: "Physical",
		basePower: 150,
		id: "tsunamicrash",
		isViable: true,
		isNonstandard: true,
		name: "Tsunami Crash",
		secondary: {
			chance: 35,
			volatileStatus: 'flinch',
		},
		onHit: function (target) { 
			this.add('c|~Desokoro|You best hope the waves I ride have mercy on your soul!');
		},
		pp: 5,
		priority: 0,
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Pledge", source);
			this.add('-anim', source, "Waterfall", target);
		},
		target: "Normal",
		type: "Water",
	},
	// Admewn
	mewtation: {
		category: "Status",
		basePower: 90,
		id: "mewtation",
		isViable: true,
		isNonstandard: true,
		name: "Mewtation",
		pp: 10,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Agility", source);
			this.add('-anim', source, "Psychic", target);
			this.add('-anim', source, "Night Shade", target);
		},
		target: "Normal",
		type: "Dark",
	},
	//Mosmero
	mosmerobeam: {
		category: "Special",
		accuracy: 80,
		basePower: 130,
		id: "mosmerobeam",
		isViable: true,
		isNonstandard: true,
		name: "Mosmero Beam",
		pp: 6.25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			onHit: function (target, source) {
				let result = this.random(4);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
			volatileStatus: ['flinch', 'confusion',],
		},
		onHit: function (target, source, move) {
			this.add('c|~Mosmero|I protec, but I also attac.');
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Protect", source);
			this.add('-anim', source, "Hyper Beam", target);
		},
		target: "Normal",
		type: "Ghost",
	},
	//CubsPenguinn
	penguinsshower: {
		category: "Special",
		accuracy: 95,
		basePower: 120,
		id: "penguinsshower",
		isViable: true,
		isNonstandard: true,
		name: "Penguin's Shower",
		pp: 6.25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'frz',
		},
		onHit: function (target, source, move) {
			this.add('c|@ClubPenguinn|You\'re really gonna let a penguin beat you?');
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Blizzard", target);
			this.add('-anim', target, "Tail Whip", target);
		},
		target: "Normal",
		type: "Ice",
	},
	//MechSteelix
	deepsleep:{
		category: "Status",
		id: "deepsleep",
		isNonstandard: true,
		name: "Deep Sleep",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit: function (target) { 
			if (target.hp >= target.maxhp) return false;
			if (!target.setStatus('slp')) return false;
			target.statusData.time = 3;
			target.statusData.startTime = 3;
			this.heal(target.maxhp); //Aeshetic only as the healing happens after you fall asleep in-game
			this.add('-status', target, 'slp', '[from] move: Deep Sleep');
			this.add('c|&MechSteelix|Witness my true power!');
			this.add('-anim', target, "Protect", target);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spd: 3,
				},
			},
		},
		target: "self",
		type: "Steel",
	},
	//TheRittz
	everlastingannoyingness: {
		category: "Special",
		basePower: 0,
		damageCallback: function (pokemon, target) {
			return this.clampIntRange(Math.floor(target.maxhp / 10), 1);
		},
		id: "everlastingannoyingness",
		isViable: true,
		isNonstandard: true,
		name: "Everlasting Annoyingness",
		pp: 6.25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: {
			chance: 100,
			self: {
				volatileStatus: 'aquaring',
				effect: {
					onStart: function (pokemon) {
						this.add('-start', pokemon, 'Everlasting Annoyingness');
					},
					onResidualOrder: 6,
					onResidual: function (pokemon) {
						this.heal(pokemon.maxhp / 16);
					},
				},
				volatileStatus: 'ingrain',
				effect: {
					onStart: function (pokemon) {
						this.add('-start', pokemon, 'move: Everlasting Annoyingness');
					},
					onResidualOrder: 7,
					onResidual: function (pokemon) {
						this.heal(pokemon.maxhp / 16);
					},
					onTrapPokemon: function (pokemon) {
						pokemon.tryTrap();
					},
					onDragOut: function (pokemon) {
						this.add('-activate', pokemon, 'move: Everlasting Annoyingness');
						return null;
					},
				},
			},
		},
		onHit: function (target) { 
			this.add('c|@TheRittz|Feel the annoyingness!');
		},
		drain: [1, 1],
		multihit: [2, 5],
		target: "normal",
		type: "Grass",
	},
	//C733937123
	paladinstrike: {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		desc: "",
		id: "paladinstrike",
		name: "Paladin Strike",
		pp: 15,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: ['kingsshield', 'spikyshield' 
		],
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Protect');
			},
			onSourcePrepareHit: function (source, target, effect) {
				if (effect.effectType !== 'Move' || !effect.flags['protect'] || effect.category === 'Status') return;
				if (effect.flags['contact']) {
					effect.ignoreImmunity = true;
				}
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ) move.zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.boost({atk:-2}, source, target, this.getMove("King's Shield"));
					this.damage(source.maxhp / 8, source, target);
				}
				return null;
			},
		},
		onTry: function (attacker, defender, move, pokemon) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				this.add('-anim', attacker, move.name, defender);
				attacker.removeVolatile(move.id);
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		critRatio: 2,
		ignoreEvasion: true,
		ignoreDefensive: true,
		target: "normal",
		type: "Steel",
	},
	//Stabby the Krabby
	"stabstab": {
		category: "Physical",
		basePower: 100,
		accuracy: true,
		desc: 'Always hits, hits twice, 25% chance to flinch.',
		id: "stabstab",
		isViable: true,
		isNonstandard: true,
		name: "Stab Stab",
		secondary: {
			chance: 25,
			volatileStatus: 'flinch',
		},
		onHit: function (target) { 
			this.add('c|*Stabby the Krabby|Stabby Stabby!');
		},
		pp: 5,
		priority: 1,
		multihit: [2, 2],
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Swords Dance", source);
			this.add('-anim', source, "Sacred Sword", target);
		},
		target: "normal",
		type: "Steel",
	},
	//Tidal Wave Bot
	serverguardian: {
		category: "Status",
		id: "serverguardian",
		isViable:true,
		isNonstandard:true,
		name: "Server Guardian",
		pp: 10,
		priority: 2,
		boosts: {
			def: 2,
			spd: 2,
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bulk Up", source);
			this.add('-anim', source, "Safeguard", source);
		},
		onHit: function (target) { 
			this.add('c|*Tidal Wave Bot|Initiating Sustainability Protocol...standby.');
		},
		heal: [1, 2],
		flags: {},
		target: "self",
		type: "Normal",
	},
	//Tsunami Prince
	overpower: {
		category: "Status",
		accuracy: 100,
		basePower: 0,
		id: "overpower",
		isViable:true,
		isNonstandard:true,
		name: "Overpower",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'slp',
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		onHit: function (target) { 
			this.add('c|~Tsunami Prince|Witness my true power, my true strength, the feeling of fear, and your team\'s demise.');
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Void", target);
			this.add('-anim', source, "Future Sight", target);
			this.add('-anim', source, "Psycho Boost",  source)
		},
		target: "normal",
		type: "Dark",
	},
	//xcmr
	kittycrush: {
		category: "Physical",
		accuracy: 95,
		basePower: 95,
		id: "kittycrush",
		isViable:true,
		isNonstandard:true,
		name: "Kitty Crush",
		pp: 3.125,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					def: 1,
					spd: 1,
				},
			},
		},
		onHit: function (target) { 
			this.add('c|+xcmr|The calc says this should kill.');
		},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Rock') return 0;
			if (type === 'Steel') return 0;
			if (type === 'Ghost') return 0;
		},
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bulk Up", source);
			this.add('-anim', source, "Crush Claw", target);
		},
		target: "normal",
		type: "Normal",
	},
};
