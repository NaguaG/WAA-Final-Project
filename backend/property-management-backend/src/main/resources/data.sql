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
values ('This gorgeous and nearly perfect house will stun you with its modern and dazzling interior finishes.','dont know',true,false,12,2000.00,'condo',1,1,'New home 1'),
       ('will stun you with its modern and dazzling interior finishes.',' dont know',true,false,12,2500.00,'condo',2,2,'New home 2'),
       ('with its modern and dazzling interior finishes.','dont know',true,false,12,1500.00,'condo',3,1,'New home 3'),
        (' stun you with its modern and dazzling interior finishes.','home type dont know',true,false,12,2300.00,'condo',4,3,'New home 4'),
        ('dazzling interior finishes.','home type dont know',true,false,12,2200.00,'condo',5,1,'New home 5');



