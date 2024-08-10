/* eslint-disable react/prop-types */
import { useState } from "react"
import DatePicker from "react-datepicker";

function EditBookingForm({bookingDetails,onSave,onCancel}) {
    const [checkInDate,setCheckInDate]= useState('');
    const [checkOutDate,setCheckOutDate]= useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        onSave(bookingDetails.bookingId,{checkInDate,checkOutDate});
    }
    return (
      <div className=" w-full bg-zinc-600 text-white">
        <div className="text-center text-4xl border-1 p-4 w-1/2 mx-auto  font-bold ">
          <h2 className="text-white ">Edit Booking</h2>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="font-bold block ">Check-in Date : </label>
              <DatePicker
                isClearable
                placeholderText="Select check-in Date"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="border rounded px-2 py-1 w-full bg-slate-500 "
              />
            </div>
            <div>
              <label className="block font-bold">Check-out Date : </label>
              <DatePicker
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
                className="border rounded px-2 py-1 w-full bg-slate-500"
              />
            </div>
            <div className="flex justify-between space-x-4 p-4">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default EditBookingForm
