'use strict';

exports.BattleAbilities = {
	hallucinogen: {
		id: "hallucinogen",
		name: "Hallucinogen",
		desc: "Max Attack, Special Attack and Speed for three turns in exchange for 0.25x accuracy and all moves become Grass type. All attacks that connect confuse both players.",
		shortDesc: "4x Atk, SpA & Spe for 3 turns, but 0.25x Accuracy.  All moves become Grass type.",
		onStart: function (pokemon) {
			pokemon.addVolatile('hallucinogen');
			this.add('-message', pokemon + ' has suddenly started tripping.');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['hallucinogen'];
			this.add('-end', pokemon, 'Hallucinogen', '[silent]');
			this.add('-message', pokemon + ' has stopped tripping.');
		},
		effect: {
			duration: 3,
			onStart: function (target) {
				this.add('-start', target, 'ability: Hallucinogen');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, pokemon) {
				return this.chainModify(4);
			},
			onModifySpePriority: 5,
			onModifySpe: function (spe, pokemon) {
				return this.chainModify(4);
			},
			onModifySpAPriority: 5,
			onModifySpA: function (spa, pokemon) {
				return this.chainModify(4);
			},
			onSourceModifyAccuracy: function (accuracy) {
				if (typeof accuracy !== 'number') return;
				return accuracy * 0.25;
			},
			onHit: function (pokemon, target) {
				pokemon.addVolatile('confusion');
				target.addVolatile('confusion');
			},
			onModifyMovePriority: 1,
			onModifyMove: function (move, pokemon) {
				if (!(move.isZ && move.category !== 'Status') && !(move.id in {hiddenpower:1, judgment:1, multiattack:1, naturalgift:1, revelationdance:1, struggle:1, technoblast:1, weatherball:1})) {
					move.type = 'Grass';
					if (move.category !== 'Status') pokemon.addVolatile('hallucinogen');
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Hallucinogen');
			},
		},
	},
	industrialized: {
		id: "industrialized",
		name: "Industrialized",
		desc: "On switch-in, the user summons Industrialized terrain.",
		onStart: function (pokemon) {
			this.setTerrain('industrialized');
			this.add('', 'The battlefield has been industrialized!');
		},
		onEnd: function (pokemon) {
			this.add('', 'The battlefield has become Detroit!');
		},
	},
};
