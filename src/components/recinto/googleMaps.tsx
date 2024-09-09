import {
    APIProvider,
    Map,
    AdvancedMarker,
    // Pin,
    InfoWindow
} from '@vis.gl/react-google-maps'
import { useState } from 'react'
const apiGoogle = import.meta.env.VITE_APP_KEY_GOOGLEMAPS


const GoogleMaps = () => {
    const position = {lat: 5.067651077289185 , lng: -75.50272368888025}
    const [open, setOpen] = useState(false)

  return (
    <APIProvider 
        apiKey={apiGoogle}>
        <div className=' rounded-2xl h-[30rem] w-[30rem] 2xl:w-[35rem] mx-auto  xl:h-[25rem] xl:w-[25rem] lg:h-[23rem] lg:w-[23rem]  md:h-[18rem] md:w-[25rem] sm:h-[15rem] sm:w-[22rem] sm:mx-auto xs:h-[12rem] xs:w-[18rem] xs:mx-auto'>
            <Map 
              zoom={16} 
              center={position}
              mapId="f3a726bb65976d9"
              >
                <AdvancedMarker 
                  position={position}
                  onClick={() => setOpen(true)}
                  >
                    {/* <Pin 
                      background={"#8DC73F"}
                      borderColor={"#1e2f2d"}
                      glyphColor={"#FBBD35"}
                      ></Pin> */}
                  </AdvancedMarker>
                  {open && 
                    <InfoWindow  
                      position={position} 
                      onCloseClick={() => setOpen(false)}>
                        <p>I´m in Universidad Autónoma de Manizales</p>
                  </InfoWindow>}
            </Map>
        </div>
    </APIProvider>
  )
}

export default GoogleMaps