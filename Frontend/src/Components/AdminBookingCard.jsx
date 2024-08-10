/* eslint-disable react/prop-types */
function AdminBookingCard({item}) {

    const formatDate = (dateString) => {
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date(dateString));
    };
    return (
      <div>
        <div className="card bg-green-700 w-[450px] shadow-xl text-white">
          <div className="card-body ">
            <h2 className="card-title text-center font-bold">Property Name : {item.propertyName}</h2>
            <p className="font-bold ">Room name: {item.propertyRoomName}</p>
            <div>
              <p className="font-bold">Price: ₹{item.propertyPrice}/Night</p>
              <p className="font-bold">Address: {item.propertyAddress}</p>
            </div>
            <div className=" text-white ">
              <h3 className="font-bold text-xl">Booking Details  : </h3>
              <p className="font-bold">Check in Date : {formatDate(item.checkInDate)}</p>
              <p className="font-bold">Check out Date : {formatDate(item.checkOutDate)}</p>
              <p className="font-bold">
                Number of Guests: {item.numberOfGuests}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminBookingCard
