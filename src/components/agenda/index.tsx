import { Banner } from "./banner.tsx";
import { Schedule } from "./schedule.tsx";

export const Agenda = () => {

  return (
    <div className=" w-auto sm:w-auto h-auto scroll-smooth">
      <Banner/>
      <Schedule />
    </div>
  );
};