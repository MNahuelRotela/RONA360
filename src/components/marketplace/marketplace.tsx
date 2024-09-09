import BannerMarketplace from "./marketplaceComponents/BannerMarketplace";
import DetallesMarketplace from "./marketplaceComponents/DetallesMarketplace";
import MapsMarketplace from "./marketplaceComponents/MapsMarketplace";
import RegistraTuStand from "./marketplaceComponents/RegistraTuStand";
import WelcomeSection from "./marketplaceComponents/WelcomeSection";

export const Marketplace = () => {
    return (
        <div>
            <BannerMarketplace/>
            <WelcomeSection/>
            <DetallesMarketplace/>
            {/* <CarouselMarketplace/> */}
            <RegistraTuStand/>
            <MapsMarketplace/>
            
        </div>
    );
    
};