import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import TopButton from "./TopButton";
import img1 from "../../assets/Lineas-Propuesta/fondo-1.png";
import img2 from "../../assets/Lineas-Propuesta/fondo-2.jpg";
import img_s1t1 from "../../assets/Lineas-Propuesta/fondo-s1t1.png";
import img_s1t2 from "../../assets/Lineas-Propuesta/fondo-s1t2.png";
import img_s1t3 from "../../assets/Lineas-Propuesta/fondo-s1t3.png";
import img_s1t4 from "../../assets/Lineas-Propuesta/fondo-s1t4.png";
import img_plants_t from "../../assets/Lineas-Propuesta/Plants-t.png";
import img_clouds from "../../assets/Lineas-Propuesta/Clouds container.png";

export const Lineas: React.FC = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    });

    return (
		<>
			{/* Baner del titulo "LINEAS TEMATICAS" */}

			<div data-aos="fade-left" className="relative w-full h-[382px] mt-36 xs:h-[250px] xs:min-w-[370px] sm:h-[250px] md:h-[300px]">
				<div className="w-1/2 h-full relative bg-white">
					<div className="absolute top-20 left-20 xs:left-3 sm:left-3 sm:top-16 md:left-6 lg:left-6 xl:left-6 2xl:left-5">
						<h1 className="font-extrabold font-open-sans text-[85px] xs:text-[25px] sm:text-[30px] md:text-[45px] lg:text-[55px] xl:text-[70px]"
							style={{
								backgroundImage: `url(${img2})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								color: 'transparent'
							}}>
							{content?.lineasyPropuesta[language].lineas.lt_title}
						</h1>
					</div>
				</div>
				<div className="absolute right-0 top-0 w-1/2 h-full" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className="relative w-full h-full">
						<div className="absolute left-0 top-0 w-0 h-0 border-t-[200px] border-t-transparent 
						border-b-[182px] border-b-transparent border-r-[155px] border-r-transparent 
						border-t-white border-b-white xs:border-t-[125px] xs:border-b-[125px] xs:border-r-[100px] 
						sm:border-t-[125px] sm:border-b-[125px] sm:border-r-[100px] md:border-t-[155px] md:border-b-[155px] md:border-r-[100px]"></div>
					</div>
				</div>
			</div>
				
			{/* Primera seccion de informacion "LINEAS TEMATICAS" */}
			
			<div data-aos="fade-up" className="max-w-[1280px] h-[526px] m-auto mt-36 px-5 xs:mt-20 xs:h-[730px] xs:min-w-[370px] sm:mt-20 sm:h-[900px] md:h-[580px] sm:min-w-[490px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].lineas.tema_1}</h2>
				<div className="w-full h-[440px] flex justify-center items-center xs:block xs:h-[630px] xs:mt-5 sm:block sm:h-[760px] sm:mt-5 md:h-[440px] md:mt-3">
					<div className="w-[831px] h-[264px] font-open-sans text-[21px] pr-7 xs:text-[17px] xs:pr-0 xs:w-full xs:h-[330px] sm:pr-0 sm:w-full sm:h-[280spx] sm:text-[18px] md:h-[440px] md:pr-0 md:text-[18px] lg:h-[340px] lg:text-[20px] lg:pr-0">						
						<p>{content?.lineasyPropuesta[language].lineas.texto_1}</p>
					</div>
					<div className="w-[376px] h-[440px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[300px] xs:m-auto sm:w-[250px] sm:h-[360px] sm:m-auto">
						<div className="absolute top-2 -left-3 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-0 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<img className="w-[276px] h-[402px] z-20 relative xs:w-[160px] xs:h-[250px] sm:w-[200px] sm:h-[330px]" src={img_s1t1}/>
					</div>
				</div>
			</div>

			{/* Segunda seccion de informacion "LINEAS TEMATICAS" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[547px] m-auto mt-10 px-5 xs:h-[700px] xs:min-w-[370px] xs:mt-20 sm:h-[900px] md:h-[540px] lg:h-[560px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].lineas.tema_2}</h2>
				<div className="w-full h-[461px] flex justify-center items-center xs:h-[630px] xs:flex-col-reverse xs:mt-5 sm:flex-col-reverse sm:h-[760px] sm:mt-5 md:h-[461px] md:mt-3 lg:h-[481px] lg:mt-4">
					<div className="w-[376px] h-[461px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[300px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[370px] sm:m-auto md:m-auto lg:h-[481px] lg:pt-9 lg:pl-4">
						<div className="absolute top-3 -left-3 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5 md:-left-7 lg:-left-5"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-1 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3 md:-left-1 lg:-left-1" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<img className="w-[276px] h-[408px] z-20 relative xs:w-[160px] xs:h-[250px] sm:w-[200px] sm:h-[330px] sm:mt-0 md:-ml-3" src={img_s1t2}/>
					</div>
					<div className="w-[831px] h-[232px] font-open-sans text-[21px] pl-1 pr-12 xs:text-[17px] xs:pr-0 xs:w-full xs:h-[330px] sm:pr-0 sm:w-full sm:h-[120px] sm:text-[18px] md:h-[461px] md:pr-0 md:text-[18px] lg:pr-0 lg:h-[381px] lg:text-[20px] xl:h-[361px]">						
						<p>{content?.lineasyPropuesta[language].lineas.texto_2}</p>
					</div>
				</div>
			</div>

			{/* Tercera seccion de informacion "LINEAS TEMATICAS" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[646px] m-auto mt-10 px-5 xs:h-[760px] xs:min-w-[370px] xs:mt-20 sm:h-[940px] md:h-[700px] lg:h-[600px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].lineas.tema_3}</h2>
				<div className="w-full h-[560px] flex justify-center items-center xs:h-[630px] xs:block xs:mt-5 sm:block sm:h-[800px] sm:mt-5 md:h-[560px] md:mt-3 lg:h-[520px] lg:mt-4">
					<div className="w-[831px] h-[297px] font-open-sans text-[21px] pr-7 xs:text-[16.5px] xs:pr-0 xs:w-full xs:h-[330px] sm:pr-0 sm:w-full sm:h-[300px] sm:text-[18px] md:h-[560px] md:pr-0 md:text-[18px] lg:pr-0 lg:h-[500px] lg:text-[20px] xl:h-[361px]">						
						<p>{content?.lineasyPropuesta[language].lineas.texto_3}</p>
					</div>
					<div className="w-[376px] h-[560px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[300px] xs:m-auto xs:pt-9 xs:mt-5 sm:w-[250px] sm:h-[370px] sm:m-auto md:m-auto lg:h-[520px]">
						<div className="absolute top-3 -left-3 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-1 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<img className="w-[276px] h-[485px] z-20 relative xs:w-[160px] xs:h-[250px] sm:w-[200px] sm:h-[330px] sm:mt-0" src={img_s1t3}/>
					</div>
				</div>
			</div>

			{/* Cuarta seccion de informacion "LINEAS TEMATICAS" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[646px] m-auto px-5 xs:h-[820px] xs:min-w-[370px] xs:mt-20 sm:h-[930px] md:h-[740px] lg:h-[650px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].lineas.tema_4}</h2>
				<div className="w-full h-[700px] flex justify-center items-center xs:h-[710px] xs:flex-col-reverse xs:mt-5 sm:flex-col-reverse sm:h-[850px] sm:mt-5 md:h-[660px] md:mt-3 lg:h-[560px] lg:mt-5">
					<div className="w-[376px] h-[560px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[275px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[350px] sm:m-auto md:m-auto">
						<div className="absolute top-3 -left-3 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5 md:-left-7 lg:-left-5 lg:top-8"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-1 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3 md:-left-1 lg:-left-3 lg:top-16" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<img className="w-[276px] h-[458px] z-20 relative xs:w-[160px] xs:h-[250px] sm:w-[200px] sm:h-[330px] sm:mt-0 md:-ml-3 lg:mt-7 lg:-ml-3" src={img_s1t4}/>
					</div>
					<div className="w-[814px] h-[463px] font-open-sans text-[21px] pr-9 xs:text-[18px] xs:pr-0 xs:mt-10 xs:w-full xs:h-[530px] sm:pr-0 sm:w-full sm:h-[300px] sm:text-[18px] md:h-[480px] md:pr-0 md:text-[18px] lg:pr-0 lg:h-[400px] lg:text-[20px] 2xl:mt-20">						
						<p>{content?.lineasyPropuesta[language].lineas.texto_4}</p>
					</div>
				</div>
			</div>


			{/* Seccion de Botones "Formulario de inscripción" y "¡Quiero donar!" */}

			<div data-aos="fade-up" className="h-[74px] flex justify-center mt-24 xs:h-[55px] xs:px-5 sm:px-16 md:mt-20 md:px-20">
				<button className="w-[340px] h-full bg-[#8DC73F] font-open-sans font-bold text-[24px] text-black mr-[54px] rounded-lg xs:text-[16px] xs:mr-[20px] sm:mr-[20px] sm:text-[17px] md:mr-[25px]">
					<Link to=''>
						<a>
							{content?.lineasyPropuesta[language].boton.boton_left}
						</a>
					</Link>
				</button>
				<button className="w-[340px] h-full bg-black font-open-sans font-bold text-[24px] text-[#8DC73F] ml-[54px] rounded-lg xs:text-[16px] xs:ml-[20px] sm:ml-[20px] sm:text-[17px] md:ml-[25px]">
					<Link to="/donations">
					<a>
						{content?.lineasyPropuesta[language].boton.boton_right}
					</a>
					</Link>
				</button>
			</div>

			{/* Botón para subir hasta arriba */}
			
			<TopButton/>
		</>
    )
}