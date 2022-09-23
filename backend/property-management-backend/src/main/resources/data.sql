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