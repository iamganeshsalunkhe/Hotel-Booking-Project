import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Card from '../Components/Card';
import { Outlet, useNavigate } from 'react-router-dom';
function Propertypage() {
    const navigate = useNavigate();
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

    function handleAddButton(){
        console.log('Navigating to add ')
        navigate('add');
    }

    return (
        <div className='bg-slate-300'>
            <Navbar/>
            <div className='m-2 text-center text-3xl font-bold font-sans  '>
            <h1>Properties listed by you     
            </h1>
            </div>
            <div className='mt-12 md:ml-14 grid  grid-col-1 md:grid-cols-2  gap-4 p-5 '>

                {properties.length === 0 ? (
                    <h1 className='text-2xl font-semibold text-center'>You do not have properties listed here. </h1>):
                    (properties.map((item)=>(
                        <Card key={item.propertyId} item={item}/>
                    )))}
                
                

            </div>

            <div className='text-center '>
                <button className='text-2xl bg-indigo-500 rounded-md p-2' 
                onClick={handleAddButton}
                >Add 
                </button>
            </div>
            <Outlet/>
        </div>
    )
}   

export default Propertypage
