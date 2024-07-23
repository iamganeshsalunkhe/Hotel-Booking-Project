import { useState } from "react";
import axios from "axios";

function Amenity() {
  // hold list of amenities
  const [amenity, setAmenity] = useState([]);

  const [currentAmenity, setCurrentAmenity] = useState({
    name: "",
    description: "",
    price: "",
  });

  //handle changes in input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentAmenity({ ...currentAmenity, [name]: value });
  }

  // handle adding a new amenity
  async function addAmenity() {
    if (currentAmenity.name && currentAmenity.price) {
      try {
        // now send POST request
        const response = await axios.post(
          "http://localhost:4100/amenities",
          currentAmenity
        );
        setAmenity([...amenity, response.data]);
        setCurrentAmenity({
          name: "",
          description: "",
          price: "",
        });
      } catch (error) {
        console.log(error);
        console.error("Error adding a amenity:", error);
      }
    }
  }

  return (
    <div className="p-5 text-center bg-slate-400 h-[550px]">
      <h1 className="text-3xl font-bold">Add an amenity</h1>
      <div className="mt-5 grid grid-cols-2 gap-8 ">
        <div className="col-span-1">
          <label htmlFor="input1" className="block font-bold text-black">
            Name
          </label>
          <input
            id="input1"
            name="name"
            type="text"
            value={currentAmenity.name}
            onChange={handleChange}
            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
            placeholder="Amenity name"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="input2" className="block font-bold text-black">
            Description
          </label>
          <input
            id="input2"
            name="description"
            type="text"
            value={currentAmenity.description}
            onChange={handleChange}
            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
            placeholder="Description"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="input3" className="block font-bold text-black">
            Price
          </label>
          <input
            id="input3"
            name="price"
            type="number"
            value={currentAmenity.price}
            onChange={handleChange}
            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
            placeholder="Price"
          />
        </div>
        {/* submit button for adding amenity */}
        <div className="col-span-2 text-center ">
          <button
            onClick={addAmenity}
            className="bg-green-500  rounded-md p-3 font-semibold hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Amenity;
