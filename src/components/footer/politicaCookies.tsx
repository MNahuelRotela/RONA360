import { useTranslation } from '../../context/TraslationContext';
import { useEffect } from 'react';
import Markdown from 'react-markdown'

export const PoliticaCookies = () => {
  const { language, content } = useTranslation();

  const docPcEs = (
    `
  **POLÍTICA DE COOKIES**

  En cumplimiento con el artículo 22 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y garantía de los derechos digitales (LOPDGDD), Awaq pone a disposición de los usuarios la Política de recogida y tratamiento de cookies del sitio Web.

  **Qué son las Cookies**

  Una Cookie es un fichero que se descarga en su ordenador al entrar a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre sus hábitos de navegación y —dependiendo de la información que contengan y de la forma en que utilice su equipo— pueden utilizarse para identificarle.

  **Cookies utilizadas en el sitio Web**

  A continuación se clasifican las cookies utilizadas por el sitio Web www.somosawaq.org:

  **Según la entidad que las gestiona**

  - **Cookies propias:** Son aquellas enviadas y gestionadas directamente por Awaq.
  - **Cookies de terceros**: una cookie de terceros suele ser instalada por un dominio/servidor de terceros. Las cookies de terceros tienen múltiples finalidades, como hacer un seguimiento de las actividades de navegación de los usuarios para mostrarles anuncios personalizados de bienes y servicios. Aunque el usuario finalice la sesión o cierre su navegador, los anuncios seguirán mostrándose, ya que los datos de seguimiento se almacenan en el ordenador del usuario.

  **Según su finalidad**

  - **Cookies técnicas:** Son aquellas que permiten a los usuarios registrados navegar a través del sitio Web, del área restringida y a utilizar sus diferentes funciones, como por ejemplo, el sistema de comentarios o el buscador.
  - **Cookies de personalización:** Son aquellas que permiten a los usuarios acceder al Servicio con algunas características de carácter general predefinidas en función de una serie de criterios establecidos por el usuario como, por ejemplo, el idioma o el tipo de navegador a través del cual se conecta a este sitio Web.

  **Según su duración**

  - **Cookies de sesión:** Son aquellas diseñadas para recabar y almacenar datos mientras el usuario accede al sitio Web.
  - **Cookies persistentes:** Son aquellas en las que los datos siguen almacenados en el terminal del usuario y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie.

  Listado de cookies utilizadas

  Este sitio Web puede instalar las siguientes cookies:

  - **cf_clearance**: Cookie propio, tiene una duración de 1 año.
  - **hasConsent:** Cookie técnica que almacena el consentimiento del usuario. Es persistente y tiene una duración de 1 año.

  **Eliminación de cookies**

  Usted puede aceptar, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador, pero parte del sitio no funcionará correctamente o su calidad puede verse afectada.

  En los siguientes enlaces encontrará instrucciones para habilitar o deshabilitar las cookies en los navegadores más comunes.

  - **Firefox** <http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we>
  - **Google Chrome** <https://support.google.com/chrome/answer/95647?hl=es>
  - **Internet Explorer** [https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie="ie-10"](https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=%22ie-10%22)
  - **Microsoft Edge** <https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy>
  - **Safari** <http://support.apple.com/kb/HT1677?viewlocale=es_ES>

  Si usted desea borrar la información que nos ha dado a través del formulario de información solicitada, puede revisar el correo enviado por <info@somosawaq.org>, en el que hay un link para darse de baja. 

  **Tratamiento de Datos Personales**

  Awaq es el responsable del tratamiento de los datos personales del usuario. Usted puede consultar toda la información relativa al tratamiento de datos personales que recoge Awaq en la página de [Política de Privacidad.](https://www.somosawaq.org/politica-de-privacidad/)

  ![](Aspose.Words.5bb883e8-b992-4f7d-a9e8-a6c2b8e69785.003.png)Awaq ONGD, domicilio en c/Doctor Torres Feced 20, casa 19 – 28770 Colmenar Viejo (España), inscrita en el Registro Nacional de Asociaciones con el no 58891 del Ministerio del Interior, Gobierno de España. Incluida entre las reguladas en el Artículo 16 del Capítulo I del Título III de la ley 49/2002. Inscrita en el registro de Organizaciones No Gubernamentales de Desarrollo (ONGD) de la Agencia Española de Cooperación Internacional para el Desarrollo (AECID) con el número con el no 3288.
      `
    )
    const docPcEn = (
      `
  **COOKIE POLICY**

  In compliance with Article 22 of Law 34/2002, of 11 July, on information society services and electronic commerce (LSSI in Spanish), in relation to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, General Data Protection (GDPR) and Organic Law 3/2018, of 5 December, on Data Protection and guarantee of digital rights (OLPPDGDR), Awaq makes available to users the Policy for the collection and treatment of cookies on the website.

  **What are Cookies?**

  A cookie is a file downloaded to your computer when you enter certain web pages. Cookies allow a website, among other things, to store and retrieve information about your browsing habits and,  depending on the information they contain and how you use your computer, can be used to identify you.

  **Cookies used on the website**

  The cookies used by the www.somosawaq.org website (from now on “Website”) are classified below:

  **According to the entity that manages them**

  - **First-party cookies:** cookies sent and managed directly by Awaq.
  - **Third-party cookies:** a third-party cookie is usually set by a third-party domain/server. Third-party cookies have multiple purposes, such as keeping track of users' browsing activities to show them personalized ads of goods and services. Even if the user terminates the session or closes their browser, ads will continue targeting as the tracking data is stored on the users’ computer.

  **According to their purpose**

  - **Technical Cookies:** These allow registered users to navigate through the Website, the restricted area and to use its different functions, such as, for example, the comment system or the search engine.
  - **Personalization Cookies:** These allow users to access the Service with some general characteristics predefined according to a series of criteria established by the user, such as, for example, the language or the type of browser through which the user connects to this Web site.


  **According to their duration**

  **- Session Cookies**: These are designed to collect and store data while the user accesses the Website.

  - **Persistent Cookies**: They are those in which the data are still stored in the user's terminal and can be accessed and processed for a period defined by the person responsible for the cookie.

  **List of cookies used**

  This website may install the following cookies:

  **- cf_clearance:** first-party cookie, has a duration of 1 year.

  **- hasConsent:** Technical cookie that stores the user's consent. It is persistent and has a duration of 1 year.

  **Deleting cookies**

  You can accept, block, or delete cookies installed on your computer by configuring your browser settings. However, part of the site will not function properly, or its quality may be affected.

  In the following links, you will find instructions on enabling or disabling cookies in the most common browsers.

  - **Firefox**  <https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox> 
  - **Google Chrome** <https://support.google.com/chrome/answer/95647?hl=en&sjid=13135091078209913626-EU>
  - **Internet Explorer** [https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie="ie-10"](https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=%22ie-10%22)
  - **Microsoft Edge**  <https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09>
  - **Safari**  <https://support.apple.com/en-us/HT201265>

  If you wish to delete the information you have given us through the requested information form, you can review the email sent by [**info@somosawaq.org,**](mailto:info@somosawaq.org) in which there is a link to unsubscribe.
  
  **Processing of Personal Data**

  Awaq is responsible for the processing of the user’s data. You can consult all the information regarding processing personal data collected by Awaq on the [Privacy Policy](/politica-de-privacidad page.

  Awaq ONGD, with headquarters at C/Doctor Torres Feced 20, house 19 - 28770 Colmenar Viejo Madrid, registered in the National Register of Associations with number 58891 of the Ministry of the Interior, Government of Spain. Included among those regulated in Article 16 of Chapter I of Title III of Law 49/2002. Registered in the Registry of Non-Governmental Development Organizations (ONGD) of the Spanish Agency for International Cooperation for Development (AECID) with number 3288.![](Aspose.Words.953e655b-9a6f-4405-8ad5-d7494591b04d.003.png)
    `
  )


  useEffect (() => {
    if(typeof window.orientation !== 'undefined'){ //.orientation
      document.getElementById('descargapdf')?.click();
      window.close();
    }
  }, []);

  
  return (
    <div className='relative w-auto h-auto '>
      <div className=" h-auto ">
        <section className='textos mx-40 my-40 md:mx-28 sm:mx-16 xs:mx-12 lg:mx-36'>
        <p className=' text-center text-4xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold mb-12 uppercase'>{content?.footer[language].titlePolicie[1].title}</p>
          <Markdown
            className=' textEmbe'>
            {language === "es" ? docPcEs : docPcEn } 
          </Markdown>          
        </section>
      </div> 
    </div>
  )
}
