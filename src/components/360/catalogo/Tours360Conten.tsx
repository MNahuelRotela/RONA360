const ContenInmobiliaria = {
  en: {
    real_estate_agencies: [
      {
        id: "a1",
        name: "Prime Properties",
        address: "123 Main St, Springfield, USA",
        contact_email: "contact@primeproperties.com",
        contact_phone: "+1-555-1234",
        website: "https://www.primeproperties.com",
        social_media: {
          web: "https://www.primeproperties.com",
          facebook: "https://www.facebook.com/primeproperties",
          twitter: "https://twitter.com/primeproperties",
          instagram: "https://www.instagram.com/primeproperties",
          linkedin: "https://www.linkedin.com/company/primeproperties",
          youtube: "https://www.youtube.com/channel/primeproperties",
        },
        logo_url: "https://lopezpropiedades.ar/uploads/avatar/1725630991ojygs-439700e1-0ae4-4ffb-8dcf-dc5a4c87a177.jpg",
        principalColor: "#FF5733",
        properties: [
          {
            id: "p1",
            title: "Luxurious Villa",
            description: "A beautiful villa with a private pool and garden.",
            address: "456 Elm St, Springfield, USA",
            price: "$1,200,000",
            type: "Villa",
            bedrooms: "4",
            bathrooms: "3",
            area: "3500 sq ft",
            property_features: {
              garden: true,
              garage: true,
              pool: true,
              terrace: true,
              balcony: true,
            },
            virtual_tour: {
              HQ_image_url: "https://example.com/villa_hq.jpg",
              SM_image_url: "https://example.com/villa_sm.jpg",
            },
            rooms: [
              {
                id: "r1",
                name: "Master Bedroom",
                description: "Spacious bedroom with an en-suite bathroom.",
                HQ_image_url: "https://example.com/bedroom_hq.jpg",
                SM_image_url: "https://example.com/bedroom_sm.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: 10,
                    yaw: 20,
                    type: "custom",
                    text: "Go to Kitchen",
                    targetRoom: "Kitchen"
                  },
                  {
                    id: "hotspot2",
                    pitch: -5,
                    yaw: 50,
                    type: "custom",
                    text: "Go to Bedroom",
                    targetRoom: "Bedroom"
                  }
                ]
              },
            ],
          },
        ],
      },
      // {
      //   id: "a2",
      //   name: "Urban Estates",
      //   address: "789 Market St, Metropolis, USA",
      //   contact_email: "info@urbanestates.com",
      //   contact_phone: "+1-555-5678",
      //   website: "https://www.urbanestates.com",
      //   social_media: {
      //     web: "https://www.urbanestates.com",
      //     facebook: "https://www.facebook.com/urbanestates",
      //     twitter: "https://twitter.com/urbanestates",
      //     instagram: "https://www.instagram.com/urbanestates",
      //     linkedin: "https://www.linkedin.com/company/urbanestates",
      //     youtube: "https://www.youtube.com/channel/urbanestates",
      //   },
      //   logo_url: "https://example.com/urban_estates_logo.png",
      //   principalColor: "#33A1FF",
      //   properties: [
      //     {
      //       id: "p2",
      //       title: "Modern Apartment",
      //       description: "A stylish apartment in the heart of the city.",
      //       address: "101 Maple Ave, Metropolis, USA",
      //       price: "$850,000",
      //       type: "Apartment",
      //       bedrooms: "2",
      //       bathrooms: "2",
      //       area: "1500 sq ft",
      //       property_features: {
      //         garden: false,
      //         garage: true,
      //         pool: false,
      //         terrace: false,
      //         balcony: true,
      //       },
      //       virtual_tour: {
      //         HQ_image_url: "https://example.com/apartment_hq.jpg",
      //         SM_image_url: "https://example.com/apartment_sm.jpg",
      //       },
      //       rooms: [
      //         {
      //           id: "r2",
      //           name: "Living Room",
      //           description: "Open-plan living space with large windows.",
      //           HQ_image_url: "https://example.com/livingroom_hq.jpg",
      //           SM_image_url: "https://example.com/livingroom_sm.jpg",
      //           hotspots: [
      //             {
      //               id: "hotspot3",
      //               pitch: 0,
      //               yaw: 180,
      //               type: "info",
      //               text: "Go to Kitchen",
      //               targetRoom: "Kitchen"
      //             }
      //           ]
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  es: {
    real_estate_agencies: [
      {
        id: "a1",
        name: "Lopez Propiedades",
        address: "MUÑOZ 1710, San Miguel, Buenos Aires",
        contact_email: "info@lopezpropiedades.ar",
        contact_phone: "1139201080",
        website: "https://lopezpropiedades.ar",
        social_media: {
          web: "https://lopezpropiedades.ar",
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          youtube: "",
        },
        logo_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/lopez.png",
        principalColor: "#151575",
        properties: [
          {
            id: "p1",
            title: "CASA EN VENTA EN JOSE C PAZ",
            description: "CASA UBICADA EN BARRIO CONSEJAL ALFONSO, JOSE C PAZ.LA UNIDAD CUENTA CON PATIO ADELANTE, ENTRADA AL LIVING. DOS DORMITORIOS, UNO CON PLACARD EMBUTIDO. BAÑO COMPLETO CON BAÑERA. COCINA COMEDOR DIARIO, CON AMOBLAMIENTO DE COCINA. COCHERA CUBIERTA, CON PLAY PARA LUGAR DE ESTUDIO O TERCER DORMITORIO. EN LA PARTE TRASERA PATIO CON UN ESPACIO GUARDA ÙTILES. PILETA DE LAVADO. ATRÀS, QUINCHO CERRADO CON PARRILLA Y BAÑO.",
            address: "PADRE USTARROZ 5100, José C. Paz, Buenos Aires, Argentina.",
            price: "USD$30.000",
            type: "Casa",
            bedrooms: "2",
            bathrooms: "2",
            area: "110m2",
            property_features: {
              garden: true,
              garage: true,
              pool: false,
              terrace: true,
              balcony: false,
            },
            virtual_tour: {
              HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/patio-delantero.png",
              SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/patio-delantero.png",
            },
            rooms: [
              {
                id: "r1",
                name: "Exterior",
                description: "Exterior de la propiedad.",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/exterior.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/exterior.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 175,
                    type: "custom",
                    text: "Entrada",
                    targetRoom: "Entrada"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 140,
                    type: "custom",
                    text: "Garaje",
                    targetRoom: "Entrada al Garaje"
                  }
                ]
              },
              {
                id: "r2",
                name: "Entrada",
                description: "Entrada con Patio Delantero.",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/patio-delantero.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/patio-delantero.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 150,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 130,
                    type: "custom",
                    text: "Entrada al Garaje",
                    targetRoom: "Entrada al Garaje"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 0,
                    type: "custom",
                    text: "Exterior",
                    targetRoom: "Exterior"
                  }
                ]
              },
              {
                id: "r3",
                name: "Entrada al Garaje",
                description: "Entrada al Garaje",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/garage-blured.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/garage-blured.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 170,
                    type: "custom",
                    text: "Comedor",
                    targetRoom: "Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 320,
                    type: "custom",
                    text: "Exterior",
                    targetRoom: "Exterior"
                  }
                ]
              },
              {
                id: "r4",
                name: "Sala de Estar 1",
                description: "Entrada al Garaje",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/sala1.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/sala1.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -20,
                    yaw: 190,
                    type: "custom",
                    text: "Sala de Estar 2",
                    targetRoom: "Sala de Estar 2"
                  },
                  {
                    id: "hotspot2",
                    pitch: -20,
                    yaw: -10,
                    type: "custom",
                    text: "Entrada",
                    targetRoom: "Entrada"
                  }
                ]
              },
              {
                id: "r5",
                name: "Sala de Estar 2",
                description: "Sala de Estar 2",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/sala2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/sala2.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -45,
                    yaw: 230,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 130,
                    type: "custom",
                    text: "Garaje",
                    targetRoom: "Garaje"
                  }
                ]
              },
              {
                id: "r6",
                name: "Sala de Estar Pasillo",
                description: "Sala de Estar Pasillo",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/pasillo.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/pasillo.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r7",
                name: "Baño Principal",
                description: "Baño Principal",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/baño1.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/baño1.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r8",
                name: "Dormitorio 1",
                description: "Baño Principal",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/habitacion1.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/habitacion1.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r9",
                name: "Dormitorio 2",
                description: "Baño Principal",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/habitacion2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/habitacion2.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r10",
                name: "Cocina",
                description: "Cocina",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/cocina.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/cocina.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r11",
                name: "Comedor",
                description: "Comedor",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/comedor-2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/comedor-2.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r12",
                name: "Patio Trasero",
                description: "Patio Trasero",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/patio-trasero.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/patio-trasero.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r13",
                name: "Quincho",
                description: "Quincho",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/quincho.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/quincho.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
              {
                id: "r14",
                name: "Baño 2",
                description: "Baño 2",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/baño2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/baño2.png",
                hotspots: [
                  // {
                  //   id: "hotspot1",
                  //   pitch: -5,
                  //   yaw: 150,
                  //   type: "custom",
                  //   text: "Entrada",
                  //   targetRoom: "Entrada"
                  // },
                  // {
                  //   id: "hotspot2",
                  //   pitch: -10,
                  //   yaw: 130,
                  //   type: "custom",
                  //   text: "Garaje",
                  //   targetRoom: "Garaje"
                  // }
                ]
              },
            ],
          },
        ],
      },
      // {
      //   id: "a2",
      //   name: "Inmobiliaria Urbana",
      //   address: "789 Calle Mercado, Metrópolis, USA",
      //   contact_email: "info@inmobiliariaurbana.com",
      //   contact_phone: "+1-555-5678",
      //   website: "https://www.inmobiliariaurbana.com",
      //   social_media: {
      //     web: "https://www.inmobiliariaurbana.com",
      //     facebook: "https://www.facebook.com/inmobiliariaurbana",
      //     twitter: "https://twitter.com/inmobiliariaurbana",
      //     instagram: "https://www.instagram.com/inmobiliariaurbana",
      //     linkedin: "https://www.linkedin.com/company/inmobiliariaurbana",
      //     youtube: "https://www.youtube.com/channel/inmobiliariaurbana",
      //   },
      //   logo_url: "https://example.com/inmobiliaria_urbana_logo.png",
      //   principalColor: "#33A1FF",
      //   properties: [
      //     {
      //       id: "p2",
      //       title: "Apartamento Moderno",
      //       description: "Un elegante apartamento en el corazón de la ciudad.",
      //       address: "101 Avenida Arce, Metrópolis, USA",
      //       price: "$850,000",
      //       type: "Apartamento",
      //       bedrooms: "2",
      //       bathrooms: "2",
      //       area: "1500 pies cuadrados",
      //       property_features: {
      //         garden: false,
      //         garage: true,
      //         pool: false,
      //         terrace: false,
      //         balcony: true,
      //       },
      //       virtual_tour: {
      //         HQ_image_url: "https://example.com/apartment_hq.jpg",
      //         SM_image_url: "https://example.com/apartment_sm.jpg",
      //       },
      //       rooms: [
      //         {
      //           id: "r2",
      //           name: "Sala de Estar",
      //           description: "Espacio abierto con grandes ventanas.",
      //           HQ_image_url: "https://example.com/livingroom_hq.jpg",
      //           SM_image_url: "https://example.com/livingroom_sm.jpg",
      //           hotspots: [
      //             {
      //               id: "hotspot3",
      //               pitch: 0,
      //               yaw: 180,
      //               type: "info",
      //               text: "Ir a la Cocina",
      //               targetRoom: "Cocina"
      //             }
      //           ]
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
};

export default ContenInmobiliaria;