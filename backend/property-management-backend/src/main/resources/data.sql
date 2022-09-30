-- ROLES
INSERT INTO roles (role_id, role_name) VALUES (1, 'ADMIN'), (2, 'OWNER'), (3, 'CUSTOMER');

-- USERS
INSERT INTO users (email, enabled, full_name, image_url, password, phone_number, username)
VALUES ('admin@gmail.com', true, 'Admin', '', 'pass', 12345, 'admin'),
('owner@gmail.com', true, 'Owner', '', 'pass', 123456, 'owner'),
('customer@gmail.com', true, 'Customer', '', 'pass', 123457, 'customer');

-- USER_ROLES
INSERT INTO user_roles (user_id, role_id)
VALUES (1, 1), (2, 2), (3, 3);

-- LOCATION
INSERT INTO location (name)
VALUES  ('Fairfield'), ('Black Hawk County'),('Johnson County'),('Linn County'),('Polk County');

--PROPERTY
INSERT INTO property (description,home_type,is_for_rent,is_for_sell,number_of_rooms,price,property_type,location_id,user_id,title)
values ('This gorgeous and nearly perfect house will stun you with its modern and dazzling interior finishes.','dont know',true,false,12,2000.00,'Apartment',1,1,'New home 1'),
       ('will stun you with its modern and dazzling interior finishes.',' dont know',true,false,12,2500.00,'Res',2,2,'New home 2'),
       ('with its modern and dazzling interior finishes.','dont know',true,false,12,1500.00,'condo',3,1,'New home 3'),
        (' stun you with its modern and dazzling interior finishes.','home type dont know',true,false,12,2300.00,'condoNew',4,3,'New home 4'),
        ('dazzling interior finishes.','home type dont know',true,false,12,2200.00,'condo',5,1,'New home 5');

--IMAGE
INSERT INTO image (url,property_id)
values ('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',1),
       ('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',1),
       ('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',1),
       ('https://photos.zillowstatic.com/fp/4b153fbe6a89d34190481ad5a053d6b6-uncropped_scaled_within_1536_1152.webp',2),
       ('https://photos.zillowstatic.com/fp/4b153fbe6a89d34190481ad5a053d6b6-uncropped_scaled_within_1536_1152.webp',2),
       ('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg',3),
       ('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg',4),
       ('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg',5);


-- FAV LIST
INSERT INTO fav_list (name, user_id)
VALUES  ('First List', '1'), ('Second List', '2');

-- FAV ITEM
INSERT INTO fav_item (property_id, fav_id)
VALUES  ('1','1'), ('2','2'),('1','2'),('2','1');