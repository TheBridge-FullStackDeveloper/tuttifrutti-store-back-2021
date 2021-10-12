INSERT INTO products (name, category, price, keywords)
VALUES ('Chicle Boomer Fresa', 'chicle', '0.10', ARRAY ['fresa', 'boomer', 'chicle'] ),
       ('Chicle Boomer Fresa/Nata', 'chicle', '0.10', ARRAY ['fresa', 'boomer', 'chicle', 'nata', 'dos'] ),
       ('Chicle Boomer Menta', 'chicle', '0.10', ARRAY ['menta', 'boomer', 'chicle'] ),
       ('Pipas Facundo 50g', 'pipas', '0.50', ARRAY ['pipas', 'sal'] ),
       ('Pipas Facundo Aguasal 50g', 'pipas', '0.50', ARRAY ['pipas', 'aguasal'] ),
       ('Piponazo 50g', 'pipas', '0.50', ARRAY ['pipas', 'sal'] ),
       ('Piponazo Aguasal 50g', 'pipas', '0.50', ARRAY ['pipas', 'aguasal'] );

INSERT INTO users (name, surname, email, username, hash, address, postal_code)
VALUES ('Jorge', 'Nova', 'jnova@gmail.com', 'jnova', 'hash para prueba','C/Nueva 22, 3ºD, Madrid', '28001'),
       ('Cristina', 'Nosé', 'cris@gmail.com', 'cris', 'hash para prueba', 'C/Vieja 22, 3º Madrid', '28002'),
        ('Diego', 'González', 'diego@gmail.com', 'dgz', 'hash para prueba', 'C/Intermedia 22, 3º Madrid', '28002');
        
INSERT INTO orders (state)
VALUES ('pending'), ('sent'), ('delivered'), ('canceled');

INSERT INTO cards (provider, user_id, card_number, expiration_date, owner_name)
VALUES
('VISA', (SELECT id FROM users WHERE name LIKE 'Diego'),'0001','12/04', 'Diego'),
('MASTERCARD', (SELECT id FROM users WHERE name LIKE 'Cristina'), '0002','12/04', 'Cristina'),
('BIZUM', (SELECT id FROM users WHERE name LIKE 'Diego'), '0003', '12/04', 'Diego'),
('PAYPAL', (SELECT id FROM users WHERE name LIKE 'Jorge'), '0004','12/04', 'Jorge');