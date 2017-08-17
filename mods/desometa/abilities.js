'use strict';

exports.BattleAbilities = {
	hallucinogen: {
		id: "hallucinogen",
		name: "Hallucinogen",
		shortDesc: "On switch-in, this Pokemon causes Hallucinogen.",
		onStart: function (source) {
			this.setTerrain('hallucinogen');
		},
		rating: 5,
	},
	industrialized: {
		id: "industrialized",
		name: "Industrialized",
		desc: "This Pokemon's Steel & Poison type moves do 2x damage. This Pokemon's Grass & Bug type moves do 0.5x damage. Autotomize is doubled in effectiveness.",
		onStart: function (pokemon) {
			pokemon.addVolatile('industrialized');
			this.add('', 'The battlefield has been industrialized!');
		},
		onEnd: function (pokemon) {
			delete pokemon.volatiles['industrialized'];
			this.add('-end', pokemon, 'Industrialized', '[silent]');
			this.add('', 'The battlefield has become Detroit!');
		},
		effect: {
			duration: 4,
			onStart: function (target) {
				this.add('-start', target, 'ability: Industrialized');
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
			onModifyMovePriority: 1,
			onModifyMove: function (move) {
				if (move.id === 'autotomize') {
					return this.chainModify(3);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'Industrialized');
			},
		},
		rating: 5,
	},
};
