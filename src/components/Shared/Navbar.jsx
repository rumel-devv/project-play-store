import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { RiLoginCircleFill } from 'react-icons/ri';



const Navbar = () => {
    return (
       <nav className='w-full md:w-10/12 mx-auto py-4  p-2'>

     <div className='flex justify-between gap-4 items-center'>
           
           <div className='flex  items-center'>
            <img className='w-12 h-12' src={logo} alt='Logo'></img>
            <Link to='/' className='text-purple-600 text-2xl font-bold'>CeleStore</Link>
           </div>

         <ul className='md:flex justify-between gap-3 text-md font-semibold uppercase hidden '>
            <li>
                <NavLink to='/' > Home </NavLink>
            </li>
            <li>
                <NavLink to='/apps' > Apps </NavLink>
            </li>
            <li>
                <NavLink to='/instalation' > Instalation </NavLink>
            </li>
            <li>
                <NavLink to='Dashboard' > Dashboard </NavLink>
            </li>
        </ul> 
        <button className='flex gap-1.5 items-center justify-center bg-purple-600 text-[15px] btn text-white'> <RiLoginCircleFill /> Login</button>
     </div>

       </nav>
    );
};

export default Navbar;