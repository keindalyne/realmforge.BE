// const encoded = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
// const decoded = Buffer.from(encoded, 'base64').toString('utf8');
// console.log(decoded);

import db from '../../client.js';

// CREATE new user
export async function createNewUser (first_name, last_name, email, username, password) {
    try {
        const result = await db.query(
            `INSERT INTO users (first_name, last_name, email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`,
        [first_name, last_name, email, username, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user. Try again.', error.message);
        throw error;
    }
}

// LOGIN user
export async function getLogin (username) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error logging in. Username incorrect. Please try again.', error.message);
        throw error;
    }
}

// CHECK new users have a unique username & GET user info by Username for profile display
export async function getUserByUsername (username) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// CHECK new users have a unique email & GET user info by Email for admin functions like account retrieval
export async function getUserByEmail (email) {
    try {
        const result = await db.query(
            `SELECT * FROM users where email = $1`,
            [email]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// GET user by ID
export async function getUserById (id) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Database query failed:', error.message);
        throw error;
    }
}

// UPDATE user by ID
export async function updateUser ({ id, first_name, last_name, email, password }) {
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
            `UPDATE users SET
            ${fields.join(', ')}
            WHERE id = $${paramIdx}
            RETURNING *;`,
            [...values, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating user. Please try again.', error.message);
        throw error;
    }
}

// DELETE user by ID
export async function deleteUser (id) {
    try {
        const result = await db.query(
            `DELETE FROM users WHERE id = $1`,
            [id]
        );
    } catch (error) {
        console.error('Error deleting user. Please try again.', error.message);
        throw error;
    }
}


