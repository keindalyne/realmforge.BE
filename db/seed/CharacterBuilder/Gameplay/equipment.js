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
        slug: 'longsword',
        name: 'Longsword',
        categoryId: category.weapon,
        weight: 3,
        cost: '15 gp',
        description: ['A martial melee weapon with a long blade.'],
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