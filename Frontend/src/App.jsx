/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Amenity from './Components/Amenity';
import Property from './Components/Property';
import './index.css';


function App() {
  return (

      <BrowserRouter>
      <Routes>
             <Route index path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signuppage />} />
             <Route path='/login' element={<Loginpage />} />
             <Route path='*' element={<Homepage />} />
             <Route path='/property' element={<Property/>}/>
             <Route path='/amenity' element={<Amenity/>}/>
           </Routes>
      <Toaster />
     </BrowserRouter>
  )
}

export default App
