CREATE TABLE class_equipment_choice (
    id SERIAL PRIMARY KEY,
    class_id INTEGER NOT NULL
        REFERENCES class(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    choice_order INTEGER NOT NULL,
    prompt TEXT NOT NULL
);