'use strict';
exports.BattleStatuses = {
	hoeenhero: {
		exists: true,
		onStart: function () {
			this.add('c', '~HoeenHero', 'Do I have to? I\'m in the middle of programming.');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '~HoeenHero', 'I can\'t battle now, I\'m too busy.');
		},
		onFaint: function (pokemon) {
			this.add('c', '~HoeenHero', 'Hey! Thats more hax than I get to use >:(');
		},
	},
	admewn: {
		exists: true,
		onStart: function () {
			this.add('c', '@Admewn', 'This battle will be amewsing :]');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '@Admewn', 'Brb, I\'ll be mewting someone :]');
		},
		onFaint: function (pokemon) {
			this.add('c', '@Admewn', 'Turn off the mewsic! I\'m out!');
		},
	},
	callieagent1: {
		exists: true,
		onStart: function () {
			let t = this.random(4);
			if (t < 1) {
				this.add('c', '%Callie (Agent 1)', 'I told you to leave...');
				this.add('c', '%Callie (Agent 1)', 'Now you leave me now choice..');
				this.add('c', '%Callie (Agent 1)', 'Prepare to be rocked!');
			} else if (t < 2) {
				this.add('c', '%Callie (Agent 1)', 'No one throws shade at my shades and gets away with it!');
			} else if (t < 3) {
				this.add('c', '%Callie (Agent 1)', 'It\'s time to swab the deck and plunder the booty!');
			} else {
				this.add('c', '%Callie (Agent 1)', 'It\'s all about becoming one with the music!');
			}
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '%Callie (Agent 1)', 'I\'ll be back to drop some more SPICY WASABI BEATS!');
		},
		onCriticalHit: function (pokemon) {
			let c = this.random(4);
			if (c < 1) {
				this.add('c', '%Callie (Agent 1)', 'EAT THAT!');
			} else if (c < 2) {
				this.add('c', '%Callie (Agent 1)', 'Nailed it!');
			} else if (c < 3) {
				this.add('c', '%Callie (Agent 1)', 'Got it!');
			} else {
				this.add('c', '%Callie (Agent 1)', 'Yeah! Let\'s ROCK!');
			}
		},
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.add('c', '%Callie (Agent 1)', 'Thou ART defeated! HA!');
			}
		},

		onFaint: function () {
			let i = this.random(5);
			if (i < 1) {
				this.add('c', '%Callie (Agent 1)', 'Ow! You got ink RIGHT in my eye!');
			} else if (i < 2) {
				this.add('c', '%Callie (Agent 1)', 'I...I\'ll remember this!');
			} else if (i < 3) {
				this.add('c', '%Callie (Agent 1)', 'Cross-fade to blaaaaaaaaaaack!');
			} else if (i < 4) {
				this.add('c', '%Callie (Agent 1)', 'I should have bought more bombs...');
			} else {
				this.add('c', '%Callie (Agent 1)', 'Don\'t worry, Team Callie. I still love you all...');
			}
		},
	},
	c733937123: {
		exists: true,
		onStart: function () {
			this.add('c', '+C733937 123', '__enters the battlefield in some sort of medieval armor and a large broadsword seemingly made from the strongest substance around.__');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '+C733937 123', '__swaps places with an ally.__');
		},
		onFaint: function (pokemon) {
			this.add('c', '+C733937 123', '__flees the battlefield before the final hit can be delivered.__');
		},
	},
	mosmero: {
		exists: true,
		onStart: function () {
			this.add('c', '~Mosmero', 'Hey, it\'s me, the Mos!');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '~Mosmero', 'And with that, it was me, the Mos.');
		},
		onFaint: function (pokemon) {
			this.add('c', '~Mosmero', 'Can\'t you come up with something creative for once, Vacuo?');
		},
	},
	cubsfan38: {
		exists: true,
		onStart: function () {
			this.add('c', '&CubsFan38', 'Your favorite penguin has arrived to battle!');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '&CubsFan38', 'It\'s cold here, I\'m out.');
		},
	},
	mechsteelix: {
		exists: true,
		onStart: function () {
			this.add('c', '&MechSteelix', 'Tell me, does a player such as yourself experience true fear?');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '&MechSteelix', 'What just happened?');
		},
		onFaint: function (pokemon) {
			this.add('c', '&MechSteelix', 'Forget my life.. always surrounded by bumbling baboons.');
		},
	},
	therittz: {
		exists: true,
		onStart: function () {
			this.add('c', '@TheRittz', 'Greetings!');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '@TheRittz', '__fled from the scene__');
		},
		onFaint: function (pokemon) {
			this.add('c', '@TheRittz', '__fled from the scene__');
		},
	},
	tsunamiprince: {
		exists: true,
		onStart: function () {
			this.add('c', '~Tsunami Prince', 'You think I came for the battle, when it\'s really your soul I want.');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '~Tsunami Prince', 'Don\'t worry, I\'ll be back. I will miss putting you in pain too much to not return.');
		},
		onFaint: function (pokemon) {
			this.add('c', '~Tsunami Prince', 'Death falls upon us all, however now is my time to die. You\'ll be happy to know that yours isn\'t far from now.');
		},
	},
	xcmr: {
		exists: true,
		onStart: function () {
			this.add('c', '+xcmr', 'Hey man, go easy please.');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '+xcmr', 'Someone else take the damage, I\'m weak!');
		},
		onFaint: function (pokemon) {
			this.add('c', '+xcmr', 'What!? That was a high roll!');
		},
	},
	desokoro: {
		exists: true,
		onStart: function () {
			this.add('c', '~Desokoro', 'The divine one has arrived to give you a smackdown of epic proportions.');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '~Desokoro', 'I\'ll be back!');
		},
		onFaint: function (pokemon) {
			this.add('c', '~Desokoro', 'You may have vanquished me today, but beware of the future. I shall not be gone long.');
		},
	},
	tidalwavebot: {
		exists: true,
		onStart: function () {
			this.add('c', '*Tidal Wave Bot', 'Threat Detected: Must deploy the Ban Hammer');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '*Tidal Wave Bot', 'Tidal Wave Bot powered down');
		},
		onFaint: function (pokemon) {
			this.add('c', '*Tidal Wave Bot', 'Emergency shutdown: Battery life depleted. Must recharge.');
		},
	},
	stabbythekrabby: {
		exists: true,
		onStart: function () {
			this.add('c', '*Stabby the Krabby', 'Get ready to be stabbed!');
		},
		onSwitchOut: function (pokemon) {
			this.add('c', '*Stabby the Krabby', 'Alright, I\'ll be back to stab you later. Got someone else to deal with first.');
		},
		onFaint: function (pokemon) {
			this.add('c', '*Stabby the Krabby', 'Impossible...');
		},
	},
};
