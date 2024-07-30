/* eslint-disable react/prop-types */
function CardForAmenity({amenity, onDelete}) {
  return (
    <div>
      <div className="card bg-gray-700 text-white m-3 w-96">
        <div className="card-body">
          <h2 className="card-title font-sans text-2xl ">{amenity.name}</h2>
          <div>
          <p className="font-semibold text-md ">{amenity.description}</p>
          </div>
            <div className="card-actions justify-end">
              <button className="btn bg-red-500 " onClick={()=>onDelete(amenity.amenityId)}>Delete</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CardForAmenity;