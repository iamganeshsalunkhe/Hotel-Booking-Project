import { useEffect, useState } from "react"
import CustomerBookingCard from "./CustomerBookingCard"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate = useNavigate();
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


    const handleEditBooking = (booking)=>{
        navigate('/booking/edit',{state:{booking}})
    }


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
                <CustomerBookingCard 
                key={booking.bookingId}
                item={booking}
                bookingDetails={booking}
                onEdit={()=>handleEditBooking(booking)}
                onDelete={handleDeleteBooking}
                />
            ))}
            
        </div>   
        </>
    )
}

export default Booking
