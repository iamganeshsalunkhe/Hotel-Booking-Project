/* eslint-disable react/prop-types */
function Card({ item }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={item.image} alt="property" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">TRENDING</div>
          </h2>
          <p>{item.roomType}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div> */}
            {/* <div className="badge badge-outline">Products</div> */}
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
