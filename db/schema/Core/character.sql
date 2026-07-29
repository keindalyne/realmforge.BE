CREATE TABLE character (
  id SERIAL PRIMARY KEY,
  player_id INTEGER NOT NULL
    REFERENCES player(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

  -- ========================================
  -- PAGE 1: IDENTITY
  -- ========================================

  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  age INTEGER
    CHECK (age >= 0),
  -- level INTEGER NOT NULL DEFAULT 1
  --   CHECK (level BETWEEN 1 AND 20),
  alignment alignment,
  species_slug TEXT NOT NULL 
    REFERENCES species(slug)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  class_slug TEXT NOT NULL 
    REFERENCES character_class(slug)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  background_slug TEXT NOT NULL 
    REFERENCES background(slug)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  -- experience_points INTEGER NOT NULL DEFAULT 0
  --   CHECK (experience_points >= 0),

  -- ========================================
  -- PAGE 1: CHARACTER DETAILS
  -- ========================================

  appearance TEXT,
  personality_trait TEXT,
  ideal TEXT,
  bond TEXT,
  flaw TEXT,

  -- ========================================
  -- PAGE 3: BACKSTORY
  -- ========================================

  hometown TEXT,
  backstory TEXT,
  motivation TEXT,
  full_story TEXT,
  allies TEXT,
  faction TEXT,
  deity TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);