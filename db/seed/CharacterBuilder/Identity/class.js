import db from '../../../client.js';

export async function seedCharacterClass() {
  try {
    await db.query('TRUNCATE character_class RESTART IDENTITY CASCADE');

    const characterClass = [
      {
        index: 'barbarian',
        name: 'Barbarian',
        hit_die: 12,
        proficiency: ['light-armor', 'medium-armor', 'shields', 'simple-weapon', 'martial-weapon'],
        saving_throw: ['strength', 'constitution'],
        description: [
          'A fierce warrior of primitive background who can enter a battle rage.',
          'Barbarians rely on sheer power and instinct to overcome obstacles.'
        ]
      },
      {
        index: 'bard',
        name: 'Bard',
        hit_die: 8,
        proficiency: ['light-armor', 'simple-weapon', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords'],
        saving_throw: ['dexterity', 'characterisma'],
        description: [
          'An inspiring magician whose power echoes the music of creation.',
          'Bards use their talents to enchant, inspire, and confuse foes.'
        ]
      },
      {
        index: 'cleric',
        name: 'Cleric',
        hit_die: 8,
        proficiency: ['light-armor', 'medium-armor', 'shields', 'simple-weapon'],
        saving_throw: ['wisdom', 'characterisma'],
        description: [
          'A priestly champion who wields divine magic in service of a higher power.'
        ]
      },
      {
        index: 'druid',
        name: 'Druid',
        hit_die: 8,
        proficiency: ['light-armor', 'medium-armor', 'shields', 'clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
        saving_throw: ['intelligence', 'wisdom'],
        description: [
          'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.'
        ]
      },
      {
        index: 'fighter',
        name: 'Fighter',
        hit_die: 10,
        proficiency: ['all-armor', 'shields', 'simple-weapon', 'martial-weapon'],
        saving_throw: ['strength', 'constitution'],
        description: [
          'A master of martial combat, skilled with a variety of weapon and armor.'
        ]
      },
      {
        index: 'monk',
        name: 'Monk',
        hit_die: 8,
        proficiency: ['simple-weapon', 'shortswords'],
        saving_throw: ['strength', 'dexterity'],
        description: [
          'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.'
        ]
      },
      {
        index: 'paladin',
        name: 'Paladin',
        hit_die: 10,
        proficiency: ['all-armor', 'shields', 'simple-weapon', 'martial-weapon'],
        saving_throw: ['wisdom', 'characterisma'],
        description: [
          'A holy warrior bound to a sacred oath.'
        ]
      },
      {
        index: 'ranger',
        name: 'Ranger',
        hit_die: 10,
        proficiency: ['light-armor', 'medium-armor', 'shields', 'simple-weapon', 'martial-weapon'],
        saving_throw: ['strength', 'dexterity'],
        description: [
          'A warrior who combats threats on the edges of civilization.'
        ]
      },
      {
        index: 'rogue',
        name: 'Rogue',
        hit_die: 8,
        proficiency: ['light-armor', 'simple-weapon', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords'],
        saving_throw: ['dexterity', 'intelligence'],
        description: [
          'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.'
        ]
      },
      {
        index: 'sorcerer',
        name: 'Sorcerer',
        hit_die: 6,
        proficiency: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows'],
        saving_throw: ['constitution', 'characterisma'],
        description: [
          'A spellcaster who draws on inherent magic from a gift or bloodline.'
        ]
      },
      {
        index: 'warlock',
        name: 'Warlock',
        hit_die: 8,
        proficiency: ['light-armor', 'simple-weapon'],
        saving_throw: ['wisdom', 'characterisma'],
        description: [
          'A wielder of magic that is derived from a bargain with an extraplanar entity.'
        ]
      },
      {
        index: 'wizard',
        name: 'Wizard',
        hit_die: 6,
        proficiency: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows'],
        saving_throw: ['intelligence', 'wisdom'],
        description: [
          'A scholarly magic-player capable of manipulating the structures of reality.'
        ]
      }
    ];

    for (const cls of characterClass) {
      const result = await db.query(`
        INSERT INTO character_class (index, name, hit_die, description)
        VALUES ($1, $2, $3, $4)
        RETURNING id;
      `, [cls.index, cls.name, cls.hit_die, cls.description]);

      const classId = result.rows[0].id;

      for (const prof of cls.proficiency) {
        await db.query(`
          INSERT INTO class_proficiency (class_id, proficiency_index)
          VALUES ($1, $2);
        `, [classId, prof]);
      }

      for (const save of cls.saving_throw) {
        await db.query(`
          INSERT INTO class_proficiency (class_id, proficiency_index)
          VALUES ($1, $2);
        `, [classId, `saving-throw-${save}`]);
      }
    }

    console.log('✅ character_class seed complete!');
  } catch (err) {
    console.error('❌ seedCharacterClass error:', err);
  }
}
