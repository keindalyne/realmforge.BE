CREATE TABLE spell_list (
    id SERIAL PRIMARY KEY,
    class_slug TEXT NOT NULL
        REFERENCES character_class(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    spell_slug TEXT NOT NULL
        REFERENCES spell(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (class_slug, spell_slug)
);