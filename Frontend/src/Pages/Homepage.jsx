import Footer from "../Components/Footer"
import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import Datepicker from '../Components/Datepicker'

function Homepage() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Datepicker/>
            <Footer/>
        </div>
    )
}

export default Homepage
