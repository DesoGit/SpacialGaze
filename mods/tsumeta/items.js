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
	"sitrusberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"oranberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp + 20);
			} else {
				this.heal(10);
			}
		},
	},
	"figyberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"wikiberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"magoberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"iapapaberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"aguavberry": {
		inherit: true,
		onEat: function (pokemon) {
			if (pokemon.ability === 'gluttony') {
				this.heal(pokemon.maxhp / 2);
			} else {
				this.heal(pokemon.maxhp / 4);
			}
		},
	},
	"occaberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"passhoberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Water' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"wacanberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Electric' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"rindoberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Grass' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"yacheberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ice' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"chopleberry": {
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fighting' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		inherit: true,
	},
	"kebiaberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Poison' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"shucaberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ground' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"cobaberry": {
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Flying' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		inherit: true,
	},
	"payapaberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Psychic' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"tangaberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Bug' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"chartiberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Rock' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"chilanberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Normal' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"kasibberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Ghost' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"habanberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"colburberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Dark' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"babiriberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Steel' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
	},
	"roseliberry": {
		inherit: true,
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.type === 'Fairy' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
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
