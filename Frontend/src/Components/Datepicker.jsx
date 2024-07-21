/* eslint-disable react/prop-types */

import { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function Datepickers({onSerach}) {
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);



    function handleSearch(){
        const formatStartDate = startDate ? format(startDate,'dd/MM/yyyy'):null;
        const formatEndDate = endDate ? format(endDate,'dd/MM/yyyy'):null;
            
        onSerach(formatStartDate,formatEndDate);
        }
    

    return (
        <>
          <div className='flex flex-col items-center'>
            <div className='flex space-x-4 mb-4'>
                <div>
                    <label className='block text-m font-medium text-gray-700'>Check-in</label>
                    <Datepicker
                    selected={startDate}
                    onChange={(date)=>setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    className='border rounded px-2 py-1'
                    />  
                </div>
                <div>
                    <label className='block text-m font-medium text-gray-700'>Check-out</label>
                    <Datepicker 
                    selected={endDate}
                    onChange={(date)=>setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    className='border rounded px-2 py-1'/>
                </div>
            </div>
                <button onClick={handleSearch}
                className='px-4 py-2 bg-blue-600 text-white rounded'>
                    Serach
                </button>            
            </div>  
        </>
    )
}



export default Datepickers
