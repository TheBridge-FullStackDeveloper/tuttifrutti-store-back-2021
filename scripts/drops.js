require("dotenv").config();

const db = require("../config/db");
const { sql } = require("slonik");
const drop = async () => {
  try {
    await db.query(sql`
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS users CASCADE; 
      DROP TABLE IF EXISTS orders CASCADE; 
      DROP TABLE IF EXISTS cards; 
      DROP TABLE IF EXISTS products_orders;
      DROP TYPE IF EXISTS product_categories;
      DROP TYPE IF EXISTS order_states;
      DROP TYPE IF EXISTS card_providers;
      
      DROP EXTENSION IF EXISTS "uuid-ossp";
    `);
    console.info("> drops done! 🚀");
  } catch (error) {
    console.info("> drops error! ❌");
    console.info(">", error.message);
  }
};

drop();
