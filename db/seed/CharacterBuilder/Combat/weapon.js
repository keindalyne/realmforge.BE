import db from '../../../client.js';

export async function seedWeapon() {
  try {
    await db.query('TRUNCATE weapon RESTART IDENTITY CASCADE');
    const weaponCategory = (await db.query(`SELECT id FROM equipment_category WHERE index = 'weapon'`)).rows[0].id;
    const equip = await db.query(`
      INSERT INTO eqiupment (index, name, category_id, weight, cost, description) VALUES
      ('longsword','Longsword', ${weaponCategory}, 3, '15 gp', ARRAY['Versatile (1d10)', 'Martial melee weapon', '1d8 slashing']),
      ('dagger','Dagger', ${weaponCategory}, 1, '2 gp', ARRAY['Finesse', 'Light', 'Thrown (20/60)', '1d4 piercing'])
      RETURNING id
    `);
    const [longId, daggerId] = equip.rows.map(r => r.id);
    await db.query(`
      INSERT INTO weapon (equipment_id, weapon_category, weapon_range, damage_dice, damage_type, properties)
      VALUES (${longId}, 'Martial', 'Melee', '1d8', 'Slashing', ARRAY['Versatile']),
             (${daggerId}, 'Simple', 'Melee and Thrown (20/60)', '1d4', 'Piercing', ARRAY['Finesse','Light','Thrown'])
    `);
    console.log('✅ weapon seeded!');
  } catch (err) { console.error(err); }
}