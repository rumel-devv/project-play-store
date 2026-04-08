import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import AppCard from '../../components/Ui/AppCard';

const Apps = () => {

    const [apps,setApps] = useState([])
    const [loading,setLoading] = useState(true)
   useEffect(() => {
     const fetchData = async () => {
        const res = await fetch('/data.json')
        const data = await res.json()
        setTimeout(() => {
            setApps(data);
          setLoading(false)
        },1000)
     }
     fetchData()
   },[])

   console.log(apps);

    return (
       <div className='w-full md:w-10/12 mx-auto my-10 text-center'>
           <h2 className='text-3xl font-bold mb-3 '>All Apps</h2>
           <p>All  Apps on the Market developed by us, You can download from here.</p>
           
         { loading ? <div className='flex justify-center items-center py-10'><PacmanLoader ></PacmanLoader> </div> :  <div className='grid gap-4  md:w-10/12 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-6 p-3'>
             {apps.map((app,index) => {
                return (  
                     <AppCard key={index} app={app} ></AppCard>
                )
              })}
             </div>}
        </div>
    );
};

export default Apps;