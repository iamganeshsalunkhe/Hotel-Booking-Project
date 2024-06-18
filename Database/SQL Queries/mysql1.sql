-- Users: Stores information about registered users.

CREATE TABLE users(
    userid INT Auto_Increment primary key,
    name varchar(200),
    email varchar (200),
    phone varchar (50)
);

-- Services: Contains details about services.
CREATE TABLE services(
    serviceid INT Auto_Increment primary key,
    name varchar(200),
    description varchar(500),
    price INT
);

-- Bookings: Contains details about bookings.
CREATE TABLE bookings(
    bookingid int Auto_Increment primary key,
    userid int,
    serviceid int,
    date timestamp,
    status enum('confirmed','pending','cancelled'),
    number_of_guests int,
    foreign key (userid) references users(userid),
    foreign key (serviceid) references services(serviceid)
);

-- Locations: Represents different locations.
CREATE TABLE locations (
    locationid int Auto_Increment primary key,
    name varchar (200),
    address varchar (500),
    city enum('Mumbai','Pune','Kolhapur','Hydrabad') not null,
    country varchar(20) default 'India' 
);

-- Reviews: Stores information about reviews.
CREATE TABLE reviews(
    reviewid int Auto_Increment primary key,
    userid int,
    serviceid int,
    rating tinyint not null check  (rating between 0 and 5),
    comment varchar(500),
    foreign key (userid) references users(userid),
    foreign key (serviceid) references services(serviceid)
);

-- Payment: Stores information about payments made by users.
CREATE TABLE payments(
    paymentid int Auto_Increment primary key,
    bookingid int,
    amount int ,
    payment_date timestamp default current_timestamp,
    foreign key (bookingid) references bookings(bookingid)
);