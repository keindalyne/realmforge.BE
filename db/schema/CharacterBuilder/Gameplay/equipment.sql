CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    category_id INTEGER REFERENCES equipment_category(id) ON DELETE CASCADE ON UPDATE CASCADE,
    weight NUMERIC,
    cost TEXT,
    description TEXT[]
);