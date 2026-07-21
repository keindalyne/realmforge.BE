import db from "../../client";

export async function getAllAbilityScores () {
    try {
        const result = await db.query(
            `SELECT * FROM ability_score`
        );
        return result;
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

export async function getAbilityScoresBySlug (slug) {
    try {
        const result = await db.query(
            `SELECT * FROM ability_score WHERE slug = $1`, [slug]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error getting ability scores by slug:', error.message);
        throw error;
    }
}

export async function getAllSkills () {
    try {
        const result = await db.query(
            `SELECT * FROM skills`
        );
        return result;
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

export async function getSkillsByIndex (index) {
    try {
        const result = await db.query(
            `SELECT * FROM skills WHERE index = $1`, [index]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error retrieving skills by index:', error.message);
        throw error;
    }
}

export async function getSkillsForAbilitySlug (ability_score_id) {
    try {
        const result = await db.query(
            `SELECT 
            s.id,
            s.index,
            s.name,
            s.ability_score_id
            FROM skills AS s
            JOIN ability_score AS a
            ON s.ability_score_id = a.id
            WHERE a.slug = $1
            ORDER BY s.name
            `, 
        )
    } catch (error) {
        console.error('Error getting skills for ability slug:', error.message);
        throw error;
    }
}