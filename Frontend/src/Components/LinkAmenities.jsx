import {useEffect, useState} from'react';
import axios from 'axios';
function LinkAmenities() {
    const [amenities,setAmenities]= useState([]);
    const [selectedAmenities,setSelectedAmenities]= useState([]);

    useEffect(()=>{
        const fetchAmenities = async ()=>{
            try {
                const res = await axios.get('http://localhost:4100/amenities')
                setAmenities(res.data);
            } catch (error) {
                console.error("Error fetching amenities :",error);
            }
        };fetchAmenities();
    },[]);

    function handleSelectAmenity(amenityId){
        setSelectedAmenities((prevSelected)=>
        prevSelected.includes(amenityId) ? prevSelected.filter((id) => id !== amenityId):[...prevSelected,amenityId])
    }

    return (
        <>
            <form>
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
