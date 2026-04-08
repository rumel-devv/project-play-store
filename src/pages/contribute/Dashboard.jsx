import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import UseApps from '../../hooks/UseApps';

const Dashboard = () => {
      const { installApps} = useContext(InstallAppsContext);
         const { apps }= UseApps()
         const UnistallApps =  apps.length - installApps.length
    const data = [
  { name: 'Installed', value: installApps.length, fill: 'purple' },
  { name: 'Unistalled',value: UnistallApps, fill: '#00C49F' },
]
    return (
        <div className='w-full md:w-10/12 mx-auto flex flex-col justify-center my-8'>
            <h2 className='text-center text-3xl font-semibold mb-3'>Installed and Unistalled Apps</h2>
      <PieChart style={{ width: '100%', maxWidth: '500px',margin:'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie 
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
        <Legend ></Legend>
        <Tooltip></Tooltip>
    </PieChart>
        </div>
    );
};

export default Dashboard;


