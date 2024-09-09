import { useState, useEffect } from "react";
import { Pannellum } from "@readr-media/pannellum-react";
import { useTranslation } from "../../context/TraslationContext";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

interface AuditorioViewProps {
    id: string;
}

const AuditorioView: React.FC<AuditorioViewProps> = ({ id }) => {
    const { language, content } = useTranslation();
    const tour360 = content?.tour360[language]?.[id];

    const [image, setImage] = useState(tour360?.defaultImage || '');
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

    useEffect(() => {
        if (tour360) {
            const updateImage = () => {
                if (window.innerWidth <= 768) {
                    setImage(tour360?.mobileImage || tour360?.defaultImage);
                } else {
                    setImage(tour360?.defaultImage);
                }
            };

            updateImage();
            window.addEventListener('resize', updateImage);

            return () => {
                window.removeEventListener('resize', updateImage);
            };
        }
    }, [tour360]);

    if (!tour360) {
        return <div>Loading...</div>;
    }

    return (
        <div className="absolute overflow-clip overflow-y-clip w-full h-[200vh] bg-white z-[200] ">
            <div className="absolute top-5 left-20 z-50 flex flex-col justify-center items-center text-center ">
                <Link to={tour360.linkTo || "/agenda"}>
                    <button className="bg-green-btn-nav text-white font-semibold w-fit h-fit rounded-full text-xl sm:w-24 sm:h-8 sm:text-sm xs:w-20 xs:text-ss my-auto flex justify-center align-middle items-center">
                        <FaArrowCircleLeft className="text-4xl" />
                    </button>
                    <p className="flex text-white font-semibold text-xl sm:text-sm xs:text-ss">Agenda</p>
                </Link>
            </div>
            <div className="absolute top-20 left-20 z-50">
                <select
                    className="bg-white border border-gray-300 rounded p-2"
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    value={selectedRoom || ''}
                >
                    <option value="">Select Room</option>
                    {tour360.rooms.map((room: any) => (
                        <option key={room.id} value={room.id}>
                            {room.name}
                        </option>
                    ))}
                </select>
            </div>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                author="https://github.com/MNahuelRotela"
                pitch={10}
                yaw={180}
                hfov={180}
                autoRotate={2}
                autoLoad
                mouseZoom
                compass={true}
            >
            </Pannellum>
        </div>
    );
}

export default AuditorioView;