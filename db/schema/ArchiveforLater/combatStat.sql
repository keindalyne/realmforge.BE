CREATE TABLE combat_stat (
    characterCombat
---------------------------

id SERIAL PRIMARY KEY,
character_id INTEGER REFERENCES character_id(id) ON DELETE CASCADE,
armor_class 
initiative INTEGER NOT NULL,
speed INTEGER NOT NULL,
hit_point_max INTEGER NOT NULL,
current_hit_points INTEGER NOT NULL,
temporary_hit_points
hit_dice_total TEXT NOT NULL,
hit_dice_remaining
death_save_success
death_save_failure
)