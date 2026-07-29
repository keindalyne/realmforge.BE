CREATE TABLE class_saving_throw (
    id SERIAL PRIMARY KEY,
    class_slug TEXT NOT NULL
        REFERENCES character_class(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    ability_score_slug TEXT NOT NULL
        REFERENCES ability_score(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (class_slug, ability_score_slug)
);