import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import axios from "axios";
import CardForAmenity from '../Components/CardForAmenity';
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import toast from "react-hot-toast";

function Amenitypage() {
    const navigate = useNavigate();
    const [amenities,setAmenities] = useState([]);

    useEffect(()=>{
        const getAmenities = async () =>{
            try {
                const res = await axios.get('http://localhost:4100/amenities');
                setAmenities(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        getAmenities();
    },[]);


    function handleAddButton(){
        navigate('add')
    }

    async function handleDeleteButton(amenityId){
        try {
            const confirmDelete = window.confirm("Do you really want to delete this amenity");
            if (confirmDelete){
                await axios.delete(`http://localhost:4100/amenities/${amenityId}`);
                setAmenities(amenities.filter(amenity=>amenity.amenityId !== amenityId));
                toast.success("An amenity deleted successfully!")
            }
        } catch (error) {

            toast.error("Problem while deleting an amenity!!")
            console.error("Error deleting amenity");

        }
    }

    return (
      <div>
        <Navbar />
        <div className="">
          <div className="m-2 text-center   border-2 w-1/2 mx-auto bg-gray-600 text-white p-2 rounded-md">
            <h1 className="text-3xl font-bold font-sans">Amenities </h1>
          </div>
          <div className="mt-12 grid grid-cols-3">
            {amenities.map((amenity) => (
              <CardForAmenity 
              key={amenity.amenityId} 
              amenity={amenity}
              onDelete={handleDeleteButton}
              
              />
            ))}
          </div>
          <div className="text-center p-2 ">
            <button
              className="bg-green-500 rounded-md p-2 text-white hover:bg-green-700 "
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Amenitypage
