// import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import {Toaster} from 'react-hot-toast';
// import Homepage from './Pages/Homepage';
// import Loginpage from './Pages/Loginpage';
// import Signuppage from './Pages/Signuppage';

import './index.css';
import Datepicker from './Components/Datepicker';

function App() {
  return (
      // <BrowserRouter>
      //   <Routes>
      //       <Route index path='/' element = {<Homepage/>}/>
      //       <Route path='*' element ={<Homepage/>}/>
      //       <Route path='/signup' element={<Signuppage/>}/>
      //       <Route path='/login' element={<Loginpage/>}/>
      //     </Routes>  
      //     <Toaster/>  
      // </BrowserRouter>
      <Datepicker/>
  )
}

export default App
