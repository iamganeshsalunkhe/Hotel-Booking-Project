# Hotel Booking Application

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Database Schema](#database-schema)
- [Setup Instructions](#setup-instructions)

  
## Introduction
This is a full-stack hotel booking application built from scratch. The application provides basic functionality for users and admin to sign up, log in, and book properties. It features two separate panels: one for customers and one for admins. Admins can manage their properties, while customers can make bookings.

## Technologies Used
### Backend
- Node.js
- Express.js
- Sequelize (ORM for MySQL)
- MySQL
- bcrypt (for password hashing)
- JWT
- multer
- cors

### Frontend
- React.js
- React Router
- Tailwind CSS
- react-toast
- react-silk
- daisyUI
- axios


## Features
- **Admin and user Authentication**: Admin(property owner) & customer can sign up and log in.
- **Admin Panel**: Admins can manage their properties.
- **Admin Panel**: Admins can link various amenities to their respective properties. 
- **Customer Panel**: Customers can browse properties and make bookings.
- **Booking System**: Customers can confirm bookings.




## Database Schema
```sql
-- Users Table: Contains user information with roles to distinguish between admin (property owner) and customer.
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200),
    email varchar (100),
    password VARCHAR(200),
    role ENUM('admin', 'customer'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Amenities Table: Stores details about different amenities.
CREATE TABLE amenities (
    amenities_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    description VARCHAR(300)
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
    room_type varchar(100),
    price int,
    isBooked Boolean,
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
    status ENUM('Confirmed', 'Cancelled'),
    number_of_guests INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (property_id) REFERENCES property(property_id)
);

-- Property_Amenities Table: Junction table to link properties with available amenities.
CREATE TABLE property_amenities (
    property_id INT, 
    amenities_id INT,
    PRIMARY KEY (property_id, amenities_id),
    FOREIGN KEY (property_id) REFERENCES property(property_id),
    FOREIGN KEY (amenities_id) REFERENCES amenities(amenities_id)
);

```




###  Setup Instructions

1. **Clone the repository**:
    ```sh
    git clone https://github.com/iamganeshsalunkhe/hotel-booking-app.git
    cd hotel-booking-app
    ```

2. **Install backend dependencies**:
    ```sh
    cd backend
    npm install
    ```

3. **Set up MySQL database**:
    - Create a new MySQL database and update the database configuration in `config/config.json`.

4. **Run database migrations**:
    ```sh
    npx sequelize db:migrate
    ```

5. **Start the backend server**:
    ```sh
    npm start
    ```

6. **Install frontend dependencies**:
    ```sh
    cd ../frontend
    npm install
    ```

7. **Start the frontend development server**:
    ```sh
    npm run dev
    ```

