-- Users Table: Contains user information with roles to distinguish between admin (property owner) and customer.
CREATE TABLE users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200),
    email VARCHAR(100),
    password VARCHAR(200),
    role ENUM('Admin', 'Customer'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Amenities Table: Stores details about different amenities.
CREATE TABLE amenities (
    amenityId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    description VARCHAR(300)
);

-- Locations Table: Stores property location details.
CREATE TABLE locations (
    locationId INT PRIMARY KEY AUTO_INCREMENT,
    name ENUM('Mumbai', 'Pune', 'Hyderabad')
);

-- Property Table: Contains property information, linked to users (admins) and locations.
CREATE TABLE property (
    propertyId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    locationId INT,
    name VARCHAR(255),
    address VARCHAR(255),
    roomType VARCHAR(100),
    price int,
    isBooked boolean,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (locationId) REFERENCES locations(locationId)
);

-- Bookings Table: Contains booking details, linked to users and properties.
CREATE TABLE bookings (
    bookingId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    propertyId INT,
    checkInDate TIMESTAMP,
    checkOutDate TIMESTAMP,
    status ENUM('Confirmed', 'Cancelled'),
    numberOfGuests INT,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (propertyId) REFERENCES property(propertyId)
);

-- Property_Amenities Table: Junction table to link properties with available amenities.
CREATE TABLE property_amenities (
    propertyId INT, 
    amenityId INT,
    PRIMARY KEY (propertyId, amenityId),
    FOREIGN KEY (propertyId) REFERENCES property(propertyId),
    FOREIGN KEY (amenityId) REFERENCES amenities(amenityId)
);

