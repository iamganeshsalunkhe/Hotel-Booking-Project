/* eslint-disable react/prop-types */
// import axios from "axios";
import { useState, useEffect } from "react";

function Editproperty({ property, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    propertyId: "",
    name: "",
    address: "",
    roomType: "",
    price: "",
    image: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (property) {
      setFormData({
        propertyId: property.propertyId,
        name: property.name || "",
        address: property.address|| "",
        roomType: property.roomType || "",
        price: property.price || "",
        image: property.image || null,
      });
    }
  }, [property]);

  function handleChange(e) {
    setFormData({ ...formData,
     [e.target.name] : e.target.value });
  }
  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("name", formData.name || "");
    formDataWithFile.append("address", formData.address || "");
    formDataWithFile.append("price", parseFloat(formData.price) || "");
    formDataWithFile.append("roomType", formData.roomType || "");
    if (file) {
      formDataWithFile.append("image", file);
    }

    onSave(formDataWithFile);
  }
  return (
    <div className=" w-full bg-rose-600">
      <h2 className="text-center text-3xl border-1 p-4 w-1/2 mx-auto  font-bold">
        Edit property
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" p-8  shadow-lg bg-slate-500"
      >
        <div className="mb-4">
          <label className="block text-grey-700">Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div>
          <label className="block text-grey-700">Address :</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div>
          <label className="block text-grey-700">Room name :</label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div>
          <label className="block text-grey-700">Price :</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-grey-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-500 rounded"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-10">
          <button className="bg-red-500 text-white px-4 py-2  rounded">
            Save
          </button>
          <button
            className="bg-indigo-500 text-white px-4 py-2  rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="bg-zinc-900 text-white h-fit">
        <p>
          **You can&apos;t change location of the property. If you want to
          change then delete property and add new one.
        </p>
      </div>
    </div>
  );
}

export default Editproperty;
