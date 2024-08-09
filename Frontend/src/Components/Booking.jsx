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
            } catch (error) {
                console.error(error);
            }
        };
        fetchBooking();
    },[]);


    // handle delete booking 
    const handleDeleteBooking= async (bookingId)=>{
        try {
            const confirmDelete = window.confirm("Do really want to delete your booking?")
            if (confirmDelete){
                await axios.delete(`http://localhost:4100/booking/${bookingId}`);

                setBooking((prevBooking)=>prevBooking.filter(booking => booking.bookingId !== bookingId));
                }
            }
         catch (error) {
            console.error(error)    
        }   
    }


    return (
        <>
         <div className="grid grid-cols-2 gap-6 ml-20 mt-10">
            {booking.map((booking)=>(
                <CustomerBookingCard key={booking.bookingId}
                item={booking} bookingDetails={booking}
                onDelete={handleDeleteBooking}

                />
            ))}
            
        </div>   
        </>
    )
}

export default Booking
