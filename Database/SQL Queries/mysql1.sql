-- Users: Stores information about registered users.

CREATE TABLE users(
    userid INT Auto_Increment primary key,
    name varchar(200),
    email varchar (200),
    phone varchar (50)
);

-- Services: Contains details about services.
CREATE TABLE amenities(
    amenitiesid INT Auto_Increment primary key,
    userid int,
    name varchar(200),
    description varchar(500),
    price INT,
    foreign key (userid) references users(userid)
);

-- Bookings: Contains details about bookings.
CREATE TABLE bookings(
    bookingid int Auto_Increment primary key,
    userid int,
    amenitiesid int,
    check_in_date timestamp,
    check_out_date timestamp,
    status enum('confirmed','pending','cancelled'),
    number_of_guests int,
    foreign key (userid) references users(userid),
    foreign key (amenitiesid) references amenities(amenitiesid)
);

-- Locations: Represents different locations.
CREATE TABLE locations (
    locationsid int Auto_Increment primary key,
    usersid int,
    bookingid int,
    name varchar (200),
    address varchar (500),
    city enum('Mumbai','Pune','Kolhapur','Hydrabad') not null,
    country varchar(20) default 'India' ,
    foreign key (userid) references users(userid),
    foreign key (bookingid) references bookings(bookingid)
);

-- Reviews: Stores information about reviews.
CREATE TABLE reviews(
    reviewid int Auto_Increment primary key,
    userid int,
    amenitiesid int,
    rating tinyint not null check  (rating between 0 and 5),
    comment varchar(500),
    foreign key (userid) references users(userid),
    foreign key (amenitiesid) references amenities(amenitiesid)
);

-- Payment: Stores information about payments made by users.
CREATE TABLE payments(
    paymentid int Auto_Increment primary key,
    userid int,
    bookingid int,
    amount int ,
    payment_date timestamp default current_timestamp,
    foreign key (bookingid) references bookings(bookingid),
    foreign key userid references user(userid)
);


CREATE TABLE properties(
    propertiesid INT Auto_Increment primary key,
    userid int,
    locationsid int,
    amenitiesid int,
    name varchar(200),
    address varchar(500),
    foreign key userid references user(userid),
    foreign key locationsid references venue(locationsid),
    foreign key amenitiesid references amenities(amenitiesid)
)