export interface Room {
    id: string;
    name: string;
    description: string;
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
    virtual_tour: {
      HQ_image_url: string;
      SM_image_url: string;
    };
    rooms: Room[];
  }
  
  export interface RealEstateAgency {
    name: string;
    address: string;
    contact_email: string;
    contact_phone: string;
    website: string;
    social_media: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    properties: Property[];
  }
  
  export interface Content {
    real_estate_agency: RealEstateAgency;
  }