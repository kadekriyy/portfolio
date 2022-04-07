import Profile from '../assets/profile.png'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home(){
    return(
        <div name='home' className='md:pl-16 grid md:grid-cols-2 grid-cols-1 sm:h-screen h-screen bg-[#0a192f] justify-center pt-[55px] '>
            {/* container */}
            <div className='max-w-[1000px] px-4 flex flex-col justify-center order-2 md:order-1 bg-[#0a192f]'>
                <p className='text-2xl text-[#ffff7f]'>Hi, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kadek Riyan Kusuma Putra</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>and I'm a Junior Backend Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Manage servers, applications, and databases so that they can communicate with each other well and smoothly.</p>
                {/* <div>
                    <button className='text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-[#ffff7f] hover:border-[#ffff7f] hover:text-black'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    </button>
                </div> */}
            </div>

            <div className='hidden md:flex justify-center order-1 md:order-2 items-center'>
                <div> 
                <img src={Profile} alt="foto" className="w-[300px] md:w-[800px]  bg-[#0a192f]"/>
                </div>
            </div>
        </div>
    )
}

export default Home