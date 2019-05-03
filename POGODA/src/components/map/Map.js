// import React from 'react';
// import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
// import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";


// const google = window.google = window.google ? window.google : {};


// const Map =  (
//    withProps({
     
//    }),

//    withScriptjs,
//     withGoogleMap

// )(({getInfo, latitiude, langitiude, cityName, country}) => 
//    <GoogleMap
//       onClick={getInfo}
//       defaultZoom={4.5}
//       center={{latitiude:latitiude, langitiude:langitiude}}
//    >  
//    <MarkerWithLabel
//       position={{latitiude:latitiude, langitiude:langitiude}}
//       labelAncor={new google.maps.Point(0,0)}
//       labelStyle={{
//          fontSize: '1.3rem', 
//          fontWeight: '700', 
//          backgroundColor: 'white', 
//          color:'red', 
//          padding: '0.3rem 0.5rem 0.2rem', 
//          borderRadius: '10px'}}
//    />

//    <div>{cityName?cityName:'somewhere'}, {country?country:'planet earth'}</div>



// </GoogleMap>)

// export default Map;

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const google = (window.google = window.google ? window.google : {});

const Map = ({ getInfo, latitude, longitude, cityName, country }) => (
 <GoogleMap
   onClick={getInfo}
   defaultZoom={4.5}
   center={{ lat:latitude, lng:longitude }}
 >
  <MarkerWithLabel
     position={{ lat: latitude, lng: longitude }}
     labelAnchor={new google.maps.Point(0, 0)}
     labelStyle={{
       fontSize: "1.3rem",
       fontWeight: "700",
       backgroundColor: "white",
       color: "black",
       padding: "0.3rem 0.5rem 0.2rem",
       borderRadius: "30px"
     }}
   >
     <div>
       {cityName ? cityName : "Somewhere on"},
       {country ? country : "Planet Earth"}
     </div>
   </MarkerWithLabel>
 </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));