/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Propertypage from "./Pages/Propertypage";
import "./index.css";
import Profilepage from "./Pages/Profilepage";
import Addpropertypage from "./Pages/Addpropertypage";
import Editpropertypage from "./Pages/Editpropertypage";
import Amenitypage from './Pages/Amenitypage';

import Addamenitypage from "./Pages/Addamenitypage";
import Forgotpasswordpage from "./Pages/Forgotpasswordpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="/forgot-password" element={<Forgotpasswordpage/>}/>
        <Route path="property" element={<Propertypage />}/>
        <Route path="property/add" element={<Addpropertypage   />}/>
        <Route path="property/edit" element={<Editpropertypage/>}/>
        <Route path="amenity" element={<Amenitypage/>}/>     
        <Route path="amenity/add" element={<Addamenitypage/>}/>   
        <Route path="account" element={<Profilepage/>}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
