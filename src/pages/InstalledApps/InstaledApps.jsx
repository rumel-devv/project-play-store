import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBinFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const InstaledApps = () => {
    const { installApps,setInstallApps } = useContext(InstallAppsContext);
   
    const handleUnistall = (app) => {
        const restApps = installApps.filter(iApp => iApp.id !== app.id)
        setInstallApps(restApps)
        toast.warning(`${app.companyName} is unistalled`,{autoClose: 2000})
    }

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            {installApps.length === 0 && (
                <p className="text-center font-semibold text-2xl text-gray-500">No installed apps yet.</p>
            )}

            {installApps.map((app, index) => (
                <div key={index} className="card  bg-base-100 shadow-md p-4 py-6 gap-4">
                   <div className='flex justify-between items-center '>
                    <div className='text-center  font-semibold flex items-center gap-3'>                       
                        <img
                        src={app.image}
                        alt={app.title}
                        className="w-16 h-16 rounded-lg" />
                      <span className='flex flex-col'> 
                        <h2 className="font-semibold text-lg">{app.title}</h2>
                        <p className="text-gray-500 text-sm">{app.companyName}</p>
                        <p className="text-gray-500 text-sm">Size: {app.size} MB</p>
                     </span>
                    </div>
                    <div>
                        <button onClick={() => handleUnistall(app)} className='flex gap-1.5 items-center bg-purple-600 btn text-white' > <RiDeleteBinFill></RiDeleteBinFill> Unistall</button>
                    </div>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default InstaledApps;