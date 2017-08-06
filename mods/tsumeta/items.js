'use strict';

let typeSuppressantBerries = ['occaberry', 'wacanberry', 'passhoberry', 'chilanberry', 'chopleberry', 'yacheberry', 'rindoberry', 'kasibberry', 'kebiaberry', 'shucaberry', 'cobaberry', 'chartiberry', 'tangaberry', 'payapaberry', 'habanberry', 'colburberry', 'babiriberry'];

function typeSupBer_Val(pokemon, ability, item) {
	if (typeSuppressantBerries.indexOf(item.id) > -1 && pokemon.ability === 'gluttony') {
		return 0.25;
	} else {
		return 0.5;
	}
}

exports.BattleItems = {
	"sitrusberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			this.heal(pokemon.maxhp / 2);
		}
	},
	"oranberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			this.heal(pokemon.maxhp + 20);
		}
	},
	"figyberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"wikiberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"magoberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"iapapaberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"aguavberry": function (pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"occaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Fire-type attack. Single use.",
	},
	"passhoberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Water' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Water-type attack. Single use.",
	},
	"wacanberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Electric' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Electric-type attack. Single use.",
	},
	"rindoberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Grass' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Grass-type attack. Single use.",
	},
	"yacheberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ice' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ice-type attack. Single use.",
	},
	"chopleberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fighting' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Fighting-type attack. Single use.",
	},
	"kebiaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Poison' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Poison-type attack. Single use.",
	},
	"shucaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ground' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ground-type attack. Single use.",
	},
	"cobaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Flying' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Flying-type attack. Single use.",
	},
	"payapaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Psychic' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Psychic-type attack. Single use.",
	},
	"tangaberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Bug' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Bug-type attack. Single use.",
	},
	"chartiberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Rock' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Rock-type attack. Single use.",
	},
	"chilanberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Normal",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Normal' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Normal-type attack. Single use.",
	},
	"kasibberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ghost' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Ghost-type attack. Single use.",
	},
	"habanberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Dragon-type attack. Single use.",
	},
	"colburberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Dark' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Dark-type attack. Single use.",
	},
	"babiriberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Steel' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Steel-type attack. Single use.",
	},
	"roseliberry": {
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fairy",
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fairy' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function () {},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a supereffective Fairy-type attack. Single use.",
	},
	"souldew": {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.hasType('Psychic')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.hasType('Psychic')) {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		desc: "If holder's a Psychic Type, its Special Attack and Special Defense is raised by 1.2x. If holder's a Latias/Latios, its Dragon- and Psychic-type moves have 1.2x power.",
	},
	"lightball": {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.hasType('Electric')) {
				return this.chainModify(1.1);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu' || pokemon.baseTemplate.baseSpecies === 'Raichu' || pokemon.baseTemplate.baseSpecies === 'Pichu' || pokemon.baseTemplate.baseSpecies === 'Plusle' || pokemon.baseTemplate.baseSpecies === 'Minun' || pokemon.baseTemplate.baseSpecies === 'Dedenne' || pokemon.baseTemplate.baseSpecies === 'Emolga' || pokemon.baseTemplate.baseSpecies === 'Pachirisu') {
				return this.chainModify(1.4);
			}
		},
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.hasType('Electric')) {
				return this.chainModify(1.1);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Pikachu' || pokemon.baseTemplate.baseSpecies === 'Raichu' || pokemon.baseTemplate.baseSpecies === 'Pichu' || pokemon.baseTemplate.baseSpecies === 'Plusle' || pokemon.baseTemplate.baseSpecies === 'Minun' || pokemon.baseTemplate.baseSpecies === 'Dedenne' || pokemon.baseTemplate.baseSpecies === 'Emolga' || pokemon.baseTemplate.baseSpecies === 'Pachirisu') {
				return this.chainModify(1.4);
			}
		},
		onModifySpe: function (spe, pokemon) {
			if (pokemon.hasType('Electric')) {
				return this.chainModify(1.1);
			}
		},
		desc: "Light Ball now increases the Attack, Special Attack and Speed of all Electric type Pokemon by 1.1x. If the holder is anyone in the Pikachu evolution line, Plusle/Minun, Pachirisu, Emolga or Dedenne, all of their attacks do 1.4x extra damage.",
	},
	"thickclub": {
		inherit: true,
		onModifySpAPriority: 1,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.hasType('Ground')) {
				return this.chainModify(1.3);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Riolu' || pokemon.baseTemplate.baseSpecies === 'Lucario') {
				return this.chainModify(1.3);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Cubone' || pokemon.baseTemplate.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		onModifyAtk: function (atk, pokemon) {
			if (pokemon.hasType('Ground')) {
				return this.chainModify(1.3);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Riolu' || pokemon.baseTemplate.baseSpecies === 'Lucario') {
				return this.chainModify(1.3);
			}
			if (pokemon.baseTemplate.baseSpecies === 'Cubone' || pokemon.baseTemplate.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		desc: "Thick Club now increases the attack of all Ground type Pokemon and Riolu/Lucario by 1.3x. If the holder is a Cubone or Marowak, it's attack is doubled.",
	},
	"metalcoat": {
		onModifyDefPriority: 1,
		onModifyDef: function (def, pokemon) {
			if (pokemon.hasType('Steel')) {
				return this.chainModify(2);
			}
		},
		onStart: function (pokemon) {
			this.boost({spe: -1});
		},
		onTakeItem: false,
		inherit: true,
		desc: "Metal Coat now doubles the Defense of all Steel-type Pokemon who hold this. It cannot be knocked off. It retains it's usual effect of increasing the attacking power of Steel-type attacks by 1.2x. The Speed of the holder is decreased by one stage while holding it.",
	},
	"scopelens": {
		inherit: true,
		onStart: function (pokemon) {
			this.boost({accuracy: 1});
		},
		desc: "Scope Lens now increases accuracy by one stage in addition to it's usual effect.",
	},
	"razorclaw": {
		inherit: true,
		onModifyDamage: function (damage, target, source, move) {
			if (move.flags['contact']) {
				this.chainModify(1.2);
			}
		},
	},
	"skyplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"toxicplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"dracoplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"meadowplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"ironplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"flameplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"pixieplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"mindplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"insectplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"icicleplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"fistplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"earthplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"dreadplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"splashplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"spookyplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"stoneplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
	"zapplate": {
		inherit: true,
		onTakeItem: function (item, pokemon, source) {
			if ((source && source.baseTemplate.num === 493) || pokemon.baseTemplate.num === 493 || (source && source.baseTemplate.num === 206) || pokemon.baseTemplate.num === 206) {
				return false;
			}
			return true;
		},
	},
};
