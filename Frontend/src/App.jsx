/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Propertypage from "./Pages/Propertypage";
import "./index.css";
import AddProperty from "./Components/AddProperty";
import Profilepage from "./Pages/Profilepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="property/*" element={<Propertypage />}>
          <Route path="add" element={<AddProperty/>}/>
        </Route>
        <Route path="account" element={<Profilepage/>}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
