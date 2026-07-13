import db from '../../../client.js';

// export async function seedEquipment() {
//   try {
//     await db.query('TRUNCATE eqiupment RESTART IDENTITY CASCADE');

//     // Get relevant category IDs
//     const category = {};
//     const categoryName = ['adventuring-gear', 'equipment-packs'];
//     for (const index of categoryName) {
//       const { rows } = await db.query(`SELECT id FROM equipment_category WHERE index = $1`, [index]);
//       category[index] = rows[0]?.id;
//     }

//     // Insert general gear and packs only (no weapon, armor, or tools)
//     await db.query(`
//       INSERT INTO equipment (index, name, category_id, weight, cost, description) VALUES
//       ('backpack', 'Backpack', ${category['adventuring-gear']}, 5, '2 gp',
//         ARRAY['Standard container for gear']),
//       ('bedroll', 'Bedroll', ${category['adventuring-gear']}, 5, '1 gp',
//         ARRAY['Sleeping gear']),
//       ('tinderbox', 'Tinderbox', ${category['adventuring-gear']}, 1, '0.5 gp',
//         ARRAY['Used to light fires']),
//       ('waterskin', 'Waterskin', ${category['adventuring-gear']}, 5, '0.2 gp',
//         ARRAY['Holds up to 4 pints of liquid']),
//       ('rations', 'Rations (1 day)', ${category['adventuring-gear']}, 2, '0.5 gp',
//         ARRAY['Preserved food for 1 day']),
//       ('explorers-pack', 'Explorer\'s Pack', ${category['equipment-packs']}, 59, '10 gp',
//         ARRAY['Backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days rations, waterskin, 50 ft rope']),
//       ('dungeoneers-pack', 'Dungeoneer\'s Pack', ${category['equipment-packs']}, 61, '12 gp',
//         ARRAY['Backpack, crowbar, hammer, pitons, torches, rations, waterskin, rope'])
//     `);
//     console.log('✅ eqiupment (non-duplicate items) seeded successfully!');
//   } catch (error) {
//     console.error('❌ Error seeding eqiupment:', error);
//   }
// }

