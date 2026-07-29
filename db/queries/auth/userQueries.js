// const encoded = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
// const decoded = Buffer.from(encoded, 'base64').toString('utf8');
// console.log(decoded);

import db from '../../client.js';

// CREATE new player
export async function createNewPlayer (first_name, last_name, email, playername, password) {
    try {
        const result = await db.query(
            `INSERT INTO players (first_name, last_name, email, playername, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`,
        [first_name, last_name, email, playername, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating player. Try again.', error.message);
        throw error;
    }
}

// LOGIN player
export async function getLogin (playername) {
    try {
        const result = await db.query(
            `SELECT * FROM players WHERE playername = $1`,
            [playername]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error logging in. Playername incorrect. Please try again.', error.message);
        throw error;
    }
}

// CHECK new players have a unique playername & GET player info by Playername for profile display
export async function getPlayerByPlayername (playername) {
    try {
        const result = await db.query(
            `SELECT * FROM players WHERE playername = $1`,
            [playername]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// CHECK new players have a unique email & GET player info by Email for admin functions like account retrieval
export async function getPlayerByEmail (email) {
    try {
        const result = await db.query(
            `SELECT * FROM players where email = $1`,
            [email]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// GET player by ID
export async function getPlayerById (id) {
    try {
        const result = await db.query(
            `SELECT * FROM players WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// UPDATE player by ID
export async function updatePlayer ({ id, first_name, last_name, email, password }) {
    try {
        const fields = [];
        const values = [];
        let paramIdx = 1;
        if (first_name) {
            fields.push(`first_name = $${paramIdx++}`);
            values.push(first_name);
        }
        if (last_name){
            fields.push(`last_name = $${paramIdx++}`);
            values.push(last_name);
        }
        if (email) {
            fields.push(`email = $${paramIdx++}`);
            values.push(email);
        }
        if (password) {
            fields.push(`password = $${paramIdx++}`);
            values.push(password);
        }
        if (fields.length === 0) {
            throw new Error('No fields provided to update.');
        }
        const result = await db.query(
            `UPDATE players SET
            ${fields.join(', ')}
            WHERE id = $${paramIdx}
            RETURNING *;`,
            [...values, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating player. Please try again.', error.message);
        throw error;
    }
}

// DELETE player by ID
export async function deletePlayer (id) {
    try {
        const result = await db.query(
            `DELETE FROM players WHERE id = $1`,
            [id]
        );
    } catch (error) {
        console.error('Error deleting player. Please try again.', error.message);
        throw error;
    }
}


