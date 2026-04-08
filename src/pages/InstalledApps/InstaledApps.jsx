import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const InstaledApps = () => {
    const { installApps } = useContext(InstallAppsContext);
    console.log("installContext", installApps);

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            {installApps.length === 0 && (
                <p className="text-center text-gray-500">No installed apps yet.</p>
            )}

            {installApps.map((app, index) => (
                <div key={index} className="card bg-base-100 shadow-md p-4 flex items-center gap-4">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-16 h-16 rounded-lg"
                    />
                    <div className='text-center  font-semibold'>
                        <h2 className="font-semibold text-lg">{app.title}</h2>
                        <p className="text-gray-500 text-sm">{app.companyName}</p>
                        <p className="text-gray-500 text-sm">Size: {app.size} MB</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InstaledApps;