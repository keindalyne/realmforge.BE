CREATE TABLE weapon (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES eqiupment(id) ON DELETE CASCADE,
    weapon_category TEXT NOT NULL,        -- e.g., "Martial", "Simple"
    weapon_range TEXT NOT NULL,           -- e.g., "Melee", "Ranged"
    damage_dice TEXT NOT NULL,            -- e.g., "1d8"
    damage_type TEXT NOT NULL,            -- e.g., "Slashing"
    properties TEXT[]                     -- e.g., ["Versatile", "Heavy"]
);