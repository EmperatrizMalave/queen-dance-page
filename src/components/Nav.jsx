import {useState} from 'react'
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import { TiThMenuOutline } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

const Nav = () => {

    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    //hamburguesa
 const content = <>
    <div className='block absolute top-12 left-0'>
    <ul className='text-xl p-10'>
       <Link spy={true} smooth={true} to="Home" className=''>
            <li className='my-auto hover:bg-lime-400 hover: rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><FaHome />
            Inicio</li>
       </Link>
       <Link spy={true} smooth={true}to="Services">
            <li className='border-slate-800 hover:bg-red-500 hover:rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><BiWorld />Nuestros servicios</li>
        </Link>
        <Link spy={true} smooth={true}to="Contact">
            <li className='border-slate-800 hover:bg-blue-500 hover:rounded' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}><IoIosMailOpen />

Contacto</li>
        </Link>
    </ul>

    </div>
 </>
  return (
    <nav>
        <div className='flex justify-between py-5'>
            <div className='lg:flex md:flex lg: flex-1 justify-end font-normal hidden'>
        <div className='flex-10'>
    <ul className='flex gap-8 mr-16 test-[18px]'>
       <Link spy={true} smooth={true} to="Home">
            <li className='hover:text-blue-500 hover:border-fuchsia-600 cursor-pointer' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Inicio</li>
       </Link>
       <Link spy={true} smooth={true} to="Services">
            <li className='hover:text-blue-500 cursor-pointer' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Nuestros servicios</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
            <li className='hover:text-blue-500 cursor-pointer' style={{ fontFamily:'Dhurjati', fontSize: '18px' }}>Contacto</li>
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