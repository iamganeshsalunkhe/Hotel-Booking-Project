import Editproperty from "../Components/Editproperty";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Editpropertypage() {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;
  

    // scroll to top
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);


  // function for handle on save(i.e. when changes to be submitted)
  async function handleSave(formDataWithFile) {
    try {
        const propertyId = property.propertyId;
      await axios.put(
        `http://localhost:4100/property/${propertyId}`,
        formDataWithFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Property Updated Successfully.")
    
      navigate("/property");
    } catch (error) {
      console.error(error);
    }
  }

  // function for  cancel editing
  function handleCancel() {
    navigate('/property')
  }

  return (
    <div>
      <Navbar />
      <Editproperty property={property} onSave={handleSave} onCancel ={handleCancel}/>
      <Footer />
    </div>
  );
}

export default Editpropertypage

    