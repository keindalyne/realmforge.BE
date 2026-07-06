import db from '../../../client.js';

export async function seedPackItem() {
  try {
    await db.query('TRUNCATE pack_item RESTART IDENTITY CASCADE');

    const pack = await db.query(`SELECT id, name FROM equipment_pack`);
    const item = await db.query(`SELECT id, index FROM eqiupment`);

    const itemMap = Object.fromEntries(item.rows.map(r => [r.index, r.id]));

    const findPackId = (packName) => {
      const match = pack.rows.find(p => p.name === packName);
      if (!match) throw new Error(`Pack not found: ${packName}`);
      return match.id;
    };

    const explorer = findPackId('Explorer\'s Pack');
    const dungeoneer = findPackId('Dungeoneer\'s Pack');
    const burglar = findPackId('Burglar\'s Pack');
    const diplomat = findPackId('Diplomat\'s Pack');
    const entertainer = findPackId('Entertainer\'s Pack');
    const priest = findPackId('Priest\'s Pack');
    const scholar = findPackId('Scholar\'s Pack');

    await db.query(`
      INSERT INTO pack_item (pack_id, item_id, quantity) VALUES
        -- Explorer's Pack
        (${explorer}, ${itemMap['backpack']}, 1),
        (${explorer}, ${itemMap['bedroll']}, 1),
        (${explorer}, ${itemMap['mess-kit']}, 1),
        (${explorer}, ${itemMap['rations']}, 10),
        (${explorer}, ${itemMap['tinderbox']}, 1),
        (${explorer}, ${itemMap['torch']}, 10),
        (${explorer}, ${itemMap['waterskin']}, 1),
        (${explorer}, ${itemMap['rope-hempen-50-ft']}, 1),

        -- Dungeoneer's Pack
        (${dungeoneer}, ${itemMap['backpack']}, 1),
        (${dungeoneer}, ${itemMap['crowbar']}, 1),
        (${dungeoneer}, ${itemMap['hammer']}, 1),
        (${dungeoneer}, ${itemMap['piton']}, 10),
        (${dungeoneer}, ${itemMap['torch']}, 10),
        (${dungeoneer}, ${itemMap['rations']}, 10),
        (${dungeoneer}, ${itemMap['waterskin']}, 1),
        (${dungeoneer}, ${itemMap['rope-hempen-50-ft']}, 1),

        -- Burglar's Pack
        (${burglar}, ${itemMap['backpack']}, 1),
        (${burglar}, ${itemMap['ball-bearings']}, 1000),
        (${burglar}, ${itemMap['string']}, 1),
        (${burglar}, ${itemMap['bell']}, 1),
        (${burglar}, ${itemMap['candle']}, 5),
        (${burglar}, ${itemMap['crowbar']}, 1),
        (${burglar}, ${itemMap['hammer']}, 1),
        (${burglar}, ${itemMap['piton']}, 10),
        (${burglar}, ${itemMap['torch']}, 10),
        (${burglar}, ${itemMap['rations']}, 10),
        (${burglar}, ${itemMap['waterskin']}, 1),
        (${burglar}, ${itemMap['rope-hempen-50-ft']}, 1),

        -- Diplomat's Pack
        (${diplomat}, ${itemMap['chest']}, 1),
        (${diplomat}, ${itemMap['case-map-or-scroll']}, 2),
        (${diplomat}, ${itemMap['clothes-fine']}, 1),
        (${diplomat}, ${itemMap['ink']}, 1),
        (${diplomat}, ${itemMap['ink-pen']}, 1),
        (${diplomat}, ${itemMap['lamp']}, 1),
        (${diplomat}, ${itemMap['oil']}, 2),
        (${diplomat}, ${itemMap['paper']}, 5),
        (${diplomat}, ${itemMap['perfume']}, 1),
        (${diplomat}, ${itemMap['sealing-wax']}, 1),
        (${diplomat}, ${itemMap['soap']}, 1),

        -- Entertainer's Pack
        (${entertainer}, ${itemMap['backpack']}, 1),
        (${entertainer}, ${itemMap['bedroll']}, 1),
        (${entertainer}, ${itemMap['costume']}, 2),
        (${entertainer}, ${itemMap['candle']}, 5),
        (${entertainer}, ${itemMap['rations']}, 5),
        (${entertainer}, ${itemMap['waterskin']}, 1),
        (${entertainer}, ${itemMap['disguise-kit']}, 1),

        -- Priest's Pack
        (${priest}, ${itemMap['backpack']}, 1),
        (${priest}, ${itemMap['blanket']}, 1),
        (${priest}, ${itemMap['candle']}, 10),
        (${priest}, ${itemMap['tinderbox']}, 1),
        (${priest}, ${itemMap['alms-box']}, 1),
        (${priest}, ${itemMap['incense']}, 2),
        (${priest}, ${itemMap['censer']}, 1),
        (${priest}, ${itemMap['vestments']}, 1),
        (${priest}, ${itemMap['rations']}, 2),
        (${priest}, ${itemMap['waterskin']}, 1),

        -- Scholar's Pack
        (${scholar}, ${itemMap['backpack']}, 1),
        (${scholar}, ${itemMap['book-of-lore']}, 1),
        (${scholar}, ${itemMap['ink']}, 1),
        (${scholar}, ${itemMap['ink-pen']}, 1),
        (${scholar}, ${itemMap['parchment']}, 10),
        (${scholar}, ${itemMap['bag-of-sand']}, 1),
        (${scholar}, ${itemMap['knife']}, 1)
    `);
    console.log('✅ pack_item seeded successfully');
  } catch (e) {
    console.error('❌ seedPackItem error:', e);
  }
}