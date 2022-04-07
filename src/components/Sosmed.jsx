import {FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'

function Sosmed (){
    return(
        <div className="md:hidden bg-black w-full w-max-[100px] justify-center py-4">
            <div>
                <div className='text-gray-300 text-center'>
                    <p>Follow me : </p>
                </div>
                <div className=" w-full">
                    <ul className='flex text-gray-600 text-2xl justify-center py-4'>
                        <li className='flex items-center'>
                            <a className="flex justify-between items-center w-full text-gray-300" 
                            href="https://www.instagram.com/rynkd_/" target={'_blank'}><FaInstagram size={30}/></a>
                        </li>

                        <li className='flex items-center'>
                            <a className="flex justify-between items-center w-full text-gray-300" 
                            href="https://www.facebook.com/kadek.riyan.969" target={'_blank'}><FaFacebook size={30}/></a>
                        </li>
                        <li className='flex items-center'>
                            <a className="flex justify-between items-center w-full text-gray-300" 
                            href="https://github.com/kadekriyy" target={'_blank'}><FaGithub size={30}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sosmed