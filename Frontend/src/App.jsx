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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="property" element={<Propertypage />}/>
        <Route path="property/add" element={<Addpropertypage/>}/>

        <Route path="account" element={<Profilepage/>}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
