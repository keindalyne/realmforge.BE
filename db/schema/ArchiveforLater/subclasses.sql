CREATE TABLE character_subclass (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    character_class_id INTEGER REFERENCES character_class(id) ON DELETE CASCADE ON UPDATE CASCADE,
    description TEXT[] NOT NULL,
    subclass_flavor TEXT
);