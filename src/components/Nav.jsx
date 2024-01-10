import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { TiThMenu } from "react-icons/ti";
import { FaHome } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';
import { BiWorld } from 'react-icons/bi';
import zumba from '/src/assets/zumba.png'
import '../pages/styleservices.css'


const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
    }
    //hamburguesa
const content = <>
     <div className='fixed top-0 w-full h-full text-white p-10'>
      <ul className='hamburger-buttons text-xl flex flex-col'>
        <Link to="" className='button'>
            <li className='hamburger-button' style={{ fontFamily:'Dhurjati', fontSize: '18px'}}><FaHome />Inicio</li>
        </Link>
        <Link to="services" className='button' >
            <li className='hamburger-button' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><BiWorld />Nuestros servicios</li>
        </Link>
        <Link to="contact" className='button'>
            <li className='hamburger-button' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><IoIosMailOpen />Contacto</li>
        </Link>
    </ul>
  
    </div>
</>
return (
    <nav>
        <div className='flex items-center justify-between py-2 bg-[#F670AE]'>
        <div className='lg:flex md:flex lg: flex-1 justify-end font-normal hidden'>
            <ul className='gap-8 mr-16 flex items-center'>
            <img src={zumba} id='img' className='w-auto h-16 img-icon'/>
    <Link to="">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] text-white-600 cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Inicio</li>
    </Link>
    <Link to="services">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Nuestros servicios</li>
        </Link>
        <Link to="contact">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Contacto</li>
        </Link>
            </ul>
        </div>
        <div>
            {click && content}
        </div>
            <button className='block sm:hidden transtion m-4' onClick={handleClick}>
                {click ? <FaTimes/> : <TiThMenu />}
            </button>
        </div>
    </nav>
)
}

export default Nav