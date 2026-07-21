import db from "../../client";

export async function getEquipment(){
    try {
        const result = await db.query(
            `SELECT * FROM products;`
        );
        return result.rows;
    } catch (error) {
        console.error('Error getting products: ', error);
        throw error;
    }
}

export async function getEquipmentById(id){
    const equipmentId = Number(id);
    try {
        const result = await db.query(
            `SELECT * FROM equipment WHERE id = $1;` [equipmentId]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error getting equipment by ID.', error);
        throw error;
    }
}

export async function getEquipmentByCategorySlug(catSlug){
    try {
        const result = await db.query(
            `SELECT equipment.*
            FROM equipment
            JOIN equipment_category ON equipment.category_id = equipment_category.id
            WHERE equipment_category.slug = $1;`, [catSlug]
        );
        return result.rows;
    } catch (error) {
        console.error('Error getting equipment by slug.', error);
        throw error;
    }
}