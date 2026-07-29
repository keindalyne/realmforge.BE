import db from '../../client.js';

export async function seedFeats() {
  try {
    await db.query('TRUNCATE feats RESTART IDENTITY CASCADE');

    await db.query(`
      INSERT INTO feats (index, name, description, prerequisites) VALUES
      ('alert', 'Alert',
        ARRAY[
          'Always on the lookout for danger, you gain the following benefits:',
          '- You gain a +5 bonus to initiative.',
          '- You can’t be surprised while you are conscious.',
          '- Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you.'
        ],
        null
      ),
      ('athlete', 'Athlete',
        ARRAY[
          'You have undergone extensive physical training to gain the following benefits:',
          '- Increase your Strength or Dexterity by 1, to a maximum of 20.',
          '- When you are prone, standing up uses only 5 feet of movement.',
          '- Climbing doesn’t halve your speed.',
          '- You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.'
        ],
        null
      ),
      ('actor', 'Actor',
        ARRAY[
          'Skilled at mimicry and dramatics, you gain the following benefits:',
          '- Increase your Characterisma by 1, to a maximum of 20.',
          '- You have advantage on Deception and Performance checks when trying to pass yourself off as a different person.',
          '- You can mimic the speech or writing of another person or the sounds made by other creatures you have heard. A listener can tell they are faked with a successful Insight check.'
        ],
        null
      ),
      ('characterger', 'Characterger',
        ARRAY[
          'When you use your action to Dash, you can use a bonus action to make one melee weapon attack or shove a creature.',
          'If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack) or push the target up to 10 feet away from you (if you chose to shove).'
        ],
        null
      ),
      ('crossbow-expert', 'Crossbow Expert',
        ARRAY[
          'Thanks to extensive practice with the crossbow, you gain the following benefits:',
          '- You ignore the loading quality of crossbows with which you are proficient.',
          '- Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.',
          '- When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding.'
        ],
        null
      ),
      ('defensive-duelist', 'Defensive Duelist',
        ARRAY[
          'When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.'
        ],
        '{"dexterity": 13}'
      ),
      ('dual-wielder', 'Dual Wielder',
        ARRAY[
          'You master fighting with two weapon, gaining the following benefits:',
          '- You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.',
          '- You can use two-weapon fighting even when the one-handed melee weapon you are wielding aren’t light.',
          '- You can draw or stow two one-handed weapon when you would normally be able to draw or stow only one.'
        ],
        null
      ),
      ('dungeon-delver', 'Dungeon Delver',
        ARRAY[
          'Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:',
          '- You have advantage on Perception and Investigation checks to detect secret doors.',
          '- You have advantage on saving throws made to avoid or resist traps.',
          '- You have resistance to damage dealt by traps.',
          '- You can search for traps while traveling at a normal pace.'
        ],
        null
      ),
      ('durable', 'Durable',
        ARRAY[
          'Hardy and resilient, you gain the following benefits:',
          '- Increase your Constitution by 1, to a maximum of 20.',
          '- When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).'
        ],
        null
      ),
      ('elemental-adept', 'Elemental Adept',
        ARRAY[
          'When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.',
          '- Spell you cast ignore resistance to damage of the chosen type.',
          '- When you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.'
        ],
        null
      ),
      ('grappler', 'Grappler',
        ARRAY[
          'You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:',
          '- You have advantage on attack rolls against a creature you are grappling.',
          '- You can use your action to try to pin a creature grappled by you. To do so, make another grapple check; if you succeed, both you and the creature are restrained until the grapple ends.'
        ],
        '{"strength": 13}'
      ),
      ('great-weapon-master', 'Great Weapon Master',
        ARRAY[
          'You’ve learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:',
          '- On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points, you can make one melee weapon attack as a bonus action.',
          '- Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage.'
        ],
        null
      ),
      ('heavily-armored', 'Heavily Armored',
        ARRAY[
          'You have trained to master the use of heavy armor, gaining the following benefits:',
          '- Increase your Strength by 1, to a maximum of 20.',
          '- You gain proficiency with heavy armor.'
        ],
        '{"proficiency": "medium-armor"}'
      ),
      ('heavy-armor-master', 'Heavy Armor Master',
        ARRAY[
          'You can use your armor to deflect strikes that would otherwise harm you. You gain the following benefits:',
          '- Increase your Strength by 1, to a maximum of 20.',
          '- While wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapon is reduced by 3.'
        ],
        '{"proficiency": "heavy-armor"}'
      ),
      ('inspiring-leader', 'Inspiring Leader',
        ARRAY[
          'You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (including yourself) within 30 feet who can see or hear you and who can understand you.',
          'Each creature can gain temporary hit points equal to your level + your Characterisma modifier.'
        ],
        '{"characterisma": 13}'
      ),
      ('keen-mind', 'Keen Mind',
        ARRAY[
          'You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:',
          '- Increase your Intelligence by 1, to a maximum of 20.',
          '- You always know which way is north.',
          '- You always know the number of hours left before the next sunrise or sunset.',
          '- You can accurately recall anything you have seen or heard within the past month.'
        ],
        null
      ),
      ('lightly-armored', 'Lightly Armored',
        ARRAY[
          'You have trained to master the use of light armor, gaining the following benefits:',
          '- Increase your Strength or Dexterity by 1, to a maximum of 20.',
          '- You gain proficiency with light armor.'
        ],
        null
      ),
      ('linguist', 'Linguist',
        ARRAY[
          'You have studied language and codes, gaining the following benefits:',
          '- Increase your Intelligence by 1, to a maximum of 20.',
          '- You learn three language of your choice.',
          '- You can create written ciphers. Others can decipher it with an Intelligence check (DC equal to 8 + your proficiency bonus + your Intelligence modifier).'
        ],
        null
      ),
      ('lucky', 'Lucky',
        ARRAY[
          'You have inexplicable luck that seems to kick in at just the right moment.',
          '- You have 3 luck points. You can spend a luck point to roll an additional d20 when making an attack roll, ability check, or saving throw.',
          '- You can also spend a luck point to roll an additional d20 when an attack roll is made against you.',
          '- You can choose which d20 is used after you roll but before the outcome is determined.'
        ],
        null
      ),
      ('mage-slayer', 'Mage Slayer',
        ARRAY[
          'You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:',
          '- When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.',
          '- When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.',
          '- You have advantage on saving throws against spell cast by creatures within 5 feet of you.'
        ],
        null
      ),
      ('magic-initiate', 'Magic Initiate',
        ARRAY[
          'Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard.',
          'You learn two cantrips of your choice from that class’s spell list.',
          'In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it once per long rest without using a spell slot.',
          'Your spellcasting ability for these spell depends on the class you chose.'
        ],
        null
      ),
      ('moderately-armored', 'Moderately Armored',
        ARRAY[
          'You have trained to master the use of medium armor and shields, gaining the following benefits:',
          '- Increase your Strength or Dexterity by 1, to a maximum of 20.',
          '- You gain proficiency with medium armor and shields.'
        ],
        '{"proficiency": "light-armor"}'
      ),
      ('mobile', 'Mobile',
        ARRAY[
          'You are exceptionally speedy and agile. You gain the following benefits:',
          '- Your speed increases by 10 feet.',
          '- When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn.',
          '- When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.'
        ],
        null
      ),
      ('observant', 'Observant',
        ARRAY[
          'Quick to notice details of your environment, you gain the following benefits:',
          '- Increase your Intelligence or Wisdom by 1, to a maximum of 20.',
          '- If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips.',
          '- You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.'
        ],
        null
      ),
      ('resilient', 'Resilient',
        ARRAY[
          'Choose one ability score. You gain the following benefits:',
          '- Increase the chosen ability score by 1, to a maximum of 20.',
          '- You gain proficiency in saving throws using the chosen ability.'
        ],
        null
      ),
      ('ritual-caster', 'Ritual Caster',
        ARRAY[
          'You have learned a number of spell you can cast as rituals.',
          '- You must choose a class: bard, cleric, druid, sorcerer, warlock, or wizard.',
          '- You acquire a ritual book containing two 1st-level spell with the ritual tag from that class’s spell list.',
          '- The class you choose determines your spellcasting ability for these spell.'
        ],
        '{"intelligence_or_wisdom": 13}'
      ),
      ('savage-attacker', 'Savage Attacker',
        ARRAY[
          'Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total.'
        ],
        null
      ),
      ('sentinel', 'Sentinel',
        ARRAY[
          'You have mastered techniques to take advantage of every drop in any enemy’s guard. You gain the following benefits:',
          '- When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn.',
          '- Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.',
          '- When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.'
        ],
        null
      ),
      ('sharpshooter', 'Sharpshooter',
        ARRAY[
          'You have mastered ranged weapon and can make shots that others find impossible. You gain the following benefits:',
          '- Attacking at long range doesn’t impose disadvantage on your ranged weapon attack rolls.',
          '- Your ranged weapon attacks ignore half cover and three-quarters cover.',
          '- Before you make a ranged weapon attack with a weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage.'
        ],
        null
      ),
      ('shield-master', 'Shield Master',
        ARRAY[
          'You use shields not just for protection but also for offense. You gain the following benefits:',
          '- If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.',
          '- If you’re not incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.',
          '- If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.'
        ],
        null
      ),
      ('skilled', 'Skilled',
        ARRAY[
          'You gain proficiency in any combination of three skills or tools of your choice.'
        ],
        null
      ),
      ('skulker', 'Skulker',
        ARRAY[
          'You are an expert at slinking through shadows. You gain the following benefits:',
          '- You can try to hide when you are lightly obscured from the creature from which you are hiding.',
          '- When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn’t reveal your position.',
          '- Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight.'
        ],
        '{"dexterity": 13}'
      ),
      ('spell-sniper', 'Spell Sniper',
        ARRAY[
          'You have learned techniques to enhance your attacks with certain kinds of spell, gaining the following benefits:',
          '- When you cast a spell that requires you to make an attack roll, the spell’s range is doubled.',
          '- Your ranged spell attacks ignore half cover and three-quarters cover.',
          '- You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list.'
        ],
        null
      ),
      ('tavern-brawler', 'Tavern Brawler',
        ARRAY[
          'Accustomed to the rough-and-tumble fighting using whatever weapon happen to be at hand, you gain the following benefits:',
          '- Increase your Strength or Constitution by 1, to a maximum of 20.',
          '- You are proficient with improvised weapon.',
          '- Your unarmed strike uses a d4 for damage.',
          '- When you hit a creature with an unarmed strike or an improvised weapon, you can use a bonus action to attempt to grapple the target.'
        ],
        null
      ),
      ('tough', 'Tough',
        ARRAY[
          'Your hit point maximum increases by an amount equal to twice your level when you gain this feat.',
          'Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.'
        ],
        null
      ),
      ('war-caster', 'War Caster',
        ARRAY[
          'You have practiced casting spell in the midst of combat, learning techniques that grant you the following benefits:',
          '- You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.',
          '- You can perform the somatic components of spell even when you have weapon or a shield in one or both hands.',
          '- When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack.'
        ],
        '{"spellcasting": true}'
      ),
      ('weapon-master', 'Weapon Master',
        ARRAY[
          'You have practiced extensively with a variety of weapon, gaining the following benefits:',
          '- Increase your Strength or Dexterity by 1, to a maximum of 20.',
          '- You gain proficiency with four weapon of your choice. Each one must be a simple or martial weapon.'
        ],
        null
      );
    `);
    console.log('✅ All feats seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding full feats list:', err);
  }
}