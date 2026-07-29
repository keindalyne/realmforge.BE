import db from '../client.js';

export async function seedProficiency() {
  try {
    await db.query('TRUNCATE proficiency RESTART IDENTITY CASCADE');

    const proficiency = [

      // ==== ARMOR ====
      { name: 'Light Armor', type: 'Armor' },
      { name: 'Medium Armor', type: 'Armor' },
      { name: 'Heavy Armor', type: 'Armor' },
      { name: 'Shields', type: 'Armor' },

      // ==== WEAPON ====
      { name: 'Simple Weapon', type: 'weapon' },
      { name: 'Martial Weapon', type: 'weapon' },

      // Simple Melee
      { name: 'Club', type: 'weapon' },
      { name: 'Dagger', type: 'weapon' },
      { name: 'Greatclub', type: 'weapon' },
      { name: 'Handaxe', type: 'weapon' },
      { name: 'Javelin', type: 'weapon' },
      { name: 'Light Hammer', type: 'weapon' },
      { name: 'Mace', type: 'weapon' },
      { name: 'Quarterstaff', type: 'weapon' },
      { name: 'Sickle', type: 'weapon' },
      { name: 'Spear', type: 'weapon' },

      // Simple Ranged
      { name: 'Light Crossbow', type: 'weapon' },
      { name: 'Dart', type: 'weapon' },
      { name: 'Shortbow', type: 'weapon' },
      { name: 'Sling', type: 'weapon' },

      // Martial Melee
      { name: 'Battleaxe', type: 'weapon' },
      { name: 'Flail', type: 'weapon' },
      { name: 'Glaive', type: 'weapon' },
      { name: 'Greataxe', type: 'weapon' },
      { name: 'Greatsword', type: 'weapon' },
      { name: 'Halberd', type: 'weapon' },
      { name: 'Lance', type: 'weapon' },
      { name: 'Longsword', type: 'weapon' },
      { name: 'Maul', type: 'weapon' },
      { name: 'Morningstar', type: 'weapon' },
      { name: 'Pike', type: 'weapon' },
      { name: 'Rapier', type: 'weapon' },
      { name: 'Scimitar', type: 'weapon' },
      { name: 'Shortsword', type: 'weapon' },
      { name: 'Trident', type: 'weapon' },
      { name: 'War Pick', type: 'weapon' },
      { name: 'Warhammer', type: 'weapon' },
      { name: 'Whip', type: 'weapon' },

      // Martial Ranged
      { name: 'Blowgun', type: 'weapon' },
      { name: 'Hand Crossbow', type: 'weapon' },
      { name: 'Heavy Crossbow', type: 'weapon' },
      { name: 'Longbow', type: 'weapon' },
      { name: 'Net', type: 'weapon' },

      // // ==== SAVING THROW ====
      // { name: 'Saving Throw: Strength', type: 'saving throw' },
      // { name: 'Saving Throw: Dexterity', type: 'saving throw' },
      // { name: 'Saving Throw: Constitution', type: 'saving throw' },
      // { name: 'Saving Throw: Intelligence', type: 'saving throw' },
      // { name: 'Saving Throw: Wisdom', type: 'saving throw' },
      // { name: 'Saving Throw: Characterisma', type: 'saving throw' },

      // // ==== SKILL ====
      // { name: 'Acrobatics', type: 'skill' },
      // { name: 'Animal Handling', type: 'skill' },
      // { name: 'Arcana', type: 'skill' },
      // { name: 'Athletics', type: 'skill' },
      // { name: 'Deception', type: 'skill' },
      // { name: 'History', type: 'skill' },
      // { name: 'Insight', type: 'skill' },
      // { name: 'Intimidation', type: 'skill' },
      // { name: 'Investigation', type: 'skill' },
      // { name: 'Medicine', type: 'skill' },
      // { name: 'Nature', type: 'skill' },
      // { name: 'Perception', type: 'skill' },
      // { name: 'Performance', type: 'skill' },
      // { name: 'Persuasion', type: 'skill' },
      // { name: 'Religion', type: 'skill' },
      // { name: 'Sleight of Hand', type: 'skill' },
      // { name: 'Stealth', type: 'skill' },
      // { name: 'Survival', type: 'skill' },

      // ==== TOOLS ====
      // Artisan’s Tools
      { name: 'Alchemist\'s Supplies', type: 'tool' },
      { name: 'Brewer\'s Supplies', type: 'tool' },
      { name: 'Calligrapher\'s Supplies', type: 'tool' },
      { name: 'Carpenter\'s Tools', type: 'tool' },
      { name: 'Cartographer\'s Tools', type: 'tool' },
      { name: 'Cobbler\'s Tools', type: 'tool' },
      { name: 'Cook\'s Utensils', type: 'tool' },
      { name: 'Glassblower\'s Tools', type: 'tool' },
      { name: 'Jeweler\'s Tools', type: 'tool' },
      { name: 'Leatherworker\'s Tools', type: 'tool' },
      { name: 'Mason\'s Tools', type: 'tool' },
      { name: 'Painter\'s Supplies', type: 'tool' },
      { name: 'Potter\'s Tools', type: 'tool' },
      { name: 'Smith\'s Tools', type: 'tool' },
      { name: 'Tinker\'s Tools', type: 'tool' },
      { name: 'Weaver\'s Tools', type: 'tool' },
      { name: 'Woodcarver\'s Tools', type: 'tool' },

      // Musical Instrument
      { name: 'Bagpipes', type: 'tool' },
      { name: 'Drum', type: 'tool' },
      { name: 'Dulcimer', type: 'tool' },
      { name: 'Flute', type: 'tool' },
      { name: 'Lute', type: 'tool' },
      { name: 'Lyre', type: 'tool' },
      { name: 'Horn', type: 'tool' },
      { name: 'Pan Flute', type: 'tool' },
      { name: 'Shawm', type: 'tool' },
      { name: 'Viol', type: 'tool' },

      // Misc Tool
      { name: 'Disguise Kit', type: 'tool' },
      { name: 'Forgery Kit', type: 'tool' },
      { name: 'Herbalism Kit', type: 'tool' },
      { name: 'Navigator\'s Tools', type: 'tool' },
      { name: 'Poisoner\'s Kit', type: 'tool' },
      { name: 'Thieves\' Tools', type: 'tool' },
      { name: 'Vehicles (Land)', type: 'tool' },
      { name: 'Vehicles (Water)', type: 'tool' },

      // // ==== LANGUAGES ====
      // { name: 'Common', type: 'language' },
      // { name: 'Common Sign Language', type: 'language' },
      // { name: 'Draconic', type: 'language' },
      // { name: 'Dwarvish', type: 'language' },
      // { name: 'Elvish', type: 'language' },
      // { name: 'Giant', type: 'language' },
      // { name: 'Gnomish', type: 'language' },
      // { name: 'Goblin', type: 'language' },
      // { name: 'Halfling', type: 'language' },
      // { name: 'Orc', type: 'language' },
      // { name: 'Abyssal', type: 'language' },
      // { name: 'Celestial', type: 'language' },
      // { name: 'Deep Speech', type: 'language' },
      // { name: 'Infernal', type: 'language' },
      // { name: 'Primordial', type: 'language' },
      // { name: 'Sylvan', type: 'language' },
      // { name: 'Undercommon', type: 'language' },
    ];

    for (const prof of proficiency) {
        await db.query(
            `INSERT INTO proficiency (index, name, type)
            VALUES ($1, $2, $3)
            ON CONFLICT (index) DO NOTHING`,
            [prof.index, prof.name, prof.type]
        );
    }
    console.log('✅ All proficiency seeded successfully.');
  } catch (error) {
    console.error('❌ Error seeding proficiency:', error);
  }
}
