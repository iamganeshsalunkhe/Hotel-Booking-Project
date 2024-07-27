import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';

function Propertypage() {
    const navigate = useNavigate();
    const [properties,setProperties] = useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);
    
    

    useEffect(()=>{
        const getProperties = async ()=>{
            try {
                const res = await axios.get('http://localhost:4100/properties/getall');
                setProperties(res.data);
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }
        getProperties();
    },[]);

    // when user click on add button to add more properties
    function handleAddButton(){ 
        navigate('/property/add');
    }

    async function handleDeleteButton(propertyId){
        try {
            const confirmDelete = window.confirm("Do you really want to delete that property?");

            if (confirmDelete){
                await axios.delete(`http://localhost:4100/property/${propertyId}`);

                setProperties(properties.filter(property=>property.propertyId !== propertyId));
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        }
    }

    return (
        <div className='bg-orange-200'>
            <Navbar/>
            <div className='m-2 text-center text-3xl font-bold font-sans  '>
            <h1>Properties listed by you     
            </h1>
            </div>
            <div className='mt-12 md:ml-14 grid  grid-col-1 md:grid-cols-2  gap-4 p-5 '>
                {
                    loading ?    (<Spinner/>)
                    
                    :error ?  (
                    <h1 className='text-2xl font-semibold text-center text-red-500'>Error:{error}</h1>
                    )
                    :
                    (properties.length === 0 ? (
                    <h1 className='text-2xl font-semibold text-center'>You do not have properties listed here. </h1>)
                    :
                    (properties.map((item)=>(
                        <Card 
                        key={item.propertyId} 
                        item={item}
                        onDelete= {handleDeleteButton}
                        />
                    ))))
                }
            </div>

            <div className='text-center '>
                <button className='text-2xl mb-5 bg-indigo-500 rounded-md p-2 w-24 text-white' 
                onClick={handleAddButton}
                >Add 
                </button>
            </div>
        </div>
    )
}   

export default Propertypage
