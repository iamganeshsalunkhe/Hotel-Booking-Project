/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function AddProperty() {
  // scroll window to top 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  // state to hold location
  const [locations, setLocation] = useState([]);
  const navigate = useNavigate();
  const [currentProperty, setCurrentProperty] = useState({
    name: "",
    address: "",
    roomType: "",
    price: "",
    image: "",
    locationId: "",
  });

  //handle changes in input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentProperty({ ...currentProperty, [name]: value });
  }

  function handleFilechange(e) {
    const file = e.target.files[0];
    setCurrentProperty({ ...currentProperty, image: file });
    // console.log("Selected file:", file);
  }


  // fetch locations from database
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("http://localhost:4100/locations");
        // set location
        setLocation(response.data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching locations :", error);
      }
    };
    fetchLocation();
  }, []);

  // handle adding a new property
  async function addProperty() {
    if (
      (currentProperty.name &&
        currentProperty.address &&
        currentProperty.roomType,
      currentProperty.price && currentProperty.locationId)
    ) {
      try {
        const formData = new FormData();
        formData.append("name", currentProperty.name);
        formData.append("address", currentProperty.address);
        formData.append("roomType", currentProperty.roomType);
        formData.append("price", parseFloat(currentProperty.price));
        formData.append("locationId", currentProperty.locationId);

        if (currentProperty.image) {
          formData.append("image", currentProperty.image);
        }
        
        // now send POST request
        const response = await axios.post(
          "http://localhost:4100/property/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        // setProperty([...property,response.data]);
        setCurrentProperty({
          name: "",
          address: "",
          roomType: "",
          price: "",
          image: "",
          locationId: "",
        });
        toast.success("Property added successfully.");
        navigate('/property')
      } catch (error) {
        console.log(error);
        console.error("Error adding a property:", error);
      }
    }
  }

  return (
    <>
      <div className="p-5 text-center h-[550px] bg-orange-400">
        <h1 className="text-3xl font-bold border-2 p-4  shadow-lg w-1/2 mx-auto border-black">Add a property</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="col-span-1">
            <label
              htmlFor="propertyname"
              className="block font-bold text-black"
            >
              Name
            </label>
            <input
              id="propertyname"
              name="name"
              type="text"
              value={currentProperty.name}
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
              placeholder="Property name"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="propertyaddress"
              className="block font-bold text-black"
            >
              Address
            </label>
            <input
              id="propertyaddress"
              name="address"
              type="text"
              value={currentProperty.address}
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
              placeholder="Property address"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="roomType" className="block font-bold text-black">
              Room Name
            </label>
            <input
              id="roomType"
              name="roomType"
              type="text"
              value={currentProperty.roomType}
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
              placeholder="Room name"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="Price" className="block font-bold text-black">
              Price
            </label>
            <input
              id="Price"
              name="price"
              type="number"
              value={currentProperty.price}
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
              placeholder="Price"
            />
          </div>
          <div className="col-span-1 ">
            <label
              htmlFor="propertyImage"
              className="block font-bold text-black"
            >
              image
            </label>
            <input
              id="propertyImage"
              type="file"
              onChange={handleFilechange}
              className="mt-2 w-full border-gray-300 block bg-white rounded-md p-2 shadow-2xl"
              placeholder="Image"
            />
          </div>
          <div className="col-span-1">
            <select
              name="locationId"
              value={currentProperty.locationId}
              onChange={handleChange}
              className="px-2 py-2 border rounded"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location.locationId} value={location.locationId}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 text-center ">
            <button
              onClick={addProperty}
              className="bg-green-500  rounded-md p-3  text-white font-semibold hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProperty;