export async function seedEquipment () {
  try {
    await db.query('TRUNCATE equipment RESTART IDENTITY CASCADE');

    const category = {};

    const categoryNames = [
      'adventuring-gear',
      'equipment-pack',
      'weapon',
      'armor',
      'tool',
      'ammunition',
      'arcane-focus',
      'druidic-focus',
      'holy-symbol'
    ];

    for (const slug of categoryNames) {
      const { rows } = await db.query(
        `SELECT id
        FROM equipment_category
        WHERE slug = $1`, [slug]
      );

      if (!rows[0]) {
        throw new Error(`Equipment category "${slug}" was not found.`);
      }

      category[slug] = rows[0].id;
    }

    const equipment = [
      // ========================================
      // ADVENTURING GEAR
      // ========================================
      {
        slug: 'backpack',
        name: 'Backpack',
        categoryId: category['adventuring-gear'],
        weight: 5,
        cost: '2gp',
        description: ['Standard container for carrying gear.']
      },
      {
        slug: 'bedroll',
        name: 'Bedroll',
        categoryId: category['adventuring-gear'],
        weight: 5,
        cost: '1 gp',
        description: ['Sleeping gear used while traveling or camping.'],
      },
      {
        slug: 'tinderbox',
        name: 'Tinderbox',
        categoryId: category['adventuring-gear'],
        weight: 1,
        cost: '5 sp',
        description: ['Used to light fires.'],
      },
      {
        slug: 'waterskin',
        name: 'Waterskin',
        categoryId: category['adventuring-gear'],
        weight: 5,
        cost: '2 sp',
        description: ['A container used to carry drinking water.'],
      },
      {
        slug: 'rations',
        name: 'Rations (1 day)',
        categoryId: category['adventuring-gear'],
        weight: 2,
        cost: '5 sp',
        description: ['Preserved food sufficient for one day.'],
      },

      // ========================================
      // EQUIPMENT PACKS
      // ========================================

      {
        slug: 'explorers-pack',
        name: "Explorer's Pack",
        categoryId: category['equipment-pack'],
        weight: 59,
        cost: '10 gp',
        description: [
          'A collection of commonly used adventuring and travel supplies.',
        ],
      },
      {
        slug: 'dungeoneers-pack',
        name: "Dungeoneer's Pack",
        categoryId: category['equipment-pack'],
        weight: 61,
        cost: '12 gp',
        description: [
          'A collection of supplies intended for underground exploration.',
        ],
      },

      // ========================================
      // WEAPONS
      // ========================================

      // SIMPLE MELEE WEAPONS
      {
        slug: 'club',
        name: 'Club',
        categoryId: category.weapon,
        weight: 2,
        cost: '1sp',
        description: ['A simple wooden club.']
      },
      {
        slug: 'dagger',
        name: 'Dagger',
        categoryId: category.weapon,
        weight: 1,
        cost: '2 gp',
        description: ['A small bladed weapon.'],
      },
      {
        slug: 'greatclub',
        name: 'Greatclub',
        categoryId: category.weapon,
        weight: 10,
        cost: '2 sp',
        description: ['A heavy two-handed club.']
      },
      {
        slug: 'handaxe',
        name: 'Handaxe',
        categoryId: category.weapon,
        weight: 2,
        cost: '5 gp',
        description: ['A light axe that']
      },
      {
        slug: 'javelin',
        name: 'Javelin',
        categoryId: category.weapon,
        weight: 2,
        cost: '5 sp',
        description: ['A thrown spear-like weapon.']
      },
      {
        slug: 'light-hammer',
        name: 'Light Hammer',
        categoryId: category.weapon,
        weight: 2,
        cost: '2 gp',
        description: ['A small hammer that can be thrown.']
      },
      {
        slug: 'longsword',
        name: 'Longsword',
        categoryId: category.weapon,
        weight: 3,
        cost: '15 gp',
        description: ['A martial melee weapon with a long blade.'],
      },
      {
        slug: 'mace',
        name: 'Mace',
        categoryId: category.weapon,
        weight: 4,
        cost: '5 gp',
        description: ['A heavy bludgeoning weapon.']
      },
      {
        slug: 'quarterstaff',
        name: 'Quarterstaff',
        categoryId: category.weapon,
        weight: 4,
        cost: '2 sp',
        description: ['A sturdy wooden staff.']
      },
      {
        slug: 'sickle',
        name: 'Sickle',
        categoryId: category.weapon,
        weight: 2,
        cost: '1 gp',
        description: ['A curved farming blade used as a weapon.']
      },
      {
        slug: 'spear',
        name: 'Spear',
        categoryId: category.weapon,
        weight: 3,
        cost: '1 gp',
        description: ['A versatile piercing weapon.']
      },

      // SIMPLE RANGED WEAPONS
      {
        slug: 'light-crossbow',
        name: 'Light Crossbow',
        categoryId: category.weapon,
        weight: 5,
        cost: '25 gp',
        description: ['A simple ranged crossbow.']
      },
      {
        slug: 'dart',
        name: 'Dart',
        categoryId: category.weapon,
        weight: 0.25,
        cost: '5 cp',
        description: ['A small thrown projectile.']
      },
      {
        slug: 'shortbow',
        name: 'Shortbow',
        categoryId: category.weapon,
        weight: 2,
        cost: '25 gp',
        description: ['A simple wooden bow.']
      },
      {
        slug: 'sling',
        name: 'Sling',
        categoryId: category.weapon,
        weight: 0,
        cost: '1 sp',
        description: ['A simple ranged sling.']
      },

      // MARTIAL MELEE WEAPONS
      { slug: 'battleaxe', name: 'Battleaxe', categoryId: category.weapon, weight: 4, cost: '10 gp', description: ['A martial axe with a broad blade.'] },
      { 
        slug: 'flail', 
        name: 'Flail', 
        categoryId: category.weapon, 
        weight: 2, 
        cost: '10 gp', 
        description: ['A spiked striking weapon attached by chain.']
      },
      { 
        slug: 'glaive', 
        name: 'Glaive', 
        categoryId: category.weapon, 
        weight: 6, 
        cost: '20 gp', 
        description: ['A polearm with a single-edged blade.'] 
      },
      { 
        slug: 'greataxe', 
        name: 'Greataxe', 
        categoryId: category.weapon, 
        weight: 7, 
        cost: '30 gp', 
        description: ['A massive two-handed axe.'] 
      },
      { 
        slug: 'greatsword', 
        name: 'Greatsword', 
        categoryId: category.weapon, 
        weight: 6, 
        cost: '50 gp', 
        description: ['A large two-handed sword.'] 
      },
      { 
        slug: 'halberd', 
        name: 'Halberd', 
        categoryId: category.weapon, 
        weight: 6, 
        cost: '20 gp', 
        description: ['A polearm with an axe head and spike.'] 
      },
      { 
        slug: 'lance', 
        name: 'Lance', categoryId: category.weapon, weight: 6, cost: '10 gp', description: ['A long mounted weapon.'] },
      { 
        slug: 'longsword', 
        name: 'Longsword', 
        categoryId: category.weapon, 
        weight: 3, c
        ost: '15 gp', 
        description: ['A versatile martial sword.'] 
      },
      { 
        slug: 'maul', 
        name: 'Maul', 
        categoryId: category.weapon, 
        weight: 10, 
        cost: '10 gp', 
        description: ['A massive two-handed hammer.'] 
      },
      { 
        slug: 'morningstar', 
        name: 'Morningstar', 
        categoryId: category.weapon, 
        weight: 4, 
        cost: '15 gp', 
        description: ['A spiked bludgeoning weapon.'] 
      },
      { 
        slug: 'pike', 
        name: 'Pike', 
        categoryId: category.weapon, 
        weight: 18, 
        cost: '5 gp', 
        description: ['A very long thrusting polearm.'] 
      },
      { 
        slug: 'rapier', 
        name: 'Rapier', 
        categoryId: category.weapon, 
        weight: 2, 
        cost: '25 gp', 
        description: ['A slender finesse sword.'] 
      },
      { 
        slug: 'scimitar', 
        name: 'Scimitar', 
        categoryId: category.weapon, 
        weight: 3, 
        cost: '25 gp', 
        description: ['A curved slashing sword.'] 
      },
      { 
        slug: 'shortsword', 
        name: 'Shortsword', 
        categoryId: category.weapon, 
        weight: 2, 
        cost: '10 gp', 
        description: ['A light martial sword.'] 
      },
      { 
        slug: 'trident', 
        name: 'Trident', 
        categoryId: category.weapon, 
        weight: 4, 
        cost: '5 gp', 
        description: ['A three-pronged pole weapon.'] 
      },
      { 
        slug: 'war-pick', 
        name: 'War Pick', 
        categoryId: category.weapon, 
        weight: 2, 
        cost: '5 gp', 
        description: ['A pointed military pick.'] 
      },
      { 
        slug: 'warhammer', 
        name: 'Warhammer', 
        categoryId: category.weapon, 
        weight: 5, 
        cost: '15 gp', 
        description: ['A heavy hammer used in battle.'] 
      },
      { 
        slug: 'whip', 
        name: 'Whip', 
        categoryId: category.weapon, 
        weight: 3, 
        cost: '2 gp', 
        description: ['A long flexible weapon with extended reach.'] 
      },

      // MARTIAL RANGED WEAPONS
      { 
        slug: 'blowgun', 
        name: 'Blowgun', 
        categoryId: category.weapon, 
        weight: 1, 
        cost: '10 gp', 
        description: ['A tube used to fire darts.'] 
      },
      { 
        slug: 'hand-crossbow', 
        name: 'Hand Crossbow', 
        categoryId: category.weapon, 
        weight: 3, 
        cost: '75 gp', 
        description: ['A compact one-handed crossbow.'] 
      },
      { 
        slug: 'heavy-crossbow', 
        name: 'Heavy Crossbow', 
        categoryId: category.weapon, 
        weight: 18, 
        cost: '50 gp', 
        description: ['A powerful two-handed crossbow.']
      },
      { 
        slug: 'longbow', 
        name: 'Longbow', 
        categoryId: category.weapon, 
        weight: 2, 
        cost: '50 gp', 
        description: ['A large martial bow.'] 
      },
      { 
        slug: 'net', 
        name: 'Net', 
        categoryId: category.weapon, 
        weight: 3, 
        cost: '1 gp', 
        description: ['A weighted net used to restrain creatures.'] 
      },

      // ========================================
      // ARMOR
      // ========================================

      {
        slug: 'leather-armor',
        name: 'Leather Armor',
        categoryId: category.armor,
        weight: 10,
        cost: '10 gp',
        description: ['Light armor made from treated leather.'],
      },
      {
        slug: 'shield',
        name: 'Shield',
        categoryId: category.armor,
        weight: 6,
        cost: '10 gp',
        description: ['A protective item carried in one hand.'],
      },

      // ========================================
      // TOOLS
      // ========================================

      {
        slug: 'thieves-tools',
        name: "Thieves' Tools",
        categoryId: category.tool,
        weight: 1,
        cost: '25 gp',
        description: [
          'A collection of small tools used for locks and traps.',
        ],
      },
      {
        slug: 'lute',
        name: 'Lute',
        categoryId: category.tool,
        weight: 2,
        cost: '35 gp',
        description: ['A stringed musical instrument.'],
      },
    ];
      
      for (const item of equipment) {
        await db.query(
          `INSERT INTO equipment (
            slug,
            name,
            category_id,
            weight,
            cost,
            description
          )
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT (slug) DO NOTHING`,
          [
            item.slug,
            item.name,
            item.categoryId,
            item.weight,
            item.cost,
            item.description
          ]
        );
      }
      console.log('✅ Equipment seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding equipment:', error);
    throw error;
  }
}