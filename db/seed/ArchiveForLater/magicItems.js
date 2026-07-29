import db from '../../client.js';

export async function seedMagicItems() {
  try {
    await db.query(`
        INSERT INTO magic_items (index, name, type, rarity, requires_attunement, description) VALUES
        ('adamantine-armor', 'Adamantine Armor', 'Armor', 'Uncommon', false, ARRAY[
            'This suit of armor is reinforced with adamantine, one of the hardest substances in existence.',
            'While you’re wearing it, any critical hit against you becomes a normal hit.'
        ]),
        ('alchemy-jug', 'Alchemy Jug', 'Wondrous Item', 'Uncommon', false, ARRAY[
            'This ceramic jug appears to hold a gallon of liquid and weighs 12 pounds whether full or empty.',
            'You can use an action to name one liquid from a predefined list (e.g., beer, honey, acid).',
            'The jug produces that liquid and can be poured out up to a certain limit per day.'
        ]),
        ('bag-of-holding', 'Bag of Holding', 'Wondrous Item', 'Uncommon', false, ARRAY[
            'This bag has an interior space considerably larger than its outside dimensions.',
            'It can hold up to 500 pounds, not exceeding a volume of 64 cubic feet.',
            'The bag always weighs 15 pounds, regardless of contents.'
        ]),
        ('boots-of-elvenkind', 'Boots of Elvenkind', 'Wondrous Item', 'Uncommon', false, ARRAY[
            'While you wear these boots, your steps make no sound, regardless of the surface.',
            'You also have advantage on Dexterity (Stealth) checks that rely on moving silently.'
        ]),
        ('cloak-of-protection', 'Cloak of Protection', 'Wondrous Item', 'Uncommon', true, ARRAY[
            'You gain a +1 bonus to AC and saving throws while wearing this cloak.'
        ]),
        ('driftglobe', 'Driftglobe', 'Wondrous Item', 'Uncommon', false, ARRAY[
            'This small sphere of thick glass weighs 1 pound.',
            'If you speak its command word, it sheds bright light in a 60-foot radius and dim light for an additional 60 feet.',
            'You can also speak a second command word to make the globe float and follow you.'
        ]),
        ('gauntlets-of-ogre-power', 'Gauntlets of Ogre Power', 'Wondrous Item', 'Uncommon', true, ARRAY[
            'Your Strength score becomes 19 while you wear these gauntlets.',
            'They have no effect if your Strength is already 19 or higher.'
        ]),
        ('hat-of-disguise', 'Hat of Disguise', 'Wondrous Item', 'Uncommon', true, ARRAY[
            'While wearing this hat, you can use an action to cast the disguise self spell at will.',
            'The spell ends if the hat is removed.'
        ]),
        ('immovable-rod', 'Immovable Rod', 'Rod', 'Uncommon', false, ARRAY[
            'This flat iron rod has a button on one end.',
            'You can press the button to fix the rod in place.',
            'It remains suspended in space even if it is not supported, holding up to 8,000 pounds of weight.'
        ]),
        ('javelin-of-lightning', 'Javelin of Lightning', 'Weapon (Javelin)', 'Uncommon', false, ARRAY[
            'This magic javelin can transform into a bolt of lightning.',
            'When you throw it and speak its command word, it turns into a lightning bolt 5 feet wide and 120 feet long.',
            'Each creature in the line must make a DC 13 Dexterity saving throw or take 4d6 lightning damage on a failed save, or half as much on a successful one.'
        ]),
        ('armor-of-resistance', 'Armor of Resistance', 'Armor', 'Rare', true, ARRAY[
            'You have resistance to one type of damage while wearing this armor.',
            'The damage type is chosen by the DM or randomly determined.'
        ]),
        ('arrow-catching-shield', 'Shield of Arrow Catching', 'Armor (shield)', 'Rare', true, ARRAY[
            'While holding this shield, you gain a +2 bonus to AC against ranged attacks.',
            'In addition, whenever a creature within 5 feet of you is targeted by a ranged attack, you can use your reaction to become the target instead.'
        ]),
        ('bag-of-tricks', 'Bag of Tricks', 'Wondrous item', 'Uncommon', false, ARRAY[
            'This ordinary bag, made from gray, rust, or tan cloth, appears empty.',
            'Reaching inside the bag, however, reveals the presence of a small, fuzzy object.',
            'You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet.',
            'When the object lands, it transforms into a creature determined by the bag’s color and a random roll.'
        ]),
        ('bane-weapon', 'Weapon of Bane', 'Weapon', 'Rare', true, ARRAY[
            'You gain a +1 bonus to attack and damage rolls made with this magic weapon.',
            'When you hit a creature of a specific type (determined by the weapon) with it, that creature takes an extra 2d6 damage.'
        ]),
        ('bead-of-force', 'Bead of Force', 'Wondrous item', 'Rare', false, ARRAY[
            'This small black sphere measures about 3/4 inch in diameter and weighs an ounce.',
            'You can use an action to throw the bead up to 60 feet. It explodes on impact and is destroyed.',
            'Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d10 force damage and be encapsulated in a resilient sphere for 1 minute.'
        ]),
        ('belt-of-dwarvenkind', 'Belt of Dwarvenkind', 'Wondrous item', 'Rare', true, ARRAY[
            'While wearing this belt, you gain advantage on Characterisma (Persuasion) checks made to interact with dwarves.',
            'You have a 50 percent chance each day at dawn of growing a full beard if you’re capable of growing one.',
            'In addition, you gain various resistances and increases to Constitution checks and saving throws.'
        ]),
        ('belt-of-giant-strength', 'Belt of Giant Strength (Hill Giant)', 'Wondrous item', 'Rare', true, ARRAY[
            'While wearing this belt, your Strength score changes to a score granted by the belt.',
            'The belt requires attunement and grants Strength scores from 21 to 29 depending on the giant type.'
        ]),
        ('boots-of-elvenkind', 'Boots of Elvenkind', 'Wondrous item', 'Uncommon', false, ARRAY[
            'While you wear these boots, your steps make no sound, regardless of the surface you are moving across.',
            'You also have advantage on Dexterity (Stealth) checks that rely on moving silently.'
        ]),
        ('boots-of-speed', 'Boots of Speed', 'Wondrous item', 'Rare', true, ARRAY[
            'While you wear these boots, you can use a bonus action to click the boots’ heels together.',
            'If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage.',
            'You can use the boots for up to 10 minutes, all at once or in shorter increments, each time using a bonus action.'
        ]),
        ('boots-of-striding-and-springing', 'Boots of Striding and Springing', 'Wondrous item', 'Uncommon', true, ARRAY[
            'While you wear these boots, your walking speed becomes 30 feet, unless your speed is higher.',
            'Your speed isn’t reduced if you are encumbered or wearing heavy armor.',
            'In addition, you can jump three times the normal distance, though you can’t jump farther than your remaining movement would allow.'
        ]),
        ('cloak-of-the-manta-ray', 'Cloak of the Manta Ray', 'wondrous item', 'uncommon', false, ARRAY[
            'While wearing this cloak with its hood up, you can breathe underwater and have a swimming speed of 60 feet.'
        ]),
        ('driftglobe', 'Driftglobe', 'wondrous item', 'uncommon', false, ARRAY[
            'This small sphere of glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the light or daylight spell.',
            'Once used, the daylight effect can’t be used again until the next dawn.'
        ]),
        ('gauntlets-of-ogre-power', 'Gauntlets of Ogre Power', 'wondrous item', 'uncommon', true, ARRAY[
            'Your Strength score is 19 while you wear these gauntlets. They have no effect if your Strength is already 19 or higher without them.'
        ]),
        ('gloves-of-swimming-and-climbing', 'Gloves of Swimming and Climbing', 'wondrous item', 'uncommon', true, ARRAY[
            'While wearing these gloves, climbing and swimming don’t cost you extra movement.',
            'You also gain a +5 bonus to Strength (Athletics) checks made to climb or swim.'
        ]),
        ('hat-of-disguise', 'Hat of Disguise', 'wondrous item', 'uncommon', true, ARRAY[
            'While wearing this hat, you can use an action to cast the disguise self spell at will.',
            'The spell ends if the hat is removed.'
        ]),
        ('helm-of-comprehending-language', 'Helm of Comprehending Language', 'wondrous item', 'uncommon', false, ARRAY[
            'While wearing this helm, you can use an action to cast the comprehend language spell at will.'
        ]),
        ('immovable-rod', 'Immovable Rod', 'wondrous item', 'uncommon', false, ARRAY[
            'This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place.',
            'It can hold up to 8,000 pounds of weight.'
        ]),
        ('javelin-of-lightning', 'Javelin of Lightning', 'weapon (javelin)', 'uncommon', false, ARRAY[
            'This javelin becomes a magic lightning bolt when thrown and a command word is spoken.',
            'Each creature in a line from you to the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save.'
        ]),
        ('lantern-of-revealing', 'Lantern of Revealing', 'wondrous item', 'uncommon', false, ARRAY[
            'While lit, this hooded lantern burns for 6 hours on one pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.',
            'Invisible creatures and objects are visible as long as they are in the lantern’s bright light.'
        ]),
        ('mariner-s-armor', 'Mariner’s Armor', 'armor (any medium)', 'uncommon', false, ARRAY[
            'While wearing this armor, you have a swimming speed equal to your walking speed.',
            'You also float on the surface if you fall unconscious.'
        ]),
        ('helm-of-telepathy', 'Helm of Telepathy', 'Wondrous Item', 'Uncommon', true, ARRAY[
            'While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it.',
            'As long as you maintain concentration, you can use a bonus action to send a telepathic message to a creature whose surface thoughts you are reading.',
            'You can use an action to cast the Suggestion spell (save DC 13) on that creature.',
            'Once used, Suggestion can’t be used again until the next dawn.'
        ]),
        ('horn-of-blasting', 'Horn of Blasting', 'Wondrous Item', 'Rare', false, ARRAY[
            'You can use an action to speak the horn’s command word and then blow the horn.',
            'Each creature in a 30-foot cone must make a DC 15 Constitution saving throw, taking 5d6 thunder damage on a failed save, or half as much on a success.',
            'The horn has a 20% chance to explode when used, dealing 10d6 damage to the blower.'
        ]),
        ('horn-of-valhalla', 'Horn of Valhalla', 'Wondrous Item', 'Rare', false, ARRAY[
            'You can use an action to blow this horn and summon warrior spirits.',
            'The type of horn determines the number and type of warriors summoned.',
            'Once used, it can’t be used again until 7 days have passed.'
        ]),
        ('horseshoes-of-speed', 'Horseshoes of Speed', 'Wondrous Item', 'Rare', false, ARRAY[
            'These iron shoes come in a set of four and can be affixed to the hooves of a horse or similar creature.',
            'The creature’s base walking speed increases by 30 feet.'
        ]),
        ('horseshoes-of-zephyr', 'Horseshoes of a Zephyr', 'Wondrous Item', 'Very Rare', false, ARRAY[
            'These iron shoes enable a horse or similar creature to walk on air as if it were solid ground.',
            'The creature can move at normal speed while in the air but can’t ascend more than 30 feet above the surface.'
        ]),
        ('ibrandlins-brooch', 'Ibrandlin’s Brooch', 'Wondrous Item', 'Rare', true, ARRAY[
            'While wearing this brooch, you have resistance to one damage type of your choice, selected when you attune.',
            'In addition, once per day, you can use your reaction to gain immunity to that damage type until the start of your next turn.'
        ]),
        ('ioun-stone-agility', 'Ioun Stone of Agility', 'Wondrous Item', 'Very Rare', true, ARRAY[
            'While this deep blue crystal orbits your head, your Dexterity score increases by 2, to a maximum of 20.',
            'The stone must be attuned and orbiting to confer its benefit.'
        ]),
        ('ioun-stone-fortitude', 'Ioun Stone of Fortitude', 'Wondrous Item', 'Very Rare', true, ARRAY[
            'Your Constitution score increases by 2, to a maximum of 20, while this marbled scarlet stone orbits your head.'
        ]),
        ('ioun-stone-insight', 'Ioun Stone of Insight', 'Wondrous Item', 'Very Rare', true, ARRAY[
            'Your Wisdom score increases by 2, to a maximum of 20, while this clear crystal orbits your head.'
        ]),
        ('ioun-stone-intellect', 'Ioun Stone of Intellect', 'Wondrous Item', 'Very Rare', true, ARRAY[
            'Your Intelligence score increases by 2, to a maximum of 20, while this blue-white stone orbits your head.'
        ]),
        ('oil-of-etherealness', 'Oil of Etherealness', 'wondrous item', 'rare', false, ARRAY[
            'Beads of this cloudy gray oil form on a vial’s surface when shaken.',
            'As an action, you can apply it to your body or gear to gain the effects of the etherealness spell for 1 hour.'
        ]),
        ('orb-of-direction', 'Orb of Direction', 'wondrous item', 'common', false, ARRAY[
            'While holding this orb, you always know which way is north.'
        ]),
        ('orb-of-time', 'Orb of Time', 'wondrous item', 'uncommon', false, ARRAY[
            'While holding this orb, you can use an action to determine the time of day to the nearest hour.',
            'Once used, this property can’t be used again until the next dawn.'
        ]),
        ('periapt-of-health', 'Periapt of Health', 'wondrous item', 'uncommon', true, ARRAY[
            'You are immune to contracting any disease while attuned to this pendant.',
            'If you are already infected with a disease, the effects are suppressed while you wear it.'
        ]),
        ('periapt-of-proof-against-poison', 'Periapt of Proof Against Poison', 'wondrous item', 'rare', true, ARRAY[
            'You are immune to poison damage and the poisoned condition while wearing this pendant.'
        ]),
        ('periapt-of-wound-closure', 'Periapt of Wound Closure', 'wondrous item', 'uncommon', true, ARRAY[
            'Stabilizes you whenever you are dying at the start of your turn.',
            'Doubles hit points regained from Hit Dice.'
        ]),
        ('philter-of-love', 'Philter of Love', 'potion', 'uncommon', false, ARRAY[
            'The next creature you see within 10 minutes after drinking this potion becomes charactermed by you for 1 hour.',
            'If the target is of a species and gender you are normally attracted to, it regards you as a true love.'
        ]),
        ('pipes-of-haunting', 'Pipes of Haunting', 'wondrous item', 'uncommon', true, ARRAY[
            'You can use an action to play these pipes and create an eerie sound.',
            'Each creature of your choice within 30 feet must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute.',
            'Can be used 3 times per day.'
        ]),
        ('pipes-of-the-sewers', 'Pipes of the Sewers', 'wondrous item', 'uncommon', true, ARRAY[
            'You can use an action to play these pipes and attract or command swarms of rats, depending on your performance.',
            'Used primarily to summon or characterm rat swarms.'
        ]),
        ('plate-armor-of-etherealness', 'Plate Armor of Etherealness', 'armor', 'legendary', true, ARRAY[
            'This magic armor functions as plate armor and allows you to cast the etherealness spell once per day.',
            'Only usable by attuned wearers.'
        ]),
        ('necklace-of-fireballs', 'Necklace of Fireballs', 'wondrous item', 'rare', false, ARRAY[
            'This necklace has beads that detonate as Fireball spell.',
            'You can detach and throw a bead as an action to cast Fireball centered on where it lands.'
        ]),
        ('periapt-of-proof-against-poison', 'Periapt of Proof Against Poison', 'wondrous item', 'rare', true, ARRAY[
            'While wearing this pendant, you are immune to poison damage and the poisoned condition.'
        ]),
        ('ring-of-animal-influence', 'Ring of Animal Influence', 'ring', 'rare', true, ARRAY[
            'This ring has 3 characterges and regains characterges daily at dawn.',
            'You can expend characterges to cast Animal Friendship, Fear (animals only), or Speak with Animals.'
        ]),
        ('ring-of-evasion', 'Ring of Evasion', 'ring', 'rare', true, ARRAY[
            'This ring has 3 characterges. When you fail a Dexterity saving throw, you can use your reaction to expend 1 characterge to succeed instead.',
            'The ring regains 1d3 expended characterges daily at dawn.'
        ]),
        ('ring-of-feather-falling', 'Ring of Feather Falling', 'ring', 'rare', true, ARRAY[
            'When you fall while wearing this ring, you descend slowly and take no damage from falling.',
            'Feather Fall activates automatically without requiring action.'
        ]),
        ('ring-of-free-action', 'Ring of Free Action', 'ring', 'rare', true, ARRAY[
            'While wearing this ring, you are unaffected by difficult terrain and cannot be paralyzed or restrained by magic.'
        ]),
        ('ring-of-mind-shielding', 'Ring of Mind Shielding', 'ring', 'rare', true, ARRAY[
            'While wearing this ring, your thoughts cannot be read, you are immune to magical truth-telling, and you appear as any creature of your choosing to detection spell.',
            'If you die while wearing it, your soul can enter the ring (if it is unoccupied).'
        ]),
        ('ring-of-resistance', 'Ring of Resistance', 'ring', 'rare', true, ARRAY[
            'While wearing this ring, you have resistance to one type of damage.',
            'The DM chooses or allows you to choose the damage type.'
        ]),
        ('ring-of-the-ram', 'Ring of the Ram', 'ring', 'rare', true, ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'While wearing it, you can use an action to expend characterges and unleash a forceful blast (like a ram) that deals force damage and can push creatures or objects.'
        ]),
        ('robe-of-eyes', 'Robe of Eyes', 'wondrous item', 'rare', true, ARRAY[
            'This robe is covered in eyes and grants advantage on Wisdom (Perception) checks relying on sight.',
            'You can see in all directions and have darkvision out to 120 feet.',
            'You can also see invisible creatures and objects as well as into the Ethereal Plane.'
        ]),
        ('ring-of-animal-influence', 'Ring of Animal Influence', 'Ring', 'Rare', true, ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'While wearing the ring, you can use an action to expend 1 characterge to cast Animal Friendship, Fear (animals only), or Speak with Animals.'
        ]),
        ('ring-of-evasion', 'Ring of Evasion', 'Ring', 'Rare', true, ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 characterge to succeed instead.'
        ]),
        ('ring-of-feather-falling', 'Ring of Feather Falling', 'Ring', 'Rare', false, ARRAY[
            'When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.'
        ]),
        ('ring-of-free-action', 'Ring of Free Action', 'Ring', 'Rare', true, ARRAY[
            'While wearing this ring, difficult terrain doesn’t cost extra movement.',
            'Also, magic can’t reduce your speed or cause you to be paralyzed or restrained.'
        ]),
        ('ring-of-invisibility', 'Ring of Invisibility', 'Ring', 'Legendary', true, ARRAY[
            'While wearing this ring, you can turn invisible as an action.',
            'Anything you’re wearing or carrying becomes invisible with you.',
            'You remain invisible until the ring is removed, you attack or cast a spell, or you use a bonus action to end the effect.'
        ]),
        ('ring-of-mind-shielding', 'Ring of Mind Shielding', 'Ring', 'Uncommon', true, ARRAY[
            'While wearing this ring, your thoughts can’t be read, you are immune to magical attempts to determine your alignment or type, and you can’t be compelled to tell the truth.',
            'If you die while wearing the ring, your soul can choose to enter it, remaining there until another creature wears it.'
        ]),
        ('ring-of-protection', 'Ring of Protection', 'Ring', 'Rare', true, ARRAY[
            'While wearing this ring, you gain a +1 bonus to AC and saving throws.'
        ]),
        ('ring-of-regeneration', 'Ring of Regeneration', 'Ring', 'Very Rare', true, ARRAY[
            'While wearing this ring, you regain 1d6 hit points every 10 minutes provided you have at least 1 hit point.',
            'If you lose a body part, the ring causes it to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.'
        ]),
        ('ring-of-resistance', 'Ring of Resistance', 'Ring', 'Rare', true, ARRAY[
            'You have resistance to one damage type while wearing this ring.',
            'The DM chooses the type or determines it randomly.'
        ]),
        ('ring-of-shooting-stars', 'Ring of Shooting Stars', 'Ring', 'Very Rare', true, ARRAY[
            'This ring has 6 characterges and regains 1d6 expended characterges at dawn.',
            'It can be used to cast Faerie Fire or Ball Lightning, or create Shooting Stars as magical projectiles.'
        ]),
        ('ring-of-animal-influence', 'Ring of Animal Influence', 'Ring', 'Rare', true, ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'While wearing the ring, you can use an action to expend 1 characterge to cast Animal Friendship, Fear (animals only), or Speak with Animals.'
        ]),
        ('ring-of-evasion', 'Ring of Evasion', 'Ring', 'Rare', true, ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 characterge to succeed instead.'
        ]),
        ('ring-of-feather-falling', 'Ring of Feather Falling', 'Ring', 'Rare', false, ARRAY[
            'When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.'
        ]),
        ('ring-of-free-action', 'Ring of Free Action', 'Ring', 'Rare', true, ARRAY[
            'While wearing this ring, difficult terrain doesn’t cost extra movement.',
            'Also, magic can’t reduce your speed or cause you to be paralyzed or restrained.'
        ]),
        ('ring-of-invisibility', 'Ring of Invisibility', 'Ring', 'Legendary', true, ARRAY[
            'While wearing this ring, you can turn invisible as an action.',
            'Anything you’re wearing or carrying becomes invisible with you.',
            'You remain invisible until the ring is removed, you attack or cast a spell, or you use a bonus action to end the effect.'
        ]),
        ('ring-of-mind-shielding', 'Ring of Mind Shielding', 'Ring', 'Uncommon', true, ARRAY[
            'While wearing this ring, your thoughts can’t be read, you are immune to magical attempts to determine your alignment or type, and you can’t be compelled to tell the truth.',
            'If you die while wearing the ring, your soul can choose to enter it, remaining there until another creature wears it.'
        ]),
        ('ring-of-protection', 'Ring of Protection', 'Ring', 'Rare', true, ARRAY[
            'While wearing this ring, you gain a +1 bonus to AC and saving throws.'
        ]),
        ('ring-of-regeneration', 'Ring of Regeneration', 'Ring', 'Very Rare', true, ARRAY[
            'While wearing this ring, you regain 1d6 hit points every 10 minutes provided you have at least 1 hit point.',
            'If you lose a body part, the ring causes it to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.'
        ]),
        ('ring-of-resistance', 'Ring of Resistance', 'Ring', 'Rare', true, ARRAY[
            'You have resistance to one damage type while wearing this ring.',
            'The DM chooses the type or determines it randomly.'
        ]),
        ('ring-of-shooting-stars', 'Ring of Shooting Stars', 'Ring', 'Very Rare', true, ARRAY[
            'This ring has 6 characterges and regains 1d6 expended characterges at dawn.',
            'It can be used to cast Faerie Fire or Ball Lightning, or create Shooting Stars as magical projectiles.'
        ]),
        ('saddle-of-the-cavalier', 'Saddle of the Cavalier', 'wondrous item', 'uncommon', false, ARRAY[
            'While in this saddle on a mount, you can’t be dismounted against your will.',
            'Attack rolls against your mount have disadvantage.'
        ]),
        ('scroll-of-protection', 'Scroll of Protection', 'scroll', 'rare', false, ARRAY[
            'This scroll allows you to create an antimagic barrier against one type of creature (like fiends or undead).',
            'The barrier lasts for 5 minutes and pushes the specified creatures away.'
        ]),
        ('sending-stones', 'Sending Stones', 'wondrous item', 'uncommon', false, ARRAY[
            'Each smooth stone is linked to the other. While you touch one stone, you can use an action to cast the sending spell from it to the bearer of the other stone.',
            'The target hears the message and can respond.',
            'Once sending is cast through the stones, they can’t be used again until the next dawn.'
        ]),
        ('sentinel-shield', 'Sentinel Shield', 'armor', 'uncommon', false, ARRAY[
            'While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks.',
            'The shield is emblazoned with the symbol of an eye.'
        ]),
        ('serpent-scale-armor', 'Serpent Scale Armor', 'armor', 'rare', false, ARRAY[
            'This armor is made from the cast-off scales of a serpent creature such as a yuan-ti.',
            'It is light and provides resistance to poison.'
        ]),
        ('shadowfell-brand-tattoo', 'Shadowfell Brand Tattoo', 'wondrous item', 'rare', true, ARRAY[
            'This tattoo allows you to use Shadow Step, teleporting 30 feet as a bonus action.',
            'You also gain resistance to necrotic damage and advantage on Dexterity (Stealth) checks.'
        ]),
        ('shield-guardian', 'Shield Guardian', 'wondrous item', 'very rare', false, ARRAY[
            'A Shield Guardian is a magical construct bound to an amulet.',
            'While wearing the amulet, you can command the guardian and it will protect you.',
            'It has its own hit points and follows your instructions.'
        ]),
        ('shortsword-of-life-stealing', 'Shortsword of Life Stealing', 'weapon', 'rare', true, ARRAY[
            'When you score a critical hit with this weapon, it deals an extra 10 necrotic damage.',
            'You also gain 10 temporary hit points.'
        ]),
        ('quiver-of-ehlonna', 'Quiver of Ehlonna', 'wondrous item', 'uncommon', ARRAY[
            'This quiver has three compartments that connect to extra-dimensional space.',
            'The quiver can hold numerous items, including up to sixty arrows, eighteen javelins, and six long objects such as bows or spears.',
            'You can draw any item you want with ease, as if from a regular quiver.'
        ], false),

        ('ring-of-animal-influence', 'Ring of Animal Influence', 'ring', 'rare', ARRAY[
            'This ring has 3 characterges and regains 1d3 expended characterges daily at dawn.',
            'You can use an action to expend characterges to cast Animal Friendship, Fear (beasts only), or Speak with Animals.'
        ], true),

        ('ring-of-blinking', 'Ring of Blinking', 'ring', 'rare', ARRAY[
            'While wearing this ring, you can use an action to cast the Blink spell.',
            'The ring can’t be used again until the next dawn.'
        ], true),

        ('ring-of-free-action', 'Ring of Free Action', 'ring', 'rare', ARRAY[
            'While wearing this ring, difficult terrain doesn’t cost you extra movement.',
            'You also can’t be paralyzed or restrained by magic.'
        ], true),

        ('ring-of-mind-shielding', 'Ring of Mind Shielding', 'ring', 'uncommon', ARRAY[
            'While wearing this ring, your thoughts cannot be read and you are immune to magical effects that sense emotions or determine alignment.',
            'You can choose to appear unaffected if you wish.',
            'If you die while wearing it, your soul can choose to reside in the ring.'
        ], true),

        ('ring-of-protection', 'Ring of Protection', 'ring', 'rare', ARRAY[
            'You gain a +1 bonus to AC and saving throws while wearing this ring.'
        ], true),

        ('ring-of-regeneration', 'Ring of Regeneration', 'ring', 'very rare', ARRAY[
            'While wearing this ring, you regain 1d6 hit points every 10 minutes, provided you have at least 1 hit point.',
            'If you lose a body part, the ring causes it to regrow and return to full functionality after 1d6 + 1 days.'
        ], true),

        ('ring-of-resistance', 'Ring of Resistance', 'ring', 'rare', ARRAY[
            'You have resistance to one type of damage while wearing this ring.',
            'The type is determined by the DM or rolled randomly.'
        ], true),

        ('ring-of-shooting-stars', 'Ring of Shooting Stars', 'ring', 'very rare', ARRAY[
            'While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light at will.',
            'It has 6 characterges for casting Faerie Fire, Ball Lightning, and Shooting Stars.'
        ], true),

        ('ring-of-spell-storing', 'Ring of Spell Storing', 'ring', 'rare', ARRAY[
            'This ring stores up to 5 levels worth of spell, which can be cast by the wearer.',
            'Any creature can store spell in the ring by casting them into it.'
        ], true),
        ('staff-of-the-woodlands', 'Staff of the Woodlands', 'staff', 'very rare', true, ARRAY[
            'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls.',
            'It has 10 characterges and regains 1d6 + 4 expended characterges daily at dawn.',
            'It can be used to cast spell such as barkskin, pass without tspecies, or wall of thorns.',
            'You can use an action to plant the staff in earth and transform it into a healthy tree.'
        ]),
        ('staff-of-thunder-and-lightning', 'Staff of Thunder and Lightning', 'staff', 'very rare', true, ARRAY[
            'This staff can be used as a magic quarterstaff that grants a +2 bonus to attack and damage rolls.',
            'It has 10 characterges and can be used to deal thunder or lightning effects with melee attacks.',
            'It also allows casting of lightning bolt or thunderclap effects when characterges are expended.'
        ]),
        ('staff-of-withering', 'Staff of Withering', 'staff', 'rare', true, ARRAY[
            'This magic quarterstaff grants a +1 bonus to attack and damage rolls.',
            'When you hit a creature with it, you can expend 1 characterge to deal extra necrotic damage and reduce the target’s Strength score.'
        ]),
        ('stone-of-controlling-earth-elementals', 'Stone of Controlling Earth Elementals', 'wondrous item', 'rare', false, ARRAY[
            'If you are holding this stone, you can use an action to speak its command word and summon an earth elemental.',
            'Once used, it can’t be used again until the next dawn.',
            'The elemental is friendly to you and obeys your commands.'
        ]),
        ('storm-boomerang', 'Storm Boomerang', 'weapon', 'rare', true, ARRAY[
            'This magical boomerang crackles with electricity.',
            'You gain a +1 bonus to attack and damage rolls with it.',
            'If thrown and misses, it returns immediately to your hand.',
            'Once per day, it can deal lightning damage to all creatures in a 10-foot line between you and the target.'
        ]),
        ('winged-boots', 'Winged Boots', 'wondrous item', 'uncommon', true, ARRAY[
            'While you wear these boots, you have a flying speed equal to your walking speed.',
            'You can use the boots to fly for up to 4 hours, all at once or in shorter flights using a minimum of 1 minute each time.',
            'The boots regain 2 hours of flying capability for every 12 hours they aren’t used.',
            'If you are flying when the duration expires, you descend at 30 feet per round until you land.'
        ]),
        ('wand-of-winter', 'Wand of Winter', 'Wand', 'Rare', true, ARRAY[
            'This wand has 7 characterges. While holding it, you can expend characterges to cast the following spell: ray of frost (0 characterges), sleet storm (3 characterges), and ice storm (4 characterges).',
            'The wand regains 1d6 + 1 expended characterges daily at dawn.',
            'If you expend the wand’s last characterge, roll a d20. On a 1, the wand crumbles into shards of ice and is destroyed.'
        ]),
        ('weapon-vicious', 'Vicious Weapon', 'Weapon', 'Rare', false, ARRAY[
            'When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon’s type.'
        ]),
        ('well-of-many-worlds', 'Well of Many Worlds', 'Wondrous Item', 'Legendary', false, ARRAY[
            'This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief.',
            'It unfolds into a circular sheet 6 feet in diameter and creates a two-way portal to another world.',
            'Each time the item is unfolded, there is a 1% chance that it opens a portal to a random plane of existence.'
        ]),
        ('wind-fan', 'Wind Fan', 'Wondrous Item', 'Uncommon', false, ARRAY[
            'While holding this fan, you can use an action to cast the gust of wind spell (DC 13).',
            'Once used, it can’t be used again until you finish a short or long rest.',
            'Each time you use the fan, roll a d20. On a 1, the fan tears and is destroyed.'
        ]),
        ('wings-of-flying', 'Wings of Flying', 'wondrous item', 'rare', true, ARRAY[
            'While wearing this cloak, you can speak its command word as an action to transform it into a pair of bat wings or bird wings on your back.',
            'You have a flying speed of 60 feet for up to 1 hour.',
            'You can dismiss the wings early as a bonus action.',
            'The cloak regains this property after 1d12 hours.'
        ]),
        ('wyrmfang', 'Wyrmfang', 'weapon (longsword)', 'legendary', true, ARRAY[
            'This longsword deals an additional 3d6 damage against dragons.',
            'You have advantage on saving throws against a dragon’s breath weapon and frightful presence.',
            'Once per day, you can cast *dragon’s breath* (save DC 16).'
        ]),
        ('yew-wand-of-frost', 'Yew Wand of Frost', 'wand', 'very rare', true, ARRAY[
            'This wand has 7 characterges. While holding it, you can expend 1 or more characterges to cast *ray of frost* (1 characterge), *ice storm* (4 characterges), or *cone of cold* (5 characterges).',
            'The wand regains 1d6 + 1 expended characterges daily at dawn.',
            'If you expend the last characterge, roll a d20. On a 1, the wand crumbles into slush.'
        ]),
        ('zurzarak-signet', 'Zurzarak’s Signet', 'ring', 'rare', true, ARRAY[
            'This ornate silver ring grants resistance to necrotic damage.',
            'Once per long rest, you can use a reaction to reflect a necrotic spell back at its caster (DC 15 saving throw negates).'
        ]);
    `);
    console.log('✅ All magic_items seeded!');
  } catch (err) {
    console.error('❌ Error seeding magic_items:', err);
  }
}