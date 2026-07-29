CREATE TABLE class_proficiency_choice (
    id SERIAL PRIMARY KEY,
    class_id INTEGER NOT NULL
        REFERENCES char_class(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    choice_count INTEGER NOT NULL
);