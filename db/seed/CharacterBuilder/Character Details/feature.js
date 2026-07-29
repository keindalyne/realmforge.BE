import db from '../../../client.js';

export async function seedFeature() {
  try {
    await db.query(`TRUNCATE feature RESTART IDENTITY CASCADE`);

    await db.query(`
      INSERT INTO feature (index, name, description) VALUES

      ----- ===== BATCH 1 ===== -----
      -- BARBARIAN FEATURE
      ('rage', 'Rage', ARRAY[
        'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.',
        'While raging, you gain advantages such as bonus damage and resistance to bludgeoning, piercing, and slashing damage.',
        'Rage lasts for 1 minute unless you’re knocked unconscious or end it early.'
      ]),
      ('unarmored-defense-barbarian', 'Unarmored Defense', ARRAY[
        'While you are not wearing any armor, your AC equals 10 + your Dexterity modifier + your Constitution modifier.',
        'You can use a shield and still gain this benefit.'
      ]),
      ('reckless-attack', 'Reckless Attack', ARRAY[
        'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation.',
        'When you make your first attack on your turn, you can decide to attack recklessly, giving yourself advantage on melee weapon attack rolls using Strength, but attack rolls against you also have advantage until your next turn.'
      ]),
      ('danger-sense', 'Danger Sense', ARRAY[
        'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.',
        'You have advantage on Dexterity saving throws against effects that you can see.'
      ]),
      ('extra-attack-barbarian', 'Extra Attack', ARRAY[
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
      ]),
      ('fast-movement', 'Fast Movement', ARRAY[
        'Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.'
      ]),
      ('feral-instinct', 'Feral Instinct', ARRAY[
        'By 7th level, your instincts are so honed that you have advantage on initiative rolls.',
        'Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn by entering your rage first.'
      ]),
      ('brutal-critical', 'Brutal Critical', ARRAY[
        'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.'
      ]),
      ('relentless-rage', 'Relentless Rage', ARRAY[
        'Starting at 11th level, if you drop to 0 hit points while raging and don’t die outright, you can make a DC 10 Constitution saving throw.',
        'If you succeed, you drop to 1 hit point instead.'
      ]),
      ('persistent-rage', 'Persistent Rage', ARRAY[
        'Starting at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.'
      ]),
      ('indomitable-might', 'Indomitable Might', ARRAY[
        'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.'
      ]),
      ('primal-champion', 'Primal Champion', ARRAY[
        'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4, to a maximum of 24.'
      ]),

      -- BARD FEATURE
      ('bardic-inspiration', 'Bardic Inspiration', ARRAY[
        'You can inspire others through stirring words or music.',
        'As a bonus action, choose one creature other than yourself within 60 feet who can hear you. That creature gains one Bardic Inspiration die, a d6.',
        'This die increases in size as you level up and can be used to add to ability checks, attack rolls, or saving throws.'
      ]),
      ('spellcasting-bard', 'Spellcasting', ARRAY[
        'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.',
        'You use Characterisma as your spellcasting ability.'
      ]),
      ('jack-of-all-trades', 'Jack of All Trades', ARRAY[
        'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.'
      ]),
      ('song-of-rest', 'Song of Rest', ARRAY[
        'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest.',
        'If any friendly creatures who can hear your performance regain hit points by spending Hit Dice, each of those creatures regains an extra 1d6 hit points.'
      ]),
      ('expertise-bard', 'Expertise', ARRAY[
        'At 3rd level, choose two of your skill proficiency. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiency.',
        'At 10th level, you can choose two more.'
      ]),
      ('font-of-inspiration', 'Font of Inspiration', ARRAY[
        'Beginning at 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
      ]),
      ('countercharacterm', 'Countercharacterm', ARRAY[
        'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects.',
        'As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet who can hear you have advantage on saving throws against being frightened or charactermed.'
      ]),
      ('magical-secrets', 'Magical Secrets', ARRAY[
        'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines.',
        'You can choose spell from any class’s spell list, including this one. The chosen spell count as bard spell for you.'
      ]),
      ('superior-inspiration', 'Superior Inspiration', ARRAY[
        'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.'
      ]),

      ----- ===== BATCH 2 ===== -----
      -- CLERIC FEATURE
      ('spellcasting-cleric', 'Spellcasting', ARRAY[
        'As a conduit for divine power, you can cast cleric spell.',
        'You prepare the list of cleric spell that are available for you to cast, choosing from the cleric spell list.'
      ]),
      ('divine-domain', 'Divine Domain', ARRAY[
        'Choose one domain related to your deity, such as Life, War, or Trickery.',
        'Your choice grants you domain spell and additional feature at 1st, 2nd, 6th, 8th, and 17th levels.'
      ]),
      ('channel-divinity', 'Channel Divinity', ARRAY[
        'At 2nd level, you gain the ability to channel divine energy directly from your deity.',
        'Each Channel Divinity option provided by your domain describes how to use it.'
      ]),
      ('destroy-undead', 'Destroy Undead', ARRAY[
        'Starting at 5th level, when an undead of CR lower than the listed threshold fails its save against Turn Undead, it is instantly destroyed.'
      ]),
      ('divine-intervention', 'Divine Intervention', ARRAY[
        'Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.',
        'Roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes.'
      ]),

      -- DRUID FEATURE
      ('spellcasting-druid', 'Spellcasting', ARRAY[
        'Drawing on the divine essence of nature itself, you can cast spell from the druid spell list.',
        'You prepare a list of druid spell that are available for you to cast.'
      ]),
      ('druidic', 'Druidic', ARRAY[
        'You know Druidic, the secret language of druids.',
        'You can speak the language and use it to leave hidden messages.'
      ]),
      ('wild-shape', 'Wild Shape', ARRAY[
        'Starting at 2nd level, you can use your action to magically assume the shape of a beast you have seen before.',
        'You can use this feature twice and regain expended uses on a short or long rest.'
      ]),
      ('druid-circle', 'Druid Circle', ARRAY[
        'At 2nd level, choose a circle that shapes your druidic path, such as the Circle of the Land or the Circle of the Moon.',
        'Your choice grants you feature at 2nd level and again at 6th, 10th, and 14th levels.'
      ]),
      ('wild-shape-improvement', 'Wild Shape Improvement', ARRAY[
        'At 4th level, and again at 8th and 12th level, your beast shape options improve.',
        'You can now transform into stronger or more mobile beasts.'
      ]),
      ('timeless-body', 'Timeless Body', ARRAY[
        'Starting at 18th level, the primal magic that you wield causes you to age more slowly.',
        'For every 10 years that pass, your body ages only 1 year.'
      ]),
      ('beast-spell', 'Beast Spell', ARRAY[
        'Beginning at 18th level, you can cast many of your druid spell in any shape you assume using Wild Shape.'
      ]),
      ('archdruid', 'Archdruid', ARRAY[
        'At 20th level, you can use your Wild Shape an unlimited number of times.',
        'You can also ignore verbal, somatic, and material components of your druid spell.'
      ]),

      ----- ===== BATCH 3 ===== -----
      -- FIGHTER FEATURE
      ('fighting-style', 'Fighting Style', ARRAY[
        'You adopt a particular style of fighting as your specialty.',
        'Choose one option such as Archery, Defense, Dueling, or Great Weapon Fighting.'
      ]),
      ('second-wind', 'Second Wind', ARRAY[
        'You have a limited well of stamina you can draw on to protect yourself from harm.',
        'As a bonus action, regain hit points equal to 1d10 + your fighter level.'
      ]),
      ('action-surge', 'Action Surge', ARRAY[
        'Starting at 2nd level, you can push yourself beyond your normal limits for a moment.',
        'On your turn, you can take one additional action on top of your regular action and bonus action.'
      ]),
      ('martial-archtype', 'Martial Archetype', ARRAY[
        'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques.',
        'Options include Champion, Battle Master, and Eldritch Knight.'
      ]),
      ('extra-attack-fighter', 'Extra Attack', ARRAY[
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
        'The number of attacks increases to three at 11th level and four at 20th level.'
      ]),
      ('indomitable', 'Indomitable', ARRAY[
        'Beginning at 9th level, you can reroll a saving throw that you fail.',
        'You must use the new roll. You can use this feature once per long rest, gaining more uses at higher levels.'
      ]),

      -- MONK FEATURE
      ('unarmored-defense-monk', 'Unarmored Defense', ARRAY[
        'While you are not wearing any armor or wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.'
      ]),
      ('martial-arts', 'Martial Arts', ARRAY[
        'At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapon.',
        'You use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapon.'
      ]),
      ('ki', 'Ki', ARRAY[
        'Starting at 2nd level, you harness the mystical energy of ki.',
        'You gain a number of ki points equal to your monk level, and can use them for feature such as Flurry of Blows, Patient Defense, and Step of the Wind.'
      ]),
      ('unarmored-movement', 'Unarmored Movement', ARRAY[
        'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield.',
        'This bonus increases as you gain levels in this class.'
      ]),
      ('monastic-tradition', 'Monastic Tradition', ARRAY[
        'At 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand, the Shadow, or the Four Elements.',
        'Each tradition offers unique techniques and feature.'
      ]),
      ('deflect-missiles', 'Deflect Missiles', ARRAY[
        'Starting at 3rd level, you can use your reaction to deflect or catch a missile when you are hit by a ranged weapon attack.',
        'If you reduce the damage to 0, you can catch the missile and throw it back.'
      ]),
      ('slow-fall', 'Slow Fall', ARRAY[
        'Beginning at 4th level, you can use your reaction to reduce falling damage by an amount equal to five times your monk level.'
      ]),
      ('extra-attack-monk', 'Extra Attack', ARRAY[
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
      ]),
      ('stunning-strike', 'Stunning Strike', ARRAY[
        'Starting at 5th level, you can interfere with the flow of ki in an opponent’s body.',
        'When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike.'
      ]),
      ('evasion', 'Evasion', ARRAY[
        'Beginning at 7th level, you can nimbly dodge out of the way of certain area effects.',
        'When you are subjected to an effect that allows you to make a Dexterity saving throw to take half damage, you instead take no damage on a success, and only half on a fail.'
      ]),
      ('stillness-of-mind', 'Stillness of Mind', ARRAY[
        'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charactermed or frightened.'
      ]),
      ('purity-of-body', 'Purity of Body', ARRAY[
        'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.'
      ]),
      ('tongue-of-the-sun-and-moon', 'Tongue of the Sun and Moon', ARRAY[
        'Starting at 13th level, you can understand all spoken language, and any creature that can understand a language can understand you.'
      ]),
      ('diamond-soul', 'Diamond Soul', ARRAY[
        'At 14th level, your mastery of ki grants you proficiency in all saving throws.',
        'Additionally, you can reroll a failed saving throw once per short or long rest.'
      ]),
      ('empty-body', 'Empty Body', ARRAY[
        'Beginning at 18th level, you can use 4 ki points to become invisible for 1 minute.',
        'You also gain the ability to cast the astral projection spell using 8 ki points.'
      ]),
      ('perfect-self', 'Perfect Self', ARRAY[
        'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.'
      ]),

      ----- ===== BATCH 4 ===== -----
      -- PALADIN FEATURE
      ('divine-sense', 'Divine Sense', ARRAY[
        'The presence of strong evil registers on your senses like a noxious odor.',
        'As an action, you can open your awareness to detect such forces until the end of your next turn.'
      ]),
      ('lay-on-hands', 'Lay on Hands', ARRAY[
        'You have a pool of healing power that replenishes when you take a long rest.',
        'With that pool, you can restore a total number of hit points equal to your paladin level × 5.'
      ]),
      ('divine-smite', 'Divine Smite', ARRAY[
        'When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage.',
        'The extra damage increases when you use a higher level spell slot.'
      ]),
      ('divine-health', 'Divine Health', ARRAY[
        'By 3rd level, the divine magic flowing through you makes you immune to disease.'
      ]),
      ('sacred-oath', 'Sacred Oath', ARRAY[
        'At 3rd level, you swear an oath that binds you as a paladin forever.',
        'Your choice grants you oath spell and additional feature at levels 3, 7, 15, and 20.'
      ]),
      ('extra-attack-paladin', 'Extra Attack', ARRAY[
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
      ]),
      ('aura-of-protection', 'Aura of Protection', ARRAY[
        'Starting at 6th level, whenever you or a friendly creature within 10 feet of you makes a saving throw, they gain a bonus equal to your Characterisma modifier.'
      ]),
      ('cleansing-touch', 'Cleansing Touch', ARRAY[
        'Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature you touch.'
      ]),
      ('aura-improvements', 'Aura Improvements', ARRAY[
        'Your Aura of Protection and Aura of Courage increase to 30 feet at 18th level.'
      ]),
      ('holy-nimbus', 'Holy Nimbus', ARRAY[
        'At 20th level, you can emit an aura of sunlight that causes radiant damage to enemies and grants you advantage on saving throws.'
      ]),

      -- RANGER FEATURE
      ('favored-enemy', 'Favored Enemy', ARRAY[
        'Beginning at 1st level, you have significant experience studying, tracking, and hunting a certain type of enemy.',
        'You gain advantage on Wisdom (Survival) checks to track them and on Intelligence checks to recall information about them.'
      ]),
      ('natural-explorer', 'Natural Explorer', ARRAY[
        'You are particularly familiar with one type of natural environment and adept at traveling and surviving in such regions.',
        'Difficult terrain doesn’t slow your group’s travel and you can’t become lost by magical means.'
      ]),
      ('fighting-style-ranger', 'Fighting Style', ARRAY[
        'You adopt a particular style of fighting as your specialty.',
        'Choose from options such as Archery, Defense, or Two-Weapon Fighting.'
      ]),
      ('spellcasting-ranger', 'Spellcasting', ARRAY[
        'By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spell.'
      ]),
      ('ranger-archetype', 'Ranger Archetype', ARRAY[
        'At 3rd level, you choose an archetype that you emulate, such as the Hunter or Beast Master.',
        'Your choice grants you feature at 3rd level and again at 7th, 11th, and 15th levels.'
      ]),
      ('primeval-awareness', 'Primeval Awareness', ARRAY[
        'You can use your action and expend one spell slot to focus your awareness on the region around you.',
        'For 1 minute per level of the spell slot, you can sense whether certain types of creatures are present within 1 mile.'
      ]),
      ('extra-attack-ranger', 'Extra Attack', ARRAY[
        'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
      ]),
      ('land-stride', 'Land Stride', ARRAY[
        'Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement.',
        'You can also pass through nonmagical plants without being slowed.'
      ]),
      ('hide-in-plain-sight', 'Hide in Plain Sight', ARRAY[
        'You can spend 1 minute creating camouflage for yourself.',
        'As long as you remain motionless, you gain +10 bonus to Dexterity (Stealth) checks.'
      ]),
      ('vanish', 'Vanish', ARRAY[
        'Starting at 14th level, you can use the Hide action as a bonus action.',
        'You also can’t be tracked by nonmagical means unless you choose to leave a trail.'
      ]),
      ('feral-senses', 'Feral Senses', ARRAY[
        'At 18th level, you gain preternatural senses that help you fight creatures you can’t see.',
        'When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage.'
      ]),
      ('foe-slayer', 'Foe Slayer', ARRAY[
        'At 20th level, you become an unparalleled hunter of your enemies.',
        'Once on each of your turns, you can add your Wisdom modifier to the attack or damage roll of an attack.'
      ]),

      ----- ===== BATCH 5 ===== -----
      -- ROGUE FEATURE
      ('expertise-rogue', 'Expertise', ARRAY[
        'At 1st level, choose two of your skill proficiency or one skill and your proficiency with thieves’ tools.',
        'Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiency.'
      ]),
      ('sneak-attack', 'Sneak Attack', ARRAY[
        'Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction.',
        'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage.'
      ]),
      ('thieves-cant', 'Thieves\' Cant', ARRAY[
        'You know the secret language of thieves. You can hide messages in seemingly normal conversation.',
        'Only another creature that knows Thieves’ Cant understands such messages.'
      ]),
      ('cunning-action', 'Cunning Action', ARRAY[
        'Starting at 2nd level, you can use your bonus action to take the Dash, Disengage, or Hide action.'
      ]),
      ('rogue-archetype', 'Roguish Archetype', ARRAY[
        'At 3rd level, choose an archetype such as Assassin or Arcane Trickster.',
        'Your choice grants you feature at 3rd level and again at 9th, 13th, and 17th levels.'
      ]),
      ('uncanny-dodge', 'Uncanny Dodge', ARRAY[
        'Starting at 5th level, when an attacker you can see hits you with an attack, you can use your reaction to halve the damage.'
      ]),
      ('evasion', 'Evasion', ARRAY[
        'Beginning at 7th level, you can nimbly dodge out of the way of certain area effects.',
        'When you make a Dexterity saving throw against effects that allow half damage, you take no damage on success and only half on failure.'
      ]),
      ('reliable-talent', 'Reliable Talent', ARRAY[
        'Starting at 11th level, whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.'
      ]),
      ('blindsense', 'Blindsense', ARRAY[
        'Starting at 14th level, if you can hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.'
      ]),
      ('elusive', 'Elusive', ARRAY[
        'Beginning at 18th level, no attack roll has advantage against you while you aren’t incapacitated.'
      ]),
      ('stroke-of-luck', 'Stroke of Luck', ARRAY[
        'At 20th level, if your attack misses a target, you can turn the miss into a hit.',
        'If you fail an ability check, you can treat the d20 roll as a 20.'
      ]),

      -- SORCERER FEATURE
      ('spellcasting-sorcerer', 'Spellcasting', ARRAY[
        'You can cast sorcerer spell drawn from the sorcerer spell list.',
        'Characterisma is your spellcasting ability for your sorcerer spell.'
      ]),
      ('sorcerous-origin', 'Sorcerous Origin', ARRAY[
        'Choose a sorcerous origin, such as Draconic Bloodline or Wild Magic.',
        'Your origin grants you feature at 1st level and again at 6th, 14th, and 18th levels.'
      ]),
      ('font-of-magic', 'Font of Magic', ARRAY[
        'At 2nd level, you gain a pool of sorcery points you can use to create spell slots or fuel Metamagic.',
        'You regain all spent sorcery points when you finish a long rest.'
      ]),
      ('metamagic', 'Metamagic', ARRAY[
        'Starting at 3rd level, you gain the ability to twist your spell to suit your needs.',
        'You can choose options such as Twinned Spell, Subtle Spell, or Quickened Spell.'
      ]),
      ('sorcerous-restoration', 'Sorcerous Restoration', ARRAY[
        'At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.'
      ]),

      ----- ===== BATCH 6 ===== -----
      -- WARLOCK FEATURE
      ('otherworldly-patron', 'Otherworldly Patron', ARRAY[
        'At 1st level, you strike a bargain with an otherworldly being such as the Fiend or the Archfey.',
        'Your choice grants you feature at 1st level and again at 6th, 10th, and 14th level.'
      ]),
      ('pact-magic', 'Pact Magic', ARRAY[
        'You can cast warlock spell using Characterisma as your spellcasting ability.',
        'Your spell are regained after a short or long rest, and your spell slots scale with level.'
      ]),
      ('eldritch-invocations', 'Eldritch Invocations', ARRAY[
        'At 2nd level, you gain eldritch invocations—mystical enhancements to your abilities.',
        'Examples include Agonizing Blast, Devil’s Sight, and Mask of Many Faces.'
      ]),
      ('pact-boon', 'Pact Boon', ARRAY[
        'At 3rd level, your patron bestows a gift: Pact of the Chain, Pact of the Blade, or Pact of the Tome.',
        'Each boon enhances your abilities in unique ways.'
      ]),
      ('mystic-arcanum', 'Mystic Arcanum', ARRAY[
        'At 11th level, you gain access to a powerful spell that you can cast once per long rest without expending a spell slot.',
        'You gain additional arcanum at levels 13, 15, and 17.'
      ]),
      ('eldritch-master', 'Eldritch Master', ARRAY[
        'At 20th level, you can regain all your expended Pact Magic spell slots once per short rest.',
        'You must finish a long rest before using this feature again.'
      ]),

      -- WIZARD FEATURE
      ('spellcasting-wizard', 'Spellcasting', ARRAY[
        'You can cast wizard spell using Intelligence as your spellcasting ability.',
        'You must prepare a list of available spell each day from your spellbook.'
      ]),
      ('arcane-recovery', 'Arcane Recovery', ARRAY[
        'Once per day when you finish a short rest, you can recover a number of spell slots equal to half your wizard level (rounded up).'
      ]),
      ('arcane-tradition', 'Arcane Tradition', ARRAY[
        'At 2nd level, choose a school of magic to focus on: such as Evocation, Illusion, or Necromancy.',
        'Your tradition grants you feature at 2nd, 6th, 10th, and 14th level.'
      ]),
      ('spell-mastery', 'Spell Mastery', ARRAY[
        'At 18th level, choose a 1st-level and a 2nd-level spell that you can cast at will without expending a spell slot.'
      ]),
      ('signature-spell', 'Signature Spell', ARRAY[
        'At 20th level, choose two 3rd-level wizard spell as your signature spell.',
        'You always have them prepared and can cast each once without expending a spell slot.'
      ]);
    `);
    console.log('✅ All feature seeded!');
  } catch (err) {
    console.error('❌ Error seeding feature:', err);
  }
}