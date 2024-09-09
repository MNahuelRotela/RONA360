import React from "react";
import { useTranslation } from "../../context/TraslationContext";
import AOS from "aos";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import TopButton from "./TopButton";
import img2 from "../../assets/Lineas-Propuesta/fondo-2.jpg";
import img3 from "../../assets/Lineas-Propuesta/fondo-3.png";
import img_s1t1 from "../../assets/Lineas-Propuesta/fondo-s1t1.png";
import img_s1t2 from "../../assets/Lineas-Propuesta/fondo-s1t2.png";
import img_s1t3 from "../../assets/Lineas-Propuesta/fondo-s1t3.png";
import img_s1t4 from "../../assets/Lineas-Propuesta/fondo-s1t4.png";
import img_plants_t from "../../assets/Lineas-Propuesta/Plants-t.png";
import img_plants_b from "../../assets/Lineas-Propuesta/Plants-b.png";
import img_clouds from "../../assets/Lineas-Propuesta/Clouds container.png";

export const Propuesta: React.FC = () => {
    const { language, content } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    });

    return (
		<>

			{/* Baner del titulo "PROPUESTA DE VALOR" */}

			<div data-aos="fade-right" className="relative w-full h-[382px] mt-36 xs:h-[250px] xs:min-w-[370px] xs:mt-24 sm:h-[250px] sm:mt-24 md:mt-20 md:h-[300px] lg:mt-36">
				<div className="relative left-0 top-0 w-1/2 h-full" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className="w-full h-full">
						<div className="absolute right-0 w-0 h-0 border-t-[200px] border-t-transparent border-b-[182px] border-b-transparent border-l-[155px] border-l-transparent 
						border-t-white border-b-white xs:border-t-[125px] xs:border-b-[125px] xs:border-l-[100px] 
						sm:border-t-[125px] sm:border-b-[125px] sm:border-l-[100px] md:border-t-[155px] md:border-b-[155px] md:border-l-[100px]"></div>
					</div>
				</div>
				<div className="w-1/2 right-0 top-0 h-full absolute bg-white">
					<div className="w-[581] h-[232] absolute top-20 left-10 xs:left-2 sm:left-3 sm:top-20 md:left-5 lg:left-6 lg:top-28">
						<h1 className="font-extrabold font-open-sans text-[85px] xs:text-[23px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]"
							style={{
								backgroundImage: `url(${img2})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								color: 'transparent'
							}}>
							{content?.lineasyPropuesta[language].propuesta.pv_title}
						</h1>
					</div>
				</div>
			</div>

			{/* Primera seccion de informacion "PROPUESTA DE VALOR" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[551px] m-auto mt-20 px-5 xs:h-[700px] xs:mt-20 xs:min-w-[370px] sm:h-[860px] md:h-[580px] lg:h-[600px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].propuesta.tema_1}</h2>
				<div className="w-full h-[425px] flex justify-center items-center xs:h-[590px] xs:block xs:mt-5 sm:block sm:h-[720px] sm:mt-5 md:h-[440px] md:mt-3 lg:h-[500px] lg:mt-5">
					<div className="w-[831px] h-[231px] font-open-sans text-[22px] pr-7 xs:text-[16.5px] xs:pr-0 xs:w-full xs:h-[300px] sm:text-[20px] sm:pr-0 sm:w-full sm:h-[360px] md:text-[22px] md:h-[440px] md:pr-0 lg:pr-0 lg:h-[400px] lg:text-[24px]">						
						<p>{content?.lineasyPropuesta[language].propuesta.texto_1}</p>
					</div>
					<div className="w-[376px] h-[425px] pl-[28px] py-[35px] relative xs:w-[220px] xs:h-[290px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[360px] sm:m-auto md:h-[440px] lg:h-[500px]">
						<div className="absolute top-2 -left-4 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-1 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3" style={{ transform: 'rotate(10deg)' }}><img src={img_plants_t}/></div>
						<img className="w-[276px] h-[458px] z-20 relative xs:w-[160px] xs:h-[250px] sm:w-[200px] sm:h-[330px] md:h-[420px]" src={img_s1t1}/>
					</div>
				</div>
			</div>

			{/* Segunda seccion de informacion "PROPUESTA DE VALOR" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[530px] m-auto mt-10 px-5 xs:h-[800px] xs:min-w-[370px] xs:mt-20 sm:h-[1070px] md:h-[610px] lg:h-[650px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].propuesta.tema_2}</h2>
				<div className="w-full h-[444px] flex justify-center items-center xs:h-[600px] xs:flex-col-reverse xs:mt-5 sm:flex-col-reverse sm:h-[770px] sm:mt-5 md:h-[470px] md:mt-3 lg:h-[500px] lg:mt-5">
					<div className="w-[376px] h-[444px] relative xs:w-[220px] xs:h-[275px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[370px] sm:m-auto md:h-[470px] lg:h-[500px]">
						<div className="absolute top-2 left-1 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5 md:-left-11 lg:-left-6"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-6 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3 md:-left-4 lg:-left-4" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<div className="absolute bottom-2 right-10 z-30 xs:size-28 xs:-bottom-[72px] xs:-right-1 sm:bottom-[15px] sm:-right-4 md:bottom-[35px] md:right-20 lg:bottom-16 lg:right-32"><img src={img_plants_b}/></div>
						<img className="w-[276px] h-[416px] m-auto mt-10 z-20 relative xs:w-[160px] xs:h-[250px] xs:m-auto sm:w-[200px] sm:h-[330px] md:w-[190px]" src={img_s1t2}/>
					</div>
					<div className="w-[831px] h-[232px] font-open-sans text-[22px] pl-1 pr-10 xs:text-[16.5px] xs:pr-0 xs:w-full xs:h-[340px] sm:pr-0 sm:w-full sm:h-[400px] sm:text-[20px] md:h-[470px] md:pr-0 md:text-[22px] lg:pr-0 lg:h-[400px] lg:text-[24px] xl:h-[300px]">						
						<p>{content?.lineasyPropuesta[language].propuesta.texto_2}</p>
					</div>
				</div>
			</div>

			{/* Tercera seccion de informacion "PROPUESTA DE VALOR" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[608px] m-auto mt-10 px-5 xs:h-[680px] xs:min-w-[370px] xs:mt-20 sm:h-[820px] md:h-[500px] lg:h-[600px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].propuesta.tema_3}</h2>
				<div className="w-full h-[522px] flex justify-center items-center xs:h-[575px] xs:block xs:mt-5 sm:block sm:h-[690px] sm:mt-5 md:h-[410px] md:mt-3 lg:h-[500px] lg:mt-5">
					<div className="w-[831px] h-[231px] font-open-sans text-[22px] pr-10 xs:text-[17px] xs:pr-0 xs:w-full xs:h-[300px] sm:pr-0 sm:w-full sm:h-[330px] sm:text-[19px] md:h-[410px] md:pr-0 md:text-[21px] lg:pr-0 lg:h-[350px] lg:text-[24px] xl:h-[361px]">						
						<p>{content?.lineasyPropuesta[language].propuesta.texto_3}</p>
					</div>
					<div className="w-[376px] h-[522px] relative xs:w-[220px] xs:h-[275px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[360px] sm:m-auto md:h-[410px] md:m-auto lg:h-[500px]">
						<div className="absolute -top-5 -left-12 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5 md:-left-8"><img src={img_clouds}/></div>
						<div className="absolute top-5 -left-5 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<div className="absolute bottom-14 right-10 z-30 xs:size-28 xs:-bottom-[72px] xs:right-5 sm:bottom-[6px] sm:-right-14 md:-right-4 lg:bottom-3 lg:-left-7"><img src={img_plants_b}/></div>
						<img className="w-[276px] h-[492px] z-20 relative xs:w-[160px] xs:h-[250px] xs:m-auto sm:w-[200px] sm:h-[370px] sm:m-auto sm:pt-9 md:w-[200px] md:h-[410px] md:m-auto md:pt-5 lg:m-auto lg:mt-5" src={img_s1t3}/>
					</div>
				</div>
			</div>

			{/* Cuarta seccion de informacion "PROPUESTA DE VALOR" */}

			<div data-aos="fade-up" className="max-w-[1280px] h-[646px] m-auto px-5 xs:h-[680px] xs:min-w-[370px] xs:mt-20 sm:h-[900px] md:h-[550px] lg:h-[600px]">
				<h2 className="font-open-sans font-bold text-[40px] xs:text-[30px]">{content?.lineasyPropuesta[language].propuesta.tema_4}</h2>
				<div className="w-full h-[560px] flex justify-center items-center xs:h-[530px] xs:flex-col-reverse xs:mt-5 sm:flex-col-reverse sm:h-[660px] sm:mt-5 md:h-[410px] md:mt-3 lg:h-[500px] lg:mt-5">
					<div className="w-[376px] h-[560px] relative xs:w-[220px] xs:h-[280px] xs:m-auto xs:pt-9 sm:w-[250px] sm:h-[360px] sm:m-auto md:h-[410px] md:m-auto lg:h-[500px]">
						<div className="absolute top-2 -left-1 z-10 xs:size-28 xs:left-0 xs:top-5 sm:size-28 sm:left-0 sm:top-5 md:-left-8 lg:-left-6"><img src={img_clouds}/></div>
						<div className="absolute top-10 left-3 z-10 xs:size-12 xs:left-3 sm:size-12 sm:left-3 md:-left-3 lg:-left-3" style={{ transform: 'rotate(5deg)' }}><img src={img_plants_t}/></div>
						<div className="absolute bottom-[85px] right-7 z-30 xs:size-28 xs:-bottom-[67px] xs:-left-2 sm:bottom-[5px] sm:right-24 md:right-20 md:bottom-0 lg:bottom-6 lg:-left-0"><img src={img_plants_b}/></div>
						<img className="w-[276px] h-[458px] m-auto mt-10 z-20 relative xs:w-[160px] xs:h-[250px] xs:m-auto sm:w-[200px] sm:h-[370px] sm:m-auto sm:pt-9 md:w-[200px] md:h-[430px] md:m-auto md:pt-5" src={img_s1t4}/>
					</div>
					<div className="w-[831px] h-[363px] font-open-sans text-[22px] pr-10 xs:text-[17px] xs:pr-0 xs:w-full xs:h-[250px] sm:pr-0 sm:w-full sm:h-[300px] sm:text-[19.5px] md:h-[370px] md:pr-0 md:text-[23px] lg:pr-0 lg:h-[300px] lg:text-[24px]">					
						<p>{content?.lineasyPropuesta[language].propuesta.texto_4}</p>
					</div>
				</div>
			</div>

			{/* Seccion de Botones "Formulario de inscripción" y "¡Quiero donar!" */}

			<div data-aos="fade-up" className="h-[74px] flex justify-center mt-10 xs:h-[55px] xs:px-2 sm:px-16 md:mt-20 md:px-20">
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