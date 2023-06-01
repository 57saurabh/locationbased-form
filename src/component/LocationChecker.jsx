import React, { useState, useEffect } from 'react';
import Forms from './Forms';
import MassageError from './MassageError';


function LocationChecker() {
    const [location, setLocation] = useState({latitude:'',longitude:''});
  
    const Clat =   28.6343197;            //college ka location Latitude: 28.6325348
    // Longitude: 
    const Clongi = 77.4457013;
  // const Clat = 28.5099937;            //flat ka location
  // const Clongi = 77.2354845;
  const maxlat =   28.634337;
  const maxLongi = 77.445570;
  const distance = Math.sqrt(Math.pow((maxlat - Clat), 2) + Math.pow((maxLongi - Clongi), 2));
  
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocation('The Browser Does not Support Geolocation');
    }
  }, []);

  const showPosition = (position) => {
    let value ={
       latitude: position.coords.latitude,
       longitude: position.coords.longitude
    }
    setLocation(location => ({
       ...location,
       ...value
     }));
};
// const userdistance = Math.sqrt(Math.pow((position.coords.latitude - Clat), 2) + Math.pow((position.coords.longitude - Clongi), 2));
const userdistance = Math.sqrt(Math.pow((location.latitude - Clat), 2) + Math.pow((location.longitude - Clongi), 2));

  const showError = (error) => {
    if (error.PERMISSION_DENIED) {
      setLocation('The User have denied the request for Geolocation.');
    }
  };

  console.log(distance)
  console.log(userdistance)
    console.log(location.latitude)
    console.log(location.longitude)

  return (
    <div id="location">
      {/* {location} */}

      {
         (userdistance <= distance)?<Forms/>:
           <MassageError/>
          }
          
      
    </div>
  )
}

export default LocationChecker