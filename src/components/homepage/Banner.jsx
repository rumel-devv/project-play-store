import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import bannerImg from '../../assets/images/hero.png'
const Banner = () => {
    return (
      <div className='w-full md:w-10/12 mx-auto min-h-[64vh] flex items-center'>
            <div className='text-center space-y-4 '>
                <h2 className='text-3xl md:text-5xl font-bold'> We Build <br /> <span className='text-purple-600'>Productive</span> Apps</h2>
                <p className='w-full p-2 md:w-8/12 mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

              <div className='space-x-4'>
                <button className='btn btn-outline'> <FaGooglePlay></FaGooglePlay> Google Play</button>
                <button className='btn btn-outline'><FaAppStoreIos/>Apps Store</button>
              </div>
              <img className='w-full max-w-lg mx-auto' src={bannerImg} alt='Banner Image' />
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default Banner;