CREATE TABLE pack_item (
    id SERIAL PRIMARY KEY,
    pack_id INTEGER REFERENCES equipment_pack(id),
    item_id INTEGER REFERENCES eqiupment(id),
    quantity INTEGER DEFAULT 1 CHECK (quantity >= 1)
);