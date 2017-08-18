'use strict';

exports.BattleMovedex = {
<<<<<<< HEAD
	"hallucinogen": {
=======
	"industrialize": {
>>>>>>> 990bdf49d16268834003241b5bd625dce05f5498
		num: 678,
		accuracy: true,
		basePower: 0,
		category: "Status",
<<<<<<< HEAD
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
=======
		desc: "Steel and Poison type moves do double damage. Grass and Bug moves do half. Lasts 5 turns (8 with Oil Canister). Autotomize has double effectiveness",
		shortDesc: "Steel/Poison x2 damage, Grass/Bug 0.5x damage, 5 turns (8 w Oil Canister), Autotomize is 2x more effective",
		id: "industrialize",
		name: "Industrialize",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'industrialized',
		effect: {
			duration: 3,
			durationCallback: function (source, effect) {
				if (source && source.hasItem('Oil Canister')) {
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
>>>>>>> 990bdf49d16268834003241b5bd625dce05f5498
				}
			},
			onStart: function (battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
<<<<<<< HEAD
					this.add('-fieldstart', 'move: Hallucinogen', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Hallucinogen');
=======
					this.add('-fieldstart', 'move: Industrialized', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Industrialized');
>>>>>>> 990bdf49d16268834003241b5bd625dce05f5498
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd: function () {
<<<<<<< HEAD
				this.add('-fieldend', 'move: Hallucinogen');
=======
				this.add('-fieldend', 'move: Industrialized');
>>>>>>> 990bdf49d16268834003241b5bd625dce05f5498
			},
		},
		secondary: false,
		target: "all",
		type: "Poison",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
<<<<<<< HEAD
};
=======
};
>>>>>>> 990bdf49d16268834003241b5bd625dce05f5498
