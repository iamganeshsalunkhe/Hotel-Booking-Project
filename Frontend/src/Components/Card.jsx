/* eslint-disable react/prop-types */
function Card({ item }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={item.image} alt="property1" />
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
            <p className="font-medium">City: {item.locationId}</p>

          </div>
          <div className="card-actions justify-end">
            <div className="">
              <button className=" bg-green-600 p-2 rounded-md text-white">Edit</button>
            </div>
            <div className="">
              <button className="bg-red-600 p-2 rounded-md text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
