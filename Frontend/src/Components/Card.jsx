/* eslint-disable react/prop-types */
function Card({ item ,onDelete}) {
  return (
    <div>
      <div className="card bg-indigo-500 w-[450px] shadow-xl text-white">
        <figure>
          <img
            src={
              item.image ||
              "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2904/take-over-a-hotel.png?tr=n-tile"
            }
            alt="property1"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center font-bold">
            {item.name}
            {/* <div className="badge badge-secondary">TRENDING</div> */}
          </h2>
          <p className="font-medium ">Room name: {item.roomType}</p>
          <div>
            <p className="font-medium">Price: {item.price}/Night</p>
            <p className="font-medium">Address: {item.address}</p>
            </div>
          <div className="card-actions justify-end">
            <div className="">
              <button className=" bg-green-600 p-2 rounded-md text-white"
              >
                Edit
              </button>
            </div>
            <div className="">
              <button className="bg-red-600 p-2 rounded-md text-white"
              onClick={()=>onDelete(item.propertyId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
