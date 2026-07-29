import db from '../../../client.js';

export async function seedClassProficiency() {
  try {
    // Get all class IDs
    const characterClass = await db.query(`SELECT id, name FROM character_class`);
    const prof = await db.query(`SELECT id, index FROM proficiency`);

    const profMap = Object.fromEntries(prof.rows.map(p => [p.index, p.id]));
    const classMap = Object.fromEntries(characterClass.rows.map(c => [c.name.toLowerCase(), c.id]));

    const insert = [];

    // Fighter
    insert.push(
      { class_id: classMap['fighter'], proficiency_id: profMap['light-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['medium-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['heavy-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['shields'] }
    );

    // Rogue
    insert.push(
      { class_id: classMap['rogue'], proficiency_id: profMap['light-armor'] }
    );

    // Cleric
    insert.push(
      { class_id: classMap['cleric'], proficiency_id: profMap['light-armor'] },
      { class_id: classMap['cleric'], proficiency_id: profMap['medium-armor'] },
      { class_id: classMap['cleric'], proficiency_id: profMap['shields'] }
    );

    // Wizard has no armor proficiency

    for (const row of insert) {
      await db.query(
        `INSERT INTO class_proficiency (class_id, proficiency_id)
         VALUES ($1, $2)
         ON CONFLICT DO NOTHING`,
        [row.class_id, row.proficiency_id]
      );
    }
    console.log('✅ class_proficiency seeded!');
  } catch (err) {
    console.error('❌ Error seeding class_proficiency:', err);
  }
}