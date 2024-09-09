import GoogleMapReact, {BootstrapURLKeys, Coords} from 'google-map-react';
// import { IoLocation } from "react-icons/io5";

export const Map = (props: {
    defaultCenter: Coords | undefined; 
    defaultZoom: number | undefined; 
    bootstrapURLKeys: BootstrapURLKeys | undefined; 
} ) => {

  return (
    <div className="h-[40rem] w-[60rem] m-auto my-10 xl:h-[35rem] xl:w-[50rem] lg:h-[33rem] lg:w-[43rem]  md:h-[28rem] md:w-[35rem] sm:h-[15rem] sm:w-[20rem] sm:mx-auto">
    <GoogleMapReact
        bootstrapURLKeys={props.bootstrapURLKeys}
        defaultCenter={props.defaultCenter}
        defaultZoom={props.defaultZoom}
        
      />
    </div>
  )
}
