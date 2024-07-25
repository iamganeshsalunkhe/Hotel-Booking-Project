import Footer from "../Components/Footer"
import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import SearchFrom from '../Components/SearchForm'

function Homepage() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <SearchFrom/>
            <Footer/>
        </div>
    )
}

export default Homepage
