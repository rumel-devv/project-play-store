import React, { useContext} from 'react';
import { useParams } from 'react-router';
import UseApps from '../../hooks/UseApps';
import ErrorPage from '../../Error/ErrorPage';
import { PacmanLoader } from 'react-spinners';
import { FaDownload } from 'react-icons/fa';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const Appdetails = () => {
const {id} = useParams()
const {apps,loading} = UseApps()

const {installApps,setInstallApps} = useContext(InstallAppsContext)

const handleInstallApps = () => {
    setInstallApps([...installApps,expectedApps])
    alert("Downloaded")
}
// console.log(installApps);

if(loading){
    return <div className='flex justify-center items-center py-10'><PacmanLoader></PacmanLoader> </div>
}

const expectedApps = apps.find(app => app.id ===  Number(id))

    return (
   
        <div className="max-w-5xl mx-auto p-4">

    <div className="card bg-base-100 shadow-md">

        {/* Image */}
        <figure className="bg-gray-200 py-6">
            <img
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl"
                src={expectedApps.image}
                alt={expectedApps.title}
            />
        </figure>

        {/* Body */}
        <div className="card-body space-y-4">

            {/* Title + Company */}
            <div className="text-center">
                <h2 className="card-title justify-center text-2xl">
                    {expectedApps.title}
                </h2>
                <p className="text-gray-500">
                    {expectedApps.companyName}
                </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
                <button onClick={() => handleInstallApps()} className="btn text-green-600"> <FaDownload></FaDownload> Download Now</button>

                <button className="btn text-black-600">
                    📥 {expectedApps.downloads}
                </button>

                <button className="btn text-amber-500">
                    ⭐ {expectedApps.ratingAvg}
                </button>

                <button className="btn">
                    💾 {expectedApps.size} MB
                </button>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-1">
                    About this app
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {expectedApps.description}
                </p>
            </div>

            {/* Reviews Count */}
            <div className="text-center text-gray-500">
                {expectedApps.reviews} Reviews
            </div>
            {/* Ratings Breakdown */}
            <div>
                <h3 className="font-semibold text-lg mb-3 text-center">
                    Ratings 
                </h3>
                <div className="space-y-3">

                    {expectedApps.ratings.map((rate, index) => {

                        const max = Math.max(
                            ...expectedApps.ratings.map(r => r.count)
                        );

                        return (
                            <div key={index} className="flex items-center gap-3">

                                {/* Star Label */}
                                <p className="w-16 text-sm">{rate.name}</p>

                                {/* Bar */}
                                <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                                    <div
                                        className="bg-green-500 h-3"
                                        style={{
                                            width: `${(rate.count / max) * 100}%`
                                        }}
                                    ></div>
                                </div>

                                {/* Count */}
                                <p className="text-xs text-gray-500">
                                    {(rate.count / 1000000).toFixed(1)}M
                                </p>

                            </div>
                        );
                    })}

                </div>
            </div>

        </div>
    </div>

        </div>

    );
};

export default Appdetails;