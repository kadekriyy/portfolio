import React,{useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'


function Navbar (){
    const [nav,setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)
    return(

        <div className="fixed w-full h-[55px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300">
            <div>
                {/* <img src={logo} alt="img" style={{width: "50px"}} /> */}
            </div>
            {/* Menu */}    
    
                <ul className="hidden md:flex">
                    <li>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                    Home
                    </Link>
                    </li>
                    <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                    About
                    </Link>
                    </li>
                    <li>
                    <Link to="skills" spy={true} smooth={true} duration={500}>
                    Skills
                    </Link>
                    </li>
                    <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                    </Link>
                    </li>
                </ul>
            
            {/* Hamburger */}
            <div onClick={handleClick}className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* MObile menu */}
            
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
            
            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                        href="/">Linkedin<FaLinkedin size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                        href="https://github.com/kadekriyy">Github<FaGithub size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f729b]">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                        href="https://www.instagram.com/rynkd_/">Instagram<FaInstagram size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                        href="https://www.facebook.com/kadek.riyan.969">Facebook<FaFacebook size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar