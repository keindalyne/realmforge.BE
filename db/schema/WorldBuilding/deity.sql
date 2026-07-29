CREATE TABLE deity (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    alignment alignment,
    domain TEXT,
    description TEXT
);