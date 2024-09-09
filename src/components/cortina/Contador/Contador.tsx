import React, { useState, useEffect } from 'react';
import DateComponent from './Date';
import { EVENT_TIMESTAMP } from './event-date';
import {
  useTranslation,
} from "../../../context/TraslationContext";

export const Contador: React.FC = () => {
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const { language, content } = useTranslation();


  useEffect(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const formatTime = (time: number): string => {
      return Math.max(0, Math.floor(time)).toString().padStart(2, "0");
    }

    const updateCountdown = () => {
      // Obtenemos la fecha actual en la zona horaria local (Colombia)
      const now = new Date().toLocaleString("en-US", { timeZone: "America/Bogota" });
      const nowTimestamp = new Date(now).getTime();

      // Calculamos la diferencia en milisegundos
      const diff = EVENT_TIMESTAMP - nowTimestamp;

      setCountdown({
        days: formatTime(diff / DAY),
        hours: formatTime((diff % DAY) / HOUR),
        minutes: formatTime((diff % HOUR) / MINUTE),
        seconds: formatTime((diff % MINUTE) / SECOND)
      });
    }

    const interval = setInterval(updateCountdown, SECOND);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" flex flex-col gap-y-2 place-items-center">
      <h1 className=" relative text-2xl text-left xs:right-24 sm:right-36 right-64 text-white  font-bold text-outline">{content?.cortina[language].contador.h3}</h1>
      <div className="flex flex-row xs:gap-x-1 sm:gap-x-6 gap-x-16 text-primary uppercase font-semibold">
        <DateComponent time={countdown.days} dateType={content?.cortina[language].contador.h4} />
        <DateComponent time={countdown.hours} dateType={content?.cortina[language].contador.h5} />
        <DateComponent time={countdown.minutes} dateType={content?.cortina[language].contador.h6} />
        <DateComponent time={countdown.seconds} dateType={content?.cortina[language].contador.h7} />
      </div>
    </section>
  );
}

