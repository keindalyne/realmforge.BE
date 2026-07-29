// seedDeitiesBatch1.js
import db from '../../client.js';

export async function seedDeities() {
  try {
    await db.query('TRUNCATE deities RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO deities (index, name, alignment, domain, description) VALUES
      ('bahamut','Bahamut','Lawful Good',
         ARRAY['Protection','Justice','Dragon','Life'],
         ARRAY['Platinum Dragon, god of justice and good dragons']),
      ('tiamat','Tiamat','Lawful Evil',
         ARRAY['Greed','Trickery','Dragon'],
         ARRAY['Five‑headed queen of evil dragons']),
      ('io','Io','Neutral',
         ARRAY['Balance','Creation','Dragon'],
         ARRAY['Also called Asgorath, creator of dragonkind']),
      ('astilabor','Astilabor','Neutral',
         ARRAY['Wealth','Acquisitiveness','Dragon'],
         ARRAY['Goddess of greed and dragon wealth']),
      ('hlal','Hlal','Neutral Good',
         ARRAY['Joy','Inspiration','Dragon'],
         ARRAY['Goddess of humor and storytelling']),
      ('lendys','Lendys','Lawful',
         ARRAY['Justice','Balance','Dragon'],
         ARRAY['Goddess of justice among dragons']),
      ('tamara','Tamara','Neutral Good',
         ARRAY['Mercy','Life','Dragon'],
         ARRAY['Goddess of forgiveness and healing']),
      ('corellon-larethian','Corellon Larethian','Chaotic Good',
         ARRAY['Magic','Art','Elven','Arcana'],
         ARRAY['Elven creator deity of magic and arts']),
      ('moradin','Moradin','Lawful Good',
         ARRAY['Forge','Creation','Dwarven'],
         ARRAY['Dwarven god of smithing and creation']),
      ('gruumsh','Gruumsh','Chaotic Evil',
         ARRAY['War','Conquest','Orc'],
         ARRAY['One‑eyed chief deity of the orcs']),
      ('lolth','Lolth','Chaotic Evil',
         ARRAY['Trickery','Deception','Spider','Drow'],
         ARRAY['Drow spider queen and goddess of chaos']),
      ('eilistraee','Eilistraee','Chaotic Good',
         ARRAY['Beauty','Freedom','Moon','Drow'],
         ARRAY['Goddess of song, dance, and moonlit freedom']),
      ('ioun','Ioun','Neutral',
         ARRAY['Knowledge','Skill','Magic'],
         ARRAY['Goddess of knowledge, skill, and prophecy']),
      ('boccob','Boccob','Neutral',
         ARRAY['Arcana','Knowledge','Balance'],
         ARRAY['God of magic, foresight, and balance']),
      ('nerull','Nerull','Neutral Evil',
         ARRAY['Death','Decay'],
         ARRAY['God of death and the undead']),
      ('heironeous','Heironeous','Lawful Good',
         ARRAY['Valor','Justice','War'],
         ARRAY['God of chivalry, justice, and valor']),
      ('pholtus','Pholtus','Lawful Good',
         ARRAY['Light','Law','Sun'],
         ARRAY['God of light, law, and order']),
      ('rao','Rao','Neutral Good',
         ARRAY['Peace','Protection','Restoration'],
         ARRAY['God of serenity, peace, and reason']),
      ('celestian','Celestian','Neutral',
         ARRAY['Stars','Magic','Oath'],
         ARRAY['God of stars, navigation, and oaths']),
      ('elonna','Ehlonna','Neutral Good',
         ARRAY['Nature','Fertility','Forests'],
         ARRAY['Goddess of forests, flora, and fertility']),
      ('pelor','Pelor','Neutral Good',
         ARRAY['Sun','Healing','Justice'],
         ARRAY['God of the sun, healing, and agriculture']),
      ('st-cuthbert','Saint Cuthbert','Lawful Neutral',
         ARRAY['Zeal','Wisdom','Justice'],
         ARRAY['God of common sense, zeal, and retribution']),
      ('olidammara','Olidammara','Chaotic Neutral',
         ARRAY['Luck','Music','Roguery'],
         ARRAY['Trickster god of revelry and rogues']),
      ('erythnul','Erythnul','Chaotic Evil',
         ARRAY['Slaughter','Envy','Chaos'],
         ARRAY['God of slaughter, envy, and chaos']),
      ('fharlanghn','Fharlanghn','Neutral',
         ARRAY['Travel','Luck','Distance'],
         ARRAY['God of travel, horizons, and luck']),
      ('hextor','Hextor','Lawful Evil',
         ARRAY['War','Discord','Oppression'],
         ARRAY['God of war, discord, mass slaughter']),
      ('kord','Kord','Chaotic Good',
         ARRAY['Athletics','Strength','Storm'],
         ARRAY['God of strength, athletics, storms, and competition']),
      ('stataurus','St. Cuthbert','Lawful Neutral',
         ARRAY['Zeal','Judgment'],
         ARRAY['God of retribution and common sense']),  -- duplicate? remove accordingly
      ('vecna','Vecna','Neutral Evil',
         ARRAY['Knowledge','Secrets','Undeath'],
         ARRAY['Lich‑god of secrets, necromancy, and undeath']),
      ('wee-jas','Wee Jas','Lawful Neutral',
         ARRAY['Magic','Death','Protection'],
         ARRAY['Goddess of magic, death, vanity, and law']),
      ('bane','Bane','Lawful Evil',
         ARRAY['War','Tyranny','Fear'],
         ARRAY['God of tyranny, fear, and conquest']),
      ('lathander','Lathander','Neutral Good',
         ARRAY['Life','Light','Renewal'],
         ARRAY['God of dawn, birth, and renewal']),
      ('torm','Torm','Lawful Good',
         ARRAY['Duty','Law','War'],
         ARRAY['God of duty, loyalty, and righteousness']),
      ('tyr','Tyr','Lawful Good',
         ARRAY['Justice','War','Law'],
         ARRAY['God of justice and lawful valor']),
      ('mystra','Mystra','Neutral Good',
         ARRAY['Magic','Knowledge','Weave'],
         ARRAY['Goddess of magic, the Weave, and arcane knowledge']),
      ('selune','Selûne','Chaotic Good',
         ARRAY['Moon','Light','Navigation'],
         ARRAY['Goddess of the moon, stars, and guidance']),
      ('shar','Shar','Neutral Evil',
         ARRAY['Darkness','Loss','Secrets'],
         ARRAY['Goddess of darkness, loss, and secrets']),
      ('tempus','Tempus','Neutral',
         ARRAY['War','Honor','Battle'],
         ARRAY['God of war, valor, and honor']),
      ('tymora','Tymora','Chaotic Good',
         ARRAY['Luck','Good Fortune','Adventure'],
         ARRAY['Goddess of luck, good fortune, and bold action']),
         ('beory','Beory','Neutral',
        ARRAY['Nature','Life','Earth'],
        ARRAY['Oerth Mother, goddess of nature and the planet itself']
      ),
      ('beltar','Beltar','Chaotic Evil',
        ARRAY['Hate','Greed','Caverns'],
        ARRAY['Goddess of malice, caves, and pits; worshipped by derro and evil dwarves']
      ),
      ('berei','Berei','Neutral Good',
        ARRAY['Home','Community','Agriculture'],
        ARRAY['Goddess of home life and agriculture, often revered by common folk']
      ),
      ('daern','Daern','Lawful Neutral',
        ARRAY['Defense','Fortification','Protection'],
        ARRAY['Hero‑deity of defense and fortresses']
      ),
      ('delleb','Delleb','Lawful Good',
        ARRAY['Knowledge','Reason','Scholarship'],
        ARRAY['God of reason, intellect, and study']
      ),
      ('ehlonna','Ehlonna','Neutral Good',
        ARRAY['Forests','Fertility','Animals'],
        ARRAY['Goddess of woodland, animals, and fertility']
      ),
      ('erythnul','Erythnul','Chaotic Evil',
        ARRAY['Slaughter','Envy','Chaos'],
        ARRAY['God of hate, envy, slaughter, and panic']
      ),
      ('evard','Evard','Neutral Evil',
        ARRAY['Darkness','Magic','Shadow'],
        ARRAY['Shadowy archmage and demigod of darkness and secrets']
      ),
      ('fhalanghn','Fharlanghn','Neutral',
        ARRAY['Travel','Horizons','Distance'],
        ARRAY['God of roads, travel, and distance']
      ),
      ('geshtai','Geshtai','Neutral Good',
        ARRAY['Water','Wells','Rivers'],
        ARRAY['Goddess of rivers, lakes, and wells']
      ),
      ('hladha','Hlal','Neutral Good',
        ARRAY['Inspiration','Laughter','Storytelling'],
        ARRAY['Goddess of humor, wit, and song']
      ),
      ('incabulos','Incabulos','Chaotic Evil',
        ARRAY['Plague','Disaster','Famine'],
        ARRAY['God of disease, nightmares, and disaster']
      ),
      ('istus','Istus','True Neutral',
        ARRAY['Fate','Destiny','Time'],
        ARRAY['Goddess of fate and destiny, spinner of life’s thread']
      ),
      ('jascar','Jascar','Lawful Good',
        ARRAY['Hills','Mountains','Earth'],
        ARRAY['God of hills, mountains, and mines']
      ),
      ('johydee','Johydee','Chaotic Good',
        ARRAY['Invention','Masks','Revelation'],
        ARRAY['Hero‑deity of deception, disguise, and liberation from tyranny']
      ),
      ('kelanen','Kelanen','Chaotic Neutral',
        ARRAY['Swords','Duels','Skill'],
        ARRAY['Hero‑deity of swords and swordplay']
      ),
      ('kurell','Kurell','Chaotic Neutral',
        ARRAY['Jealousy','Revenge','Thievery'],
        ARRAY['God of betrayal, jealousy, and lost love']
      ),
      ('laryssa','Loryssa','Neutral Good',
        ARRAY['Poetry','Music','Creativity'],
        ARRAY['Hero‑deity of artistic inspiration and performance']
      ),
      ('mayahene','Mayaheine','Lawful Good',
        ARRAY['Protection','Valor','Justice'],
        ARRAY['Paladin‑like demigoddess of protection and righteous battle']
      ),
      ('mouqol','Mouqol','Neutral',
        ARRAY['Trade','Negotiation','Balance'],
        ARRAY['God of trade, negotiation, and value']
      ),
      ('myhriss','Myhriss','Neutral Good',
        ARRAY['Love','Beauty','Characterisma'],
        ARRAY['Goddess of beauty and romantic love']
      ),
      ('nerull','Nerull','Neutral Evil',
        ARRAY['Death','Undeath'],
        ARRAY['God of death and the grave, worshipped by necromancers']
      ),
      ('norebo','Norebo','Chaotic Neutral',
        ARRAY['Luck','Risk','Gambling'],
        ARRAY['God of luck, chance, and daring acts']
      ),
      ('obad-hai','Obad-Hai','True Neutral',
        ARRAY['Nature','Balance','Seasons'],
        ARRAY['Shalm, god of nature and the wilderness']
      ),
      ('pholtus','Pholtus','Lawful Neutral',
        ARRAY['Law','Sun','Order'],
        ARRAY['God of unbending law, sun, and light']
      ),
      ('pyrallis','Pyremius','Neutral Evil',
        ARRAY['Fire','Murder','Destruction'],
        ARRAY['God of fire, murder, and poison']
      ),
      ('ralishaz','Ralishaz','Chaotic Neutral',
        ARRAY['Madness','Misfortune','Chance'],
        ARRAY['God of insanity, chaos, and unpredictable luck']
      ),
      ('rudd','Rudd','Chaotic Good',
        ARRAY['Luck','Skill','Chance'],
        ARRAY['Hero‑deity of luck, chance, and physical skill']
      ),
      ('saint-cuthbert','Saint Cuthbert','Lawful Neutral',
        ARRAY['Retribution','Zeal','Common Sense'],
        ARRAY['God of retribution, practical wisdom, and divine wrath']
      ),
      ('stern-alia','Stern Alia','Lawful Neutral',
        ARRAY['Motherhood','Honor','Piety'],
        ARRAY['Goddess of motherhood and loyalty, revered in Almor and Aerdy']
      ),
      ('trithereon','Trithereon','Chaotic Good',
        ARRAY['Liberty','Retribution','Individuality'],
        ARRAY['God of individuality, liberty, and vengeance']
      ),
      ('tyr','Tyr','Lawful Good',
        ARRAY['Justice','Order','Courage'],
        ARRAY['God of justice and heroic sacrifice (shared from FR)']
      ),
      ('ulaa','Ulaa','Lawful Good',
        ARRAY['Hills','Gems','Mining'],
        ARRAY['Goddess of gems, hills, and mining; revered by dwarves and gnomes']
      ),
      ('vecna','Vecna','Neutral Evil',
        ARRAY['Secrets','Magic','Undeath'],
        ARRAY['Archlich turned god of secrets and forbidden knowledge']
      ),
      ('velnius','Velnius','Neutral',
        ARRAY['Sky','Weather','Storm'],
        ARRAY['Oeridian god of sky and weather']
      ),
      ('xerbo','Xerbo','Neutral Evil',
        ARRAY['Sea','Trade','Weather'],
        ARRAY['Sea god of wealth, currents, and business']
      ),
      ('zilchus','Zilchus','Lawful Neutral',
        ARRAY['Power','Money','Influence'],
        ARRAY['God of prestige, money, business, and politics']),
        ('beory','Beory','Neutral',
        ARRAY['Nature','Life','Earth'],
        ARRAY['Oerth Mother, goddess of nature and the planet itself']
      ),
      ('beltar','Beltar','Chaotic Evil',
        ARRAY['Hate','Greed','Caverns'],
        ARRAY['Goddess of malice, caves, and pits; worshipped by derro and evil dwarves']
      ),
      ('berei','Berei','Neutral Good',
        ARRAY['Home','Community','Agriculture'],
        ARRAY['Goddess of home life and agriculture, often revered by common folk']
      ),
      ('daern','Daern','Lawful Neutral',
        ARRAY['Defense','Fortification','Protection'],
        ARRAY['Hero‑deity of defense and fortresses']
      ),
      ('delleb','Delleb','Lawful Good',
        ARRAY['Knowledge','Reason','Scholarship'],
        ARRAY['God of reason, intellect, and study']
      ),
      ('ehlonna','Ehlonna','Neutral Good',
        ARRAY['Forests','Fertility','Animals'],
        ARRAY['Goddess of woodland, animals, and fertility']
      ),
      ('erythnul','Erythnul','Chaotic Evil',
        ARRAY['Slaughter','Envy','Chaos'],
        ARRAY['God of hate, envy, slaughter, and panic']
      ),
      ('evard','Evard','Neutral Evil',
        ARRAY['Darkness','Magic','Shadow'],
        ARRAY['Shadowy archmage and demigod of darkness and secrets']
      ),
      ('fhalanghn','Fharlanghn','Neutral',
        ARRAY['Travel','Horizons','Distance'],
        ARRAY['God of roads, travel, and distance']
      ),
      ('geshtai','Geshtai','Neutral Good',
        ARRAY['Water','Wells','Rivers'],
        ARRAY['Goddess of rivers, lakes, and wells']
      ),
      ('hladha','Hlal','Neutral Good',
        ARRAY['Inspiration','Laughter','Storytelling'],
        ARRAY['Goddess of humor, wit, and song']
      ),
      ('incabulos','Incabulos','Chaotic Evil',
        ARRAY['Plague','Disaster','Famine'],
        ARRAY['God of disease, nightmares, and disaster']
      ),
      ('istus','Istus','True Neutral',
        ARRAY['Fate','Destiny','Time'],
        ARRAY['Goddess of fate and destiny, spinner of life’s thread']
      ),
      ('jascar','Jascar','Lawful Good',
        ARRAY['Hills','Mountains','Earth'],
        ARRAY['God of hills, mountains, and mines']
      ),
      ('johydee','Johydee','Chaotic Good',
        ARRAY['Invention','Masks','Revelation'],
        ARRAY['Hero‑deity of deception, disguise, and liberation from tyranny']
      ),
      ('kelanen','Kelanen','Chaotic Neutral',
        ARRAY['Swords','Duels','Skill'],
        ARRAY['Hero‑deity of swords and swordplay']
      ),
      ('kurell','Kurell','Chaotic Neutral',
        ARRAY['Jealousy','Revenge','Thievery'],
        ARRAY['God of betrayal, jealousy, and lost love']
      ),
      ('laryssa','Loryssa','Neutral Good',
        ARRAY['Poetry','Music','Creativity'],
        ARRAY['Hero‑deity of artistic inspiration and performance']
      ),
      ('mayahene','Mayaheine','Lawful Good',
        ARRAY['Protection','Valor','Justice'],
        ARRAY['Paladin‑like demigoddess of protection and righteous battle']
      ),
      ('mouqol','Mouqol','Neutral',
        ARRAY['Trade','Negotiation','Balance'],
        ARRAY['God of trade, negotiation, and value']
      ),
      ('myhriss','Myhriss','Neutral Good',
        ARRAY['Love','Beauty','Characterisma'],
        ARRAY['Goddess of beauty and romantic love']
      ),
      ('nerull','Nerull','Neutral Evil',
        ARRAY['Death','Undeath'],
        ARRAY['God of death and the grave, worshipped by necromancers']
      ),
      ('norebo','Norebo','Chaotic Neutral',
        ARRAY['Luck','Risk','Gambling'],
        ARRAY['God of luck, chance, and daring acts']
      ),
      ('obad-hai','Obad-Hai','True Neutral',
        ARRAY['Nature','Balance','Seasons'],
        ARRAY['Shalm, god of nature and the wilderness']
      ),
      ('pholtus','Pholtus','Lawful Neutral',
        ARRAY['Law','Sun','Order'],
        ARRAY['God of unbending law, sun, and light']
      ),
      ('pyrallis','Pyremius','Neutral Evil',
        ARRAY['Fire','Murder','Destruction'],
        ARRAY['God of fire, murder, and poison']
      ),
      ('ralishaz','Ralishaz','Chaotic Neutral',
        ARRAY['Madness','Misfortune','Chance'],
        ARRAY['God of insanity, chaos, and unpredictable luck']
      ),
      ('rudd','Rudd','Chaotic Good',
        ARRAY['Luck','Skill','Chance'],
        ARRAY['Hero‑deity of luck, chance, and physical skill']
      ),
      ('saint-cuthbert','Saint Cuthbert','Lawful Neutral',
        ARRAY['Retribution','Zeal','Common Sense'],
        ARRAY['God of retribution, practical wisdom, and divine wrath']
      ),
      ('stern-alia','Stern Alia','Lawful Neutral',
        ARRAY['Motherhood','Honor','Piety'],
        ARRAY['Goddess of motherhood and loyalty, revered in Almor and Aerdy']
      ),
      ('trithereon','Trithereon','Chaotic Good',
        ARRAY['Liberty','Retribution','Individuality'],
        ARRAY['God of individuality, liberty, and vengeance']
      ),
      ('tyr','Tyr','Lawful Good',
        ARRAY['Justice','Order','Courage'],
        ARRAY['God of justice and heroic sacrifice (shared from FR)']
      ),
      ('ulaa','Ulaa','Lawful Good',
        ARRAY['Hills','Gems','Mining'],
        ARRAY['Goddess of gems, hills, and mining; revered by dwarves and gnomes']
      ),
      ('vecna','Vecna','Neutral Evil',
        ARRAY['Secrets','Magic','Undeath'],
        ARRAY['Archlich turned god of secrets and forbidden knowledge']
      ),
      ('velnius','Velnius','Neutral',
        ARRAY['Sky','Weather','Storm'],
        ARRAY['Oeridian god of sky and weather']
      ),
      ('xerbo','Xerbo','Neutral Evil',
        ARRAY['Sea','Trade','Weather'],
        ARRAY['Sea god of wealth, currents, and business']
      ),
      ('zilchus','Zilchus','Lawful Neutral',
        ARRAY['Power','Money','Influence'],
        ARRAY['God of prestige, money, business, and politics']),

    -- Halfling Pantheon
      ('yondalla','Yondalla','Lawful Good',
        ARRAY['Community','Protection','Harvest'],
        ARRAY['Halfling protector and creator goddess, venerated for fertility and safety.']
      ),
      ('brandobaris','Brandobaris','Chaotic Neutral',
        ARRAY['Trickery','Luck','Exploration'],
        ARRAY['Halfling rogue-god of luck, adventure, stealth, and boundary-crossing.']
      ),
      ('sheela-peryroyl','Sheela Peryroyl','Neutral Good',
        ARRAY['Growth','Nature','Plants'],
        ARRAY['Halfling goddess of agriculture, growth, and peace.']
      ),

      -- Gnome Pantheon
      ('garl-glittergold','Garl Glittergold','Neutral Good',
        ARRAY['Trickery','Luck','Protection'],
        ARRAY['Chief gnome deity of laughter, trickery, and protection.']
      ),
      ('fizban','Fizban','Chaotic Neutral',
        ARRAY['Wisdom','Magic','Knowledge'],
        ARRAY['Worshiped as an avatar of Bahamut by some gnomes, clever and whimsical.']
      ),

      -- Dwarf Pantheon (Moradin excluded — already seeded)
      ('berronar-truesilver','Berronar Truesilver','Lawful Good',
        ARRAY['Family','Home','Protection'],
        ARRAY['Goddess of hearth, family, and safety.']
      ),
      ('vergadain','Vergadain','Neutral',
        ARRAY['Wealth','Trade','Shadows'],
        ARRAY['Dwarf deity of wealth, trade, and luck—notably for caravan guardians.']
      ),

      -- Elf Pantheon
      ('corellon-larethian','Corellon Larethian','Chaotic Good',
        ARRAY['Magic','Art','Elves','Protection'],
        ARRAY['Elven All-Father, god of magic, beauty, and artistry.']
      ),
      ('sehanine-moonbow','Sehanine Moonbow','Chaotic Good',
        ARRAY['Moon','Mystery','Death'],
        ARRAY['Elven goddess of the moon, death, and transition into the afterlife.']
      ),

      -- Orc Pantheon
      ('gruumsh','Gruumsh','Chaotic Evil',
        ARRAY['War','Conquest','Strength'],
        ARRAY['Chief orc deity of war and conquest, creator of the orc species.']
      ),
      ('lloth','Lolth','Chaotic Evil',
        ARRAY['Chaos','Trickery','Drow'],
        ARRAY['Spider Queen and goddess of darkness, favored by the drow.']
      ),
      ('ilneval','Ilneval','Chaotic Evil',
        ARRAY['War','Hatred','Blood'],
        ARRAY['Orc deity of vengeance and martial prowess.']
      ),

      -- Goblinoid Pantheon
      ('maglubiyet','Maglubiyet','Lawful Evil',
        ARRAY['War','Power','Glory'],
        ARRAY['Chief goblinoid god of war and domination.']
      ),

      -- Giant Deity
      ('annam-allfather','Annam All-Father','Neutral',
        ARRAY['Creation','Giants','Wisdom'],
        ARRAY['Mythical progenitor of all giants, embodying wisdom and strength.']
      ),

      -- Yuan-Ti Deity
      ('sseth','Sseth','Neutral Evil',
        ARRAY['Venom','Poison','Transformation'],
        ARRAY['Creator-god of the yuan-ti, associated with venom and tyranny.']
      ),
      -- Minor Nature & Spirit Deities
      ('ubtao','Ubtao','True Neutral',
        ARRAY['Nature','Dinosaurs','Maze'],
        ARRAY['Chultan god of jungles and the guardian of the dinosaurs.']
      ),
      ('shaundakul','Shaundakul','Chaotic Good',
        ARRAY['Travel','Exploration','Wind'],
        ARRAY['God of travelers and explorers, known as the Rider of the Winds.']
      ),
      ('hoar','Hoar','Lawful Neutral',
        ARRAY['Vengeance','Retribution','Justice'],
        ARRAY['God of poetic justice, retribution, and the ironic reversal of fate.']
      ),
      ('mielikki','Mielikki','Neutral Good',
        ARRAY['Forests','Rangers','Healing'],
        ARRAY['Goddess of the forest and patron of rangers and unicorns.']
      ),
      ('silvanus','Silvanus','Neutral',
        ARRAY['Nature','Wilds','Balance'],
        ARRAY['God of wild nature, balance, and the cycle of growth and decay.']
      ),

      -- Planar & Elemental Powers
      ('akadi','Akadi','Neutral',
        ARRAY['Air','Change','Motion'],
        ARRAY['Elemental Air Primordial, embodiment of movement and freedom.']
      ),
      ('grumbar','Grumbar','Neutral',
        ARRAY['Earth','Stability','Tradition'],
        ARRAY['Elemental Earth Primordial, associated with resistance to change.']
      ),
      ('istishia','Istishia','Neutral',
        ARRAY['Water','Flexibility','Adaptation'],
        ARRAY['Elemental Water Primordial, embodiment of calm and chaos.']
      ),
      ('kossuth','Kossuth','Neutral',
        ARRAY['Fire','Passion','Purification'],
        ARRAY['Elemental Fire Primordial, worshiped by fire cults and purifiers.']
      ),

      -- Cult & Obscure Powers
      ('dendar','Dendar the Night Serpent','Chaotic Evil',
        ARRAY['Destruction','Sleep','Nightmares'],
        ARRAY['Primordial serpent who devours nightmares and threatens cosmic annihilation.']
      ),
      ('moander','Moander','Chaotic Evil',
        ARRAY['Decay','Corruption','Plant'],
        ARRAY['Rotting deity of corruption and defilement, long banished.']
      ),
      ('myrkul','Myrkul','Neutral Evil',
        ARRAY['Death','Decay','Fear'],
        ARRAY['The Lord of Bones, god of death and the grave before Kelemvor.']
      ),
      ('leira','Leira','Chaotic Neutral',
        ARRAY['Illusion','Mystery','Deception'],
        ARRAY['The Lady of the Mists, goddess of illusion and falsehood.']
      ),

      -- Demipowers & Ascended Mortals
      ('azuth','Azuth','Lawful Neutral',
        ARRAY['Wizards','Arcane','Knowledge'],
        ARRAY['God of wizards, formerly a mortal and servant of Mystra.']
      ),
      ('savras','Savras','Lawful Neutral',
        ARRAY['Divination','Truth','Magic'],
        ARRAY['God of divination and fate, always calm and composed.']
      ),
      ('velsharoon','Velsharoon','Neutral Evil',
        ARRAY['Necromancy','Undeath','Secrets'],
        ARRAY['God of liches and necromancers, obsessed with magical secrets.']
      ),
      ('red-knight','Red Knight','Lawful Neutral',
        ARRAY['Strategy','War','Planning'],
        ARRAY['Tactical goddess of battle, serves under Tempus as a planner.']
      );
    `);
    console.log('✅ Deities seeded');
  } catch (err) {
    console.error('❌ seedDeitieserror', err);
  }
}