'use strict';

let typeSuppressantBerries = ['occaberry', 'wacanberry', 'passhoberry', 'chilanberry', 'chopleberry', 'yacheberry', 'rindoberry', 'kasibberry', 'kebiaberry', 'shucaberry', 'cobaberry', 'chartiberry', 'tangaberry', 'payapaberry', 'habanberry', 'colburberry', 'babiriberry'];

function typeSupBer_Val(pokemon, ability, item) {
	if (typeSuppresantBerries.indexOf(item.id) > -1 && pokemon.ability === 'gluttony') {
		return 0.25;
	}
	else {
		return 0.5;
	}
};

exports.BattleItems = {
	"sitrusberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			this.heal(pokemon.maxhp / 2);
		}
	},
	"oranberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			this.heal(pokemon.maxhp + 20);
		}
	},
	"figyberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"wikiberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"magoberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"iapapaberry": function(pokemon, ability, item) {
		if (pokemon.ability === 'gluttony') {
			//inherit: true,
			this.heal(pokemon.maxhp / 4);
		}
	},
	"aguavberry": function(pokemon, ability, item) {
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Water' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Electric' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Grass' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Ice' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Fighting' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Poison' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Ground' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Flying' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Psychic' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Bug' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Rock' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Normal' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Ghost' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Fire' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Dark' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Steel' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
		onSourceModifyDamage: function(damage, source, target, move) {
			if (move.type === 'Fairy' && move.typeMod > 0 && (!target.volatiles['substitute'] || move.flags['authentic'] || (move.infiltrates && this.gen >= 6))) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(typeSupBer_Val);
				}
			}
		},
		onEat: function() {},
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
};
