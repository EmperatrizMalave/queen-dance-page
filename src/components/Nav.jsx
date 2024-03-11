import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { TiThMenu } from "react-icons/ti";
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
        <div className='flex items-center h-screen fixed bg-pink-400 z-50 w-sreen mt-0'>
        <ul className='list-menu'>
            <Link to="" onClick={closeMenu} className='link' data-text="Inicio">
                <li className='element ml-2'>Inicio</li>
            </Link>
            <Link to="services" onClick={closeMenu} className='link' data-text="Nuestros servicios">
                <li className='element ml-2'>Nuestros servicios</li>
            </Link>
            <Link to="contact"  onClick={closeMenu} className='link' data-text="Contact">
                <li className='element ml-2' >Contacto</li>
            </Link> 
        </ul>
        </div>
    </>
    return ( 
        <nav >
            <div className='flex items-center justify-between py-2 bg-[#F670AE]'>
            <div className='hidden sm:flex flex-1 justify-end font-normal'>
                <ul className='gap-8 mr-16 flex items-center'>
                <img src= "https://i.imgur.com/OHrfqPR.png" id='img' className='w-auto h-16 img-icon'/>
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