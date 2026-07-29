CREATE TABLE class_proficiency_choice (
    id SERIAL PRIMARY KEY,
    class_slug TEXT NOT NULL
        REFERENCES character_class(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    choice_count INTEGER NOT NULL
        CHECK (choice_count >= 1),
    UNIQUE (clasS_slug)
);