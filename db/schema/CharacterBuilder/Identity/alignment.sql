CREATE TABLE alignment (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    abbreviation TEXT NOT NULL UNIQUE,
    law_chaos_axis TEXT NOT NULL,
    good_evil_axis TEXT NOT NULL,
    description TEXT
)