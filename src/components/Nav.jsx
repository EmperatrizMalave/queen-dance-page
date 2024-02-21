import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { TiThMenu } from "react-icons/ti";
import zumba from '/src/assets/zumba.png'
import '../pages/styleservices.css'
import './hamburgermenustyles.css'


const Nav = () => {

    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click);
    };
    const closeMenu = () => {setClick (false)}
    //hamburguesa
    const content = <>
        <div className='flex items-center h-screen fixed bg-pink-400 z-50 mt-0'>
        <ul className='list-menu'>
            <Link to="" onClick={closeMenu} className='link' data-text="Inicio">
                <li className='element'>Inicio</li>
            </Link>
            <Link to="services" onClick={closeMenu} className='link' data-text="Nuestros servicios">
                <li className='element'>Nuestros servicios</li>
            </Link>
            <Link to="contact"  onClick={closeMenu} className='link' data-text="Contact">
                <li className='element' >Contacto</li>
            </Link> 
        </ul>
        </div>
    </>
    return (
        <nav >
            <div className='flex items-center justify-between py-2 bg-[#F670AE]'>
            <div className='lg:flex md:flex lg: flex-1 justify-end font-normal hidden'>
                <ul className='gap-8 mr-16 flex items-center'>
                <img src={zumba} id='img' className='w-auto h-16 img-icon'/>
        <Link to="">
                <li className='text-[#F2F0E1] hover:text-[#095183] text-white-600 cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '20px'}}>Inicio</li>
        </Link>
        <Link to="services">
                <li className='text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '20px'}}>Nuestros servicios</li>
            </Link>
            <Link to="contact">
                <li className='text-[#F2F0E1] hover:text-[#095183] cursor-pointer text-slate-200' style={{ fontFamily:'Dhurjati', fontSize: '20px'}}>Contacto</li>
            </Link>
                </ul>
            </div>
            <div>
                {click && content}
            </div>
                <button className='block sm:hidden transtion m-4' onClick={toggle}>
                    {click ? <FaTimes/> : <TiThMenu />}
                </button>
            </div>
        </nav>
    )
}

export default Nav