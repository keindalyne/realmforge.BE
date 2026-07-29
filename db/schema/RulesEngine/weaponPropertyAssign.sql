CREATE TABLE weapon_property_assignment (
  id SERIAL PRIMARY KEY,
  weapon_slug TEXT NOT NULL
      REFERENCES weapon(slug)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  weapon_property_slug TEXT NOT NULL
      REFERENCES weapon_property(slug)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  UNIQUE (weapon_slug, property_slug)
);