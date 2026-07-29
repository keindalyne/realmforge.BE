import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


import db from "../client.js";
import { seedAbilityScores } from "./abilityScores.js";
import { seedArmor } from "./armor.js";
import { seedArmorProficiency } from "./armorProficiency.js";
import { seedCharacters } from "./characters.js";
import { seedCharacterClass } from "./class.js";
import { seedClassProficiency } from "./classProficiency.js";
import { seedDeities } from "./deities.js";
import { seedEquipmentList } from "./equipment.js";
import { seedEquipmentCategory } from "./ArchiveForLater/equipmentCat.js";
import { seedFactions } from "./factions.js";
import { seedFeats } from "./feats.js";

async function runSeeds() {
  try {
    await seedAbilityScores();
    await seedArmor();
    await seedArmorProficiency();
    await seedCharacters();
    await seedCharacterClass();
    await seedClassProficiency();
    await seedDeities();
    await seedEquipmentList();
    await seedEquipmentCategory();
    await seedFactions();
    await seedFeats();
    await seed

    console.log("🌱 All seed data inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await db.end();
  }
}

runSeeds();
