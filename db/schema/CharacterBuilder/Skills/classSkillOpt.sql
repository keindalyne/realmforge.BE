CREATE TABLE class_skill_option (
    id SERIAL PRIMARY KEY,
    option_id INTEGER NOT NULL
        REFERENCES class_proficiency_choice(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    skill_id INTEGER NOT NULL
        REFERENCES skill(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (choice_id, skill_id)
);