'use strict';

exports.BattleAbilities = {
	//Desokoro
	wavecall: {
		id: "wavecall",
		name: "Wave Call",
		desc: "Water Attacks damage is 2x if the user is status'ed or HP is less than 1/2",
		onStart: function (pokemon) {
			pokemon.addVolatile('wavecall');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['wavecall'];
			this.add('-end', pokemon, 'Wave Call', '[silent]');
		},
		effect: {
			duration: 3,
			onStart: function (target) {
				this.add('-start', target, 'ability: Wave Call');
			},
			onSourceModifyDamage: function (damage, source, target, move) {
				if (target !== source && move.type === 'Electric') {
					return this.chainModify(0.1);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Wave Call');
			},
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon, move, attacker) {
			if (pokemon.status && move.type === 'Water' || move.type === 'Water' && attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(2);
			}
		},
		onModifySpePriority: 5,
		onModifySpe: function (spe, pokemon, move, attacker) {
			if (pokemon.status || attacker.hp <= attacker.maxhp / 2) {
				return this.chainModify(2);
			}
		},
	},
	//HoeenHero
	programmersdomain: {
		id: "programmersdomain",
		name: "Programmer's Domain",
		desc: "Primordial Sea + Rain Dish + Swift Swim + Adaptability",
		onStart: function (source) {
			this.setWeather('primordialsea');
		},
		onAnySetWeather: function (target, source, weather) {
			if (this.getWeather().id === 'primordialsea' && !(weather.id in {
				desolateland: 1,
				primordialsea: 1,
				deltastream: 1,
			})) return false;
		},
		onEnd: function (pokemon) {
			if (this.weatherData.source !== pokemon) return;
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					let target = this.sides[i].active[j];
					if (target === pokemon) continue;
					if (target && target.hp && target.hasAbility('primordialsea') || target && target.hp && target.hasAbility('programmersdomain')){
						this.weatherData.source = target;
						return;
					}
				}
			}
			this.clearWeather();
		},
		onWeather: function (target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.maxhp / 16);
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			}
		},
		onModifyMove: function (move) {
			move.stab = 2;
		},
	},
	//Callie (Agent 1)
	supremesquidsister: {
		id: "supremesquidsister",
		name: "Supreme Squid Sister",
		onStart: function (pokemon) {
			this.boost({def: -1, spd: -1});
		},
		onBoost: function (boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				boost[i] *= -1;
			}
		},
		onModifyAccuracy: function (accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
	},
	//Mosmero
	mosmicpower: {
		id: "mosmicpower",
		name: "Mosmic Power",
		desc: "Boosts user's Special and Spe by 3 stages on switch in. Also uses Magnet Rise on entry.",
		onStart: function (pokemon) {
			this.boost({spa: 3, spe: 3});
			this.useMove('magnetrise', pokemon);
		},
	},
	//CubsPenguinn
	chillypenguinn: {
		id: "chillypenguinn",
		name: "Chilly Penguinn",
		desc: "If it by a ice type move, +1 stage to all stats.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Chilly Penguin');
				}
				return null;
			}
		},
	},
	//MechSteelix
	sandbox: {
		id: "sandbox",
		name: "Sandbox",
		desc: "Sets up Trick Room, Sandstorm, Reflect, Light Screen & Gravity on switch in.",
		onStart: function (pokemon) {
			this.useMove('trickroom', pokemon);
			this.useMove('reflect', pokemon);
			this.useMove('lightscreen', pokemon);
			this.useMove('gravity', pokemon);
			this.setWeather('sandstorm');
		},
	},
	//TheRittz
	paradoxicalprowess: {
		id: "paradoxicalprowess",
		name: " Paradoxical Prowess",
		desc: "Sets up Safeguard, Lucky Chant, has same effects of Magic Guard, has same effects of Sticky Hold, has same effects of Rock Solid, and has same effects of Oblivious",
		//Magic Guard
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		//Sticky Hold
		onTakeItem: function (item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp || pokemon.item === 'stickybarb') return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Paradoxical Prowess');
				return false;
			}
		},
		//Oblivious
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Paradoxical Prowess');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Paradoxical Prowess');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Paradoxical Prowess');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit: function (pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[msg]', '[from] ability: Paradoxical Prowess');
				return null;
			}
		},
		//Solid Rock
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Paradoxical Prowess neutralize');
				return this.chainModify(0.75);
			}
		},
	},
	//C733937123
	paladinarmour: {
		id: "paladinarmour",
		name: "Paladin Armour",
		desc: "Multiscale + Magic Bounce + Magic Guard + Guts + Quick Feet, Can not be removed by any source.", //Issues with Sturdy + bullet proof so they were removed.
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Paladin Armour weaken');
				return this.chainModify(0.5);
			}
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
	},
	//Stabby the Krabby
	"readytostab": {
		id: "readytostab",
		name: "Ready to Stab",
		desc: "Boosts user's Atk and Spe by 2 stages",
		onStart: function (pokemon) {
			this.boost({atk: 2, spe: 2});
		},
	},
	//Tidal Wave Bot
	loading: {
		id: "loading",
		name: "Loading...",
		desc: "Boosts user's Attack by 4 stages, and Spe by 2 stages on switch in. Also uses Magnet Rise on entry.",
		onStart: function (pokemon) {
			this.boost({atk: 4, spe: 2});
			this.useMove('magnetrise', pokemon);
		},
	},
	//Tsunami Prince
	deathboost: {
		id: "deathboost",
		name: "Death Boost",
		desc: "Simple + Puts foe to sleep on entry.",
		onStart: function (pokemon) {
			this.useMove('spore', pokemon);
		},
		onBoost: function (boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				boost[i] *= 2;
			}
		},
	},
	//xcmr
	felinefury: {
		id: "felinefury",
		name: "Feline Fury",
		desc: "+3 Attack on switch in.",
		onStart: function (pokemon) {
			this.boost({atk: 3});
		},
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
	},
	//C733937 123
	"chatoicarmor": {
		id: "chaoticarmor",
		name: "Chaotic Armor",
		//Prankster
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
			}
		},
		//Magic Bounce
		onTryHitPriority: 1,
		onTryHit: function (target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide: function (target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
	},
};
