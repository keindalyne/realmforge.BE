import db from '../db/client.js';

export async function seedSpecies() {
  try {
    await db.query('TRUNCATE species RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO species (
        index, name, size, speed, ability_bonuses,
        alignment, age, size_description, language_desc, language,
        traits, subspecies
      ) VALUES
      (
        'dragonborn','Dragonborn','Medium',30,'{"STR":2,"CHA":1,"DEX":0,"CON":0,"INT":0,"WIS":0}',
        'Tend toward extremes—often lawful good soldiers or cruel tyrants.',
        'Mature quickly; live to around 80 years.',
        'Dragonborn are taller and heavier than humans, standing well over 6 feet.',
        'You can speak, read, and write Common and Draconic.',
        ARRAY['Common','Draconic'],
        '[{"name":"Draconic Ancestry","desc":"Choose a damage type and breath shape tied to your draconic lineage."},{"name":"Breath Weapon","desc":"Exhale destructive energy; DC = 8 + Con mod + proficiency; damage scales with level."},{"name":"Damage Resistance","desc":"Resistance to the damage type associated with your ancestry."}]',
        '[]'
      ),
      (
        'dwarf','Dwarf','Medium',25,'{"STR":0,"DEX":0,"CON":2,"INT":0,"WIS":0,"CHA":0}',
        'Lawful, with strong traditions; typically good.',
        'Mature at the same rate as humans but are considered young until 50; live ~350 years.',
        'Solid and powerful; about 4–5 feet tall and heavy for their height.',
        'You can speak, read, and write Common and Dwarvish.',
        ARRAY['Common','Dwarvish'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Dwarven Resilience","desc":"Advantage on saves vs. poison; resistance to poison damage."},{"name":"Dwarven Combat Training","desc":"Proficiency with battleaxe, handaxe, light hammer, warhammer."},{"name":"Tool Proficiency","desc":"Smith’s, brewer’s, or mason’s tools."},{"name":"Stonecunning","desc":"History checks related to stonework are doubled (expertise-like)."}]',
        '[{"index":"hill-dwarf","name":"Hill Dwarf","ability_bonuses":{"WIS":1},"traits":[{"name":"Dwarven Toughness","desc":"+1 HP per level."}]},{"index":"mountain-dwarf","name":"Mountain Dwarf","ability_bonuses":{"STR":2},"traits":[{"name":"Dwarven Armor Training","desc":"Light and medium armor proficiency."}]}]'
      ),
      (
        'elf','Elf','Medium',30,'{"STR":0,"DEX":2,"CON":0,"INT":0,"WIS":0,"CHA":0}',
        'Chaotic leanings; value freedom, variety, self-expression; often good.',
        'Physically mature at ~100; can live 750+ years.',
        'Slender, gspeciesful, about 5–6 feet tall.',
        'You can speak, read, and write Common and Elvish.',
        ARRAY['Common','Elvish'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Keen Senses","desc":"Proficiency in Perception."},{"name":"Fey Ancestry","desc":"Advantage on saves vs. being charactermed; magic can’t put you to sleep."},{"name":"Trance","desc":"Meditate for 4 hours instead of sleep."}]',
        '[{"index":"high-elf","name":"High Elf","ability_bonuses":{"INT":1},"traits":[{"name":"Elf Weapon Training","desc":"Proficiency with longsword, shortsword, shortbow, longbow."},{"name":"Cantrip","desc":"One wizard cantrip (INT)."},{"name":"Extra Language","desc":"One additional language."}]},{"index":"wood-elf","name":"Wood Elf","ability_bonuses":{"WIS":1},"traits":[{"name":"Elf Weapon Training","desc":"Proficiency with longsword, shortsword, shortbow, longbow."},{"name":"Fleet of Foot","desc":"Base speed 35 ft."},{"name":"Mask of the Wild","desc":"Can attempt to hide lightly obscured by natural phenomena."}]}]'
      ),
      (
        'gnome','Gnome','Small',25,'{"STR":0,"DEX":0,"CON":0,"INT":2,"WIS":0,"CHA":0}',
        'Often good; curious, inventive, and prankish.',
        'Mature at the same rate as humans but live 350–500 years.',
        'About 3–4 feet tall and ~40 pounds.',
        'You can speak, read, and write Common and Gnomish.',
        ARRAY['Common','Gnomish'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Gnome Cunning","desc":"Advantage on all Int, Wis, Cha saves vs. magic."}]',
        '[{"index":"forest-gnome","name":"Forest Gnome","ability_bonuses":{"DEX":1},"traits":[{"name":"Natural Illusionist","desc":"Know the minor illusion cantrip (INT)."},{"name":"Speak with Small Beasts","desc":"Communicate simple ideas with Tiny beasts."}]},{"index":"rock-gnome","name":"Rock Gnome","ability_bonuses":{"CON":1},"traits":[{"name":"Artificer\'s Lore","desc":"Double proficiency on History checks about magic items, alchemical objects, or technological devices."},{"name":"Tinker","desc":"Proficiency with tinker’s tools; build clockwork devices."}]}]'
      ),
      (
        'half-elf','Half-Elf','Medium',30,'{"STR":0,"DEX":0,"CON":0,"INT":0,"WIS":0,"CHA":2}',
        'Value personal freedom and expression; often chaotic.',
        'Mature at ~20 and live much longer than humans, often >180 years.',
        'About human size, combining human and elven feature.',
        'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
        ARRAY['Common','Elvish'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Fey Ancestry","desc":"Advantage on saves vs. being charactermed; magic can’t put you to sleep."},{"name":"Skill Versatility","desc":"Proficiency in any two skills of your choice."}]',
        '[]'
      ),
      (
        'half-orc','Half-Orc','Medium',30,'{"STR":2,"DEX":0,"CON":1,"INT":0,"WIS":0,"CHA":0}',
        'Often chaotic; many are not evil despite orc heritage.',
        'Mature quickly and age faster than humans; rarely beyond 75 years.',
        'Broad, powerfully built, standing between 5 and 7 feet.',
        'You can speak, read, and write Common and Orc.',
        ARRAY['Common','Orc'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Menacing","desc":"Proficiency in Intimidation."},{"name":"Relentless Endurance","desc":"When reduced to 0 HP but not killed, drop to 1 HP instead (1/long rest)."},{"name":"Savage Attacks","desc":"On a melee crit, add one extra weapon damage die."}]',
        '[]'
      ),
      (
        'halfling','Halfling','Small',25,'{"STR":0,"DEX":2,"CON":0,"INT":0,"WIS":0,"CHA":0}',
        'Kind and curious; tend toward lawful good communities.',
        'Mature at 20 and live into the middle of the second century.',
        'About 3 feet tall and ~40 pounds.',
        'You can speak, read, and write Common and Halfling.',
        ARRAY['Common','Halfling'],
        '[{"name":"Lucky","desc":"When you roll a 1 on an attack roll, ability check, or saving throw, reroll the die."},{"name":"Brave","desc":"Advantage on saves against being frightened."},{"name":"Halfling Nimbleness","desc":"Move through the space of any creature that is of a size larger than yours."}]',
        '[{"index":"lightfoot-halfling","name":"Lightfoot Halfling","ability_bonuses":{"CHA":1},"traits":[{"name":"Naturally Stealthy","desc":"Can attempt to hide behind creatures at least one size larger."}]},{"index":"stout-halfling","name":"Stout Halfling","ability_bonuses":{"CON":1},"traits":[{"name":"Stout Resilience","desc":"Advantage on saves vs. poison; resistance to poison damage."}]}]'
      ),
      (
        'human','Human','Medium',30,'{"STR":1,"DEX":1,"CON":1,"INT":1,"WIS":1,"CHA":1}',
        'No typical alignment; the best and worst are found among humans.',
        'Reach adulthood in late teens and live less than a century.',
        'Varied in height and build as widely as their cultures.',
        'You can speak, read, and write Common and one extra language of your choice.',
        ARRAY['Common'],
        '[]',
        '[]'
      ),
      (
        'tiefling','Tiefling','Medium',30,'{"STR":0,"DEX":0,"CON":0,"INT":1,"WIS":0,"CHA":2}',
        'Often distrusted; many adopt lawful or chaotic extremes; not inherently evil.',
        'Mature at the same rate as humans but live a few years longer.',
        'Similar to humans in size but with infernal feature.',
        'You can speak, read, and write Common and Infernal.',
        ARRAY['Common','Infernal'],
        '[{"name":"Darkvision","desc":"60 ft."},{"name":"Hellish Resistance","desc":"Resistance to fire damage."},{"name":"Infernal Legacy","desc":"You know thaumaturgy; gain hellish rebuke and darkness at higher levels (CHA)."}]',
        '[]'
      )
    `);
    console.log('✅ Species seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding species: ', err);
  }
}

seedSpecies();