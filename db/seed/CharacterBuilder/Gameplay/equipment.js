import db from '../../../client.js';

export async function seedEquipment() {
  try {
    await db.query('TRUNCATE eqiupment RESTART IDENTITY CASCADE');

    // Get relevant category IDs
    const category = {};
    const categoryName = ['adventuring-gear', 'equipment-packs'];
    for (const index of categoryName) {
      const { rows } = await db.query(`SELECT id FROM equipment_category WHERE index = $1`, [index]);
      category[index] = rows[0]?.id;
    }

    // Insert general gear and packs only (no weapon, armor, or tools)
    await db.query(`
      INSERT INTO eqiupment (index, name, category_id, weight, cost, description) VALUES
      ('backpack', 'Backpack', ${category['adventuring-gear']}, 5, '2 gp',
        ARRAY['Standard container for gear']),
      ('bedroll', 'Bedroll', ${category['adventuring-gear']}, 5, '1 gp',
        ARRAY['Sleeping gear']),
      ('tinderbox', 'Tinderbox', ${category['adventuring-gear']}, 1, '0.5 gp',
        ARRAY['Used to light fires']),
      ('waterskin', 'Waterskin', ${category['adventuring-gear']}, 5, '0.2 gp',
        ARRAY['Holds up to 4 pints of liquid']),
      ('rations', 'Rations (1 day)', ${category['adventuring-gear']}, 2, '0.5 gp',
        ARRAY['Preserved food for 1 day']),
      ('explorers-pack', 'Explorer\'s Pack', ${category['equipment-packs']}, 59, '10 gp',
        ARRAY['Backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days rations, waterskin, 50 ft rope']),
      ('dungeoneers-pack', 'Dungeoneer\'s Pack', ${category['equipment-packs']}, 61, '12 gp',
        ARRAY['Backpack, crowbar, hammer, pitons, torches, rations, waterskin, rope'])
    `);
    console.log('✅ eqiupment (non-duplicate items) seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding eqiupment:', error);
  }
}