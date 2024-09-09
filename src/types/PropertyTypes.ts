export interface Hotspot {
    id: string;
    pitch: number;
    yaw: number;
    type: "info" | "custom";
    text?: string;
    targetRoom?: string;
    handleClick?: () => void;
  }
  
  export interface Room {
    id: string;
    name: string;
    description: string;
    HQ_image_url: string;
    SM_image_url: string;
    hotspots: Hotspot[];
  }
  
  export interface VirtualTour {
    HQ_image_url: string;
    SM_image_url: string;
  }
  
  export interface Property {
    id: string;
    title: string;
    description: string;
    address: string;
    price: string;
    type: string;
    bedrooms: string;
    bathrooms: string;
    area: string;
    property_features: {
      garden: boolean;
      garage: boolean;
      pool: boolean;
      terrace: boolean;
      balcony: boolean;
    };
    virtual_tour: VirtualTour;
    rooms: Room[];
  }
  