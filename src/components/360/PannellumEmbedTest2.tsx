import {  useRef, useState } from "react";
import { Pannellum } from "@readr-media/pannellum-react";

import "./style.css";

const PannellumTest2 = () => {
    const [ image ] = useState('https://somosawaqblob.blob.core.windows.net/congress/360/SAM_100_2478.jpg');
    const panImage = useRef<any>(null);

    return (
        <div className="absolute overflow-clip overflow-y-clip w-full h-[200vh] bg-white z-[200] ">
            {/* <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
                <h5 className="pitch-yaw-text">© TEDI</h5>
            </div> */}
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

export default PannellumTest2;