import React from 'react';

const Stats = () => {
    return (
    <div className=' bg-linear-to-r  from-purple-600 to-purple-500 text-center py-20 space-y-8'>
        <div>
            <h2 className='text-3xl md:text-5xl font-bold text-white'>Trusted by Millions, Built for You</h2>
        </div>
       
              <div className="stats stats-vertical lg:stats-horizontal  w-10/12 mx-auto text-white">
  <div className="stat ">
    <div className="stat-title text-white">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-title text-white">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc text-white">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-title text-white">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
  </div>
</div>
       
    </div>
    );
};

export default Stats;