import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate,useLocation } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const propertyId = location.state?.selectedPropertyId;



  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(propertyId);
    const bookingData = {
      propertyId:propertyId,
      checkInDate,
      checkOutDate, 
      numberOfGuests:2
    };

    try {
        await axios.post('http://localhost:4100/booking',bookingData,
          {
            headers:{
              'Content-Type':'application/json'
          }
        }
        );
        toast.success('Your Booking has been Confirmed!!');
        navigate('/myBooking');
  } catch (error) {
      console.error(error);
  }
  }

  return (
    <div className="booking-form p-4 max-w-lg mx-auto ">
      {/* Guest Details */}
      <div className="grid grid-cols-1 gap-4 font-semibold mb-6">
        <div className="grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold mb-2">Guest 1</h2>
          <div>
            <label className="block mb-1">Name : </label>
            <input
              type="text"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Age : </label>
            <input
              type="number"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Aadhar/PAN Number :</label>
            <input
              type="text"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold mb-2">Guest 2</h2>
          <div>
            <label className="block mb-1">Name : </label>
            <input
              type="text"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Age : </label>
            <input
              type="number"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Aadhar/PAN Number :</label>
            <input
              type="text"
              className="border-2 p-2 rounded w-full"
              required
            />
          </div>
        </div>
      </div>

      {/* Dates and Number of Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold mb-6">
        <div>
          <label className="block mb-1">Check-in Date : </label>
          <DatePicker
            showIcon
            isClearable
            placeholderText="Select check-in Date"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Check-out Date : </label>
          <DatePicker
            showIcon
            isClearable
            placeholderText="Select check-out Date"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            // Ensure check-out date is after check-in date
            minDate={
              checkInDate
                ? new Date(checkInDate.getTime() + 86400000)
                : new Date()
            }
            dateFormat="dd/MM/yyyy"
            className="border rounded px-2 py-1 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Number of Guests :</label>
          <input
            type="number"
            defaultValue={2}
            readOnly
            className="border-2 p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Confirm Booking Button */}
      <div className="text-center flex justify-between  gap-2">
        <button className="bg-red-500 w-1/4 rounded text-white font-semibold" onClick={()=>navigate(-1)}>
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 p-2 rounded-md text-white font-semibold cursor-pointer outline-none border-none w-3/4"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default BookingForm;
