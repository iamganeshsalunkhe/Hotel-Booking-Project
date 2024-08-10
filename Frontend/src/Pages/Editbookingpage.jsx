import { useLocation, useNavigate } from "react-router-dom"
import EditBookingForm from "../Components/EditBookingForm"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import axios from "axios";
import toast from "react-hot-toast";

function Editbookingpage() {
    const location = useLocation();
    const navigate  = useNavigate();
    const booking = location.state?.booking;
    
    async function handleSave(bookingId,updatedDates) {
        try {
            await axios.put(`http://localhost:4100/booking/${bookingId}`,updatedDates,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            toast.success("Booking updated successful.")
            navigate('/myBooking');
        } catch (error) {
            console.error(error)
            toast.error('Failed to update booking')
        }
    }


    function handleCancel(){
        navigate('/myBooking')
    }
    return (
        <div>
            <Navbar/>
            <EditBookingForm bookingDetails={booking}
            onSave={handleSave}
            onCancel={handleCancel}
            />
            <Footer/>
        </div>
    )
}

export default Editbookingpage
