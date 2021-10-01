DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE; 
DROP TABLE IF EXISTS orders CASCADE; 
DROP TABLE IF EXISTS cards; 
DROP TABLE IF EXISTS products_orders;
DROP TYPE IF EXISTS product_categories;
DROP TYPE IF EXISTS order_states;
DROP TYPE IF EXISTS card_providers;

DROP EXTENSION IF EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE product_categories AS ENUM('chicle', 'gominola', 'pipas', 'gusanitos', 'chocolatina', 'chupachus');
CREATE TYPE order_states AS ENUM('pending', 'sent', 'delivered', 'canceled');
CREATE TYPE card_providers AS ENUM('VISA', 'MASTERCARD', 'BIZUM', 'PAYPAL');


CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category product_categories NOT NULL,
  reference TEXT UNIQUE NOT NULL,
  stock BOOLEAN NOT NULL,
  price DECIMAL NOT NULL, 
  product_pic TEXT NOT NULL,
  keywords TEXT[],
  offer INTEGER,
  featured BOOLEAN NOT NULL
  );

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  hash TEXT NOT NULL,
  access_token TEXT DEFAULT NULL,  
  activation_token TEXT DEFAULT NULL,
  active BOOLEAN NOT NULL DEFAULT false,
  address TEXT NOT NULL, 
  postal_code TEXT NOT NULL,
  profile_pic TEXT DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
  updated_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC')
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid references users(id),
  state order_states NOT NULL, 
  order_date TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
  delivery_date TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
  cart BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS cards (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid references users(id),
  provider card_providers NOT NULL,
  card_number TEXT NOT NULL,
  expiration_date TEXT NOT NULL,
  owner_name TEXT NOT NULL, 
  card BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS products_orders (
  product_id uuid references products(id),
  order_id uuid references orders(id)
);

