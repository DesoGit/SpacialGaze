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
		onSourceModifyDamage: function (damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			return this.chainModify(mod);
		},
		num: -700,
		gen: -1,
		desc: "Holder's use of Industrialized lasts 8 turns instead of 5. Steel types have 1.5x speed by holding this. All Pokemon who hold this take 2x damage from Fire attacks.",
		shortDesc: "If the user holds this: Industrialized lasts 8 turns, Steel types' Speed gets boosted by 1.5x, Fire type moves do 2x damage on holder.",
	},
};
