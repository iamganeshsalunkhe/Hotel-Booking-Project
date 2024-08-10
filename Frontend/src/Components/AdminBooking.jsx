import { useEffect, useState } from "react";
import axios from "axios";

import AdminBookingCard from "./AdminBookingCard";

function AdminBooking() {
    const [booking, setBooking] = useState([]);
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get("http://localhost:4100/owner/:userId/bookings");
        console.log(res.data)
        setBooking(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, []);


  return (
    <>
      <div className="grid grid-cols-2 gap-6 ml-20 mt-10">
        {
        booking.length > 0 ?(
        booking.map((item,index) => (
          <AdminBookingCard
            key={index}
            item={item}
          />
        ))):
        <h1>No booking Available</h1>
    }
      </div>
    </>
  );
}

export default AdminBooking;
