select*from category;

INSERT INTO category (id, name)
VALUES (default, "vinos-blancos");

INSERT INTO category (id, name)
VALUES (default, "vinos-tintos");

INSERT INTO category (id, name)
VALUES (default, "cervezas");

INSERT INTO category (id, name)
VALUES (default, "spirits");

select*from subcategory;
INSERT INTO subcategory (id, name)
VALUES (default, "destacados");

INSERT INTO subcategory (id, name)
VALUES (default, "");

select*from variety;

INSERT INTO variety (id, name)
VALUES (default, "Malbec");

UPDATE variety
SET name="Cabernet Sauvignon"
WHERE id=2;

INSERT INTO variety (id, name)
VALUES (default, "Sauvignon Blanc");

INSERT INTO variety (id, name)
VALUES (default, "Chardonnay");

INSERT INTO variety (id, name)
VALUES (default, "Rubia");

INSERT INTO variety (id, name)
VALUES (default, "Morena");

INSERT INTO variety (id, name)
VALUES (default, "Hefeweizen");

INSERT INTO variety (id, name)
VALUES (default, "Ambar");

INSERT INTO variety (id, name)
VALUES (default, "Gin");

INSERT INTO variety (id, name)
VALUES (default, "Ginebra");

INSERT INTO variety (id, name)
VALUES (default, "Ron");

INSERT INTO variety (id, name)
VALUES (default, "Vodka");

INSERT INTO variety (id, name)
VALUES (default, "Whisky Blend");

INSERT INTO variety (id, name)
VALUES (default, "Whisky Bourbon");

INSERT INTO variety (id, name)
VALUES (default, "Dunkelweizen");

select * from roles;

INSERT INTO roles (id, name)
VALUES (default, "admin");

INSERT INTO roles (id, name)
VALUES (default, "user");

select * from variety;
select * from products;

INSERT INTO products (id, name, brand, price, description, stock, discount, category_id, subcategory_id, variety_id)
VALUES (default, "Fond de Cave reserva", "Trapiche", 998.19, "De color rojo púrpura intenso con matices rubí, este Malbec expresa aromas a mermelada de frutas negras y liqueur, con un toque elegante de humo, vainilla y chocolate. En boca tiene un gusto seco, con un final largo y aterciopelado.", 10, 30, 2, 1,1);


select*from users;

delete from users
where id=1;

select*from products;

delete from users
where id=3;
delete from users
where id=4;
delete from users
where id=5;
delete from users
where id=6;
delete from users
where id=7;
