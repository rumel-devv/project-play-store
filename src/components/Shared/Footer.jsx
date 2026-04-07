import React from 'react';
import Flogo from '../../assets/images/logo.png'

const Footer = () => {
    return (

 <footer className="footer w-10/12 mx-auto sm:footer-horizontal bg-purple-50 text-base-content py-10 px-4 my-10" >

 
     <aside>
    <img src={Flogo} alt="Footer image" className='w-12 h-12'/>
    <p className='text-xl font-bold text-purple-600'>
      CheleStore Ltd.
    </p>
    <p> Providing reliable tech since 1992</p>
  </aside>
  <nav className='text-md'>
    <h6 className="footer-title text-lg text-purple-600">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg text-purple-600">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg text-purple-600">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>


</footer>
    );
};

export default Footer;