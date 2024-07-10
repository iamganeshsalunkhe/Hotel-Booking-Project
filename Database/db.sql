-- Users Table: Contains user information with roles to distinguish between admin (property owner) and customer.
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200),
    email VARCHAR(100),
    password VARCHAR(200),
    role ENUM('Admin', 'Customer'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Amenities Table: Stores details about different amenities.
CREATE TABLE amenities (
    amenities_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    description VARCHAR(300),
    price INT 
);

-- Locations Table: Stores property location details.
CREATE TABLE locations (
    locations_id INT PRIMARY KEY AUTO_INCREMENT,
    name ENUM('Mumbai', 'Pune', 'Hyderabad')
);

-- Property Table: Contains property information, linked to users (admins) and locations.
CREATE TABLE property (
    property_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    locations_id INT,
    name VARCHAR(255),
    address VARCHAR(255),
    room_type VARCHAR(100),
    price int,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (locations_id) REFERENCES locations(locations_id)
);

-- Bookings Table: Contains booking details, linked to users and properties.
CREATE TABLE bookings (
    bookings_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    property_id INT,
    check_in_date TIMESTAMP,
    check_out_date TIMESTAMP,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Confirmed', 'Cancelled'),
    number_of_guests INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (property_id) REFERENCES property(property_id)
);

-- Booking_Amenities Table: Junction table to link bookings with selected amenities.
CREATE TABLE booking_amenities (
    bookings_id INT, 
    amenities_id INT,
    PRIMARY KEY (bookings_id, amenities_id),
    price INT,
    FOREIGN KEY (bookings_id) REFERENCES bookings(bookings_id),
    FOREIGN KEY (amenities_id) REFERENCES amenities(amenities_id)
);

-- Property_Amenities Table: Junction table to link properties with available amenities.
CREATE TABLE property_amenities (
    property_id INT, 
    amenities_id INT,
    PRIMARY KEY (property_id, amenities_id),
    FOREIGN KEY (property_id) REFERENCES property(property_id),
    FOREIGN KEY (amenities_id) REFERENCES amenities(amenities_id)
);

-- Payments Table: Stores payment details, linked to users and bookings.
CREATE TABLE payments (
    payments_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT, 
    bookings_id INT,
    amount INT, 
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (bookings_id) REFERENCES bookings(bookings_id)
);
