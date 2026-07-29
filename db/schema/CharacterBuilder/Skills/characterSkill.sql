CREATE TABLE char_skill (
    id SERIAL PRIMARY KEY NOT NULL,
    character_id INTEGER NOT NULL
        REFERENCES character(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    skill_id INTEGER NOT NULL
        REFERENCES skill(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (character_id, skill_id)
)