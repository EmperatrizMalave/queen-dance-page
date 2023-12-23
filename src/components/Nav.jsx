import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import { FaHome } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';
import { BiWorld } from 'react-icons/bi';
import zumba from '/src/assets/zumba.png'
import '../pages/styleservices.css'


const Nav = () => {

    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    //hamburguesa
 const content = <>
    <div className='block absolute top-12 left-0 z-[100]'>
    <ul className='text-xl p-10'>
       <Link to="" spy={true} smooth={true}>
            <li className='my-auto hover: rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><FaHome />
            Inicio</li>
       </Link>
       <Link to="services" spy={true} smooth={true} >
            <li className='border-slate-800 hover:rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><BiWorld />Nuestros servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="contact">
            <li className='border-slate-800 hover:rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><IoIosMailOpen />

Contacto</li>
        </Link>
    </ul>

    </div>
 </>
  return (
    <nav>
        <div className='flex items-center justify-between py-2 bg-[#F670AE]'>
        <div className='lg:flex md:flex lg: flex-1 justify-end font-normal hidden'>
        <div>
            <ul className='gap-8 mr-16 flex items-center'>
            <img src={zumba} id='img' className='w-auto h-16 img-icon'/>
    <Link spy={true} smooth={true} to="">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] text-white-600 cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Inicio</li>
    </Link>
    <Link spy={true} smooth={true} to="services">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Nuestros servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="contact">
            <li className='font-bold text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Contacto</li>
        </Link>
            </ul>
        </div>
        </div>
        <div>
            {click && content}
        </div>

        <button className='block sm:hidden transtion' onClick={handleClick}>
            {click ? <FaTimes/> : <TiThMenuOutline />
}
        </button>
        </div>
    </nav>
    
  )
}

export default Nav