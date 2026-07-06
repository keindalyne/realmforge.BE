CREATE TABLE tool (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER REFERENCES eqiupment(id) ON DELETE CASCADE,
    tool_type TEXT NOT NULL                -- e.g., "Artisan's Tools", "Musical Instrument"
);