CREATE TABLE class_proficiency (
    id SERIAL PRIMARY KEY,
    class_slug TEXT NOT NULL 
        REFERENCES character_class(slug) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    proficiency_slug TEXT NOT NULL 
        REFERENCES proficiency(slug) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    UNIQUE (class_slug, proficiency_slug)
);