const { sql } = require("slonik");

const updateCard = async (db, {
    provider,
    card_number,
    expiration_date,
    owner_name,
    email,
    username,
  }) => {
    try {
        const { rows } = await db.maybeOne(sql`
        UPDATE cards
        SET
            
        
        
        `)
    } catch (error) {
        console.info("> error at 'updateCard' query: ", error.message);
    return false;
    }
  }