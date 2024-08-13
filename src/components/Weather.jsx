import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCloud, faWind, faWater } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  return (
    <div className='flex flex-col items-center bg-[#8f88d8] min-h-screen justify-center'>
      <div className="bg-[#252857] p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
        <div className="search-bar flex items-center space-x-2">
          <input
            type="text"
            placeholder='Search'
            className='p-2 border border-gray-300 rounded-3xl'
          />
          <button className='bg-[#9191a3] p-2 w-10 text-white rounded-3xl'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FontAwesomeIcon 
            icon={faCloud} 
            className="text-white" 
            style={{ width: '100px', height: 'auto', margin: '25px 0' }}
          />
          <p className="text-white text-[60px] leading-[1]">16°C</p>
          <p className="text-white text-[30px]">London</p>

          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 text-white">
              <FontAwesomeIcon icon={faWater} className='text-[40px]' />
              <div className="flex flex-col items-start">
                <p className="text-[30px] leading-[1]">91%</p>
                <span className="text-[14px]">Humidity</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <FontAwesomeIcon icon={faWind} className='text-[40px]' />
              <div className="flex flex-col items-start">
                <p className="text-[30px] leading-[1]">3.6 Km/hr</p>
                <span className="text-[14px]">Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
