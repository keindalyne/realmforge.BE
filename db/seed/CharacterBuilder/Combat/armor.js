import db from '../../../client.js';

export async function seedArmor() {
  try {
    await db.query('TRUNCATE armor RESTART IDENTITY CASCADE');

    const { rows: [cat] } = await db.query(
      `SELECT id FROM equipment_category WHERE index = 'armor'`
    );
    const armorCategoryId = cat.id;

    const armorList = [
      ['padded-armor', 'Padded Armor', 8, '5 gp', ['AC 11 + Dex modifier', 'Light armor', 'Disadvantage on Stealth']],
      ['leather-armor', 'Leather Armor', 10, '10 gp', ['AC 11 + Dex modifier','Light armor']],
      ['studded-leather', 'Studded Leather Armor', 13, '45 gp', ['AC 12 + Dex modifier','Light armor']],
      ['hide', 'Hide Armor', 12, '10 gp', ['AC 12 + Dex modifier (max 2)','Medium armor']],
      ['chain-shirt', 'Chain Shirt', 20, '50 gp', ['AC 13 + Dex modifier (max 2)','Medium armor']],
      ['scale-mail', 'Scale Mail', 45, '50 gp', ['AC 14 + Dex modifier (max 2)','Medium armor','Disadvantage on Stealth']],
      ['breastplate', 'Breastplate', 20, '400 gp', ['AC 14 + Dex modifier (max 2)','Medium armor']],
      ['half-plate', 'Half Plate Armor', 40, '750 gp', ['AC 15 + Dex modifier (max 2)','Medium armor','Disadvantage on Stealth']],
      ['ring-mail', 'Ring Mail', 40, '30 gp', ['AC 14','Heavy armor','Disadvantage on Stealth']],
      ['chain-mail', 'Chain Mail', 55, '75 gp', ['AC 16','Heavy armor','Str 13 required','Disadvantage on Stealth']],
      ['splint-armor', 'Splint Armor', 60, '200 gp', ['AC 17','Heavy armor','Str 15 required','Disadvantage on Stealth']],
      ['plate-armor', 'Plate Armor', 65, '1500 gp', ['AC 18','Heavy armor','Str 15 required','Disadvantage on Stealth']],
      ['shield', 'Shield', 6, '10 gp', ['+2 to AC','Held item']]
    ];

    // Batch insert into eqiupment
    const values = armorList.map(a =>
      `('${a[0]}','${a[1]}',${armorCategoryId},${a[2]},'${a[3]}',ARRAY['${a[4].join("','")}'])`
    ).join(',');

    const result = await db.query(`
      INSERT INTO eqiupment (index, name, category_id, weight, cost, description)
      VALUES ${values}
      RETURNING id, index
    `);

    const idMap = Object.fromEntries(result.rows.map(r => [r.index, r.id]));

    // Insert into armor table with parsed fields
    const armorValues = armorList.map(a => {
      const id = idMap[a[0]];
      const category = a[4][1].replace(' armor','');
      const stealth = a[4].includes('Disadvantage on Stealth');
      const dexAllowed = category !== 'Heavy';
      return `(${id}, '${category}', ${a[2]}, ${dexAllowed}, ${stealth})`;
    }).join(',');

    await db.query(`
      INSERT INTO armor (equipment_id, armor_category, base_ac, dex_bonus_allowed, stealth_disadvantage)
      VALUES ${armorValues}
    `);

    console.log('✅ armor seeded with full SRD list');
  } catch (err) {
    console.error('❌ seedArmor error:', err);
  }
}