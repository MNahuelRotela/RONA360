import React from 'react';

interface Props {
  time: string;
  dateType: string;
}

const DateComponent: React.FC<Props> = ({ time, dateType }) => {
  return (
    <div className="flex flex-col place-items-center xs:w-16 xs:h-16 sm:w-20 sm:h-20  w-24 h-24  bg-[#E9FFCE] rounded-xl">
      <span className=" xs:text-lg sm:text-2xl text-4xl font-bold tabular-nums text-[#385019]">{time}</span>
      <span className=" xs:text-ss sm:text-ss text-xs text-center text-[#385019]">{dateType}</span>
    </div>
  );
}

export default DateComponent;