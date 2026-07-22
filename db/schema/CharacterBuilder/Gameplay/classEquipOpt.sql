CREATE TABLE class_equipment_option (
    id SERIAL PRIMARY KEY,
    choice_id INTEGER NOT NULL
        REFERENCES class_equipment_choice(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    option_order INTEGER NOT NULL,
    label TEXT
);