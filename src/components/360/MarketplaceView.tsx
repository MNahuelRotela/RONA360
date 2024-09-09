import {  useRef, useState } from "react";
import { Pannellum } from "@readr-media/pannellum-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

import "./style.css";

const MarketplaceView = () => {
    const [ image, setImage ] = useState('https://somosawaqblob.blob.core.windows.net/congress/360/SAM_100_2472.jpg');
    const panImage = useRef<any>(null);

    useEffect(() => {
        // Function to update the image based on screen size
        const updateImage = () => {
            if (window.innerWidth <= 768) {
                setImage('https://somosawaqblob.blob.core.windows.net/congress/360/marketplace-360-mobile.png');
            } else {
                setImage('https://somosawaqblob.blob.core.windows.net/congress/360/SAM_100_2472.jpg');
            }
        };

        // Set the initial image based on the current screen size
        updateImage();

        // Add event listener to update the image on window resize
        window.addEventListener('resize', updateImage);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, []);

    return (
        <div className="absolute overflow-clip overflow-y-clip w-full h-[200vh] bg-white z-[200] ">
            {/* <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
                <h5 className="pitch-yaw-text">© TEDI</h5>
            </div> */}
                <Link to="/agenda">
                    <button className=" bg-green-btn-nav text-white font-semibold w-fit h-fit rounded-full text-xl sm:w-24 sm:h-8 sm:text-sm xs:w-20 xs:text-ss my-auto flex justify-center align-middle items-center">
                        <FaArrowCircleLeft className="text-4xl" />
                    </button>
                    <p className=" flex text-white font-semibold text-xl sm:text-sm xs:text-ss">Agenda</p>
                </Link>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                // title='360 Virtual Tour'
                // previewTitle ="360 Virtual Tour"
                // author="Nahuel Rotela"
                // previewAuthor="TEDI"
                // @ts-ignore
                authorURL="https://github.com/MNahuelRotela"
                pitch={10}
                yaw={180}
                hfov={180}
                autoRotate={2}
                autoLoad
                mouseZoom
                compass={true}
                ref={panImage}
                // onMouseup = {(event: any) => {
                //     setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                //     setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                // }}
            >
                {/* <Pannellum.Hotspot
                    type='custom'
                    pitch={-1.4}
                    yaw={113.6}
                    handleClick={() => startTransition(() => navigate('/page2'))}
                    // @ts-ignore
                    name='image info'
                />
                <Pannellum.Hotspot
                    type='info'
                    pitch={12}
                    yaw={114.5}
                    text='Panelist'
                /> */}
            </Pannellum>
        </div>
    )
}

export default MarketplaceView;