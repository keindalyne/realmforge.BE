CREATE TABLE class_skill_option (
    id SERIAL PRIMARY KEY,
    option_slug TEXT NOT NULL
        REFERENCES class_proficiency_choice(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    skill_slug TEXT NOT NULL
        REFERENCES skill(slug)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (choice_slug, skill_slug)
);