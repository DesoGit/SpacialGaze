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
	// Callie (Agent 1)
	bombrushblush: {
		category: "Physical",
		accuracy: true,
		basePower: 0,
		id: "bombrushblush",
		isViable: true,
		isNonstandard: true,
		name: "Bomb Rush Blush",
		pp: 5,
		priority: 0,
		onModifyMove: function (move, pokemon) {
			let i = this.random(3);
			if (i < 1) {
				move.bomb = "Burst Bomb";
				move.basePower = 80;
				move.type = 'Water';
			} else if (i < 2) {
				move.bomb = "Splat Bomb";
				move.basePower = 90;
			} else {
				move.bomb = "Suction Bomb";
				move.basePower = 150; //The other two get a 1.5 STAB boost. This makes it 15 BP more than Splat bomb (135 w/ stab) and 30 more than burst bomb (120 w/ stab)
				move.type = 'Steel';
			}
		},
		onPrepareHit: function (pokemon, target, move) {
			this.add('-message', "4 " + move.bomb + "s were thrown!");
		},
		onUseMoveMessage: function (target, source, move) {
			let t = this.random(2);
			if (t < 1) {
				this.add('c|%Callie (Agent 1)|♪Faces blush, a rush of ink!♪');
				this.add('c|%Callie (Agent 1)|♪Bombs explode, no time to think!♪');
			} else  {
				this.add('c|%Callie (Agent 1)|♪Blushing faces covered in pink!♪');
				this.add('c|%Callie (Agent 1)|♪Rushing bombs, exploding ink!♪');
			}
		},
		multihit: [1,4],
		target: "Normal",
		type: "Poison",
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
		priority: 1,
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
		pp: 10,
		noPPBoosts: true,
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
			volatileStatus: ['flinch', 'confusion'],
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
	//CubsFan38
	penguinsshower: {
		category: "Special",
		accuracy: 95,
		basePower: 120,
		id: "penguinsshower",
		isViable: true,
		isNonstandard: true,
		name: "Penguin's Shower",
		pp: 6.25,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'frz',
		},
		onHit: function (target, source, move) {
			this.add('c|&CubsFan38|You\'re really gonna let a penguin beat you?');
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
		pp: 5,
		noPPBoosts: true,
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
			},
		},
		self: {
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
		volatileStatus: ['kingsshield', 'spikyshield'],
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
		isViable: true,
		isNonstandard: true,
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
			this.add('-anim', source, "Psycho Boost", source);
		},
		target: "normal",
		type: "Dark",
		zMoveEffect: "heal",
	},
	//xcmr
	kittycrush: {
		category: "Physical",
		accuracy: 95,
		basePower: 95,
		id: "kittycrush",
		isViable: true,
		isNonstandard: true,
		name: "Kitty Crush",
		pp: 5,
		noPPBoosts: true,
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
	//C733937 123
	"voodoomagic": {
		id: "voodoomagic",
		name: "Voodoo Magic",
		desc: "Voodoo Magic: ??? type, Priority 0(1), Status, 90% Acc, Goes through Substitutes, Ignores Abilities, Doesn't Bounce. Puts a curse on the opponent that does a hideous amount of bad effects. (User takes 1/4 HP damage then Taunts, Torments, Mean Looks, Embargos, Clears Stats, Heal Blocks, Removes ability, Spites, Flinches, and removes all shields. Taunt, Embargo, and Heal Block last for 10 turns, Stat Clear, Flinch, and Spite happen on turn move used, rest last till switch (haha lol no switching for you) Does not fail if user is less than 1/4 hp)",
		basePower: 0,
		category: "Status",
		priority: 0,
		accuracy: 90,
		pp: 10,
		flags: {
			authentic: 1,
			reflectable: 1,
		},
		ignoresAbility: true,
		self: {
			onHit: function (target, source) {
				this.directDamage(source.maxhp / 4, source, source);
			},
			effect: {
				duration: 10,
				onStart: function (pokemon, source) {
					this.add('-start', pokemon, 'Voodoo Magic', '[of] ' + source);
				},
				onResidualOrder: 10,
				onResidual: function (pokemon) {
					this.damage(pokemon.maxhp / 4);
				},
			},
		},
		onStart: function (pokemon, source) {
			this.add('-start', pokemon, 'Voodoo Magic');
		},
		// Item suppression implemented in BattlePokemon.ignoringItem() within battle-engine.js
		onResidualOrder: 18,
		onEnd: function (pokemon) {
			this.add('-end', pokemon, 'Voodoo Magic');
		},
		onHit: function (target, source, move) {
			if (!target.addVolatile('trapped', source, move, 'trapper')) {
				this.add('-fail', target);
			}
		},
		onHitField: function () {
			this.add('-clearallboost');
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					if (this.sides[i].active[j] && this.sides[i].active[j].isActive) this.sides[i].active[j].clearBoosts();
				}
			}
		},
		effect: {
			duration: 10,
			durationCallback: function (target, source, effect) {
				if (source && source.hasAbility('persistent')) {
					return 15;
				}
				return 10;
			},
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'move: Voodoo Magic');
				this.add('-endability', pokemon);
				this.singleEvent('End', this.getAbility(pokemon.ability), pokemon.abilityData, pokemon, pokemon, 'gastroacid');
			},
			onDisableMove: function (pokemon) {
				for (let i = 0; i < pokemon.moveset.length; i++) {
					if (this.getMove(pokemon.moveset[i].id).flags['heal']) {
						pokemon.disableMove(pokemon.moveset[i].id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove: function (pokemon, target, move) {
				if (move.flags['heal']) {
					this.add('cant', pokemon, 'move: Voodoo Magic', move);
					return false;
				}
			},
			onResidualOrder: 17,
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'move: Voodoo Magic');
			},
			onTryHeal: false,
			onAccuracyPriority: 6,
			onAccuracy: function (accuracy, target, source, move, pokemon) {
				if (move && !pokemon.maxhp / 4) return true;
			},
		},
		onTryHit: function (pokemon) {
			let bannedAbilities = {comatose:1, multitype:1, schooling:1, stancechange:1};
			if (bannedAbilities[pokemon.ability]) {
				return false;
			}
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Normal')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
			}
		},
		secondaries: [
			{
				chance: 100,
				volatileStatus: "taunt",
			}, {
				chance: 100,
				volatileStatus: "torment",
			}, {
				chance: 100,
				volatileStatus: "embargo",
			}, {
				chance: 100,
				volatileStatus: "flinch",
			}, {
				chance: 100,
				volatileStatus: "healblock",
			}, {
				chance: 100,
				volatileStatus: "gastroacid",
			},
		],
		onModifyMove: function (move, pokemon, target) {
			move.type = '???';
			this.add('-activate', pokemon, 'move: Voodoo Magic');
		},
		type: "Normal",
		target: "normal",
	},
};
