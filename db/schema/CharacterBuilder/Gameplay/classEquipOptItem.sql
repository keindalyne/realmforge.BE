CREATE TABLE class_equipment_option_item (
    id SERIAL PRIMARY KEY,
    option_id INTEGER NOT NULL
        REFERENCES class_equipment_option(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    equipment_id INTEGER NOT NULL
        REFERENCES equipment(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1
);