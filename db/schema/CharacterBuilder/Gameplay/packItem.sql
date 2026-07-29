CREATE TABLE pack_item (
    id SERIAL PRIMARY KEY,
    pack_slug TEXT NOT NULL
        REFERENCES equipment(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    item_slug TEXT NOT NULL
        REFERENCES eqiupment(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1 
        CHECK (quantity >= 1)
    UNIQUE (pack_slug, item_slug)
);