import React from 'react';
import { useState, useEffect } from 'react';
import { HiChevronUp } from "react-icons/hi";

const TopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Manejar el desplazamiento de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Mostrar u ocultar el botón según la posición del scroll
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    // Controla la visivilidad segun el desplazamiento de la pagina
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (           
        <button className={` bg-green-900 rounded-full grid place-content-center w-8 h-8 fixed bottom-2 right-2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
        >
            <HiChevronUp className='size-10 rounded-full text-white'/>
        </button>
    );
};

export default TopButton;