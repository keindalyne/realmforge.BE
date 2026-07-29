CREATE TABLE class_feature (
    id SERIAL PRIMARY KEY,
    class_slug TEXT NOT NULL
        REFERENCES character_class(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    feature_slug TEXT NOT NULL
        REFERENCES feature(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    level INTEGER NOT NULL,
    UNIQUE (class_slug, feature_slug)
);