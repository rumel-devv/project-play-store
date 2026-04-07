import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const AppCard = ({app}) => {
    return (
         <div  className="card bg-base-100 w-full md:w-84  shadow-sm">
                    <figure className='bg-gray-200 py-6'>
                 <img className='w-50 h-50 rounded-2xl'
                src={app.image}
              alt="Shoes" />
               </figure>
            <div className="card-body">
            <h2 className="card-title ">{app.title}</h2>
             
            <div className="flex justify-between ">
               <button className='btn text-green-600'> <FaDownload></FaDownload> {app.downloads} </button>
               <button className='btn text-amber-500'> <FaStar></FaStar> {app.ratingAvg} </button>
           </div>
             </div>
                      </div>
    );
};

export default AppCard;