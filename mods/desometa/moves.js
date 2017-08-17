'use strict';

exports.BattleMovedex = {
	"hallucinogen": {
		num: 678,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Max Attack, Special Attack and Speed for three turns in exchange for 0.25x accuracy and all moves become Grass type. All attacks that connect confuse both players. Lasts 5 turns if the user is holding Terrain Extender.",
		shortDesc: "Max Atk, SpA & Spe for 3 turns, 0.25x accuracy, all moves = Grass. All attacks that hit, confuse both players.",
		id: "hallucinogen",
		name: "Hallucinogen",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'hallucinogen',
		effect: {
			duration: 3,
			durationCallback: function (source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 5;
				}
				return 3;
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
			onStart: function (battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Hallucinogen', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Hallucinogen');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd: function () {
				this.add('-fieldend', 'move: Hallucinogen');
			},
		},
		secondary: false,
		target: "all",
		type: "Poison",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
};