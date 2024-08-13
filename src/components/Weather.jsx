// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faCloud, faWind, faWater } from '@fortawesome/free-solid-svg-icons';

// const Weather = () => {

//     const [weatherData,setWeatherData]=  useState(null)
    
//     const allIcons={

//     }

// const search=async(city)=>{
//     try {
//         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
        
//         const response=await fetch(url)
//         const data=await response.json()
//         console.log('data',data);

//         const iconCode=data.weather[0].icon
//         const iconUrl=` https://openweathermap.org/img/wn/${iconCode}@2x.png`

//         setWeatherData({
//             humidity:data.main.humidity,
//             windSpeed:data.wind.speed,
//             temperature:Math.floor(data.main.temp),
//             location:data.name,
//             icon
//         })
        
//     } catch (error) {
//         console.log('error in fetching',error);
        
//     }
// }


// useEffect(()=>{
//     search("London")
// },[])

//   return (
//     <div className='flex flex-col items-center bg-[#8f88d8] min-h-screen justify-center'>
//       <div className="bg-[#252857] p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
//         <div className="search-bar flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder='Search'
//             className='p-2 border border-gray-300 rounded-3xl'
//           />
//           <button className='bg-[#9191a3] p-2 w-10 text-white rounded-3xl'>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </button>
//         </div>
//         <div className="flex flex-col items-center space-y-4">
//           <FontAwesomeIcon 
//             icon={faCloud} 
//             className="text-white" 
//             style={{ width: '100px', height: 'auto', margin: '25px 0' }}
//           />
//           <p className="text-white text-[60px] leading-[1]">{weatherData.temperature}°C</p>
//           <p className="text-white text-[30px]">{weatherData.location}</p>

//           <div className="flex space-x-8">
//             <div className="flex items-center space-x-2 text-white">
//               <FontAwesomeIcon icon={faWater} className='text-[40px]' />
//               <div className="flex flex-col items-start">
//                 <p className="text-[30px] leading-[1]">{weatherData.humidity}%</p>
//                 <span className="text-[14px]">Humidity</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 text-white">
//               <FontAwesomeIcon icon={faWind} className='text-[40px]' />
//               <div className="flex flex-col items-start">
//                 <p className="text-[30px] leading-[1]">{weatherData.windSpeed} Km/hr</p>
//                 <span className="text-[14px]">Wind Speed</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Weather;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faWind, faWater } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data);

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        iconUrl: iconUrl
      });
    } catch (error) {
      console.log('error in fetching', error);
    }
  };

  useEffect(() => {
    search("calicut");
  }, []);

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
        {weatherData && (
          <div className="flex flex-col items-center space-y-4">
            <img
              src={weatherData.iconUrl}
              alt="Weather Icon"
              className="w-[100px] h-auto mb-4"
            />
            <p className="text-white text-[60px] leading-[1]">{weatherData.temperature}°C</p>
            <p className="text-white text-[30px]">{weatherData.location}</p>

            <div className="flex space-x-8">
              <div className="flex items-center space-x-2 text-white">
                <FontAwesomeIcon icon={faWater} className='text-[40px]' />
                <div className="flex flex-col items-start">
                  <p className="text-[30px] leading-[1]">{weatherData.humidity}%</p>
                  <span className="text-[14px]">Humidity</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <FontAwesomeIcon icon={faWind} className='text-[40px]' />
                <div className="flex flex-col items-start">
                  <p className="text-[30px] leading-[1]">{weatherData.windSpeed} Km/hr</p>
                  <span className="text-[14px]">Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
