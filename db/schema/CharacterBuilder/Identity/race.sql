CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    speed INTEGER NOT NULL,
    size TEXT NOT NULL,
    description TEXT NOT NULL
);