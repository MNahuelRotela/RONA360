import { useTranslation } from '../../../../context/TraslationContext';
import React from 'react';
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";
import AOS from "aos";




const RegistroForm: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const { language, content } = useTranslation();
  const [captchaValido, setCaptchaValido] = useState<boolean>(false);

  const captcha = useRef<ReCAPTCHA>(null);

  // Obtener el ancho de la pantalla actual
  const screenWidth = window.innerWidth;

  const sizeReCAPTCHA = screenWidth < 641 ? "compact" : "normal";




  return (
    <div data-aos="fade-up" className='bg-[#F8F8F8] w-full h-full flex items-center justify-center'>
      <meta HTTP-EQUIV="Content-type" content="text/html; charset=UTF-8"></meta>
    <div className="max-w-2xl mx-auto w-full p-6 rounded-2xl shadow-lg mt-4 mb-4 bg-[#FFFFFF] ">
      <p className="text-xl mb-6 text-[#8DC73F]">
      {content?.contactform[language].notaform2l1}
      <br/>
      {content?.contactform[language].notaform2l2}
      </p>
      <p className="text-xl mb-6 text-red-700">
      {content?.contactform[language].notaform}
      </p>

      <div className=' flex relative'>

      <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D07000000ZOeD" method="POST" className=" w-full flex flex-col items-center" >

      <input type="hidden" name="orgid" value="00D07000000ZOeD"/>
      <input type="hidden" name="retURL" value="https://congreso.somosawaq.org/inscripcionmessage"/>

{/*  
 NOTE: These fields are optional debugging elements. Please uncomment   
these lines if you wish to test in debug mode.                          
<input type="hidden" name="debug" value=1>                              
 value="neha.sharma21@concentrix.com">                                   */}
 
    
    <label htmlFor="subject"></label><input  id="subject" maxLength={80} name="subject" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputSubject} required /><br/>
    
    <label htmlFor="description"></label><textarea name="description" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputCommentary} required></textarea><br/>
    
    <input  id="00N07000002Kfuj" maxLength={25} name="00N07000002Kfuj" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputName} required /><br/>
    
    <input  id="00N07000002Kful" maxLength={25} name="00N07000002Kful" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputSurName} required /><br/>
    
    <input  id="00N07000002Kfuh" maxLength={80} name="00N07000002Kfuh" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputEmail} required /><br/>

    <input  id="00NTs0000006YlN" maxLength={40} name="00NTs0000006YlN" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].inputPhone} required /><br></br>
    
    <input  id="00N07000002Kfuk" maxLength={25} name="00N07000002Kfuk" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].companyName} required /><br/>
    
    <input  id="00N07000002Kfun" maxLength={25} name="00N07000002Kfun" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].role} required /><br/>
    
    <input  id="00N07000002Kfug" maxLength={25} name="00N07000002Kfug" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].country} required /><br/>
    
    <textarea id="00N07000001aary" maxLength={255} name="00N07000001aary"  className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].department} required /><br/>
    
    <input  id="00N07000002KfuV" maxLength={25} name="00N07000002KfuV" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder={content?.contactform[language].city} required /><br/>
    
                <label htmlFor="type" ></label>
                <p className='text-black ms:text-ss font-bold text-left py-1'>{content?.contactform[language].type}</p>
                <select id="type" name="type" className=' w-full h-10 rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>
                <option value="" className=' h-10 w-full  rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>{content?.contactform[language].options.none}</option>
                <option value="Universities" className=' h-10 w-full  rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>{content?.contactform[language].options.universities}</option>
                <option value="Organizations" className=' h-10 w-full  rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>{content?.contactform[language].options.organizations}</option>
                <option value="Public Administrations" className=' h-10 w-full  rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>{content?.contactform[language].options.publicAdministrations}</option>
                <option value="Private Companies" className=' h-10 w-full  rounded-md border border-black focus:outline-none focus:border-[#8DC73F] focus:border-2'>{content?.contactform[language].options.privateCompanies}</option>
                </select><br></br>

              <div className=' flex w-full'>
              <input  id="00N5r00000FK6cp" name="00N5r00000FK6cp" type="checkbox" value="1" className=' mx-1' required   /><br/>
              <label
                className="text-black ms:text-ss font-bold"
                htmlFor="myCheckbox"
              >
                {content?.contactform[language].textTerms}
                <a
                  className=" text-red-500"
                  href="https://www.somosawaq.org/en/privacy-policy/"
                >
                  {content?.contactform[language].textTermsLink}
                </a>
                {content?.contactform[language].textRequired}
              </label>

              </div>

              <div className=' flex w-full'>
              <input  id="00N07000002Kfui" name="00N07000002Kfui" type="checkbox" value="1" className=' mx-1' required /><br/>
              <label
                className="text-black ms:text-ss font-bold"
                htmlFor="myCheckbox"
              >
                {content?.contactform[language].TextMarketing}
              </label> 
              </div>

              <div className=' items-start'>
              <label
                className="text-black ms:text-ss font-bold text-left"
                htmlFor="myCheckbox"
              >
                
              </label> <input  id="00N5r00000FK6cz" name="00N5r00000FK6cz" type="checkbox" value="1" required defaultChecked={true} hidden /><br/>
              </div>
    
    <select  id="00N07000002Kfum" name="00N07000002Kfum" title="User Language" required hidden >
    <option value="">--None--</option>
    <option value="Spanish" selected={language === 'es'}>Spanish</option>
  <option value="English" selected={language === 'en'}>English</option>
    </select>



                <select id="00N07000002KfuU" name="00N07000002KfuU" title="Case Origin" defaultValue="RegistrationForm" hidden>
                <option value="">--None--</option>
                <option value="ContactForm">ContactForm</option>
                <option value="RegistrationForm">RegistrationForm</option>
                </select>
                

    
            <div className="w-9/12 xs:w-full sm:w-11/12">
              <ReCAPTCHA
                ref={captcha}
                size={sizeReCAPTCHA}
                sitekey="6Lecj5cpAAAAAPcftkDaeiqcpGotC2r3G2eWpgU8"
                onChange={(val) => {
                  if (val !== null) {
                    setCaptchaValido(true);
                  } else setCaptchaValido(false);
                }}
              />
            </div>
    <input type="submit" name="submit" className="w-28 bg-green-btn-nav text-white py-1 mt-3 rounded-md hover:bg-dark-yellow transition duration-300 cursor-pointer font-medium flex relative justify-center" disabled={!captchaValido}  />              


      </form>
      </div>
    </div>
    </div>
  );
};

export default RegistroForm;