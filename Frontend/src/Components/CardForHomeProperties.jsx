/* eslint-disable react/prop-types */
function Card({ item}) {
  return (
    <div>
      <div className="card bg-green-500 w-[300px] shadow-xl text-white">
        <figure className="relative">
          <img
            src={
              "https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2904/take-over-a-hotel.png?tr=n-tile"
            }
            alt="properties"
            className="w-full h-1/2 object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
             2 Adults/room
          </div>
          <div className="absolute bottom-2 right-2 bg-red-600 text-white text-sm px-1 rounded py-1">
            Only 1 room left
          </div>
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center font-bold">
            {item.name}
          </h2>
          <p className="font-medium ">Room name: {item.roomType}</p>
          <div>
            <p className="font-medium">Price: {item.price}/Night</p>
            <p className="font-medium">Address: {item.address}</p>
            </div>
          <div className="card-actions justify-end">
            <button className="bg-indigo-600 p-2 rounded text-white font-semibold">Reserve</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
