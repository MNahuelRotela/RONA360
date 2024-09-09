import BannerPrensa from "./components/BannerPrensa";
import CardsPensa from "./components/CardsPensa";
import FiltersPrensa from "./components/FiltersPrensa";


export const Prensa= () => {
  
  return (
    <div>
      <BannerPrensa/>
      <FiltersPrensa/>
      <CardsPensa articles={[]}/>
    </div>
  );
};
