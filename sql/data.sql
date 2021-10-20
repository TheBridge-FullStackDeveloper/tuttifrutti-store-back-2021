INSERT INTO products (name, category, price, product_pic, keywords)
VALUES
        ('Chicle Boomer Fresa', 'chicle', '0.10', 'https://1.bp.blogspot.com/-MmB7MtVVKrU/XseeoES2TlI/AAAAAAAAAKE/8tCsr-i4iw85J_KCNDHg5LiqBON528C0gCLcBGAsYHQ/s1600/45449129_21939348%2B%25281%2529.jpg', ARRAY ['fresa', 'boomer', 'chicle'] ),
       ('Chicle Boomer Fresa/Nata', 'chicle', '0.10', 'https://turronesartesanos.es/storage/products/turron_chicle_nata.jpg', ARRAY ['fresa', 'boomer', 'chicle', 'nata', 'dos'] ),
       ('Chicle Boomer Menta', 'chicle', '0.10', 'https://cloud10.todocoleccion.online/coleccionismo/tc/2018/07/02/12/126855859_96818264.jpg?size=720x720&crop=true', ARRAY ['menta', 'boomer', 'chicle'] ),
       ('Pipas Facundo 50g', 'pipas', '0.50', 'https://m.media-amazon.com/images/I/81xeaRUJ5WL._AC_SY606_.jpg', ARRAY ['pipas', 'sal'] ),
       ('Pipas Facundo Aguasal 50g', 'pipas', '0.50', 'https://images.ssstatic.com/pipas-extra-grandes-facundo-85g-43770280z0-17214667.jpg', ARRAY ['pipas', 'aguasal']),
       ('Piponazo 50g', 'pipas', '0.50', 'https://espanaencasa.com.es/1839/grefusa-piponazo-sal-150-grs.jpg', ARRAY ['pipas', 'sal'] ),
       ('Piponazo Aguasal 50g', 'pipas', '0.50', 'https://macenio.com/wp-content/uploads/2020/09/piponazo-aguasal.png', ARRAY ['pipas', 'aguasal'] );

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