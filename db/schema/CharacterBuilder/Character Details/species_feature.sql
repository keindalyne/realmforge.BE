CREATE TABLE species_feature (
    id SERIAL PRIMARY KEY,
    species_slug TEXT NOT NULL
        REFERENCES species(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    feature_slug TEXT NOT NULL
        REFERENCES feature(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (species_slug, feature_slug)
);