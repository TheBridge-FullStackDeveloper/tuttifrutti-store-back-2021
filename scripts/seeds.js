require("dotenv").config();

const db = require("../config/db");
const { sql } = require("slonik");
const seed = async () => {
  try {
    await db.query(sql`
    INSERT INTO products (name, category, price, keywords)
    VALUES ('Chicle Boomer Fresa', 'chicle', '0.10', ARRAY ['fresa, boomer, chicle'] ),
           ('Chicle Boomer Fresa/Nata', 'chicle', '0.10', ARRAY ['fresa, boomer, chicle, nata, dos'] ),
           ('Chicle Boomer Menta', 'chicle', '0.10', ARRAY ['menta, boomer, chicle'] ),
           ('Pipas Facundo 50g', 'pipas', '0.50', ARRAY ['pipas, sal'] ),
           ('Pipas Facundo Aguasal 50g', 'pipas', '0.50', ARRAY ['pipas, aguasal'] ),
           ('Piponazo 50g', 'pipas', '0.50', ARRAY ['pipas, sal'] ),
           ('Piponazo Aguasal 50g', 'pipas', '0.50', ARRAY ['pipas, aguasal'] );
        `);
    console.info("> insertion done! 🚀");
  } catch (error) {
    console.info("> insertion error! ❌");
    console.info(">", error.message);
  }
};

seed();
