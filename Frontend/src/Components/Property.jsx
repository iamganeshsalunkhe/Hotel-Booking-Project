/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from 'axios';

function Property() {
    // hold list of properties
    const[property,setProperty] = useState([]);
    // state to hold location
    const [locations,setLocation] = useState([]);
    
    const [currentProperty,setCurrentProperty] = useState({        
        name:"",
        address:"",
        roomType:"",
        price:"",
        image:"",
        locationId:""
    });    

    //handle changes in input fields
    function handleChange(e){
        const {name,value} = e.target;
        setCurrentProperty({...currentProperty,[name]:value});
    }

    function handleFilechange(e){
        const file = e.target.files[0];
        setCurrentProperty({...currentProperty,image:file});
    }

    // fetch locations from database
    useEffect(()=>{
        const fetchLocation = async ()=>{
            try {
                const response = await axios.get('http://localhost:4100/locations');
                // set location
                setLocation(response.data);
            } catch (error) {
                console.error("Error fetching locations :", error);
            }
        };
        fetchLocation();
    },[])
    
    // handle adding a new property
    async function addProperty(){
        if (currentProperty.name && currentProperty.address && currentProperty.roomType, currentProperty.price && currentProperty.locationId){
            try {
                const formData = new FormData();
                formData.append('name',currentProperty.name);
                formData.append('address',currentProperty.address);
                formData.append('roomType',currentProperty.roomType);
                formData.append('price',parseFloat(currentProperty.price));
                formData.append('locationId',currentProperty.locationId)

                if (currentProperty.image){
                    formData.append('image',currentProperty.image);
                }
                // now send POST request 
                const response = await axios.post('http://localhost:4100/properties',formData,{
                    headers:{
                        "Content-Type":'multipart/form-data'
                    }
                });
                setProperty([...property,response.data]);
                setCurrentProperty({
                    name:'',
                    address:"",
                    roomType:"",
                    price:"",
                    image:"",
                    locationId:""
                });
            } catch (error) {
                console.log(error)
                console.error("Error adding a property:",error);
            }
        }
    }
    
 

    return (
        <>
            <div className="p-5 text-center bg-slate-400 h-[550px]">
                <h1 className="text-3xl font-bold">Add a property</h1>
                    <div className="mt-5 grid grid-cols-2 gap-8 ">
                        <div className="col-span-1">
                            <label htmlFor='input1' className="block font-bold text-black">Name</label>
                            <input 
                            id="input1"
                            name="name"
                            type="text"
                            value={currentProperty.name}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
                            placeholder="Property name"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor='input2' className="block font-bold text-black">Address</label>
                            <input 
                            id="input2"
                            name="address"
                            type="text"
                            value={currentProperty.address}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
                            placeholder="Property name"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor='input3' className="block font-bold text-black">Room Name</label>
                            <input 
                            id="input3"
                            name="roomType"
                            type="text"
                            value={currentProperty.roomType}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
                            placeholder="Room name"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor='input4' className="block font-bold text-black">Price</label>
                            <input 
                            id="input4"
                            name="price"
                            type="number"
                            value={currentProperty.price}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 block rounded-md p-2 shadow-2xl"
                            placeholder="Price"
                            />
                        </div>
                        <div className="col-span-1 ">
                            <label htmlFor='input5' className="block font-bold text-black">image</label>
                            <input 
                            id="input5"
                            
                            type="file"
                            value={currentProperty.image}
                            onChange={handleFilechange}
                            className="mt-2 w-full border-gray-300 block bg-white rounded-md p-2 shadow-2xl"
                            placeholder="Image"
                            />
                        </div>
                        <div className="col-span-1">
                            <select name="locationId"
                            value={currentProperty.locationId}
                            onChange={handleChange}
                            className="px-2 py-2 border rounded">
                                <option value=''>Select Location
                                </option>
                                {locations.map((location)=>(
                                    <option key={location.locationId} value={location.locationId}>
                                        {location.name}
                                    </option>
                                ))}
                                </select>
                        </div>
                        <div className="col-span-2 text-center "> 
                            <button 
                            onClick={addProperty}
                            className="bg-green-500  rounded-md p-3 font-semibold hover:bg-green-600">Add</button>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default Property
