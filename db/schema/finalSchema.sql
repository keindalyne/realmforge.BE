\set ON_ERROR_STOP on

-- Drop all tables in dependency order
\i db/schema/dropTables.sql

CREATE EXTENSION IF NOT EXISTS citext;

-- Create all tables (dependency order)
\i db/schema/users.sql;
\i db/schema/class.sql;
\i db/schema/subclass.sql;
\i db/schema/equipmentCat.sql;
\i db/schema/equipment.sql;
\i db/schema/equipmentpack.sql;
\i db/schema/species.sql;
\i db/schema/subspecies.sql;
\i db/schema/traits.sql;
\i db/schema/weaponProperties.sql;
\i db/schema/spellchools.sql;
\i db/schema/proficiency.sql;
\i db/schema/abilityScores.sql;
\i db/schema/characters.sql;
\i db/schema/classProficiency.sql;
\i db/schema/deities.sql;
\i db/schema/factions.sql;
\i db/schema/feats.sql;
\i db/schema/feature.sql;
\i db/schema/language.sql;
\i db/schema/magicItems.sql;
\i db/schema/monsters.sql;
\i db/schema/packItems.sql;
\i db/schema/properties.sql;
\i db/schema/speciesTrait.sql;
\i db/schema/spell.sql;
\i db/schema/subspeciesTrait.sql;
\i db/schema/weaponPropertyAssign.sql;
