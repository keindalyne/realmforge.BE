CREATE TABLE equipment_pack (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES eqiupment(id) ON DELETE CASCADE,
    included_item TEXT[]    -- or link to a join table for deep modeling
);