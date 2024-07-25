import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import axios from "axios";
import CardForAmenity from '../Components/CardForAmenity';

function Amenitypage() {
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

    return (
        <div>
            <Navbar/>
            <div className="m-2 text-center text-3xl font-bold font-sans">
                <h1>Amenities for the properties
                </h1>
            </div>
            <div className="mt-12 grid grid-cols-3">
                {amenities.map((amenity)=>(
                    <CardForAmenity key = {amenity.amenityId}
                    amenity={amenity}
                    />
                ))}
            </div>
        </div>
    )
}

export default Amenitypage
