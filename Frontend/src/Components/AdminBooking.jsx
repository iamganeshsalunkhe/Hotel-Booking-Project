import { useEffect, useState } from "react";
import axios from "axios";

import AdminBookingCard from "./AdminBookingCard";

function AdminBooking() {
    const [booking, setBooking] = useState([]);
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get("http://localhost:4100/owner/:userId/bookings");
        setBooking(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, []);


  return (
    <>

        {booking.length > 0 ?<h1 className="text-center text-3xl font-semibold p-4">You have bookings for following properties</h1> :""}
      <div className="grid grid-cols-2 gap-6 ml-20 mt-10">
        {
        booking.length > 0 ?(
        booking.map((item,index) => (
          <AdminBookingCard
            key={index}
            item={item}
          />
        ))):
        <h1 className="text-3xl text-center font-bold">No booking Available</h1>
    }
      </div>
    </>
  );
}

export default AdminBooking;
