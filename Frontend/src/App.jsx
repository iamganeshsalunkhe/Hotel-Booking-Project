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
import Amenitypage from "./Pages/Amenitypage";
import Addamenitypage from "./Pages/Addamenitypage";
import Forgotpasswordpage from "./Pages/Forgotpasswordpage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Context/AuthContext";
import TestLink from "./Components/Testlink";
import MakeBooking from "./Pages/MakeBooking";
import BookingPage from "./Pages/BookingPage";
import Editbookingpage from "./Pages/Editbookingpage";
import Adminbookingpage from "./Pages/Adminbookingpage";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="/forgot-password" element={<Forgotpasswordpage />} />

          <Route
            path="property"
            element={
              <ProtectedRoute role="admin">
                <Propertypage />
              </ProtectedRoute>
            }
          />

          <Route
            path="property/add"
            element={
              <ProtectedRoute role="admin">
                <Addpropertypage />
              </ProtectedRoute>
            }
          />

          <Route
            path="property/edit"
            element={
              <ProtectedRoute role="admin">
                <Editpropertypage />
              </ProtectedRoute>
            }
          />

          <Route
            path="amenity"
            element={
              <ProtectedRoute role='admin'>
                <Amenitypage />
              </ProtectedRoute>
            }
          />

          <Route
            path="amenity/add"
            element={
              <ProtectedRoute role='admin'>
                <Addamenitypage />
              </ProtectedRoute>
            }
          />
          <Route path="account" element={<Profilepage />} />
          <Route path="/manageBooking" element={
            <ProtectedRoute role='admin'>
              <Adminbookingpage/>
            </ProtectedRoute>
          }
          />
          <Route path="booking" element={<MakeBooking/>}/>
          <Route path="myBooking" element={<BookingPage/>}/>
          <Route 
          path="booking/edit" element={
            <ProtectedRoute role='customer' >
              <Editbookingpage/>
            </ProtectedRoute>
          }
          />
          <Route path="testfooter" element={<TestLink/>}/>
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
