CREATE TABLE character_skill (
    id SERIAL PRIMARY KEY,
    character_slug TEXT NOT NULL
        REFERENCES character(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    skill_slug TEXT NOT NULL
        REFERENCES skill(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (character_slug, skill_slug)
);