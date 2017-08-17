'use strict';

exports.BattleItems = {
	"oilcanister": {
		id: " oilcanister",
		name: "Oil Canister",
		spritenum: 193,
		fling: {
			basePower: 60,
		},
		onModifySpePriority: 1,
		onModifySpe: function (spe, pokemon) {
			if (pokemon.hasType('Steel')) {
				return this.chainModify(1.5);
			}
		},
		num: -700,
		gen: -1,
		desc: "Holder's use of Industrialized lasts 8 turns instead of 5, and boosts Speed of Steel types by 1.5x.",
	},
};
