
import homeImage from '/Images/Home.jpg';
function Home() {
    

    return (
        <>
            <div className=" relative h-screen">
                <img src={homeImage} className="w-full h-full object-cover" alt='Resort'/>
                <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold text-shadow-md w-[500px] ">
                Experience Paradise,
                <span className='text-indigo-600 '>
                     Book Your Stay
                    </span>

                </div>
                </div>
        </>
    )
}

export default Home
