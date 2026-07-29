CREATE TABLE proficiency (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    type proficiency_type NOT NULL
);