CREATE TABLE language (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,
    script TEXT,
    description TEXT[] NOT NULL
);