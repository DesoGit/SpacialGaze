'use strict';

exports.BattleItems = {
	//C7's Item
	shiningbladeandglowingarmour: {
		id: "shiningbladeandglowingarmour",
		name: "Shining Blade and Glowing Armour",
		onModifyAtkPriority: 2,
		onModifyAtk: function (atk, pokemon) {
			return this.chainModify(1.5);
		},
		onModifyDefPriority: 2,
		onModifyDef: function (def, pokemon) {
			return this.chainModify(1.5);
		},
		onModifySpAPriority: 2,
		onModifySpA: function (spa, pokemon) {
			return this.chainModify(1.5);
		},
		onModifySpDPriority: 2,
		onModifySpD: function (spd, pokemon) {
			return this.chainModify(1.5);
		},
		onModifySpePriority: 2,
		onModifySpe: function (spe, pokemon) {
			return this.chainModify(0.5);
		},
		onModifyMove: function (move) {
			move.stab = 0;
		},
	},
	//Tidal Wave Bot
	guardiansamulet: {
		id: "guardiansamulet",
		name: "Guardian's Amulet",
		onModifyDefPriority: 2,
		onModifyDef: function (def, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return this.chainModify(1.5);
			}
		},
		onModifyDamage: function (damage, source, target, move) {
			return this.chainModify([0x14CC, 0x1000]);
		},
		onAfterMoveSecondarySelf: function (source, target, move) {
			if (source && source !== target && move && move.category !== 'Status' && !move.ohko) {
				this.damage(source.maxhp / 10, source, source, this.getItem('lifeorb'));
			}
		},
	},
	//Callie (Agent 1)
	hypnoshades: {
		id: "hypnoshades",
		name: "Hypnoshades",
		onStart: function (target) {
			this.add('-item', target, 'Hypnoshades');
		},
		onModifyAtkPriority: 1,
		onModifyAtk: function (atk) {
			return this.chainModify(1.5);
		},
		onAfterDamage: function (damage, target, source, effect) {
			this.debug('effect: ' + effect.id);
			if (effect.effectType === 'Move' && effect.id !== 'confused') {
				this.add('-message', 'The Hypnoshades have broken!');
				target.item = '';
				this.itemData = {id: '', target: this};
				this.runEvent('AfterUseItem', target, null, null, 'Hypnoshades');
			}
		},
	},
	playniumz: {
		spritenum: 656,
		onTakeItem: false,
		id: "playniumz",
		name: "Playnium Z",
		isNonStandard: true,
		zMove: "Debugging",
		zMoveFrom: "npm test",
		zMoveUser: ["Ludicolo"],
		desc: "If holder is a Ludicolo with npm test, it can use Debugging.",
	},
};
