CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    category_slug TEXT NOT NULL
        REFERENCES equipment_category(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    weight NUMERIC,
    cost TEXT,
    description TEXT
);