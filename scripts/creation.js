require("dotenv").config();

const db = require("../config/db");
const { sql } = require("slonik");
const create = async () => {
  try {
    await db.query(sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE TYPE product_categories AS ENUM('chicle', 'gominola', 'pipas', 'gusanitos', 'chocolatina', 'chupachus');
    CREATE TYPE order_states AS ENUM('pending', 'sent', 'delivered', 'canceled');
    CREATE TYPE card_providers AS ENUM('VISA', 'MASTERCARD', 'BIZUM', 'PAYPAL');
        `);

    await db.query(sql`
    CREATE TABLE IF NOT EXISTS products (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT NOT NULL,
      category product_categories NOT NULL,
      reference SERIAL NOT NULL,
      stock BOOLEAN NOT NULL DEFAULT true,
      price DECIMAL NOT NULL,
      product_pic TEXT,
      keywords TEXT[],
      offer INTEGER,
      featured BOOLEAN NOT NULL DEFAULT false
      );

    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT NOT NULL,
      surname TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      username TEXT UNIQUE NOT NULL,
      hash TEXT NOT NULL,
      access_token TEXT,
      activation_token TEXT,
      active BOOLEAN NOT NULL DEFAULT false,
      address TEXT NOT NULL,
      postal_code TEXT NOT NULL,
      profile_pic TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      updated_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC')
    );

    CREATE TABLE IF NOT EXISTS orders (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid references users(id),
      state order_states NOT NULL,
      order_date TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      delivery_date TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
      cart BOOLEAN NOT NULL DEFAULT false
    );

    CREATE TABLE IF NOT EXISTS cards (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid references users(id),
      provider card_providers NOT NULL,
      card_number TEXT NOT NULL,
      expiration_date TEXT NOT NULL,
      owner_name TEXT NOT NULL,
      card BOOLEAN NOT NULL DEFAULT false
    );

    CREATE TABLE IF NOT EXISTS products_orders (
      product_id uuid references products(id),
      order_id uuid references orders(id)
    );
    `);
    console.info("> creation done! 🚀");
  } catch (error) {
    console.info("> creation error! ❌");
    console.info(">", error.message);
  }
};

create();
