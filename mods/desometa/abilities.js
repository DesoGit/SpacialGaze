'use strict';

exports.BattleAbilities = {
	hallucinogen: {
		id: "hallucinogen",
		name: "Hallucinogen",
		desc: "Max Attack, Special Attack and Speed for three turns in exchange for 0.25x accuracy and all moves become Grass type. All attacks that connect confuse both players.",
		onStart: function (pokemon) {
			pokemon.addVolatile('hallucinogen');
			this.add('', 'The battlefield has suddenly become trippy as hell!');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['hallucinogen'];
			this.add('-end', pokemon, 'Hallucinogen', '[silent]');
			this.add('', 'The battlefield has lost its trippiness.');
		},
		effect: {
			duration: 4,
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
			onModifyMovePriority: 1,
			onModifyMove: function (move) {
				if (move.id !== 'struggle' && this.getMove(move.id).type !== 'Grass') {
					move.type = 'Grass';
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
