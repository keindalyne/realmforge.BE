CREATE TABLE character_ability_score (
    id SERIAL PRIMARY KEY,
    character_slug TEXT NOT NULL
        REFERENCES character(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    ability_score_slug(slug) TEXT NOT NULL
        REFERENCES ability_score(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    score INTEGER NOT NULL
        CHECK (score BETWEEN 1 AND 30),
    UNIQUE (character_slug, ability_score_slug)
);