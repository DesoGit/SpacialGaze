'use strict';

exports.BattleMovedex = {
	"industrialize": {
		num: -700,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Steel and Poison type moves do double damage. Grass and Bug moves do half. Lasts 5 turns (8 with Oil Canister). Autotomize has double effectiveness",
		shortDesc: "Steel/Poison x2 damage, Grass/Bug 0.5x damage, 5 turns (8 w/ Oil Canister), Autotomize is 2x more effective",
		id: "industrialize",
		name: "Industrialize",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'industrialized',
		effect: {
			duration: 3,
			durationCallback: function (source, effect) {
				if (source && source.hasItem('oilcanister')) {
					return 8;
				}
				return 5;
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, pokemon, move) {
				if (move.type === 'Steel' || move.type === 'Poison') {
					return this.chainModify(2);
				} else if (move.type === 'Grass' || move.type === 'Bug') {
					return this.chainModify(0.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (spa, pokemon, move) {
				if (move.type === 'Steel' || move.type === 'Poison') {
					return this.chainModify(2);
				} else if (move.type === 'Grass' || move.type === 'Bug') {
					return this.chainModify(0.5);
				}
			},
			onModifySpePriority: 5,
			onModifySpe: function (spe, pokemon, move) {
				if (move.id === 'autotomize') {
					return this.chainModify(3);
				}
			},
			onStart: function (battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Industrialized', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Industrialized');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd: function () {
				this.add('-fieldend', 'move: Industrialized');
			},
		},
		secondary: false,
		target: "all",
		type: "Poison",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
};