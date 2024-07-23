/* eslint-disable react/prop-types */

import { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';


function Datepickers({onSearch}) {
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState(null);



    function handleSearch(){
        const formatStartDate = startDate ? format(startDate,'dd/MM/yyyy'):null;
        const formatEndDate = endDate ? format(endDate,'dd/MM/yyyy'):null;
            
        onSearch(formatStartDate,formatEndDate);
        }
    

    return (
        <div className='flex flex-col items-center'>
            <div className='flex space-x-4 mb-4 mt-2'>
                <div>
                    <label className=' mx-2 text-m font-medium text-gray-700'>Check-in</label>
                    <Datepicker
                    selected={startDate}
                    onChange={(date)=>setStartDate(date)}
                    showIcon
                    isClearable
                    placeholderText='Select check-in date'
                    selectsStart
                    closeOnScroll={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    className='border rounded px-2 py-1'
                    />  
                </div>
                <div>
                    <label className='mx-2  text-m font-medium text-gray-700'>Check-out</label>
                    <Datepicker 
                    selected={endDate}
                    showIcon
                    closeOnScroll={true}
                    isClearable
                    placeholderText='Select check-out date'
                    onChange={(date)=>setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date() + 1}
                    dateFormat="dd/MM/yyyy"
                    className='border rounded px-2 py-1'/>
                </div>
            </div>
                <button onClick={handleSearch}
                className='px-4 py-2 bg-blue-600 text-white rounded'>
                    Search
                </button>            
            </div>
    )
}



export default Datepickers
