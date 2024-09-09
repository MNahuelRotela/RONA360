import { useEffect, useState } from "react";
import { Pannellum } from "@readr-media/pannellum-react";
import "./style.css";

const PannellumBannerRecinto = () => {
    const [yaw, setYaw] = useState(0);
    const [image, setImage] = useState('https://somosawaqblob.blob.core.windows.net/congress/360/SAM_100_2470.jpg');
    const [autoRotateDirection, setAutoRotateDirection] = useState(-1);

    useEffect(() => {
        // Function to update the image based on screen size
        const updateImage = () => {
            if (window.innerWidth <= 768) {
                setImage('https://somosawaqblob.blob.core.windows.net/congress/360/recinto-360-mobile.png');
            } else {
                setImage('https://somosawaqblob.blob.core.windows.net/congress/360/SAM_100_2470.jpg');
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

    useEffect(() => {
        const interval = setInterval(() => {
            setYaw(prevYaw => {
                const newYaw = prevYaw + autoRotateDirection * 1;
                if (newYaw <= -160) {
                    setAutoRotateDirection(1);
                    return -160;
                } else if (newYaw >= 30) {
                    setAutoRotateDirection(-1);
                    return 30;
                }
                return newYaw;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [autoRotateDirection]);

    return (
        <div className="relative -z-50">
            <div className="sm:h-[70vh] xs:h-[70vh] h-screen ">
                <Pannellum
                    width='100%'
                    height='100%'
                    image={image}
                    yaw={yaw}
                    hfov={180}
                    autoLoad
                    disableKeyboardCtrl
                    mouseZoom={false}
                    compass={false}
                    showZoomCtrl={false}
                    keyboardZoom={false}
                    showFullscreenCtrl={false}
                />
            </div>
        </div>
    );
}

export default PannellumBannerRecinto;
