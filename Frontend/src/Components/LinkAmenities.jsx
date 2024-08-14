/* eslint-disable react/prop-types */
import {useEffect, useState} from'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
function LinkAmenities() {
    const navigate = useNavigate();
    const location = useLocation();
    const propertyId = location.state?.propertyId;
    const [amenities,setAmenities]= useState([]);
    const [selectedAmenities,setSelectedAmenities]= useState([]);

    async function fetchAllAmenities() {
        try {
            const res = await axios.get('http://localhost:4100/amenities')
            setAmenities(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchAllAmenities();
    },[]);
    
    function handleSelectAmenity(amenityId){
        setSelectedAmenities((prevSelected)=>
        prevSelected.includes(amenityId) ? prevSelected.filter((id) => id !== amenityId):[...prevSelected,amenityId])
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await axios.post(`http://localhost:4100/${propertyId}/linkamenities`,{
                propertyId,
                amenityIds:selectedAmenities
            });
            toast.success("Amenities are linked successfully.");
            navigate('/property')
        } catch (error) {
            console.error("Error linking amenities:",error.res? error.res.data.message : error.message);
            console.log(error)
            toast.error(error.res ? error.res.data.message:"An error occurred while linking amenities")
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className='text-4xl text-center bg-zinc-600 text-white font-bold ' >Link Amenities</h2>
                <div className='flex flex-wrap bg-slate-400 font-semibold text-2xl'>
                    {amenities.map((amenity)=>(
                        
                        <label key={amenity.amenityId} 
                        className='w-1/2 flex items-center mb-2'>
                        <input 
                        type='checkbox'
                        value={amenity.amenityId}
                        onChange={()=>handleSelectAmenity(amenity.amenityId)}
                        checked={selectedAmenities.includes(amenity.amenityId)}
                        className='mr-2 ml-10 font-semibold '
                        />
                        <span>{amenity.name}</span>
                        </label>
                        
                    ))}
                </div>
                <div className='text-center bg-slate-300'>
                <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded  font-semibold'>
                    Link Amenities
                </button>
                </div>
            </form>
        </>
    )
}

export default LinkAmenities
