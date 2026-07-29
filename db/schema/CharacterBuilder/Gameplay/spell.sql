CREATE TABLE spell (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    level INTEGER NOT NULL
        CHECK (level BETWEEN 0 AND 9),
    school_slug TEXT NOT NULL
        REFERENCES spell_school(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    casting_time TEXT NOT NULL,
    range TEXT NOT NULL,
    components TEXT[],
    material TEXT,
    duration TEXT,
    higher_level TEXT,
    ritual BOOLEAN NOT NULL DEFAULT false,
    concentration BOOLEAN NOT NULL DEFAULT false
    description TEXT NOT NULL,
);