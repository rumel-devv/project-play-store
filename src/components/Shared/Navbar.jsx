import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
    return (
       <nav className='w-full md:w-10/12 mx-auto py-4  p-2'>

     <div className='flex justify-between gap-4 items-center'>
           
           <div className='flex  items-center'>
            <img className='w-12 h-12' src={logo} alt='Logo'></img>
            <h2 className='text-purple-600 text-2xl font-bold'>CeleStore</h2>
           </div>

         <ul className='md:flex justify-between gap-3 text-lg font-medium uppercase hidden '>
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
                <NavLink to='/contribute' > Contribute </NavLink>
            </li>
        </ul> 
        <button className='flex gap-1.5 items-center bg-purple-600 btn text-white'> <FaGithub></FaGithub> Contribute</button>
     </div>

       </nav>
    );
};

export default Navbar;