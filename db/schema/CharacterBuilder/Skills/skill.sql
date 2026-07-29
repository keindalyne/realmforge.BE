CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    ability_score_slug TEXT NOT NULL
        REFERENCES ability_score(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
);