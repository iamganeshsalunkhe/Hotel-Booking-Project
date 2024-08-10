/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import CardForHomeProperties from "../Components/CardForHomeProperties";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();

  // states for checkInDate and checkOutDate
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [properties, setProperties] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  // fetch locations from database
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("http://localhost:4100/locations");
        // set location
        setLocation(response.data);
      } catch (error) {
        console.error("Error fetching locations :", error);
      }
    };
    fetchLocation();
  }, []);

  // on when user click on search button
  const handleSearch = async () => {
    setSearchInitiated(true);
    if (!selectedLocation) {
      alert("Please select a location");
      return;
    }
    try {
      const res = await axios.get("http://localhost:4100/getProperties", {
        params: {
          locationId: selectedLocation,
          isBooked: false,
        },
      });
      setProperties(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReserve = (propertyId) => {
    setSelectedPropertyId(propertyId);
    navigate("/booking", { state: { selectedPropertyId:propertyId } });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4  mt-2 p-2">
        <div className="mt-2">
          <label className=" mx-2 text-m font-medium text-gray-700">
            Check-in
          </label>
          <Datepicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            showIcon
            isClearable
            placeholderText="Select check-in date"
            selectsStart
            closeOnScroll={true}
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="border rounded px-2 py-1"
          />
        </div>
        <div className="mt-2">
          <label className="mx-2  text-m font-medium text-gray-700">
            Check-out
          </label>
          <Datepicker
            selected={checkOutDate}
            showIcon
            closeOnScroll={true}
            isClearable
            placeholderText="Select check-out date"
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={
              checkInDate
                ? new Date(checkInDate.getTime() + 86400000)
                : new Date()
            }
            dateFormat="dd/MM/yyyy"
            className="border rounded px-2 py-1"
          />
        </div>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="mt-2 p-2 border rounded-md font-serif"
        >
          <option value="">Select Location</option>
          {location.map((location) => (
            <option key={location.locationId} value={location.locationId}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>

      {/* display properties  */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {searchInitiated && properties.length === 0 ? (
          
          <h1 className="text-center font-bold text-xl">No properties available for selected location or for selected dates</h1>
        ) : (
          properties.map((property) => (
            <CardForHomeProperties
              key={property.propertyId}
              item={property}
              onReserve={handleReserve}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SearchForm;
