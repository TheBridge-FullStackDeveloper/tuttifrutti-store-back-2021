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
  reference SERIAL NOT NULL,
  stock BOOLEAN NOT NULL DEFAULT true,
  price DECIMAL NOT NULL,
  description TEXT,
  product_pic TEXT,
  keywords TEXT[],
  offer INTEGER,
  featured BOOLEAN NOT NULL DEFAULT false
  );

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  surname TEXT,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  hash TEXT NOT NULL,
  access_token TEXT,
  activation_token TEXT,
  active BOOLEAN NOT NULL DEFAULT false,
  address TEXT,
  postal_code TEXT,
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
  order_total DECIMAL
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

