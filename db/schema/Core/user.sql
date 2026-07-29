CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email CITEXT NOT NULL UNIQUE, -- case-insensitive email
    playername CITEXT NOT NULL UNIQUE, -- case-insensitive playername
    password_hash TEXT NOT NULL, -- store bcrypt or argon2 hash
    role TEXT NOT NULL
        DEFAULT player
        CHECK (role IN ('player', 'admin')),
    is_active BOOLEAN DEFAULT TRUE, -- can deactivate instead of delete
    is_email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ DEFAULT
);
