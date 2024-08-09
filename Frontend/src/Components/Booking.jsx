import { useEffect, useState } from "react"
import CustomerBookingCard from "./CustomerBookingCard"
import axios from "axios";

function Booking() {
    const [booking,setBooking]= useState([]);
    useEffect(()=>{
        const fetchBooking = async ()=>{
            try {
                const res = await axios.get('http://localhost:4100/booking/user');
                setBooking(res.data)
                console.log(res.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchBooking();
    },[]);

    return (
        <>
         <div className="grid grid-cols-2 gap-6 ml-20 mt-10">
            {booking.map((booking)=>(
                <CustomerBookingCard key={booking.bookingId}
                item={booking} bookingDetails={booking}
                />
            ))}
            
        </div>   
        </>
    )
}

export default Booking
