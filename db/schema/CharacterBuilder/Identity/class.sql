CREATE TABLE character_class (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    hit_die INTEGER NOT NULL,
    description TEXT NOT NULL
);