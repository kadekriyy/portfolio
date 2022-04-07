import html from '../assets/html5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import nodejs from '../assets/nodejs.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import docker from '../assets/docker.png'


function Skill () {
    return(
        <div name='skills' className='w-full sm:h-screen h-screen bg-[#0a192f] text-gray-300'> 
        {/* containers */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffff7f]'>Experience</p>
                <p className='py-4'>// These are the technologies</p>
            </div>

            <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={html} alt="Html Icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={css} alt="Html Icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={js} alt="Html Icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={nodejs} alt="Html Icon"/>
                    <p className='my-4'>NodeJs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={php} alt="Html Icon"/>
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={python} alt="Html Icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={docker} alt="Html Icon"/>
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={github} alt="Html Icon"/>
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skill