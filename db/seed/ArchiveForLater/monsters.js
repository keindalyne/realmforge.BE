

import db from '../db/client.js';

export async function seedMonsters() {
    try {
        await db.query('TRUNCATE monsters RESTART IDENTITY CASCADE');
        await db.query(`
            INSERT INTO monsters (
                index, name, size, type, subtype, alignment,
                armor_class, hit_points, hit_dice, speed, xp,
                strength, dexterity, constitution, intelligence, wisdom, characterisma,
                description, actions, legendary_actions, proficiency
            ) VALUES
            (
                'aboleth', 'Aboleth', 'Large', 'aberration', null, 'lawful evil',
                17, 135, '18d10+36', '{"swim":"40 ft."}', 2900,
                21, 9, 15, 18, 15, 18,
                ARRAY['An ancient, amphibious aberration with vast psionic powers.'],
                '[{"name": "Multiattack", "desc": "The aboleth makes three tentacle attacks."}, {"name": "Tentacle", "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage."}]',
                '[{"name": "Enslave", "desc": "The aboleth targets one creature it can see within 30 feet. The target must succeed on a DC 14 Wisdom saving throw or be magically charactermed."}]',
                'Perception +10, Stealth +6'
            ),
            (
                'acolyte', 'Acolyte', 'Medium', 'humanoid', 'any species', 'any alignment',
                10, 9, '2d8', '{"walk":"30 ft."}', 25,
                10, 10, 10, 10, 14, 11,
                ARRAY['A temple servant with divine spell.'],
                '[{"name": "Club", "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                'Insight +2, Religion +2'
            ),
            (
                'adult-black-dragon', 'Adult Black Dragon', 'Huge', 'dragon', null, 'chaotic evil',
                19, 195, '17d12+85', '{"fly":"80 ft.","swim":"40 ft.","walk":"40 ft."}', 16500,
                23, 14, 21, 14, 13, 17,
                ARRAY['A cunning and cruel black dragon.'],
                '[{"name": "Acid Breath", "desc": "The dragon exhales acid in a 60-foot line. Each creature in that line must make a DC 18 Dexterity saving throw."}]',
                '[{"name": "Legendary Resistance", "desc": "If the dragon fails a saving throw, it can choose to succeed instead."}]',
                'Perception +10, Stealth +7'
            ),
            (
                'air-elemental', 'Air Elemental', 'Large', 'elemental', null, 'neutral',
                15, 90, '12d10+24', '{"fly":"90 ft. (hover)"}', 1800,
                14, 20, 14, 6, 10, 6,
                ARRAY['A whirling mass of air and storm.'],
                '[{"name": "Whirlwind", "desc": "Each creature in the elemental\'s space must make a DC 13 Strength saving throw or take 15 (3d8 + 2) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'ankheg', 'Ankheg', 'Large', 'monstrosity', null, 'unaligned',
                14, 39, '6d10+6', '{"burrow":"10 ft.","walk":"30 ft."}', 450,
                17, 11, 13, 1, 13, 6,
                ARRAY['A burrowing insectoid predator.'],
                '[{"name": "Acid Spray", "desc": "The ankheg spits acid in a 30-foot line. Each creature in that line must make a DC 13 Dexterity saving throw."}]',
                '[]',
                ''
            ),
            (
                'animated-armor', 'Animated Armor', 'Medium', 'construct', null, 'unaligned',
                18, 33, '6d8+6', '{"walk":"25 ft."}', 200,
                14, 11, 13, 1, 3, 1,
                ARRAY['A suit of magically animated armor.'],
                '[{"name": "Slam", "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'ankylosaurus', 'Ankylosaurus', 'Huge', 'beast', null, 'unaligned',
                15, 68, '8d12+16', '{"walk":"30 ft."}', 500,
                19, 11, 15, 2, 12, 5,
                ARRAY['A massive armored dinosaur with a clubbed tail.'],
                '[{"name": "Tail", "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'archmage', 'Archmage', 'Medium', 'humanoid', 'any species', 'any alignment',
                12, 99, '18d8', '{"walk":"30 ft."}', 18000,
                10, 14, 12, 20, 15, 16,
                ARRAY['A powerful wizard of incredible knowledge.'],
                '[{"name": "Staff", "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."}]',
                '[]',
                'Arcana +7, History +7'
            ),
            (
                'assassin', 'Assassin', 'Medium', 'humanoid', 'any species', 'any non-good alignment',
                15, 78, '12d8+24', '{"walk":"30 ft."}', 3900,
                11, 16, 14, 13, 11, 10,
                ARRAY['A hired killer skilled in stealth and poison.'],
                '[{"name": "Multiattack", "desc": "The assassin makes two shortsword attacks."}]',
                '[]',
                'Stealth +7, Deception +3'
            ),
            (
                'awakened-shrub', 'Awakened Shrub', 'Small', 'plant', null, 'unaligned',
                9, 10, '3d6', '{"walk":"20 ft."}', 10,
                3, 8, 11, 10, 10, 6,
                ARRAY['A magically awakened shrub that can walk and talk.'],
                '[{"name": "Rake", "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                ''
            ),
            (
                'axe-beak', 'Axe Beak', 'Large', 'beast', null, 'unaligned',
                11, 19, '3d10+3', '{"walk":"50 ft."}', 100,
                14, 12, 12, 2, 10, 5,
                ARRAY['A large, flightless bird with a deadly beak.'],
                '[{"name":"Beak", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'azer', 'Azer', 'Medium', 'elemental', null, 'lawful neutral',
                17, 39, '6d8+12', '{"walk":"30 ft."}', 700,
                17, 12, 15, 12, 13, 10,
                ARRAY['A dwarf-like elemental made of living flame.'],
                '[{"name":"Warhammer", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 3 (1d6) fire damage."}]',
                '[]',
                'Smith\'s tools +5'
            ),
            (
                'banshee', 'Banshee', 'Medium', 'undead', null, 'chaotic evil',
                12, 58, '13d8', '{"fly":"40 ft.","hover":true}', 1100,
                1, 14, 10, 12, 11, 17,
                ARRAY['The spirit of a female elf filled with sorrow and rage.'],
                '[{"name":"Wail", "desc":"Each non-undead creature within 30 ft. that can hear the banshee must make a DC 13 Con save or drop to 0 hit points."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
            (
                'barbed-devil', 'Barbed Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                15, 110, '13d8+52', '{"walk":"30 ft."}', 1800,
                16, 17, 18, 12, 14, 14,
                ARRAY['A spiny devil that hurls fire and stabs with barbs.'],
                '[{"name":"Hurl Flame", "desc":"Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[]',
                'Intimidation +5'
            ),
            (
                'basilisk', 'Basilisk', 'Medium', 'monstrosity', null, 'unaligned',
                15, 52, '8d8+16', '{"walk":"20 ft."}', 450,
                16, 8, 15, 2, 8, 7,
                ARRAY['A reptilian creature with a deadly gaze that can turn creatures to stone.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'bat', 'Bat', 'Tiny', 'beast', null, 'unaligned',
                12, 1, '1d4-1', '{"fly":"30 ft.","hover":true}', 10,
                2, 15, 8, 2, 12, 4,
                ARRAY['A harmless flying nocturnal mammal.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'bearded-devil', 'Bearded Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                13, 52, '8d8+16', '{"walk":"30 ft."}', 1100,
                16, 15, 15, 9, 11, 11,
                ARRAY['A devil with a venomous beard and glaive.'],
                '[{"name":"Beard", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 5 (2d4) poison damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'behir', 'Behir', 'Huge', 'monstrosity', null, 'neutral evil',
                17, 168, '16d12+64', '{"climb":"40 ft.","walk":"50 ft."}', 10000,
                23, 16, 18, 7, 14, 12,
                ARRAY['A serpentine monster with lightning breath.'],
                '[{"name":"Lightning Breath", "desc":"The behir exhales lightning in a 20-foot line. Each creature in that line must make a DC 16 Dex save or take 66 (12d10) lightning damage."}]',
                '[]',
                'Perception +6'
            ),
            (
                'berserker', 'Berserker', 'Medium', 'humanoid', 'any species', 'any chaotic alignment',
                13, 67, '9d8+27', '{"walk":"30 ft."}', 450,
                16, 12, 17, 9, 11, 9,
                ARRAY['A frenzied warrior that fights recklessly.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'black-bear', 'Black Bear', 'Medium', 'beast', null, 'unaligned',
                11, 19, '3d8+6', '{"walk":"40 ft.","climb":"30 ft."}', 100,
                15, 10, 14, 2, 12, 7,
                ARRAY['A forest-dwelling bear known for aggression when provoked.'],
                '[{"name":"Multiattack", "desc":"The bear makes two attacks: one with its bite and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'black-dragon-wyrmling', 'Black Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic evil',
                17, 33, '6d8+6', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 700,
                15, 14, 13, 10, 11, 13,
                ARRAY['A young and cunning dragon with acid breath.'],
                '[{"name":"Acid Breath", "desc":"The dragon exhales acid in a 15-foot line. Each creature must make a DC 11 Dex save."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'black-pudding', 'Black Pudding', 'Large', 'ooze', null, 'unaligned',
                7, 85, '10d10+30', '{"climb":"20 ft.","walk":"20 ft."}', 1800,
                16, 5, 16, 1, 6, 1,
                ARRAY['A corrosive ooze that dissolves metal and flesh.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage."}]',
                '[]',
                ''
            ),
            (
                'blink-dog', 'Blink Dog', 'Medium', 'fey', null, 'lawful good',
                13, 22, '5d8', '{"walk":"40 ft."}', 200,
                12, 17, 12, 10, 13, 11,
                ARRAY['A magical canine that teleports during combat.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Perception +3, Stealth +5'
            ),
            (
                'boar', 'Boar', 'Medium', 'beast', null, 'unaligned',
                11, 11, '2d8', '{"walk":"40 ft."}', 50,
                13, 11, 12, 2, 9, 5,
                ARRAY['A feral pig with a powerful characterge.'],
                '[{"name":"Tusk", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'bone-devil', 'Bone Devil', 'Large', 'fiend', 'devil', 'lawful evil',
                19, 142, '15d10+60', '{"fly":"40 ft.","walk":"40 ft."}', 8400,
                18, 16, 18, 13, 14, 16,
                ARRAY['A skeletal devil with a venomous sting.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 18 (4d8) poison damage."}]',
                '[{"name":"Teleport", "desc":"The devil magically teleports, along with any equipment, to an unoccupied space it can see within 120 feet."}]',
                'Deception +6, Insight +6'
            ),
            (
                'brass-dragon-wyrmling', 'Brass Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic good',
                16, 16, '3d8+3', '{"fly":"60 ft.","walk":"30 ft."}', 200,
                15, 10, 13, 10, 11, 13,
                ARRAY['A chatty, sun-loving young brass dragon.'],
                '[{"name":"Fire Breath", "desc":"The dragon exhales fire in a 20-foot line. Each creature in that line must make a DC 11 Dex saving throw."}]',
                '[]',
                'Perception +3, Stealth +2'
            ),
            (
                'brown-bear', 'Brown Bear', 'Large', 'beast', null, 'unaligned',
                11, 34, '4d10+12', '{"walk":"40 ft.","swim":"30 ft."}', 450,
                19, 10, 16, 2, 13, 7,
                ARRAY['A powerful omnivorous bear found in forests and mountains.'],
                '[{"name":"Multiattack", "desc":"The bear makes two attacks: one with its bite and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'bugbear', 'Bugbear', 'Medium', 'humanoid', 'goblinoid', 'chaotic evil',
                16, 27, '5d8+5', '{"walk":"30 ft."}', 200,
                15, 14, 13, 8, 11, 9,
                ARRAY['A hulking goblinoid that strikes from the shadows.'],
                '[{"name":"Morningstar", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."}]',
                '[]',
                'Stealth +6, Survival +2'
            ),
            (
                'bulette', 'Bulette', 'Large', 'monstrosity', null, 'unaligned',
                17, 94, '9d10+45', '{"burrow":"40 ft.","walk":"40 ft."}', 1800,
                19, 11, 21, 2, 10, 5,
                ARRAY['A heavily armored land shark that bursts from the earth.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'camel', 'Camel', 'Large', 'beast', null, 'unaligned',
                9, 15, '2d10+4', '{"walk":"50 ft."}', 50,
                16, 8, 14, 2, 8, 5,
                ARRAY['A desert-dwelling beast of burden.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'cat', 'Cat', 'Tiny', 'beast', null, 'unaligned',
                12, 2, '1d4', '{"walk":"40 ft.","climb":"30 ft."}', 10,
                3, 15, 10, 3, 12, 7,
                ARRAY['A domesticated feline with sharp senses.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'centaur', 'Centaur', 'Large', 'monstrosity', null, 'neutral good',
                12, 45, '6d10+12', '{"walk":"50 ft."}', 1100,
                18, 14, 14, 9, 13, 11,
                ARRAY['Half-human, half-horse nomadic warriors.'],
                '[{"name":"Multiattack", "desc":"The centaur makes two attacks: one with its pike and one with its hooves."}]',
                '[]',
                'Athletics +6, Survival +3'
            ),
            (
                'chain-devil', 'Chain Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                16, 85, '10d8+40', '{"walk":"30 ft."}', 4500,
                18, 15, 18, 11, 12, 14,
                ARRAY['A terrifying devil that manipulates chains as weapon.'],
                '[{"name":"Multiattack", "desc":"The devil makes two chain attacks."}]',
                '[{"name":"Unnerving Mask", "desc":"As a bonus action, the devil targets one creature and forces a DC 14 Wisdom saving throw or it becomes frightened."}]',
                'Intimidation +6'
            ),
            (
                'chimera', 'Chimera', 'Large', 'monstrosity', null, 'chaotic evil',
                14, 114, '12d10+48', '{"fly":"60 ft.","walk":"30 ft."}', 2300,
                19, 11, 19, 3, 14, 10,
                ARRAY['A monstrous hybrid of lion, goat, and dragon.'],
                '[{"name":"Fire Breath", "desc":"(Recharacterge 5–6) The dragon head exhales fire in a 15-ft cone (Dex DC 15)."}]',
                '[]',
                'Perception +5'
            ),
            (
                'clay-golem', 'Clay Golem', 'Large', 'construct', null, 'unaligned',
                14, 133, '14d10+56', '{"walk":"20 ft."}', 5000,
                20, 9, 18, 3, 8, 1,
                ARRAY['A hulking automaton sculpted from clay.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'cockatrice', 'Cockatrice', 'Small', 'monstrosity', null, 'unaligned',
                11, 27, '6d6+6', '{"fly":"40 ft.","walk":"20 ft."}', 100,
                6, 12, 12, 2, 13, 5,
                ARRAY['A bat-winged chicken-like creature with a petrifying bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'commoner', 'Commoner', 'Medium', 'humanoid', 'any species', 'any alignment',
                10, 4, '1d8', '{"walk":"30 ft."}', 10,
                10, 10, 10, 10, 10, 10,
                ARRAY['An ordinary townsfolk or villager.'],
                '[{"name":"Club", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'constrictor-snake', 'Constrictor Snake', 'Large', 'beast', null, 'unaligned',
                12, 13, '2d10+2', '{"swim":"30 ft.","walk":"30 ft."}', 50,
                15, 14, 12, 1, 10, 3,
                ARRAY['A powerful snake that crushes its prey.'],
                '[{"name":"Constrict", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage and the target is grappled (escape DC 14)."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'crab', 'Crab', 'Tiny', 'beast', null, 'unaligned',
                11, 2, '1d4', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                2, 11, 10, 1, 8, 2,
                ARRAY['A small crustacean with sharp pincers.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'crocodile', 'Crocodile', 'Large', 'beast', null, 'unaligned',
                12, 19, '3d10+3', '{"swim":"30 ft.","walk":"20 ft."}', 100,
                15, 10, 13, 2, 10, 5,
                ARRAY['A stealthy aquatic predator with a strong bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'cultist', 'Cultist', 'Medium', 'humanoid', 'any species', 'any non-good alignment',
                12, 9, '2d8', '{"walk":"30 ft."}', 50,
                11, 12, 10, 10, 11, 10,
                ARRAY['A follower of a dark or forbidden power.'],
                '[{"name":"Scimitar", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                'Deception +2, Religion +2'
            ),
            (
                'darkmantle', 'Darkmantle', 'Small', 'monstrosity', null, 'unaligned',
                11, 22, '5d6+5', '{"fly":"30 ft.","walk":"10 ft."}', 100,
                16, 12, 13, 2, 10, 5,
                ARRAY['A cave-dwelling predator that drops on prey from the ceiling.'],
                '[{"name":"Crush", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage and the target is blinded."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'death-dog', 'Death Dog', 'Medium', 'monstrosity', null, 'neutral evil',
                12, 39, '6d8+12', '{"walk":"40 ft."}', 200,
                15, 14, 14, 3, 12, 6,
                ARRAY['A two-headed hound with diseased bites.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage and the target must make a DC 12 Con save or contract a disease."}]',
                '[]',
                'Perception +4'
            ),
            (
                'deep-gnome', 'Deep Gnome (Svirfneblin)', 'Small', 'humanoid', 'gnome', 'neutral good',
                15, 16, '3d6', '{"walk":"20 ft."}', 100,
                15, 14, 12, 12, 10, 9,
                ARRAY['A reclusive, subterranean gnome with innate magical abilities.'],
                '[{"name":"War Pick", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'deer', 'Deer', 'Medium', 'beast', null, 'unaligned',
                13, 4, '1d8', '{"walk":"50 ft."}', 10,
                11, 16, 11, 2, 14, 5,
                ARRAY['A skittish herbivore with quick reflexes.'],
                '[{"name":"Hooves", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'derro', 'Derro', 'Small', 'humanoid', 'derro', 'chaotic evil',
                13, 13, '3d6', '{"walk":"30 ft."}', 100,
                11, 14, 12, 10, 9, 5,
                ARRAY['Mad and cruel humanoids from the Underdark.'],
                '[{"name":"Hooked Shortspear", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'dretch', 'Dretch', 'Small', 'fiend', 'demon', 'chaotic evil',
                11, 18, '4d6+4', '{"walk":"20 ft."}', 200,
                11, 11, 12, 5, 8, 3,
                ARRAY['A wretched, stinking demon spawned from chaos.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                'Perception +1'
            ),
            (
                'dryad', 'Dryad', 'Medium', 'fey', null, 'neutral',
                11, 22, '5d8', '{"walk":"30 ft."}', 700,
                10, 12, 11, 14, 15, 18,
                ARRAY['A tree spirit who protects the forests.'],
                '[{"name":"Club", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                'Nature +6, Stealth +5'
            ),
            (
                'duergar', 'Duergar', 'Medium', 'humanoid', 'dwarf', 'lawful evil',
                16, 26, '4d8+8', '{"walk":"25 ft."}', 200,
                14, 11, 14, 11, 10, 9,
                ARRAY['A grim and spiteful dwarf of the Underdark.'],
                '[{"name":"War Pick", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."}]',
                '[]',
                'Perception +2, Stealth +2'
            ),
            (
                'eagle', 'Eagle', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"fly":"60 ft.","walk":"10 ft."}', 10,
                6, 15, 10, 2, 14, 7,
                ARRAY['A keen-eyed bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'earth-elemental', 'Earth Elemental', 'Large', 'elemental', null, 'neutral',
                17, 126, '12d10+60', '{"burrow":"30 ft.","walk":"30 ft."}', 5000,
                20, 8, 20, 5, 10, 5,
                ARRAY['A hulking mass of stone and soil.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'elephant', 'Elephant', 'Huge', 'beast', null, 'unaligned',
                12, 76, '8d12+24', '{"walk":"40 ft."}', 1100,
                22, 9, 17, 3, 11, 6,
                ARRAY['A massive herbivore with devastating tusks and a trunk.'],
                '[{"name":"Gore", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 25 (3d10 + 6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'elk', 'Elk', 'Large', 'beast', null, 'unaligned',
                10, 13, '2d10', '{"walk":"50 ft."}', 50,
                16, 10, 12, 2, 10, 6,
                ARRAY['A powerful horned animal found in woodlands.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'empyrean', 'Empyrean', 'Huge', 'celestial', null, 'chaotic good',
                22, 313, '21d12+168', '{"fly":"90 ft.","walk":"60 ft."}', 33000,
                30, 21, 30, 21, 22, 27,
                ARRAY['A godlike child of the gods.'],
                '[{"name":"Maul", "desc":"Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage."}]',
                '[{"name":"Legendary Resistance", "desc":"If the empyrean fails a saving throw, it can choose to succeed instead."}]',
                'Insight +12, Perception +12'
            ),
            (
                'erinyes', 'Erinyes', 'Medium', 'fiend', 'devil', 'lawful evil',
                18, 153, '18d8+72', '{"fly":"60 ft.","walk":"30 ft."}', 10000,
                18, 20, 20, 16, 18, 20,
                ARRAY['A fierce avenger and enforcer of hell’s will.'],
                '[{"name":"Longsword", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage plus 13 (3d8) poison damage."}]',
                '[{"name":"Parry", "desc":"The erinyes adds 4 to its AC against one melee attack that would hit it."}]',
                'Deception +9, Intimidation +9'
            ),
            (
                'ettin', 'Ettin', 'Large', 'giant', null, 'chaotic evil',
                12, 85, '9d10+27', '{"walk":"40 ft."}', 1800,
                21, 8, 17, 6, 10, 8,
                ARRAY['A two-headed brute with crude weapon and crude minds.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'faerie-dragon', 'Faerie Dragon (Young)', 'Tiny', 'dragon', null, 'chaotic good',
                15, 10, '3d4+3', '{"fly":"60 ft.","walk":"10 ft."}', 200,
                3, 20, 13, 14, 15, 16,
                ARRAY['A prank-loving dragon with invisibility and characterm magic.'],
                '[{"name":"Euphoria Breath", "desc":"Each creature in a 15-foot cone must succeed on a DC 11 Wisdom save or become charactermed for 1 minute."}]',
                '[]',
                'Arcana +4, Perception +3, Stealth +7'
            ),
            (
                'fire-elemental', 'Fire Elemental', 'Large', 'elemental', null, 'neutral',
                13, 102, '12d10', '{"fly":"50 ft.","hover":true}', 3900,
                10, 17, 16, 6, 10, 7,
                ARRAY['A living blaze that ignites everything it touches.'],
                '[{"name":"Touch", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) fire damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'fire-giant', 'Fire Giant', 'Huge', 'giant', null, 'lawful evil',
                18, 162, '13d12+78', '{"walk":"30 ft."}', 5000,
                25, 9, 23, 10, 14, 13,
                ARRAY['A militaristic giant with burning iron armor and weapon.'],
                '[{"name":"Greatsword", "desc":"Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +6'
            ),
            (
                'flameskull', 'Flameskull', 'Tiny', 'undead', null, 'neutral evil',
                13, 40, '9d4+18', '{"fly":"40 ft.","hover":true}', 1100,
                1, 17, 10, 16, 11, 11,
                ARRAY['A floating, fiery skull animated by dark magic.'],
                '[{"name":"Fire Ray", "desc":"Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[{"name":"Rejuvenation", "desc":"If destroyed, it regains full HP in 1 hour unless holy water or dispel magic is used."}]',
                'Arcana +3, Perception +2'
            ),
            (
                'flesh-golem', 'Flesh Golem', 'Medium', 'construct', null, 'neutral',
                9, 93, '11d8+44', '{"walk":"30 ft."}', 1800,
                19, 9, 18, 6, 10, 5,
                ARRAY['A stitched-together monstrosity animated by lightning.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'flying-snake', 'Flying Snake', 'Tiny', 'beast', null, 'unaligned',
                14, 5, '2d4', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 25,
                4, 18, 11, 2, 12, 5,
                ARRAY['A brightly scaled snake with wings.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 1 piercing damage + 3 (1d6) poison damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'frog', 'Frog', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                1, 13, 8, 1, 8, 3,
                ARRAY['A small amphibian with a long tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +1, Stealth +3'
            ),
            (
                'frost-giant', 'Frost Giant', 'Huge', 'giant', null, 'neutral evil',
                15, 138, '12d12+60', '{"walk":"40 ft."}', 3900,
                23, 9, 21, 9, 10, 12,
                ARRAY['An imposing warrior from the icy north.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +3'
            ),
            (
                'galeb-duhr', 'Galeb Duhr', 'Medium', 'elemental', null, 'neutral',
                16, 85, '9d8+45', '{"burrow":"15 ft.","walk":"15 ft."}', 1800,
                20, 8, 20, 11, 12, 11,
                ARRAY['A boulder-shaped elemental that animates stones.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'gargoyle', 'Gargoyle', 'Medium', 'elemental', null, 'chaotic evil',
                15, 52, '7d8+21', '{"fly":"60 ft.","walk":"30 ft."}', 450,
                15, 11, 16, 6, 11, 7,
                ARRAY['A winged stone predator that blends into buildings.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'eagle', 'Eagle', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"fly":"60 ft.","walk":"10 ft."}', 10,
                6, 15, 10, 2, 14, 7,
                ARRAY['A keen-eyed bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'earth-elemental', 'Earth Elemental', 'Large', 'elemental', null, 'neutral',
                17, 126, '12d10+60', '{"burrow":"30 ft.","walk":"30 ft."}', 5000,
                20, 8, 20, 5, 10, 5,
                ARRAY['A hulking mass of stone and soil.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'elephant', 'Elephant', 'Huge', 'beast', null, 'unaligned',
                12, 76, '8d12+24', '{"walk":"40 ft."}', 1100,
                22, 9, 17, 3, 11, 6,
                ARRAY['A massive herbivore with devastating tusks and a trunk.'],
                '[{"name":"Gore", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 25 (3d10 + 6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'elk', 'Elk', 'Large', 'beast', null, 'unaligned',
                10, 13, '2d10', '{"walk":"50 ft."}', 50,
                16, 10, 12, 2, 10, 6,
                ARRAY['A powerful horned animal found in woodlands.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'empyrean', 'Empyrean', 'Huge', 'celestial', null, 'chaotic good',
                22, 313, '21d12+168', '{"fly":"90 ft.","walk":"60 ft."}', 33000,
                30, 21, 30, 21, 22, 27,
                ARRAY['A godlike child of the gods.'],
                '[{"name":"Maul", "desc":"Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage."}]',
                '[{"name":"Legendary Resistance", "desc":"If the empyrean fails a saving throw, it can choose to succeed instead."}]',
                'Insight +12, Perception +12'
            ),
            (
                'erinyes', 'Erinyes', 'Medium', 'fiend', 'devil', 'lawful evil',
                18, 153, '18d8+72', '{"fly":"60 ft.","walk":"30 ft."}', 10000,
                18, 20, 20, 16, 18, 20,
                ARRAY['A fierce avenger and enforcer of hell’s will.'],
                '[{"name":"Longsword", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage plus 13 (3d8) poison damage."}]',
                '[{"name":"Parry", "desc":"The erinyes adds 4 to its AC against one melee attack that would hit it."}]',
                'Deception +9, Intimidation +9'
            ),
            (
                'ettin', 'Ettin', 'Large', 'giant', null, 'chaotic evil',
                12, 85, '9d10+27', '{"walk":"40 ft."}', 1800,
                21, 8, 17, 6, 10, 8,
                ARRAY['A two-headed brute with crude weapon and crude minds.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'faerie-dragon', 'Faerie Dragon (Young)', 'Tiny', 'dragon', null, 'chaotic good',
                15, 10, '3d4+3', '{"fly":"60 ft.","walk":"10 ft."}', 200,
                3, 20, 13, 14, 15, 16,
                ARRAY['A prank-loving dragon with invisibility and characterm magic.'],
                '[{"name":"Euphoria Breath", "desc":"Each creature in a 15-foot cone must succeed on a DC 11 Wisdom save or become charactermed for 1 minute."}]',
                '[]',
                'Arcana +4, Perception +3, Stealth +7'
            ),
            (
                'fire-elemental', 'Fire Elemental', 'Large', 'elemental', null, 'neutral',
                13, 102, '12d10', '{"fly":"50 ft.","hover":true}', 3900,
                10, 17, 16, 6, 10, 7,
                ARRAY['A living blaze that ignites everything it touches.'],
                '[{"name":"Touch", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) fire damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'fire-giant', 'Fire Giant', 'Huge', 'giant', null, 'lawful evil',
                18, 162, '13d12+78', '{"walk":"30 ft."}', 5000,
                25, 9, 23, 10, 14, 13,
                ARRAY['A militaristic giant with burning iron armor and weapon.'],
                '[{"name":"Greatsword", "desc":"Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +6'
            ),
            (
                'flameskull', 'Flameskull', 'Tiny', 'undead', null, 'neutral evil',
                13, 40, '9d4+18', '{"fly":"40 ft.","hover":true}', 1100,
                1, 17, 10, 16, 11, 11,
                ARRAY['A floating, fiery skull animated by dark magic.'],
                '[{"name":"Fire Ray", "desc":"Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[{"name":"Rejuvenation", "desc":"If destroyed, it regains full HP in 1 hour unless holy water or dispel magic is used."}]',
                'Arcana +3, Perception +2'
            ),
            (
                'flesh-golem', 'Flesh Golem', 'Medium', 'construct', null, 'neutral',
                9, 93, '11d8+44', '{"walk":"30 ft."}', 1800,
                19, 9, 18, 6, 10, 5,
                ARRAY['A stitched-together monstrosity animated by lightning.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'flying-snake', 'Flying Snake', 'Tiny', 'beast', null, 'unaligned',
                14, 5, '2d4', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 25,
                4, 18, 11, 2, 12, 5,
                ARRAY['A brightly scaled snake with wings.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 1 piercing damage + 3 (1d6) poison damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'frog', 'Frog', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                1, 13, 8, 1, 8, 3,
                ARRAY['A small amphibian with a long tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +1, Stealth +3'
            ),
            (
                'frost-giant', 'Frost Giant', 'Huge', 'giant', null, 'neutral evil',
                15, 138, '12d12+60', '{"walk":"40 ft."}', 3900,
                23, 9, 21, 9, 10, 12,
                ARRAY['An imposing warrior from the icy north.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +3'
            ),
            (
                'galeb-duhr', 'Galeb Duhr', 'Medium', 'elemental', null, 'neutral',
                16, 85, '9d8+45', '{"burrow":"15 ft.","walk":"15 ft."}', 1800,
                20, 8, 20, 11, 12, 11,
                ARRAY['A boulder-shaped elemental that animates stones.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'gargoyle', 'Gargoyle', 'Medium', 'elemental', null, 'chaotic evil',
                15, 52, '7d8+21', '{"fly":"60 ft.","walk":"30 ft."}', 450,
                15, 11, 16, 6, 11, 7,
                ARRAY['A winged stone predator that blends into buildings.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'gelatinous-cube', 'Gelatinous Cube', 'Large', 'ooze', null, 'unaligned',
                6, 84, '8d10+40', '{"climb":"15 ft.","walk":"15 ft."}', 1800,
                14, 3, 20, 1, 6, 1,
                ARRAY['A near-invisible cube of ooze that engulfs its prey.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage."}]',
                '[]',
                ''
            ),
            (
                'ghast', 'Ghast', 'Medium', 'undead', null, 'chaotic evil',
                13, 36, '8d8', '{"walk":"30 ft."}', 450,
                16, 17, 10, 11, 10, 8,
                ARRAY['A more powerful and vile version of a ghoul.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus paralysis."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'ghost', 'Ghost', 'Medium', 'undead', null, 'any alignment',
                11, 45, '10d8', '{"fly":"40 ft.","hover":true}', 1100,
                7, 13, 10, 10, 12, 17,
                ARRAY['The spectral remains of a deceased being.'],
                '[{"name":"Withering Touch", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage."}]',
                '[{"name":"Possession", "desc":"The ghost can possess a humanoid within 5 ft. (Cha save DC 13)."}]',
                'Stealth +4, Perception +5'
            ),
            (
                'ghoul', 'Ghoul', 'Medium', 'undead', null, 'chaotic evil',
                12, 22, '5d8', '{"walk":"30 ft."}', 200,
                13, 15, 10, 7, 10, 6,
                ARRAY['A feral undead that paralyzes its victims.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage and paralysis (DC 10)."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-ape', 'Giant Ape', 'Huge', 'beast', null, 'unaligned',
                12, 157, '15d12+60', '{"climb":"40 ft.","walk":"40 ft."}', 7000,
                23, 14, 18, 7, 12, 7,
                ARRAY['A massive, powerful primate.'],
                '[{"name":"Fist", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 5) bludgeoning damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-badger', 'Giant Badger', 'Medium', 'beast', null, 'unaligned',
                10, 13, '2d8+4', '{"burrow":"10 ft.","walk":"30 ft."}', 50,
                13, 10, 15, 2, 12, 5,
                ARRAY['A burrowing creature with a fierce temperament.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-bat', 'Giant Bat', 'Large', 'beast', null, 'unaligned',
                13, 22, '4d10', '{"fly":"60 ft."}', 200,
                15, 16, 11, 2, 12, 6,
                ARRAY['A massive bat that uses echolocation.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-boar', 'Giant Boar', 'Large', 'beast', null, 'unaligned',
                12, 42, '5d10+15', '{"walk":"40 ft."}', 450,
                17, 10, 16, 2, 7, 5,
                ARRAY['An oversized wild boar with deadly tusks.'],
                '[{"name":"Tusk", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'giant-centipede', 'Giant Centipede', 'Small', 'beast', null, 'unaligned',
                13, 4, '1d6+1', '{"climb":"30 ft.","walk":"30 ft."}', 50,
                5, 14, 12, 1, 7, 3,
                ARRAY['A fast, venomous centipede of unusual size.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 7 (3d4) poison damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-constrictor-snake', 'Giant Constrictor Snake', 'Huge', 'beast', null, 'unaligned',
                12, 60, '8d12+16', '{"swim":"30 ft.","walk":"30 ft."}', 700,
                19, 14, 12, 1, 10, 3,
                ARRAY['A massive snake that crushes prey.'],
                '[{"name":"Constrict", "desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage and grapple (escape DC 16)."}]',
                '[]',
                ''
            ),
            (
                'giant-crab', 'Giant Crab', 'Medium', 'beast', null, 'unaligned',
                15, 13, '3d8+3', '{"swim":"30 ft.","walk":"30 ft."}', 200,
                13, 15, 11, 1, 9, 3,
                ARRAY['An oversized crab with strong pincers.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 2) bludgeoning damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-crocodile', 'Giant Crocodile', 'Huge', 'beast', null, 'unaligned',
                14, 85, '9d12+27', '{"swim":"50 ft.","walk":"30 ft."}', 3900,
                21, 9, 17, 2, 10, 7,
                ARRAY['A terrifying apex predator of the swamp.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'giant-eagle', 'Giant Eagle', 'Large', 'beast', null, 'neutral good',
                13, 26, '4d10+4', '{"fly":"80 ft.","walk":"10 ft."}', 450,
                16, 17, 13, 8, 14, 10,
                ARRAY['A majestic and intelligent bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-elk', 'Giant Elk', 'Huge', 'beast', null, 'unaligned',
                14, 42, '5d12+10', '{"walk":"60 ft."}', 1100,
                19, 16, 14, 7, 14, 10,
                ARRAY['A towering elk with massive antlers.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-fire-beetle', 'Giant Fire Beetle', 'Small', 'beast', null, 'unaligned',
                13, 4, '1d6+1', '{"walk":"30 ft."}', 50,
                8, 10, 12, 1, 7, 3,
                ARRAY['A beetle that glows brightly in the dark.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'giant-frog', 'Giant Frog', 'Medium', 'beast', null, 'unaligned',
                11, 18, '4d8', '{"swim":"30 ft.","walk":"30 ft."}', 50,
                12, 13, 11, 2, 10, 3,
                ARRAY['An oversized frog with a sticky tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-goat', 'Giant Goat', 'Large', 'beast', null, 'unaligned',
                11, 19, '3d10+3', '{"walk":"40 ft."}', 100,
                17, 11, 12, 3, 12, 6,
                ARRAY['A larger, tougher breed of goat with a deadly characterge.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-hyena', 'Giant Hyena', 'Large', 'beast', null, 'unaligned',
                12, 45, '6d10+12', '{"walk":"50 ft."}', 450,
                16, 14, 14, 2, 12, 7,
                ARRAY['An oversized scavenger with a terrifying bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-lizard', 'Giant Lizard', 'Large', 'beast', null, 'unaligned',
                12, 19, '3d10+3', '{"climb":"30 ft.","walk":"30 ft."}', 100,
                15, 12, 13, 2, 10, 5,
                ARRAY['A large lizard that climbs walls easily.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-octopus', 'Giant Octopus', 'Large', 'beast', null, 'unaligned',
                11, 52, '8d10+8', '{"swim":"60 ft."}', 1800,
                17, 16, 13, 4, 10, 4,
                ARRAY['A tentacled predator that lurks in the deep.'],
                '[{"name":"Tentacles", "desc":"Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage and grapple."}]',
                '[]',
                'Perception +4, Stealth +5'
            ),
            (
                'giant-owl', 'Giant Owl', 'Large', 'beast', null, 'neutral',
                12, 19, '3d10+3', '{"fly":"60 ft.","walk":"5 ft."}', 700,
                13, 15, 12, 8, 13, 10,
                ARRAY['A noble and wise predator of the forest.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage."}]',
                '[]',
                'Perception +5, Stealth +4'
            ),
            (
                'giant-poisonous-snake', 'Giant Poisonous Snake', 'Medium', 'beast', null, 'unaligned',
                14, 11, '2d8', '{"swim":"30 ft.","walk":"30 ft."}', 100,
                10, 18, 13, 2, 10, 3,
                ARRAY['A fast-moving serpent with lethal venom.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) piercing damage + 10 (3d6) poison damage."}]',
                '[]',
                'Perception +2, Stealth +6'
            ),
            (
                'giant-rat', 'Giant Rat', 'Small', 'beast', null, 'unaligned',
                12, 7, '2d6', '{"walk":"30 ft."}', 25,
                7, 15, 11, 2, 10, 4,
                ARRAY['A verminous rodent of unusual size.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."}]',
                '[]',
                'Perception +2, Stealth +4'
            ),
            (
                'giant-scorpion', 'Giant Scorpion', 'Large', 'beast', null, 'unaligned',
                15, 52, '7d10+14', '{"walk":"40 ft."}', 1800,
                15, 13, 15, 1, 9, 3,
                ARRAY['A venomous predator with pincers and a deadly stinger.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing + poison."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'giant-sea-horse', 'Giant Sea Horse', 'Large', 'beast', null, 'unaligned',
                13, 16, '3d10', '{"swim":"40 ft."}', 100,
                12, 15, 11, 2, 12, 5,
                ARRAY['A large aquatic creature resembling a seahorse.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-shark', 'Giant Shark', 'Huge', 'beast', null, 'unaligned',
                13, 126, '11d12+55', '{"swim":"50 ft."}', 5000,
                23, 11, 21, 1, 10, 5,
                ARRAY['A monstrous predator of the deep sea.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 30 (4d10 + 8) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-spider', 'Giant Spider', 'Large', 'beast', null, 'unaligned',
                14, 26, '4d10+4', '{"climb":"30 ft.","walk":"30 ft."}', 450,
                14, 16, 12, 2, 11, 4,
                ARRAY['A venomous spider the size of a horse.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing + poison (DC 11)."}]',
                '[]',
                'Stealth +7'
            ),
            (
                'giant-toad', 'Giant Toad', 'Large', 'beast', null, 'unaligned',
                11, 39, '6d10+6', '{"swim":"40 ft.","walk":"30 ft."}', 900,
                15, 13, 13, 2, 10, 3,
                ARRAY['A huge amphibian with a sticky tongue and a wide maw.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing and swallowed."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-vulture', 'Giant Vulture', 'Large', 'beast', null, 'neutral evil',
                10, 22, '3d10+6', '{"fly":"60 ft.","walk":"10 ft."}', 450,
                15, 10, 15, 6, 12, 7,
                ARRAY['A carrion bird with a large wingspan and cruel instincts.'],
                '[{"name":"Beak", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-wasp', 'Giant Wasp', 'Medium', 'beast', null, 'unaligned',
                12, 13, '3d8', '{"fly":"50 ft.","walk":"10 ft."}', 100,
                10, 14, 10, 1, 10, 3,
                ARRAY['An enlarged wasp with a deadly sting.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage + 10 (3d6) poison."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-weasel', 'Giant Weasel', 'Medium', 'beast', null, 'unaligned',
                13, 9, '2d8', '{"walk":"40 ft."}', 50,
                11, 16, 10, 4, 12, 5,
                ARRAY['A ferocious predator that hunts in packs.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
            (
                'giant-wolf-spider', 'Giant Wolf Spider', 'Medium', 'beast', null, 'unaligned',
                13, 11, '2d8+2', '{"climb":"40 ft.","walk":"40 ft."}', 100,
                12, 16, 13, 3, 12, 4,
                ARRAY['A skittering ambusher with venomous fangs.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing + poison (DC 11)."}]',
                '[]',
                'Perception +3, Stealth +7'
            ),
            (
                'gibbering-mouther', 'Gibbering Mouther', 'Medium', 'aberration', null, 'neutral',
                9, 67, '9d8+27', '{"burrow":"10 ft.","walk":"10 ft."}', 1800,
                10, 8, 16, 3, 10, 6,
                ARRAY['A horrific creature composed of mouths and eyes.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'glabrezu', 'Glabrezu', 'Large', 'fiend', 'demon', 'chaotic evil',
                17, 157, '15d10+75', '{"walk":"40 ft."}', 10000,
                20, 15, 21, 19, 17, 16,
                ARRAY['A four-armed demon that tempts with power.'],
                '[{"name":"Pincer", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."}]',
                '[{"name":"Power Word Stun", "desc":"The glabrezu casts this as an innate spell."}]',
                'Deception +8, Insight +7, Perception +7'
            ),
            (
                'gnoll', 'Gnoll', 'Medium', 'humanoid', 'gnoll', 'chaotic evil',
                15, 22, '5d8', '{"walk":"30 ft."}', 100,
                14, 12, 11, 6, 10, 7,
                ARRAY['A savage hyena-like humanoid.'],
                '[{"name":"Spear", "desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'gnome', 'Gnome', 'Small', 'humanoid', 'gnome', 'any alignment',
                15, 9, '2d6+2', '{"walk":"25 ft."}', 50,
                8, 14, 10, 10, 11, 9,
                ARRAY['A curious and clever small humanoid.'],
                '[{"name":"Dagger", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."}]',
                '[]',
                'Investigation +2, Stealth +4'
            ),
            (
                'goblin', 'Goblin', 'Small', 'humanoid', 'goblinoid', 'neutral evil',
                15, 7, '2d6', '{"walk":"30 ft."}', 50,
                8, 14, 10, 10, 8, 8,
                ARRAY['A small, cunning humanoid scavenger.'],
                '[{"name":"Scimitar", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'goblin-boss', 'Goblin Boss', 'Small', 'humanoid', 'goblinoid', 'neutral evil',
                17, 21, '6d6', '{"walk":"30 ft."}', 200,
                10, 14, 10, 10, 10, 10,
                ARRAY['A goblin who rules others through fear and force.'],
                '[{"name":"Multiattack", "desc":"Makes two melee attacks."}]',
                '[]',
                'Intimidation +2, Stealth +6'
            ),
            (
                'gold-dragon-wyrmling', 'Gold Dragon Wyrmling', 'Medium', 'dragon', null, 'lawful good',
                17, 60, '8d8+24', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 1800,
                19, 10, 17, 14, 11, 16,
                ARRAY['A young noble dragon with a breath of fire.'],
                '[{"name":"Fire Breath", "desc":"15 ft. cone, DC 13 Dex save."}]',
                '[]',
                'Perception +4, Stealth +2'
            ),
            (
                'gorgon', 'Gorgon', 'Large', 'monstrosity', null, 'unaligned',
                19, 114, '12d10+48', '{"walk":"40 ft."}', 2300,
                20, 11, 18, 2, 12, 7,
                ARRAY['A bull-like creature that can turn foes to stone with its breath.'],
                '[{"name":"Petrifying Breath", "desc":"30 ft. cone, DC 13 Con save."}]',
                '[]',
                ''
            ),
            (
                'gray-ooze', 'Gray Ooze', 'Medium', 'ooze', null, 'unaligned',
                8, 22, '3d8+9', '{"climb":"10 ft.","walk":"10 ft."}', 100,
                12, 6, 16, 1, 6, 2,
                ARRAY['An acidic blob that dissolves flesh and metal.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning + 4 (1d8) acid."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'green-dragon-wyrmling', 'Green Dragon Wyrmling', 'Medium', 'dragon', null, 'lawful evil',
                17, 38, '7d8', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 700,
                15, 12, 13, 14, 11, 13,
                ARRAY['A young forest-dwelling dragon with a poisonous breath.'],
                '[{"name":"Poison Breath", "desc":"15 ft. cone, DC 11 Con save."}]',
                '[]',
                'Perception +4, Stealth +4'
            ),
            (
                'green-hag', 'Green Hag', 'Medium', 'fey', null, 'neutral evil',
                17, 82, '11d8+33', '{"walk":"30 ft."}', 1800,
                18, 12, 16, 13, 14, 14,
                ARRAY['A wicked fey who delights in cruelty and deception.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."}]',
                '[]',
                'Arcana +3, Deception +6, Perception +3'
            ),
            (
                'griffon', 'Griffon', 'Large', 'monstrosity', null, 'unaligned',
                12, 59, '7d10+21', '{"fly":"80 ft.","walk":"30 ft."}', 1100,
                18, 15, 16, 2, 13, 8,
                ARRAY['A winged beast with the body of a lion and head of an eagle.'],
                '[{"name":"Multiattack", "desc":"Makes two attacks: one with beak and one with claws."}]',
                '[]',
                'Perception +5'
            ),
            (
                'grimlock', 'Grimlock', 'Medium', 'humanoid', 'grimlock', 'neutral evil',
                11, 11, '2d8', '{"walk":"30 ft."}', 25,
                16, 12, 12, 10, 8, 6,
                ARRAY['Blind cave-dwellers with keen hearing and smell.'],
                '[{"name":"Spiked Bone Club", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3, Stealth +5'
            ),
            (
                'guard', 'Guard', 'Medium', 'humanoid', 'any species', 'any alignment',
                16, 11, '2d8+2', '{"walk":"30 ft."}', 25,
                13, 12, 12, 10, 11, 10,
                ARRAY['A trained soldier or city watchman.'],
                '[{"name":"Spear", "desc":"Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Athletics +2'
            ),
            (
                'guardian-naga', 'Guardian Naga', 'Large', 'monstrosity', null, 'lawful good',
                18, 127, '15d10+45', '{"swim":"40 ft.","walk":"40 ft."}', 7200,
                19, 18, 17, 16, 19, 21,
                ARRAY['A benevolent serpent guardian with divine magic.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing + 18 (4d8) poison."}]',
                '[]',
                'Insight +8, Religion +7'
            ),
            (
                'gynosphinx', 'Gynosphinx', 'Large', 'monstrosity', null, 'lawful neutral',
                17, 136, '16d10+48', '{"fly":"60 ft.","walk":"40 ft."}', 7200,
                18, 17, 16, 18, 17, 18,
                ARRAY['A regal sphinx that guards ancient secrets.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d10 + 2) slashing damage."}]',
                '[{"name":"Legendary Resistance", "desc":"Can succeed on a failed saving throw 3/day."}]',
                'Arcana +9, History +9, Perception +10'
            ),
            (
                'half-ogre', 'Half-Ogre', 'Large', 'giant', null, 'neutral evil',
                12, 30, '4d10+8', '{"walk":"30 ft."}', 450,
                19, 8, 14, 6, 10, 7,
                ARRAY['A brutish mix of ogre and human bloodlines.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'harpy', 'Harpy', 'Medium', 'monstrosity', null, 'chaotic evil',
                11, 38, '7d8', '{"fly":"40 ft.","walk":"20 ft."}', 200,
                12, 13, 12, 7, 10, 13,
                ARRAY['A winged creature with a deadly enchanting song.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'hawk', 'Hawk', 'Tiny', 'beast', null, 'unaligned',
                13, 1, '1d4-1', '{"fly":"60 ft.","walk":"5 ft."}', 10,
                5, 16, 8, 2, 14, 6,
                ARRAY['A sharp-eyed raptor that soars above its prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'hell-hound', 'Hell Hound', 'Medium', 'fiend', 'devil', 'lawful evil',
                15, 45, '7d8+14', '{"walk":"50 ft."}', 1100,
                17, 12, 14, 6, 13, 6,
                ARRAY['A fiery canine from the lower planes.'],
                '[{"name":"Fire Breath", "desc":"15 ft. cone, DC 12 Dex save, 21 (6d6) fire damage."}]',
                '[]',
                'Perception +4, Stealth +5'
            ),
            (
                'hezrou', 'Hezrou', 'Large', 'fiend', 'demon', 'chaotic evil',
                16, 136, '13d10+65', '{"walk":"30 ft."}', 3900,
                19, 17, 20, 5, 12, 13,
                ARRAY['A foul-smelling toad-like demon of brute force.'],
                '[{"name":"Multiattack", "desc":"Makes three attacks: one with bite and two with claws."}]',
                '[]',
                'Perception +4'
            ),
                        (
                'hill-giant', 'Hill Giant', 'Huge', 'giant', null, 'chaotic evil',
                13, 105, '10d12+40', '{"walk":"40 ft."}', 1800,
                21, 8, 19, 5, 9, 6,
                ARRAY['A dim-witted but brutally strong giant that raids for food and loot.'],
                '[{"name":"Greatclub","desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning."},{"name":"Rock","desc":"Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 5) bludgeoning."}]',
                '[]',
                'Athletics +8, Perception +2'
            ),
            (
                'hippogriff', 'Hippogriff', 'Large', 'monstrosity', null, 'unaligned',
                11, 19, '3d10+3', '{"fly":"60 ft.","walk":"40 ft."}', 200,
                17, 13, 13, 2, 12, 8,
                ARRAY['A proud creature with the body of a horse and the wings and head of an eagle.'],
                '[{"name":"Beak","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing."},{"name":"Claws","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing."}]',
                '[]',
                'Perception +4'
            ),
            (
                'hobgoblin', 'Hobgoblin', 'Medium', 'humanoid', 'goblinoid', 'lawful evil',
                18, 11, '2d8+2', '{"walk":"30 ft."}', 100,
                13, 12, 12, 10, 10, 9,
                ARRAY['A disciplined goblinoid soldier who fights in formation.'],
                '[{"name":"Longsword","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing, or 6 (1d10 + 1) if used two-handed."}]',
                '[]',
                'Athletics +3, Intimidation +1'
            ),
            (
                'homunculus', 'Homunculus', 'Tiny', 'construct', null, 'neutral',
                13, 5, '2d4', '{"fly":"40 ft.","walk":"20 ft."}', 50,
                4, 15, 11, 10, 10, 7,
                ARRAY['A tiny construct created as a wizard’s familiar and assistant.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing plus 3 (1d6) poison."}]',
                '[]',
                'Perception +2, Stealth +4'
            ),
            (
                'horned-devil', 'Horned Devil', 'Large', 'fiend', 'devil', 'lawful evil',
                18, 148, '16d10+64', '{"fly":"60 ft.","walk":"20 ft."}', 11000,
                22, 17, 20, 12, 16, 17,
                ARRAY['A brutal enforcer of the Nine Hells, bristling with spines and a barbed tail.'],
                '[{"name":"Fork","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing."},{"name":"Tail","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing + 14 (4d6) fire."}]',
                '[{"name":"Infernal Glare","desc":"The devil targets one creature it can see within 10 ft.; DC 14 Wis save or the target is frightened until end of its next turn."}]',
                'Intimidation +8, Perception +7'
            ),
            (
                'hunter-shark', 'Hunter Shark', 'Large', 'beast', null, 'unaligned',
                12, 45, '6d10+12', '{"swim":"40 ft."}', 200,
                18, 13, 15, 1, 10, 4,
                ARRAY['A relentless ocean predator drawn to the scent of blood.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'hydra', 'Hydra', 'Huge', 'monstrosity', null, 'unaligned',
                15, 172, '15d12+75', '{"swim":"30 ft.","walk":"30 ft."}', 3900,
                20, 12, 20, 2, 10, 7,
                ARRAY['A multiheaded reptile; severed heads regrow unless fire cauterizes the wound.'],
                '[{"name":"Multiattack","desc":"The hydra makes as many bite attacks as it has heads."},{"name":"Bite","desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing."}]',
                '[]',
                'Perception +4'
            ),
            (
                'hyena', 'Hyena', 'Small', 'beast', null, 'unaligned',
                11, 5, '1d8+1', '{"walk":"50 ft."}', 10,
                11, 13, 12, 2, 12, 5,
                ARRAY['A scavenging pack-hunter with a mocking cackle.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'imp', 'Imp', 'Tiny', 'fiend', 'devil', 'lawful evil',
                13, 10, '3d4+3', '{"fly":"40 ft.","walk":"20 ft."}', 200,
                6, 17, 13, 11, 12, 14,
                ARRAY['A sneaky devil that serves as a familiar, adept at stings and trickery.'],
                '[{"name":"Sting","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing plus 7 (2d6) poison (DC 11 Con half)."}]',
                '[]',
                'Deception +4, Stealth +5'
            ),
            (
                'invisible-stalker', 'Invisible Stalker', 'Medium', 'elemental', null, 'neutral',
                14, 104, '16d8+32', '{"fly":"50 ft.","walk":"50 ft."}', 2300,
                16, 19, 14, 10, 15, 11,
                ARRAY['An unseen elemental tracker that never yields once on a quarry’s trail.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) bludgeoning."}]',
                '[]',
                'Perception +8, Stealth +10'
            ),
            (
                'iron-golem', 'Iron Golem', 'Large', 'construct', null, 'lawful neutral',
                20, 210, '20d10+100', '{"walk":"30 ft."}', 15000,
                24, 9, 20, 3, 11, 1,
                ARRAY['A hulking construct of iron that belches poison gas and resists magic.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'jackal', 'Jackal', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"walk":"40 ft."}', 10,
                8, 15, 11, 3, 12, 6,
                ARRAY['A wiry scavenger with keen senses and speed.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'jackalwere', 'Jackalwere', 'Medium', 'humanoid', 'shapechanger', 'chaotic evil',
                12, 18, '4d8', '{"walk":"40 ft."}', 100,
                11, 15, 11, 13, 11, 10,
                ARRAY['A jackal-headed trickster that uses sleep magic to waylay prey.'],
                '[{"name":"Scimitar","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing."}]',
                '[]',
                'Deception +2, Stealth +4'
            ),
            (
                'kenku', 'Kenku', 'Medium', 'humanoid', 'kenku', 'chaotic neutral',
                13, 13, '3d8', '{"walk":"30 ft."}', 50,
                10, 16, 10, 11, 10, 10,
                ARRAY['Crow-like mimics who communicate with stolen sounds and gestures.'],
                '[{"name":"Shortsword","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing."}]',
                '[]',
                'Deception +2, Stealth +5'
            ),
            (
                'killer-whale', 'Killer Whale', 'Huge', 'beast', null, 'unaligned',
                12, 90, '12d12+12', '{"swim":"60 ft."}', 1100,
                19, 10, 12, 3, 12, 7,
                ARRAY['A powerful marine hunter that works in coordinated pods.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'knight', 'Knight', 'Medium', 'humanoid', 'any species', 'any lawful alignment',
                18, 52, '8d8+16', '{"walk":"30 ft."}', 700,
                16, 11, 14, 11, 11, 15,
                ARRAY['An armored noble or veteran sworn to a code of chivalry.'],
                '[{"name":"Longsword","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing, or 9 (1d10 + 4) if used two-handed."}]',
                '[]',
                'Persuasion +4, Athletics +5'
            ),
            (
                'kobold', 'Kobold', 'Small', 'humanoid', 'kobold', 'lawful evil',
                12, 5, '2d6-2', '{"walk":"30 ft."}', 25,
                7, 15, 9, 8, 7, 8,
                ARRAY['A small reptilian humanoid that relies on traps and pack tactics.'],
                '[{"name":"Dagger","desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'kraken', 'Kraken', 'Gargantuan', 'monstrosity', null, 'chaotic evil',
                18, 472, '27d20+189', '{"swim":"60 ft.","walk":"20 ft."}', 50000,
                30, 11, 25, 22, 18, 20,
                ARRAY['A primordial sea terror whose storms and tentacles can shatter fleets.'],
                '[{"name":"Tentacle","desc":"Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning and grapple."}]',
                '[{"name":"Fling","desc":"The kraken hurls a grappled creature or object up to 60 feet."}]',
                'Perception +10'
            ),
            (
                'kuo-toa', 'Kuo-Toa', 'Medium', 'humanoid', 'kuo-toa', 'neutral evil',
                13, 18, '4d8', '{"swim":"30 ft.","walk":"30 ft."}', 100,
                13, 10, 11, 11, 10, 8,
                ARRAY['An amphibious fish-folk zealot found in lightless depths.'],
                '[{"name":"Spear","desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'kuo-toa-archpriest', 'Kuo-Toa Archpriest', 'Medium', 'humanoid', 'kuo-toa', 'neutral evil',
                13, 97, '13d8+39', '{"swim":"30 ft.","walk":"30 ft."}', 2300,
                14, 10, 16, 14, 16, 14,
                ARRAY['A fervent kuo-toa hierophant whose mad faith fuels potent miracles.'],
                '[{"name":"Scepter","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning."}]',
                '[]',
                'Insight +6, Religion +6'
            ),
            (
                'lemure', 'Lemure', 'Medium', 'fiend', 'devil', 'lawful evil',
                7, 13, '3d8', '{"walk":"15 ft."}', 10,
                10, 5, 11, 1, 11, 3,
                ARRAY['A mindless mass of infernal flesh, lowest of devilkind.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'lich', 'Lich', 'Medium', 'undead', null, 'any evil alignment',
                17, 135, '18d8+54', '{"walk":"30 ft."}', 33000,
                11, 16, 16, 20, 14, 16,
                ARRAY['An immortal archmage bound to a phylactery, master of deathly magic.'],
                '[{"name":"Paralyzing Touch","desc":"Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage and DC 18 Con save or paralyzed for 1 minute."}]',
                '[{"name":"Legendary Resistance","desc":"If the lich fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Arcana +12, History +12, Insight +8, Perception +8'
            ),
            (
                'lizard', 'Lizard', 'Tiny', 'beast', null, 'unaligned',
                10, 2, '1d4', '{"climb":"20 ft.","walk":"20 ft."}', 10,
                2, 13, 10, 1, 8, 3,
                ARRAY['A small reptile that scampers across rocks and walls.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'lizardfolk', 'Lizardfolk', 'Medium', 'humanoid', 'lizardfolk', 'neutral',
                15, 22, '4d8+4', '{"swim":"30 ft.","walk":"30 ft."}', 100,
                15, 10, 13, 7, 12, 7,
                ARRAY['Stoic reptilian humanoids who craft from bone and scales.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Survival +5'
            ),
            (
                'mage', 'Mage', 'Medium', 'humanoid', 'any species', 'any alignment',
                12, 40, '9d8', '{"walk":"30 ft."}', 2300,
                9, 14, 12, 17, 12, 11,
                ARRAY['A learned spellcaster-for-hire, warded by protective magic.'],
                '[{"name":"Quarterstaff","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning, or 4 (1d8) if two-handed."}]',
                '[]',
                'Arcana +6, History +6'
            ),
            (
                'magma-mephit', 'Magma Mephit', 'Small', 'elemental', null, 'neutral evil',
                11, 22, '5d6+5', '{"fly":"30 ft.","walk":"30 ft."}', 100,
                8, 12, 12, 7, 10, 10,
                ARRAY['A sizzling sprite of molten rock that spatters fiery sludge.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing + 2 (1d4) fire."}]',
                '[]',
                ''
            ),
            (
                'magmin', 'Magmin', 'Small', 'elemental', null, 'chaotic neutral',
                14, 9, '2d6+2', '{"walk":"30 ft."}', 100,
                7, 15, 12, 8, 11, 10,
                ARRAY['A mischievous emberkin that sets the world alight wherever it dances.'],
                '[{"name":"Touch","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage and ignites flammable objects."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'mammoth', 'Mammoth', 'Huge', 'beast', null, 'unaligned',
                13, 126, '11d12+55', '{"walk":"40 ft."}', 2300,
                24, 9, 21, 3, 11, 6,
                ARRAY['A towering woolly behemoth with curving tusks.'],
                '[{"name":"Gore","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'manticore', 'Manticore', 'Large', 'monstrosity', null, 'lawful evil',
                14, 68, '8d10+24', '{"fly":"50 ft.","walk":"30 ft."}', 700,
                17, 16, 17, 7, 12, 8,
                ARRAY['A leonine hunter with bat wings and a tail that fires iron spikes.'],
                '[{"name":"Multiattack","desc":"The manticore makes three attacks: one with its bite and two with its claws or three with tail spikes."}]',
                '[]',
                'Perception +4'
            ),
            (
                'marilith', 'Marilith', 'Large', 'fiend', 'demon', 'chaotic evil',
                18, 189, '18d10+90', '{"walk":"40 ft."}', 15000,
                18, 20, 20, 18, 16, 20,
                ARRAY['A six-armed serpent-bodied general of the Abyss.'],
                '[{"name":"Multiattack","desc":"The marilith makes six longsword attacks and one tail attack."}]',
                '[{"name":"Teleport","desc":"The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."}]',
                'Deception +9, Insight +8'
            ),
            (
                'mastiff', 'Mastiff', 'Medium', 'beast', null, 'unaligned',
                12, 5, '1d8+1', '{"walk":"40 ft."}', 25,
                13, 14, 12, 3, 12, 7,
                ARRAY['A loyal guard dog with a crushing bite.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'medusa', 'Medusa', 'Medium', 'monstrosity', null, 'lawful evil',
                15, 127, '15d8+60', '{"walk":"30 ft."}', 2300,
                10, 15, 16, 12, 13, 15,
                ARRAY['A cursed humanoid with serpents for hair and a petrifying gaze.'],
                '[{"name":"Shortsword","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing."},{"name":"Longbow","desc":"Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing + 7 (2d6) poison."}]',
                '[]',
                'Deception +5, Perception +4, Stealth +5'
            ),
            (
                'merfolk', 'Merfolk', 'Medium', 'humanoid', 'merfolk', 'neutral',
                11, 11, '2d8+2', '{"swim":"40 ft.","walk":"10 ft."}', 25,
                10, 13, 12, 11, 11, 12,
                ARRAY['A sea-dwelling humanoid with a fishlike tail and keen trident work.'],
                '[{"name":"Spear","desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'merrow', 'Merrow', 'Large', 'monstrosity', null, 'chaotic evil',
                13, 45, '6d10+12', '{"swim":"40 ft.","walk":"10 ft."}', 450,
                18, 10, 15, 8, 10, 9,
                ARRAY['A savage aquatic ogre that drags prey into the depths.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'mimic', 'Mimic', 'Medium', 'monstrosity', null, 'neutral',
                12, 58, '9d8+18', '{"walk":"15 ft."}', 450,
                17, 12, 15, 5, 13, 8,
                ARRAY['A shapeshifting predator that disguises itself as objects, often chests or doors.'],
                '[{"name":"Pseudopod","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning plus 4 (1d8) acid."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'minotaur', 'Minotaur', 'Large', 'monstrosity', null, 'chaotic evil',
                14, 76, '9d10+27', '{"walk":"40 ft."}', 700,
                18, 11, 16, 6, 16, 9,
                ARRAY['A horned labyrinth-stalker that characterges with devastating force.'],
                '[{"name":"Greataxe","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing."}]',
                '[]',
                'Perception +5'
            ),
            (
                'minotaur-skeleton', 'Minotaur Skeleton', 'Large', 'undead', null, 'lawful evil',
                12, 67, '9d10+18', '{"walk":"40 ft."}', 450,
                18, 11, 15, 6, 8, 5,
                ARRAY['The animated bones of a minotaur, still relentless in pursuit.'],
                '[{"name":"Greataxe","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing."}]',
                '[]',
                ''
            ),
            (
                'mule', 'Mule', 'Medium', 'beast', null, 'unaligned',
                10, 11, '2d8+2', '{"walk":"40 ft."}', 25,
                14, 10, 13, 2, 10, 5,
                ARRAY['A hardy pack animal prized for endurance.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'mummy', 'Mummy', 'Medium', 'undead', null, 'lawful evil',
                11, 58, '9d8+18', '{"walk":"20 ft."}', 700,
                16, 8, 15, 6, 10, 12,
                ARRAY['A desiccated, bandage-wrapped guardian cursed with necrotic power.'],
                '[{"name":"Rotting Fist","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning + 10 (3d6) necrotic; DC 12 Con save or mummy rot."}]',
                '[]',
                'Intimidation +3'
            ),
                        (
                'mummy-lord', 'Mummy Lord', 'Medium', 'undead', null, 'lawful evil',
                17, 97, '13d8+39', '{"walk":"20 ft."}', 13000,
                18, 10, 17, 11, 18, 16,
                ARRAY['A high priest preserved by dark rites; commands plagues and curses from its tomb.'],
                '[{"name":"Rotting Fist","desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 14 (3d6 + 4) bludgeoning + 21 (6d6) necrotic; DC 16 Con save vs. mummy rot."}]',
                '[{"name":"Legendary Resistance","desc":"If the mummy lord fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Religion +7, Insight +7'
            ),
            (
                'nightmare', 'Nightmare', 'Large', 'fiend', null, 'neutral evil',
                13, 68, '8d10+24', '{"fly":"90 ft.","walk":"60 ft."}', 700,
                18, 15, 16, 10, 12, 13,
                ARRAY['A hell-forged steed wreathed in smoke and flame.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning + 7 (2d6) fire."}]',
                '[]',
                'Perception +3'
            ),
            (
                'night-hag', 'Night Hag', 'Medium', 'fiend', 'hag', 'neutral evil',
                17, 112, '15d8+45', '{"walk":"30 ft."}', 1800,
                18, 15, 16, 16, 14, 16,
                ARRAY['A soul-trading hag that prowls dreams and the Ethereal.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing."}]',
                '[]',
                'Deception +6, Insight +5'
            ),
            (
                'nothic', 'Nothic', 'Medium', 'aberration', null, 'neutral evil',
                15, 45, '6d8+18', '{"walk":"30 ft."}', 450,
                14, 16, 16, 13, 10, 8,
                ARRAY['A warped, one-eyed seer that pries secrets with a baleful gaze.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing."}]',
                '[]',
                'Arcana +3, Insight +2'
            ),
            (
                'ochre-jelly', 'Ochre Jelly', 'Large', 'ooze', null, 'unaligned',
                8, 45, '6d10+12', '{"climb":"10 ft.","walk":"10 ft."}', 450,
                15, 6, 14, 2, 6, 1,
                ARRAY['A corrosive blob that splits when slashed and dissolves metal and flesh.'],
                '[{"name":"Pseudopod","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning + 7 (2d6) acid."}]',
                '[]',
                ''
            ),
            (
                'octopus', 'Octopus', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"swim":"30 ft.","walk":"5 ft."}', 10,
                4, 15, 11, 2, 10, 4,
                ARRAY['A small cephalopod that jets through water and clouds it with ink.'],
                '[{"name":"Tentacles","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning and grapple (escape DC 10)."}]',
                '[]',
                'Stealth +4, Perception +2'
            ),
            (
                'ogre', 'Ogre', 'Large', 'giant', null, 'chaotic evil',
                11, 59, '7d10+21', '{"walk":"40 ft."}', 450,
                19, 8, 16, 5, 7, 7,
                ARRAY['A hulking brute that smashes foes with a tree-sized club.'],
                '[{"name":"Greatclub","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning."}]',
                '[]',
                'Athletics +6'
            ),
            (
                'ogre-zombie', 'Ogre Zombie', 'Large', 'undead', null, 'neutral evil',
                8, 85, '9d10+27', '{"walk":"30 ft."}', 450,
                19, 6, 18, 3, 6, 5,
                ARRAY['A reanimated ogre that shambles on with grim resilience.'],
                '[{"name":"Morningstar","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing."}]',
                '[]',
                ''
            ),
            (
                'oni', 'Oni', 'Large', 'giant', null, 'lawful evil',
                16, 110, '13d10+39', '{"fly":"30 ft.","walk":"30 ft."}', 2900,
                19, 11, 16, 14, 12, 15,
                ARRAY['Also called ogre mages—deceptive, flying giants with spell-like powers.'],
                '[{"name":"Glaive","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing."}]',
                '[]',
                'Deception +6'
            ),
            (
                'orc', 'Orc', 'Medium', 'humanoid', 'orc', 'chaotic evil',
                13, 15, '2d8+6', '{"walk":"30 ft."}', 100,
                16, 12, 16, 7, 11, 10,
                ARRAY['A brutal raider driven by bloodlust and tribal pride.'],
                '[{"name":"Greataxe","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'orc-warchief', 'Orc Warchief', 'Medium', 'humanoid', 'orc', 'chaotic evil',
                16, 93, '11d8+44', '{"walk":"30 ft."}', 1100,
                18, 12, 18, 11, 11, 16,
                ARRAY['A ruthless orc leader who drives warriors into a killing frenzy.'],
                '[{"name":"Greataxe","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (1d12 + 4) slashing."}]',
                '[]',
                'Intimidation +5'
            ),
            (
                'otyugh', 'Otyugh', 'Large', 'aberration', null, 'neutral',
                14, 114, '12d10+48', '{"walk":"30 ft."}', 1800,
                16, 11, 19, 6, 13, 6,
                ARRAY['A filth-dwelling scavenger with three tentacles and a slavering maw.'],
                '[{"name":"Tentacle","desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 3) bludgeoning and grapple."}]',
                '[]',
                'Perception +3'
            ),
            (
                'owl', 'Owl', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"fly":"60 ft.","walk":"5 ft."}', 10,
                3, 13, 8, 2, 12, 7,
                ARRAY['A silent night hunter with keen hearing and sight.'],
                '[{"name":"Talons","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing."}]',
                '[]',
                'Perception +5, Stealth +3'
            ),
            (
                'owlbear', 'Owlbear', 'Large', 'monstrosity', null, 'unaligned',
                13, 59, '7d10+21', '{"walk":"40 ft."}', 700,
                20, 12, 17, 3, 12, 7,
                ARRAY['A ferocious cross of bear and owl that tears prey apart.'],
                '[{"name":"Multiattack","desc":"The owlbear makes two attacks: one with its beak and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'panther', 'Panther', 'Medium', 'beast', null, 'unaligned',
                12, 13, '3d8', '{"climb":"40 ft.","walk":"50 ft."}', 50,
                14, 15, 10, 3, 14, 7,
                ARRAY['A sleek ambusher that pounces from branches and undergrowth.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Perception +4, Stealth +6'
            ),
            (
                'pegasus', 'Pegasus', 'Large', 'celestial', null, 'chaotic good',
                12, 59, '7d10+21', '{"fly":"90 ft.","walk":"60 ft."}', 450,
                18, 15, 16, 10, 15, 13,
                ARRAY['A winged steed of purest virtue that soars the heavens.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning."}]',
                '[]',
                'Perception +5'
            ),
            (
                'phase-spider', 'Phase Spider', 'Large', 'monstrosity', null, 'neutral',
                13, 32, '5d10', '{"climb":"30 ft.","walk":"30 ft."}', 700,
                15, 15, 12, 6, 10, 6,
                ARRAY['An ethereal-hopping spider that ambushes from another plane.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing + 10 (3d6) poison."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'piercer', 'Piercer', 'Medium', 'monstrosity', null, 'unaligned',
                15, 22, '4d8+4', '{"climb":"5 ft.","walk":"5 ft."}', 200,
                10, 13, 12, 1, 7, 3,
                ARRAY['A stalactite-mimicking ambusher that drops on prey from cave ceilings.'],
                '[{"name":"Drop","desc":"The piercer drops onto a creature beneath it; on a hit, takes 10 (3d6) bludgeoning and the target takes 10 (3d6) piercing."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'plesiosaurus', 'Plesiosaurus', 'Large', 'beast', null, 'unaligned',
                13, 68, '8d10+24', '{"swim":"40 ft.","walk":"20 ft."}', 700,
                18, 15, 16, 2, 12, 5,
                ARRAY['A long-necked marine reptile that lunges from the depths.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing."}]',
                '[]',
                'Perception +3'
            ),
                        (
                'poisonous-snake', 'Poisonous Snake', 'Tiny', 'beast', null, 'unaligned',
                13, 2, '1d4', '{"swim":"30 ft.","walk":"30 ft."}', 25,
                2, 16, 11, 1, 10, 3,
                ARRAY['A small serpent whose venomous bite can fell larger prey.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 1 piercing + 5 (2d4) poison; DC 10 Con save for half."}]',
                '[]',
                'Perception +2'
            ),
            (
                'polar-bear', 'Polar Bear', 'Large', 'beast', null, 'unaligned',
                12, 42, '5d10+15', '{"swim":"40 ft.","walk":"40 ft."}', 450,
                20, 10, 16, 2, 13, 7,
                ARRAY['A white-furred predator of arctic seas and ice floes.'],
                '[{"name":"Multiattack","desc":"The bear makes two attacks: one with its bite and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'pony', 'Pony', 'Medium', 'beast', null, 'unaligned',
                10, 11, '2d8+2', '{"walk":"40 ft."}', 25,
                13, 10, 12, 2, 11, 7,
                ARRAY['A sturdy small horse used for riding or burden.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'priest', 'Priest', 'Medium', 'humanoid', 'any species', 'any alignment',
                13, 27, '5d8+5', '{"walk":"30 ft."}', 450,
                10, 10, 12, 13, 16, 13,
                ARRAY['A cleric devoted to the gods, channeling divine magic.'],
                '[{"name":"Mace","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning."}]',
                '[]',
                'Medicine +5, Religion +4'
            ),
            (
                'pseudodragon', 'Pseudodragon', 'Tiny', 'dragon', null, 'neutral good',
                13, 7, '2d4+2', '{"fly":"60 ft.","walk":"15 ft."}', 50,
                6, 15, 13, 10, 12, 10,
                ARRAY['A cat-sized, dragonlike familiar with a barbed, poisonous stinger.'],
                '[{"name":"Sting","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing + 3 (1d6) poison; DC 11 Con save or poisoned 1 hour, unconscious while poisoned."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'purple-worm', 'Purple Worm', 'Gargantuan', 'monstrosity', null, 'unaligned',
                18, 247, '15d20+90', '{"burrow":"30 ft.","walk":"50 ft."}', 15000,
                28, 7, 22, 1, 8, 4,
                ARRAY['A titanic tunneler that devours earth, stone, and prey alike.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing, and if target is Medium or smaller it is swallowed."}]',
                '[]',
                'Perception +4'
            ),
            (
                'quasit', 'Quasit', 'Tiny', 'fiend', 'demon', 'chaotic evil',
                13, 7, '3d4', '{"climb":"20 ft.","fly":"40 ft.","walk":"40 ft."}', 200,
                5, 17, 10, 7, 10, 10,
                ARRAY['A minor demon that delights in invisibility, terror, and mischief.'],
                '[{"name":"Claw","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) slashing + 3 (1d6) poison; DC 10 Con save or poisoned 1 minute."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'quipper', 'Quipper', 'Tiny', 'beast', null, 'unaligned',
                13, 1, '1d4-1', '{"swim":"40 ft."}', 10,
                2, 16, 9, 1, 7, 2,
                ARRAY['A ravenous fish that swarms in schools, stripping prey to bone.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing."}]',
                '[]',
                ''
            ),
            (
                'rakshasa', 'Rakshasa', 'Medium', 'fiend', null, 'lawful evil',
                16, 110, '13d8+52', '{"walk":"40 ft."}', 10000,
                13, 17, 18, 13, 16, 20,
                ARRAY['A tiger-headed sorcerer-fiend, master of illusion and enchantment.'],
                '[{"name":"Claw","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing + curse (disadv. on saves vs. spell)."}]',
                '[]',
                'Deception +10, Insight +8'
            ),
            (
                'rat', 'Rat', 'Tiny', 'beast', null, 'unaligned',
                10, 1, '1d4-1', '{"walk":"20 ft."}', 10,
                2, 11, 9, 2, 10, 4,
                ARRAY['A small scavenger found in nearly all settlements.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing."}]',
                '[]',
                'Perception +0'
            ),
            (
                'raven', 'Raven', 'Tiny', 'beast', null, 'unaligned',
                12, 1, '1d4-1', '{"fly":"50 ft.","walk":"10 ft."}', 10,
                2, 14, 8, 2, 12, 6,
                ARRAY['A clever black bird known for mimicry and omens.'],
                '[{"name":"Beak","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'red-dragon-wyrmling', 'Red Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic evil',
                17, 75, '10d8+30', '{"fly":"60 ft.","walk":"30 ft."}', 2300,
                19, 10, 17, 12, 11, 15,
                ARRAY['A young but terrifying red dragon, breathing fire even in infancy.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing + 3 (1d6) fire."}]',
                '[]',
                'Perception +4, Stealth +2'
            ),
            (
                'reef-shark', 'Reef Shark', 'Medium', 'beast', null, 'unaligned',
                12, 22, '4d8+4', '{"swim":"40 ft."}', 100,
                14, 13, 13, 1, 10, 4,
                ARRAY['A mid-sized ocean predator, often in hunting packs.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'remorhaz', 'Remorhaz', 'Huge', 'monstrosity', null, 'unaligned',
                17, 195, '17d12+85', '{"burrow":"20 ft.","walk":"30 ft."}', 10000,
                24, 13, 21, 4, 10, 5,
                ARRAY['A colossal arctic predator, its body searing with internal fire.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'rhinoceros', 'Rhinoceros', 'Large', 'beast', null, 'unaligned',
                11, 45, '6d10+12', '{"walk":"40 ft."}', 200,
                21, 8, 15, 2, 12, 6,
                ARRAY['A thick-skinned herbivore that characterges with a deadly horn.'],
                '[{"name":"Gore","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning."}]',
                '[]',
                'Perception +2'
            ),
            (
                'roc', 'Roc', 'Gargantuan', 'monstrosity', null, 'unaligned',
                15, 248, '16d20+80', '{"fly":"120 ft.","walk":"20 ft."}', 33000,
                28, 10, 20, 3, 10, 9,
                ARRAY['A monstrous bird of legend, big enough to carry off elephants.'],
                '[{"name":"Beak","desc":"Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing."}]',
                '[]',
                'Perception +4'
            ),
            (
                'rook', 'Rook', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"fly":"40 ft.","walk":"10 ft."}', 25,
                8, 15, 10, 2, 12, 6,
                ARRAY['A black-plumed scavenger bird found near battlefields.'],
                '[{"name":"Beak","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'rug-of-smothering', 'Rug of Smothering', 'Large', 'construct', null, 'unaligned',
                12, 33, '6d10', '{"walk":"10 ft."}', 450,
                17, 14, 10, 1, 3, 1,
                ARRAY['A cursed carpet that animates to wrap and suffocate victims.'],
                '[{"name":"Smother","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: target is grappled (escape DC 13), restrained, blinded, and at risk of suffocation."}]',
                '[]',
                ''
            ),
                        (
                'rust-monster', 'Rust Monster', 'Medium', 'monstrosity', null, 'unaligned',
                14, 27, '5d8+5', '{"walk":"40 ft."}', 100,
                13, 12, 13, 2, 13, 6,
                ARRAY['An insectile hunter that corrodes metal with its antennae.'],
                '[{"name":"Antennae","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target wearing or carrying metal. Hit: The target\'s nonmagical metal corrodes."}]',
                '[]',
                'Perception +3'
            ),
            (
                'saber-toothed-tiger', 'Saber-Toothed Tiger', 'Large', 'beast', null, 'unaligned',
                12, 52, '7d10+14', '{"walk":"40 ft."}', 450,
                18, 14, 15, 3, 12, 8,
                ARRAY['A powerful prehistoric cat that ambushes with a devastating pounce.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (1d10 + 7) piercing."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
            (
                'sahuagin', 'Sahuagin', 'Medium', 'humanoid', 'sahuagin', 'lawful evil',
                12, 22, '4d8+4', '{"swim":"40 ft.","walk":"30 ft."}', 100,
                13, 11, 12, 12, 13, 9,
                ARRAY['Shark-worshiping raiders of the deep, swift and cruel.'],
                '[{"name":"Spear","desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Perception +5'
            ),
            (
                'sahuagin-priestess', 'Sahuagin Priestess', 'Medium', 'humanoid', 'sahuagin', 'lawful evil',
                12, 33, '6d8+6', '{"swim":"40 ft.","walk":"30 ft."}', 450,
                13, 11, 12, 12, 15, 13,
                ARRAY['A fanatical sahuagin matriarch who wields dark oceanic rites.'],
                '[{"name":"Scepter","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning."}]',
                '[]',
                'Insight +4, Religion +4'
            ),
            (
                'salamander', 'Salamander', 'Large', 'elemental', null, 'neutral evil',
                15, 90, '12d10+24', '{"walk":"30 ft."}', 1800,
                18, 14, 15, 11, 10, 12,
                ARRAY['A serpentine being of living fire that sears with its heated weapon.'],
                '[{"name":"Spear","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (1d8 + 7) piercing + 7 (2d6) fire."}]',
                '[]',
                ''
            ),
            (
                'satyr', 'Satyr', 'Medium', 'fey', null, 'chaotic neutral',
                14, 31, '7d8', '{"walk":"40 ft."}', 100,
                12, 16, 11, 12, 10, 14,
                ARRAY['A capering reveler whose music and tricks beguile travelers.'],
                '[{"name":"Ram","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning."}]',
                '[]',
                'Performance +6, Stealth +5'
            ),
            (
                'scarecrow', 'Scarecrow', 'Medium', 'construct', null, 'chaotic evil',
                11, 36, '8d8', '{"walk":"30 ft."}', 200,
                11, 13, 11, 10, 10, 7,
                ARRAY['A straw-filled terror animated by dark harvest magic.'],
                '[{"name":"Claw","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing."}]',
                '[]',
                ''
            ),
            (
                'scorpion', 'Scorpion', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"climb":"10 ft.","walk":"10 ft."}', 10,
                2, 11, 8, 1, 8, 2,
                ARRAY['A small desert arachnid with a venomous sting.'],
                '[{"name":"Sting","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing + 2 (1d4) poison."}]',
                '[]',
                ''
            ),
            (
                'scout', 'Scout', 'Medium', 'humanoid', 'any species', 'any alignment',
                13, 16, '3d8+3', '{"walk":"30 ft."}', 100,
                11, 14, 12, 11, 13, 11,
                ARRAY['A lightly armored skirmisher who maps routes and strikes from range.'],
                '[{"name":"Shortsword","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Nature +4, Perception +5, Stealth +6, Survival +5'
            ),
            (
                'sea-hag', 'Sea Hag', 'Medium', 'fey', null, 'chaotic evil',
                14, 52, '7d8+21', '{"swim":"40 ft.","walk":"30 ft."}', 450,
                16, 13, 16, 12, 12, 13,
                ARRAY['An ugly crone of the surf whose horrid visage saps courage.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'sea-horse', 'Sea Horse', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"swim":"20 ft."}', 10,
                1, 12, 8, 1, 10, 2,
                ARRAY['A tiny seahorse that drifts among sea grasses.'],
                '[{"name":"Ram","desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'shadow', 'Shadow', 'Medium', 'undead', null, 'chaotic evil',
                12, 16, '3d8+3', '{"walk":"40 ft."}', 100,
                6, 14, 13, 6, 10, 8,
                ARRAY['A living darkness that drains the strength of the living.'],
                '[{"name":"Strength Drain","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) necrotic; target\'s Str reduced by 1d4."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'shadow-demon', 'Shadow Demon', 'Medium', 'fiend', 'demon', 'chaotic evil',
                13, 66, '12d8+12', '{"fly":"30 ft.","walk":"30 ft."}', 1100,
                1, 22, 12, 14, 13, 14,
                ARRAY['A bodiless fiend of gloom and terror, difficult to strike.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) psychic."}]',
                '[]',
                'Stealth +9, Perception +4'
            ),
            (
                'shambling-mound', 'Shambling Mound', 'Large', 'plant', null, 'unaligned',
                15, 136, '16d10+48', '{"swim":"20 ft.","walk":"20 ft."}', 1800,
                18, 8, 16, 5, 10, 5,
                ARRAY['A rotting heap of vegetation animated by primal wrath.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning; if both slams hit, the target is grappled (escape DC 14)."}]',
                '[]',
                ''
            ),
            (
                'shield-guardian', 'Shield Guardian', 'Large', 'construct', null, 'neutral',
                17, 142, '15d10+60', '{"walk":"30 ft."}', 2900,
                18, 8, 18, 7, 10, 3,
                ARRAY['A towering bodyguard bound to an amulet, absorbing harm for its master.'],
                '[{"name":"Fist","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning."}]',
                '[]',
                'Perception +4'
            ),
            (
                'shrieker', 'Shrieker', 'Medium', 'plant', null, 'unaligned',
                5, 13, '3d8', '{"walk":"0 ft."}', 10,
                1, 1, 10, 1, 3, 1,
                ARRAY['A fungus that emits a piercing cry when light or movement is near.'],
                '[{"name":"Shriek","desc":"When bright light or a creature is within 30 ft., the shrieker emits a loud noise until the stimulus ends."}]',
                '[]',
                ''
            ),
            (
                'skeleton', 'Skeleton', 'Medium', 'undead', null, 'lawful evil',
                13, 13, '2d8+4', '{"walk":"30 ft."}', 50,
                10, 14, 15, 6, 8, 5,
                ARRAY['An animated pile of bones that obeys necromantic commands.'],
                '[{"name":"Shortsword","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'solar', 'Solar', 'Large', 'celestial', null, 'lawful good',
                21, 243, '18d10+144', '{"fly":"150 ft.","walk":"50 ft."}', 33000,
                26, 22, 26, 25, 25, 30,
                ARRAY['A supreme angelic champion whose radiance lays low the wicked.'],
                '[{"name":"Greatsword","desc":"Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing + 27 (6d8) radiant."}]',
                '[{"name":"Legendary Resistance","desc":"If the solar fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Insight +14, Perception +14'
            ),
            (
                'specter', 'Specter', 'Medium', 'undead', null, 'chaotic evil',
                12, 22, '5d8', '{"fly":"50 ft.","hover":true}', 200,
                1, 14, 11, 10, 10, 11,
                ARRAY['A vengeful spirit ripped from its mortal shell.'],
                '[{"name":"Life Drain","desc":"Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic; DC 10 Con save or hit point maximum is reduced."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'spider', 'Spider', 'Tiny', 'beast', null, 'unaligned',
                12, 1, '1d4-1', '{"climb":"20 ft.","walk":"20 ft."}', 10,
                2, 14, 8, 1, 10, 2,
                ARRAY['A small arachnid that creeps along walls and ceilings.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing + 3 (1d6) poison."}]',
                '[]',
                'Stealth +4'
            ),
                        (
                'spirit-naga', 'Spirit Naga', 'Large', 'monstrosity', null, 'chaotic evil',
                15, 75, '10d10+20', '{"walk":"40 ft."}', 3900,
                18, 17, 14, 16, 15, 16,
                ARRAY['A serpentine naga steeped in dark magic and malice.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 10 (1d8 + 6) piercing plus 7 (2d6) poison damage."}]',
                '[]',
                'Arcana +6, Perception +5'
            ),
            (
                'sprite', 'Sprite', 'Tiny', 'fey', null, 'neutral good',
                15, 2, '1d4', '{"fly":"40 ft.","walk":"10 ft."}', 25,
                3, 18, 10, 14, 13, 11,
                ARRAY['A diminutive winged fey with a sharp sense of justice.'],
                '[{"name":"Shortbow","desc":"Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned."}]',
                '[]',
                'Perception +3, Stealth +8'
            ),
            (
                'stag', 'Stag', 'Large', 'beast', null, 'unaligned',
                12, 32, '5d10+5', '{"walk":"50 ft."}', 200,
                16, 14, 12, 2, 12, 6,
                ARRAY['A majestic deer with impressive antlers.'],
                '[{"name":"Ram","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'steam-mephit', 'Steam Mephit', 'Small', 'elemental', null, 'neutral evil',
                10, 21, '6d6', '{"fly":"30 ft.","walk":"30 ft."}', 100,
                5, 11, 10, 11, 10, 12,
                ARRAY['A small elemental trickster exuding scalding steam.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'stirge', 'Stirge', 'Tiny', 'beast', null, 'unaligned',
                14, 2, '1d4', '{"fly":"40 ft."}', 25,
                4, 16, 11, 2, 8, 6,
                ARRAY['A horrid bat-like creature that drains the blood of its victims.'],
                '[{"name":"Blood Drain","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'stone-giant', 'Stone Giant', 'Huge', 'giant', null, 'neutral',
                17, 126, '11d12+55', '{"walk":"40 ft."}', 3900,
                23, 15, 20, 10, 12, 9,
                ARRAY['A reclusive giant that dwells among rocks and caves.'],
                '[{"name":"Greatclub","desc":"Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."}]',
                '[]',
                'Athletics +9, Perception +5'
            ),
            (
                'stone-golem', 'Stone Golem', 'Large', 'construct', null, 'unaligned',
                17, 178, '17d10+85', '{"walk":"30 ft."}', 7200,
                22, 9, 20, 10, 11, 11,
                ARRAY['A massive humanoid statue animated to guard sacred places.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'storm-giant', 'Storm Giant', 'Huge', 'giant', null, 'chaotic good',
                16, 230, '20d12+100', '{"swim":"50 ft.","walk":"50 ft."}', 25000,
                29, 14, 20, 16, 18, 18,
                ARRAY['A towering giant who wields thunder and lightning in battle.'],
                '[{"name":"Greatsword","desc":"Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 30 (6d6 + 9) slashing damage."}]',
                '[{"name":"Legendary Resistance","desc":"If the storm giant fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Arcana +9, Perception +9'
            ),
            (
                'succubus', 'Succubus/Incubus', 'Medium', 'fiend', 'demon', 'neutral evil',
                15, 66, '12d8+12', '{"fly":"60 ft.","walk":"30 ft."}', 1800,
                8, 17, 13, 15, 12, 20,
                ARRAY['A fiend who tempts mortals with beauty and drains their life force.'],
                '[{"name":"Characterm","desc":"The fiend targets one humanoid it can see within 30 ft. The target must succeed on a DC 15 Wisdom saving throw or be magically charactermed."}]',
                '[]',
                'Deception +9, Persuasion +9'
            ),
            (
                'swarm-of-bats', 'Swarm of Bats', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                12, 22, '5d8', '{"fly":"30 ft."}', 100,
                5, 15, 10, 2, 12, 4,
                ARRAY['A cloud of bats that wheels and bites as one.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'swarm-of-beetles', 'Swarm of Insects (Beetles)', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                12, 22, '5d8', '{"walk":"20 ft.","climb":"20 ft."}', 100,
                3, 13, 10, 1, 7, 1,
                ARRAY['A crawling carpet of beetles that bites and chews in unison.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage."}]',
                '[]',
                'Stealth +3'
            ),
            (
                'swarm-of-centipedes', 'Swarm of Insects (Centipedes)', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                12, 22, '5d8', '{"walk":"20 ft.","climb":"20 ft."}', 100,
                3, 13, 10, 1, 7, 1,
                ARRAY['A writhing mass of venomous centipedes that bites in concert.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage."}]',
                '[]',
                'Stealth +3'
            ),
            (
                'swarm-of-poisonous-snakes', 'Swarm of Poisonous Snakes', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                14, 36, '8d8', '{"swim":"30 ft.","walk":"30 ft."}', 200,
                8, 18, 11, 1, 10, 3,
                ARRAY['A tangle of serpents that strikes with many fangs.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +6 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 14 (4d6) piercing damage plus 14 (4d6) poison."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'swarm-of-quippers', 'Swarm of Quippers', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                13, 28, '8d8-8', '{"swim":"40 ft."}', 200,
                13, 16, 9, 1, 7, 2,
                ARRAY['A feeding frenzy of vicious piranha-like fish.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +5 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 14 (4d6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'swarm-of-rats', 'Swarm of Rats', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                10, 24, '7d8-7', '{"walk":"30 ft."}', 50,
                9, 11, 9, 2, 10, 4,
                ARRAY['A wriggling pack of rats that bites and overwhelms.'],
                '[{"name":"Bites","desc":"Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 7 (2d6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'swarm-of-ravens', 'Swarm of Ravens', 'Medium', 'swarm of Tiny beasts', null, 'unaligned',
                12, 24, '7d8-7', '{"fly":"50 ft."}', 50,
                6, 14, 8, 3, 12, 6,
                ARRAY['A black cloud of ravens that descends on prey in a frenzy.'],
                '[{"name":"Beaks","desc":"Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 7 (2d6) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'tarrasque', 'Tarrasque', 'Gargantuan', 'monstrosity', null, 'unaligned',
                25, 676, '33d20+330', '{"walk":"40 ft."}', 155000,
                30, 11, 30, 3, 11, 11,
                ARRAY['The most dreaded monster of the Material Plane, nearly unstoppable.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage."}]',
                '[{"name":"Legendary Resistance","desc":"If the tarrasque fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Perception +10'
            ),
            (
                'thug', 'Thug', 'Medium', 'humanoid', 'any species', 'any non-good alignment',
                11, 32, '5d8+10', '{"walk":"30 ft."}', 100,
                15, 11, 14, 10, 10, 11,
                ARRAY['A violent criminal who fights dirty with pack tactics.'],
                '[{"name":"Mace","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'tiger', 'Tiger', 'Large', 'beast', null, 'unaligned',
                12, 37, '5d10+10', '{"walk":"40 ft.","swim":"20 ft."}', 200,
                17, 15, 14, 3, 12, 8,
                ARRAY['A stealthy big cat that stalks and pounces on prey.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
                        (
                'titan', 'Titan', 'Huge', 'celestial', null, 'neutral good',
                20, 280, '20d12+120', '{"walk":"40 ft."}', 25000,
                30, 12, 22, 16, 18, 18,
                ARRAY['A god-touched giant of staggering power and ancient wisdom.'],
                '[{"name":"Greatsword","desc":"Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (4d6 + 10) slashing."},{"name":"Rock","desc":"Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (6d10 + 8) bludgeoning."}]',
                '[{"name":"Legendary Resistance","desc":"If the titan fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Insight +10, Perception +10'
            ),
            (
                'treant', 'Treant', 'Huge', 'plant', null, 'chaotic good',
                16, 138, '12d12+60', '{"walk":"30 ft."}', 5000,
                23, 8, 21, 12, 16, 12,
                ARRAY['An awakened tree guardian that strides to defend the forest.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning."},{"name":"Rock","desc":"Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning."}]',
                '[]',
                'Perception +6'
            ),
            (
                'tribal-warrior', 'Tribal Warrior', 'Medium', 'humanoid', 'any species', 'any alignment',
                12, 11, '2d8+2', '{"walk":"30 ft."}', 25,
                13, 12, 12, 8, 11, 8,
                ARRAY['A clan fighter who defends their people with spear and shield.'],
                '[{"name":"Spear","desc":"Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Athletics +3, Intimidation +2'
            ),
            (
                'triceratops', 'Triceratops', 'Huge', 'beast', null, 'unaligned',
                13, 95, '10d12+30', '{"walk":"50 ft."}', 1800,
                22, 9, 17, 2, 11, 5,
                ARRAY['A massive three-horned dinosaur that characterges with unstoppable force.'],
                '[{"name":"Gore","desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing."}]',
                '[]',
                ''
            ),
            (
                'troglodyte', 'Troglodyte', 'Medium', 'humanoid', 'troglodyte', 'chaotic evil',
                11, 13, '2d8+4', '{"walk":"30 ft."}', 50,
                14, 10, 14, 6, 10, 10,
                ARRAY['A reeking cave-dweller that fights with claws, bite, and ambush.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'troll', 'Troll', 'Large', 'giant', null, 'chaotic evil',
                15, 84, '8d10+40', '{"walk":"30 ft."}', 1800,
                18, 13, 20, 7, 9, 7,
                ARRAY['A ravenous regenerating giant with gangling limbs and claws.'],
                '[{"name":"Claw","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'tyrannosaurus-rex', 'Tyrannosaurus Rex', 'Huge', 'beast', null, 'unaligned',
                13, 136, '13d12+52', '{"walk":"50 ft."}', 3900,
                25, 10, 19, 2, 12, 9,
                ARRAY['An apex predator with a bone-crushing bite and thunderous stride.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing."}]',
                '[]',
                'Perception +4'
            ),
            (
                'unicorn', 'Unicorn', 'Large', 'celestial', null, 'lawful good',
                12, 67, '9d10+18', '{"walk":"50 ft."}', 1800,
                18, 14, 15, 11, 17, 16,
                ARRAY['A radiant steed whose horn heals the pure of heart.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning."},{"name":"Horn","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing."}]',
                '[{"name":"Healing Touch","desc":"The unicorn touches another creature. The target magically regains 11 (2d8 + 2) HP."}]',
                'Insight +6, Perception +6'
            ),
            (
                'vampire', 'Vampire', 'Medium', 'undead', null, 'lawful evil',
                16, 144, '17d8+68', '{"climb":"30 ft.","walk":"30 ft."}', 10000,
                18, 18, 18, 17, 15, 18,
                ARRAY['An immortal predator who commands the night and drinks blood.'],
                '[{"name":"Unarmed Strike","desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) bludgeoning plus grapple."},{"name":"Bite","desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one willing or grappled creature. Hit: 7 (1d6 + 4) piercing + 10 (3d6) necrotic."}]',
                '[{"name":"Legendary Resistance","desc":"If the vampire fails a saving throw, it can choose to succeed instead (3/day)."}]',
                'Perception +6, Stealth +6'
            ),
            (
                'vampire-spawn', 'Vampire Spawn', 'Medium', 'undead', null, 'neutral evil',
                15, 82, '11d8+33', '{"climb":"30 ft.","walk":"30 ft."}', 1800,
                16, 16, 16, 11, 10, 12,
                ARRAY['A lesser vampire bound to its creator, hungry for living blood.'],
                '[{"name":"Claws","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing and grapple."}]',
                '[]',
                'Perception +2, Stealth +4'
            ),
            (
                'veteran', 'Veteran', 'Medium', 'humanoid', 'any species', 'any alignment',
                17, 58, '9d8+18', '{"walk":"30 ft."}', 700,
                16, 13, 14, 10, 11, 10,
                ARRAY['A battle-hardened soldier skilled with sword and crossbow.'],
                '[{"name":"Longsword","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing, or 9 (1d10 + 4) if used two-handed."}]',
                '[]',
                'Athletics +5'
            ),
            (
                'vine-blight', 'Vine Blight', 'Medium', 'plant', null, 'neutral evil',
                12, 26, '4d8+8', '{"walk":"10 ft."}', 100,
                15, 8, 14, 5, 10, 3,
                ARRAY['A writhing tangle of vines that restrains and crushes intruders.'],
                '[{"name":"Constrict","desc":"Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6 + 2) bludgeoning and grapple (escape DC 12)."}]',
                '[]',
                'Stealth +3'
            ),
            (
                'violet-fungus', 'Violet Fungus', 'Medium', 'plant', null, 'unaligned',
                5, 18, '4d8', '{"walk":"5 ft."}', 50,
                3, 1, 10, 1, 3, 1,
                ARRAY['A rotting cavern fungus with whipping necrotic tendrils.'],
                '[{"name":"Rotting Touch","desc":"Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage."}]',
                '[]',
                ''
            ),
            (
                'vrock', 'Vrock', 'Large', 'fiend', 'demon', 'chaotic evil',
                15, 104, '11d10+44', '{"fly":"60 ft.","walk":"40 ft."}', 2300,
                17, 15, 18, 8, 13, 8,
                ARRAY['A vulture-headed demon that shrieks and rends with talons.'],
                '[{"name":"Talons","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'vulture', 'Vulture', 'Medium', 'beast', null, 'unaligned',
                10, 5, '1d8+1', '{"fly":"50 ft.","walk":"10 ft."}', 10,
                7, 10, 12, 2, 12, 4,
                ARRAY['A carrion bird that circles the skies for an easy meal.'],
                '[{"name":"Beak","desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing."}]',
                '[]',
                'Perception +3'
            ),
            (
                'warhorse', 'Warhorse', 'Large', 'beast', null, 'unaligned',
                11, 19, '3d10+3', '{"walk":"60 ft."}', 100,
                18, 12, 13, 2, 12, 7,
                ARRAY['A trained characterger that tramples enemies under iron-shod hooves.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'warhorse-skeleton', 'Warhorse Skeleton', 'Large', 'undead', null, 'lawful evil',
                13, 22, '3d10+6', '{"walk":"60 ft."}', 100,
                18, 12, 15, 2, 8, 5,
                ARRAY['The animated bones of a warhorse, heedless of pain and fear.'],
                '[{"name":"Hooves","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'water-elemental', 'Water Elemental', 'Large', 'elemental', null, 'neutral',
                14, 114, '12d10+48', '{"swim":"90 ft.","walk":"30 ft."}', 1800,
                18, 14, 18, 5, 10, 8,
                ARRAY['A surging mass of living water that engulfs and drowns foes.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning."}]',
                '[]',
                ''
            ),
            (
                'weasel', 'Weasel', 'Tiny', 'beast', null, 'unaligned',
                13, 1, '1d4-1', '{"climb":"30 ft.","walk":"30 ft."}', 10,
                3, 16, 8, 2, 12, 3,
                ARRAY['A quick, burrowing hunter with a knack for slipping into tight spaces.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'werebear', 'Werebear', 'Medium', 'humanoid', 'shapechanger', 'neutral good',
                11, 135, '18d8+54', '{"walk":"30 ft."}', 1800,
                19, 10, 17, 10, 13, 11,
                ARRAY['A kind but fierce shapechanger who becomes a towering bear in battle.'],
                '[{"name":"Greataxe","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (1d12 + 4) slashing."}]',
                '[]',
                'Perception +4'
            ),
                        (
                'wereboar', 'Wereboar', 'Medium', 'humanoid', 'shapechanger', 'neutral evil',
                10, 78, '12d8+24', '{"walk":"30 ft."}', 1100,
                17, 10, 15, 10, 11, 8,
                ARRAY['A cursed humanoid that transforms into a savage boar hybrid.'],
                '[{"name":"Maul","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning."}]',
                '[]',
                'Perception +2'
            ),
            (
                'wererat', 'Wererat', 'Medium', 'humanoid', 'shapechanger', 'lawful evil',
                12, 33, '6d8+6', '{"walk":"30 ft."}', 200,
                10, 15, 12, 11, 10, 8,
                ARRAY['A sly shapechanger that spreads disease in rat form.'],
                '[{"name":"Shortsword","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'weretiger', 'Weretiger', 'Medium', 'humanoid', 'shapechanger', 'neutral',
                12, 120, '16d8+48', '{"walk":"30 ft."}', 2900,
                17, 15, 16, 10, 13, 11,
                ARRAY['A balanced and secretive shapechanger who takes tiger form.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'werewolf', 'Werewolf', 'Medium', 'humanoid', 'shapechanger', 'chaotic evil',
                11, 58, '9d8+18', '{"walk":"30 ft."}', 700,
                15, 13, 14, 10, 11, 10,
                ARRAY['A savage humanoid cursed to stalk and slaughter as a wolf.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing."}]',
                '[]',
                'Perception +2'
            ),
            (
                'white-dragon-wyrmling', 'White Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic evil',
                16, 32, '5d8+10', '{"fly":"60 ft.","walk":"30 ft.","burrow":"15 ft.","swim":"30 ft."}', 700,
                14, 10, 14, 5, 10, 11,
                ARRAY['A young white dragon, cruel and hungry, breathing frost even in infancy.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing + 3 (1d6) cold."}]',
                '[]',
                'Perception +2, Stealth +2'
            ),
            (
                'wight', 'Wight', 'Medium', 'undead', null, 'neutral evil',
                14, 45, '6d8+18', '{"walk":"30 ft."}', 1100,
                15, 14, 16, 10, 13, 15,
                ARRAY['A malevolent undead that drains the life from its foes.'],
                '[{"name":"Longsword","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'will-o-wisp', 'Will-o\'-Wisp', 'Tiny', 'undead', null, 'chaotic evil',
                19, 22, '9d4', '{"fly":"50 ft.","hover":true}', 1100,
                1, 28, 10, 13, 14, 11,
                ARRAY['A floating orb of light, the soul of a perished evil, luring the lost to doom.'],
                '[{"name":"Shock","desc":"Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning."}]',
                '[]',
                'Stealth +8'
            ),
            (
                'winter-wolf', 'Winter Wolf', 'Large', 'monstrosity', null, 'neutral evil',
                13, 75, '10d10+20', '{"walk":"50 ft."}', 1800,
                18, 13, 14, 7, 12, 8,
                ARRAY['A massive white-furred wolf that exhales icy breath.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing + 7 (2d6) cold."}]',
                '[]',
                'Perception +4, Stealth +3'
            ),
            (
                'wolf', 'Wolf', 'Medium', 'beast', null, 'unaligned',
                13, 11, '2d8+2', '{"walk":"40 ft."}', 50,
                12, 15, 12, 3, 12, 6,
                ARRAY['A pack predator that hunts with cunning teamwork.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'worg', 'Worg', 'Large', 'monstrosity', null, 'neutral evil',
                13, 26, '4d10+4', '{"walk":"50 ft."}', 200,
                16, 13, 13, 7, 11, 8,
                ARRAY['An evil, intelligent wolf often serving goblins.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing."}]',
                '[]',
                'Perception +2, Stealth +2'
            ),
            (
                'wraith', 'Wraith', 'Medium', 'undead', null, 'neutral evil',
                13, 67, '9d8+27', '{"fly":"60 ft.","hover":true}', 1800,
                6, 16, 16, 12, 14, 15,
                ARRAY['A shadowy undead that drains life essence to fuel its hatred.'],
                '[{"name":"Life Drain","desc":"Melee Spell Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic."}]',
                '[]',
                'Stealth +6, Perception +4'
            ),
            (
                'wyvern', 'Wyvern', 'Large', 'dragon', null, 'unaligned',
                13, 110, '13d10+39', '{"fly":"80 ft.","walk":"20 ft."}', 3900,
                19, 10, 16, 5, 12, 6,
                ARRAY['A draconic predator with a venomous stinger.'],
                '[{"name":"Stinger","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) piercing + 24 (7d6) poison."}]',
                '[]',
                'Perception +4'
            ),
            (
                'xorn', 'Xorn', 'Medium', 'elemental', null, 'neutral',
                19, 73, '7d8+42', '{"burrow":"20 ft.","walk":"20 ft."}', 1800,
                17, 10, 22, 11, 10, 11,
                ARRAY['A rocky elemental that eats precious metals and gems.'],
                '[{"name":"Claw","desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing."}]',
                '[]',
                'Perception +3, Stealth +3'
            ),
            (
                'young-black-dragon', 'Young Black Dragon', 'Large', 'dragon', null, 'chaotic evil',
                18, 127, '15d10+45', '{"fly":"80 ft.","walk":"40 ft.","swim":"40 ft."}', 5900,
                19, 14, 17, 12, 11, 15,
                ARRAY['A juvenile black dragon, cruel and cunning, breathing acid.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing + 4 (1d8) acid."}]',
                '[]',
                'Perception +5, Stealth +5'
            ),
            (
                'young-blue-dragon', 'Young Blue Dragon', 'Large', 'dragon', null, 'lawful evil',
                18, 152, '16d10+64', '{"fly":"80 ft.","walk":"40 ft.","burrow":"30 ft."}', 5900,
                21, 10, 19, 14, 11, 15,
                ARRAY['A juvenile blue dragon, proud and tyrannical, breathing lightning.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing + 5 (1d10) lightning."}]',
                '[]',
                'Perception +5, Stealth +3'
            ),
            (
                'young-brass-dragon', 'Young Brass Dragon', 'Large', 'dragon', null, 'chaotic good',
                17, 110, '13d10+39', '{"fly":"80 ft.","walk":"40 ft.","burrow":"20 ft."}', 5900,
                19, 10, 17, 12, 11, 15,
                ARRAY['A juvenile brass dragon, talkative and curious, breathing fire.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing + 5 (1d10) fire."}]',
                '[]',
                'Perception +5, Stealth +3'
            ),
            (
                'young-bronze-dragon', 'Young Bronze Dragon', 'Large', 'dragon', null, 'lawful good',
                18, 142, '15d10+60', '{"fly":"80 ft.","walk":"40 ft.","swim":"40 ft."}', 5900,
                21, 10, 19, 14, 11, 17,
                ARRAY['A juvenile bronze dragon, defenders of coasts, breathing lightning.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing + 5 (1d10) lightning."}]',
                '[]',
                'Perception +6, Stealth +3'
            ),
            (
                'young-copper-dragon', 'Young Copper Dragon', 'Large', 'dragon', null, 'chaotic good',
                17, 119, '14d10+42', '{"fly":"80 ft.","walk":"40 ft.","climb":"40 ft."}', 5900,
                18, 12, 17, 16, 13, 15,
                ARRAY['A juvenile copper dragon, mischievous and witty, breathing acid.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing + 4 (1d8) acid."}]',
                '[]',
                'Perception +6, Stealth +4'
            ),
            (
                'young-gold-dragon', 'Young Gold Dragon', 'Large', 'dragon', null, 'lawful good',
                18, 178, '17d10+85', '{"fly":"80 ft.","walk":"40 ft.","swim":"40 ft."}', 8400,
                23, 14, 21, 16, 13, 17,
                ARRAY['A juvenile gold dragon, noble and wise, breathing fire.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing + 5 (1d10) fire."}]',
                '[]',
                'Perception +6, Stealth +4'
            ),
                        (
                'young-green-dragon', 'Young Green Dragon', 'Large', 'dragon', null, 'lawful evil',
                18, 136, '16d10+48', '{"fly":"80 ft.","walk":"40 ft.","swim":"40 ft."}', 5900,
                19, 12, 17, 16, 13, 15,
                ARRAY['A cunning juvenile green dragon, master of deception, breathing poison.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 4) piercing + 7 (2d6) poison."}]',
                '[]',
                'Perception +6, Stealth +4'
            ),
            (
                'young-red-dragon', 'Young Red Dragon', 'Large', 'dragon', null, 'chaotic evil',
                18, 178, '17d10+85', '{"fly":"80 ft.","walk":"40 ft.","climb":"40 ft."}', 8400,
                23, 10, 21, 14, 11, 19,
                ARRAY['A fierce juvenile red dragon, arrogant and destructive, breathing fire.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing + 7 (2d6) fire."}]',
                '[]',
                'Perception +6, Stealth +3'
            ),
            (
                'young-silver-dragon', 'Young Silver Dragon', 'Large', 'dragon', null, 'lawful good',
                18, 168, '16d10+80', '{"fly":"80 ft.","walk":"40 ft."}', 8400,
                23, 10, 21, 14, 11, 19,
                ARRAY['A noble juvenile silver dragon, kind to mortals, breathing cold.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing + 7 (2d6) cold."}]',
                '[]',
                'Perception +6, Stealth +3'
            ),
            (
                'young-white-dragon', 'Young White Dragon', 'Large', 'dragon', null, 'chaotic evil',
                17, 133, '14d10+70', '{"fly":"80 ft.","walk":"40 ft.","burrow":"30 ft.","swim":"40 ft."}', 5900,
                18, 10, 18, 8, 11, 12,
                ARRAY['A cruel juvenile white dragon, savage and hungry, breathing frost.'],
                '[{"name":"Bite","desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing + 7 (2d6) cold."}]',
                '[]',
                'Perception +4, Stealth +2'
            ),
            (
                'yuan-ti-abomination', 'Yuan-ti Abomination', 'Large', 'monstrosity', 'shapechanger', 'neutral evil',
                15, 127, '15d10+45', '{"walk":"40 ft."}', 5900,
                19, 16, 17, 17, 15, 18,
                ARRAY['A monstrous serpent-bodied yuan-ti, cruel and serpentine.'],
                '[{"name":"Scimitar","desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing."}]',
                '[]',
                'Deception +7, Perception +5, Stealth +6'
            ),
            (
                'yuan-ti-malison', 'Yuan-ti Malison', 'Medium', 'monstrosity', 'shapechanger', 'neutral evil',
                12, 66, '12d8+12', '{"walk":"30 ft.","swim":"30 ft."}', 1100,
                16, 14, 13, 14, 12, 13,
                ARRAY['A yuan-ti with a humanoid torso and serpent feature.'],
                '[{"name":"Scimitar","desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing."}]',
                '[]',
                'Deception +4, Stealth +4'
            ),
            (
                'yuan-ti-pureblood', 'Yuan-ti Pureblood', 'Medium', 'monstrosity', null, 'neutral evil',
                11, 40, '9d8', '{"walk":"30 ft."}', 200,
                11, 12, 11, 13, 12, 14,
                ARRAY['A serpent-blooded humanoid who infiltrates human societies.'],
                '[{"name":"Scimitar","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing."}]',
                '[]',
                'Deception +4, Stealth +3'
            ),
            (
                'zombie', 'Zombie', 'Medium', 'undead', null, 'neutral evil',
                8, 22, '3d8+9', '{"walk":"20 ft."}', 100,
                13, 6, 16, 3, 6, 5,
                ARRAY['A mindless, reanimated corpse driven by hunger.'],
                '[{"name":"Slam","desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning."}]',
                '[]',
                ''
            )
            `);
        console.log('✅ Monsters seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding monsters: ', err);
  }
}

seedMonsters();
