-- Insert into users table
INSERT INTO users (name, email, phone) VALUES (
    'Ganesh Salunkhe', 'ganeshsalunkhe1998@gmail.com', '9834610263'
);

set @last_user_id = LAST_INSERT_ID();

-- Insert into services table
INSERT INTO services (name, description, price) VALUES (
    'Stay', 'You can stay at our lounge', 5000
);
set @last_service_id = LAST_INSERT_ID();
-- Insert into bookings table
INSERT INTO bookings (userid, serviceid, date, status,number_of_guests) VALUES (
    @last_user_id,@last_service_id, '2024-06-15 00:00:00', 'confirmed',2
);

-- Insert into locations table
INSERT INTO locations (name, address, city) VALUES (
    'Hotel Mumbai', '123 Marine Drive, Mumbai', 'Mumbai'
);

set @location_id = LAST_INSERT_ID();

-- Insert into reviews table
INSERT INTO reviews (userid, serviceid, rating, comment) VALUES (
    1, 1, 5, 'Excellent service and very comfortable stay!'
);

set @review_id = LAST_INSERT_ID();


-- Insert into payments table
INSERT INTO payments (bookingid, amount) VALUES (
    1, 10000
);
