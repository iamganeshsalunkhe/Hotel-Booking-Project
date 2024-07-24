import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Card from '../Components/Card';
function Propertypage() {
    const [properties,setProperties] = useState([]);
    

    useEffect(()=>{
        const getProperties = async ()=>{
            try {
                const res = await axios.get('http://localhost:4100/properties/getall');
                setProperties(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProperties();
    },[]);


    return (
        <div>
            <Navbar/>
            <div className='m-2 text-center text-3xl font-bold font-sans '>
            <h1>Properties listed by you     
            </h1>
            </div>
            <div className='mt-12 grid grid-cols-3'>
                {properties.map((item)=>(
                    <Card key = {item.propertyId} item={item}/>
                ))}
            </div>
        </div>
    )
}   

export default Propertypage
