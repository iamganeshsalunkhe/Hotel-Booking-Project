/* eslint-disable react/prop-types */
function CustomerBookingCard({ item,bookingDetails, onEdit, onDelete }){

  const formatDate = (dateString)=>{
    return new Intl.DateTimeFormat('en-GB',{
      day:'2-digit',
      month:'2-digit',
      year:'numeric'
    }).format(new Date(dateString));
  };

  return (
    <div>
      <div className="card bg-indigo-500 w-[450px] shadow-xl text-white">
        <figure>
          <img
            src={
              "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2904/take-over-a-hotel.png?tr=n-tile"
            }
            alt="properties"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center font-bold">
            Property name :{" "}
            {item.property ? item.property.name : "property name unavailable"}
          </h2>
          <h4 className="font-bold">
            Property address : {item.property.address}
          </h4>
          <h4 className="font-bold">Room name : {item.property.roomType}</h4>
          <h4 className="font-bold">
            Price : ₹{item.property.price} per night (for 2 peoples)
          </h4>
          <p className="font-bold">
            Check-in Date : {formatDate(bookingDetails.checkInDate)}
          </p>
          <p className="font-bold">
            Check-out Date : {formatDate(bookingDetails.checkOutDate)}
          </p>
          <p className="font-bold">Status : {bookingDetails.status}</p>
        </div>

        <div className="card-actions justify-end p-4">
          <div className="">
            <button
              className=" bg-green-600 p-2 rounded-md text-white font-medium"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>

          <div className="">
            <button
              className="bg-red-600 p-2 rounded-md text-white font-medium"
              onClick={() => onDelete(bookingDetails.bookingId)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerBookingCard;
