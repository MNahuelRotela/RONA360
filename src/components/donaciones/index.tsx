
import React, {useRef} from 'react';
import { Divisor1 } from './divisor1';
import { Divisor2 } from './divisor2';
import { PaypalDonationButton } from './paypalButton';
import { HeroDonations } from './hero';
import { ObjetiveDonations } from './objetive';
import { Explain } from './explain';
import Conseguiremos from './conseguiremos';
import AOS from 'aos';
import { useEffect } from 'react';


export const Donaciones: React.FC = () => {
  // Crear una referencia para el componente PaypalDonationButton
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  // Función para hacer scroll al componente PaypalDonationButton
  const scrollToPaypal = () => {
    if (paypalRef.current) {
      window.scrollTo({
        top: paypalRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className=' mb-20'>
    <HeroDonations />
    <Divisor1 />
    <ObjetiveDonations scrollTo={scrollToPaypal} />
    <Divisor2 />
    <div ref={paypalRef}>
    <Explain />

    </div>
    <div className=' flex w-full h-full justify-center mt-10'>

    <div data-aos="fade-up" className=' relative flex justify-center items-center basis-3/12' >
    <PaypalDonationButton />

    </div>
    </div>
    <Conseguiremos scrollTo={scrollToPaypal} />

     
    </div>
  );
};