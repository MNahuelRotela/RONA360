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
                    pitch: -35,
                    yaw: 220,
                    type: "custom",
                    text: "Sala de Estar Pasillo",
                    targetRoom: "Sala de Estar Pasillo"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 150,
                    type: "custom",
                    text: "Cocina",
                    targetRoom: "Cocina"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 360,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
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
                  {
                    id: "hotspot1",
                    pitch: -25,
                    yaw: 250,
                    type: "custom",
                    text: "Baño Principal",
                    targetRoom: "Baño Principal"
                  },
                  {
                    id: "hotspot2",
                    pitch: -30,
                    yaw: 300,
                    type: "custom",
                    text: "Dormitorio 1",
                    targetRoom: "Dormitorio 1"
                  },
                  {
                    id: "hotspot3",
                    pitch: -30,
                    yaw: 60,
                    type: "custom",
                    text: "Dormitorio 2",
                    targetRoom: "Dormitorio 2"
                  },
                  {
                    id: "hotspot4",
                    pitch: -15,
                    yaw: 150,
                    type: "custom",
                    text: "Sala de Estar 2",
                    targetRoom: "Sala de Estar 2"
                  }
                ]
              },
              {
                id: "r7",
                name: "Baño Principal",
                description: "Baño Principal",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/baño1.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/baño1.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -25,
                    yaw: 40,
                    type: "custom",
                    text: "Sala de Estar Pasillo",
                    targetRoom: "Sala de Estar Pasillo"
                  },
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
                  {
                    id: "hotspot1",
                    pitch: -35,
                    yaw: 280,
                    type: "custom",
                    text: "Sala de Estar Pasillo",
                    targetRoom: "Sala de Estar Pasillo"
                  },
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
                  {
                    id: "hotspot1",
                    pitch: -35,
                    yaw: 85,
                    type: "custom",
                    text: "Sala de Estar Pasillo",
                    targetRoom: "Sala de Estar Pasillo"
                  },
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
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 150,
                    type: "custom",
                    text: "Garaje",
                    targetRoom: "Entrada al Garaje"
                  },
                  {
                    id: "hotspot2",
                    pitch: -30,
                    yaw: 150,
                    type: "custom",
                    text: "Comedor",
                    targetRoom: "Comedor"
                  },
                  {
                    id: "hotspot3",
                    pitch: -15,
                    yaw: 90,
                    type: "custom",
                    text: "Sala de Estar 2",
                    targetRoom: "Sala de Estar 2"
                  }
                ]
              },
              {
                id: "r11",
                name: "Comedor",
                description: "Comedor",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/comedor-2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/comedor-2.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 140,
                    type: "custom",
                    text: "Garaje",
                    targetRoom: "Entrada al Garaje"
                  },
                  {
                    id: "hotspot2",
                    pitch: -20,
                    yaw: 340,
                    type: "custom",
                    text: "Cocina",
                    targetRoom: "Cocina"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 280,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  }
                ]
              },
              {
                id: "r12",
                name: "Patio Trasero",
                description: "Patio Trasero",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/patio-trasero.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/patio-trasero.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 160,
                    type: "custom",
                    text: "Comedor",
                    targetRoom: "Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 220,
                    type: "custom",
                    text: "Quincho",
                    targetRoom: "Quincho"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 290,
                    type: "custom",
                    text: "Quincho",
                    targetRoom: "Quincho"
                  }
                ]
              },
              {
                id: "r13",
                name: "Quincho",
                description: "Quincho",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/quincho.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/quincho.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 150,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  },
                  {
                    id: "hotspot2",
                    pitch: -10,
                    yaw: 100,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 350,
                    type: "custom",
                    text: "Baño 2",
                    targetRoom: "Baño 2"
                  }
                ]
              },
              {
                id: "r14",
                name: "Baño 2",
                description: "Baño 2",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/HQ/baño2.png",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Lopez%20Propiedades/SM/baño2.png",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 100,
                    type: "custom",
                    text: "Quincho",
                    targetRoom: "Quincho"
                  },
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
      {
        id: "a2",
        name: "Febbraio Negocios Inmobiliarios",
        address: "Av. Primera Junta 402 - San Miguel",
        contact_email: " febbraionegociosinmobiliarios@gmail.com",
        contact_phone: "11 5942-1127 / 11 4451-4689",
        website: "https://www.febbraionegociosinmobiliarios.com",
        social_media: {
          web: "https://www.febbraionegociosinmobiliarios.com",
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          youtube: "",
        },
        logo_url: "https://www.febbraionegociosinmobiliarios.com/Content/empresas/feb/imagenes/logo.png",
        principalColor: "#ffffff",
        properties: [
          {
            id: "p1",
            title: "Leandro N Alem 3700 | FEB0589",
            description: "Poder disfrutar de tu casa,y si está en impecable condición, entonces está puede ser tu oportunidad.Dentro de un complejo cerrado de duplex.Está propiedad cuenta con cochera cubierta al frente Living comedor Calefactor Cocina comedor Con mobiliario bajo mesada y alacena Toilette Patio cubierta el sector de lavadero Pileta de lavado Parrilla En planta alta Tres dormitorios dos con aire acondicionado Un baño completo con ducha y tres sanitarios Servicios luz y gas natural Perforación por bomba Pozo absorvente Expensas bajasssss.A 200m de Av Perón ,Documentación impecable ,Planos,Escritura",
            address: "Leandro N Alem 3700,José C. Paz",
            price: "U$S 67.000",
            type: "Casa",
            bedrooms: "3",
            bathrooms: "2",
            area: "80m2",
            property_features: {
              garden: true,
              garage: true,
              pool: false,
              terrace: true,
              balcony: false,
            },
            virtual_tour: {
              HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/exterior_pano.jpg",
              SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/exterior_pano.jpg",
            },
            rooms: [
              {
                id: "r1",
                name: "Exterior/Garaje",
                description: "Exterior de la propiedad.",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/exterior_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/exterior_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 180,
                    type: "custom",
                    text: "Entrada",
                    targetRoom: "Entrada"
                  },
                ]
              },
              {
                id: "r2",
                name: "Entrada",
                description: "Entrada con Patio Delantero.",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/entrada_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/entrada_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -15,
                    yaw: 250,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
                  {
                    id: "hotspot2",
                    pitch: 25,
                    yaw: 180,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
                  {
                    id: "hotspot3",
                    pitch: -10,
                    yaw: 215,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot4",
                    pitch: -10,
                    yaw: 320,
                    type: "custom",
                    text: "Exterior",
                    targetRoom: "Exterior/Garaje"
                  }
                  
                ]
              },
              {
                id: "r3",
                name: "Sala de Estar 1",
                description: "Sala de estar",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/sala.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/sala.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 160,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -5,
                    yaw: 130,
                    type: "custom",
                    text: "Baño Toillete",
                    targetRoom: "Baño Toillete"
                  },
                  {
                    id: "hotspot2",
                    pitch: -5,
                    yaw: 10,
                    type: "custom",
                    text: "Entrada",
                    targetRoom: "Entrada"
                  },
                ]
              },
              {
                id: "r4",
                name: "Cocina/Comedor",
                description: "Entrada al Garaje",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/cocina-comedor_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/cocina-comedor_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -20,
                    yaw: 190,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  },
                  {
                    id: "hotspot2",
                    pitch: -20,
                    yaw: -10,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
                  {
                    id: "hotspot3",
                    pitch: -20,
                    yaw: 25,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
                  {
                    id: "hotspot4",
                    pitch: -20,
                    yaw: 50,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
                  {
                    id: "hotspot5",
                    pitch: -20,
                    yaw: 240,
                    type: "custom",
                    text: "Comedor",
                    targetRoom: "Comedor"
                  },
                  {
                    id: "hotspot6",
                    pitch: -20,
                    yaw: 140,
                    type: "custom",
                    text: "Cocina",
                    targetRoom: "Cocina"
                  },
                ]
              },
              {
                id: "r5",
                name: "Cocina",
                description: "Cocina",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/cocina_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/cocina_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -35,
                    yaw: 350,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -35,
                    yaw: 50,
                    type: "custom",
                    text: "Comedor",
                    targetRoom: "Comedor"
                  },
                  {
                    id: "hotspot3",
                    pitch: -20,
                    yaw: 310,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  }
                ]
              },
              {
                id: "r6",
                name: "Comedor",
                description: "Comedor",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/comedor_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/comedor_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot2",
                    pitch: -30,
                    yaw: 280,
                    type: "custom",
                    text: "Patio Trasero",
                    targetRoom: "Patio Trasero"
                  },
                  {
                    id: "hotspot4",
                    pitch: -15,
                    yaw: 200,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot5",
                    pitch: -15,
                    yaw: 250,
                    type: "custom",
                    text: "Cocina",
                    targetRoom: "Cocina"
                  },
                ]
              },
              {
                id: "r7",
                name: "Baño Toillete",
                description: "Baño Toillete",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/ba%C3%B1o1_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/ba%C3%B1o1_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -25,
                    yaw: 350,
                    type: "custom",
                    text: "Sala de Estar 1",
                    targetRoom: "Sala de Estar 1"
                  },
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
                name: "Patio Trasero",
                description: "Patio Trasero",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/patio-trasero_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/patio-trasero_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -35,
                    yaw: 320,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -35,
                    yaw: 90,
                    type: "custom",
                    text: "Lavadero",
                    targetRoom: "Lavadero"
                  },
                  {
                    id: "hotspot3",
                    pitch: -35,
                    yaw: 200,
                    type: "custom",
                    text: "Parrilla",
                    targetRoom: "Parrilla"
                  },
                ]
              },
              {
                id: "r9",
                name: "Lavadero",
                description: "Lavadero",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/lavadero_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/lavadero_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -35,
                    yaw: 75,
                    type: "custom",
                    text: "Parrilla",
                    targetRoom: "Parrilla"
                  },
                  {
                    id: "hotspot2",
                    pitch: -25,
                    yaw: 135,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                ]
              },
              {
                id: "r10",
                name: "Parrilla",
                description: "Parrilla",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/parrilla_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/parrilla_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 350,
                    type: "custom",
                    text: "Cocina/Comedor",
                    targetRoom: "Cocina/Comedor"
                  },
                  {
                    id: "hotspot2",
                    pitch: -30,
                    yaw: 50,
                    type: "custom",
                    text: "Lavadero",
                    targetRoom: "Lavadero"
                  },
                ]
              },
              {
                id: "r11",
                name: "Pasillo",
                description: "Pasillo",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/pasillo_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/pasillo_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 140,
                    type: "custom",
                    text: "Habitacion 1",
                    targetRoom: "Habitacion 1"
                  },
                  {
                    id: "hotspot2",
                    pitch: -20,
                    yaw: 0,
                    type: "custom",
                    text: "Habitacion 3",
                    targetRoom: "Habitacion 3"
                  },
                  {
                    id: "hotspot3",
                    pitch: -15,
                    yaw: 70,
                    type: "custom",
                    text: "Habitacion 2",
                    targetRoom: "Habitacion 2"
                  },
                  {
                    id: "hotspot4",
                    pitch: -15,
                    yaw: 190,
                    type: "custom",
                    text: "Baño 2",
                    targetRoom: "Baño 2"
                  },
                  {
                    id: "hotspot5",
                    pitch: -45,
                    yaw: 240,
                    type: "custom",
                    text: "Entrada",
                    targetRoom: "Entrada"
                  },
                ]
              },
              {
                id: "r13",
                name: "Habitacion 3",
                description: "Habitacion 3",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/habitacion3_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/habitacion3_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 15,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
                ]
              },
              {
                id: "r14",
                name: "Habitacion 2",
                description: "Habitacion 2",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/habitacion2_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/habitacion2_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 340,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
                ]
              },
              {
                id: "r15",
                name: "Habitacion 1",
                description: "Habitacion 1",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/habitacion1_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/habitacion1_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 15,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
                ]
              },
              {
                id: "r16",
                name: "Baño 2",
                description: "Baño 2",
                HQ_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/HQ/baño2_pano.jpg",
                SM_image_url: "https://rona360blob.blob.core.windows.net/rona360/RONA360/Febbrario%20Propiedades/Leandro%20N%20Alem%203700/SM/baño2_pano.jpg",
                hotspots: [
                  {
                    id: "hotspot1",
                    pitch: -5,
                    yaw: 90,
                    type: "custom",
                    text: "Pasillo",
                    targetRoom: "Pasillo"
                  },
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
    ],
  },
};

export default ContenInmobiliaria;