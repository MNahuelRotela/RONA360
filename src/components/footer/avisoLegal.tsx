
import { useTranslation } from '../../context/TraslationContext';
import { useEffect } from 'react';
import Markdown from 'react-markdown'

export const AvisoLegal = () => {
  const { language, content } = useTranslation();

  const docAlEs = (
  ` **__AVISO LEGAL__** 

  **DATOS IDENTIFICATIVOS**

  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es Awaq ONGD (en adelante Awaq), con domicilio a estos efectos en c/Doctor Torres Feced 20, casa 19 – 28770 Colmenar Viejo (España) número de C.I.F.: G-54253885 inscrita en el Registro Nacional de Asociaciones con el no 58891 del Ministerio del Interior, Gobierno de España. Correo electrónico de contacto: [**info@somosawaq.org,**](mailto:info@somosawaq.org) del sitio web.  
  **USUARIOS**

  El acceso y/o uso de este portal de Awaq atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
  La utilización del sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:

  - *_[- Aviso legal](/aviso-legal "aviso legal")_*
  - *_[- Política de privacidad](/politica-de-privacidad "Política de privacidad")_*
  - *_[- Política de cookies](/politica-de-cookies "Política de cookies")_*
  
  Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar este sitio Web.  
  El acceso a este sitio Web no supone, en modo alguno, el inicio de una relación comercial con Awaq.
  A través de este sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular o sus colaboradores han publicado por medio de Internet.
  A tal efecto, usted está obligado y comprometido a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por Awaq, de otros usuarios o de cualquier usuario de Internet.  
  **USO DEL PORTAL** 

  [www.somosawaq.org](www.somosawaq.org) proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, “los contenidos”) en Internet pertenecientes a Awaq o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
  En dicho registro el USUARIO será responsable de aportar información veraz y lícita. Como consecuencia de este registro, al USUARIO se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios (como por ejemplo servicios de chat, foros de discusión o grupos de noticias) que Awaq ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para (i) incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; (ii) difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos; (iii) provocar daños en los sistemas físicos y lógicos de Awaq , de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados; (iv) intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes. Awaq se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación. En cualquier caso, Awaq no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.
  
  **CONTENIDOS**
  
  El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. Asociación Territorios Vivos declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas de este sitio Web.
  Queda prohibido transmitir o enviar a través del sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en general, afecten o violen derechos del Titular o de terceros.
  Los contenidos de www.somosawaq.org tienen únicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como oferta de venta, solicitud de una oferta de compra ni recomendación para realizar cualquier otra operación, salvo que así se indique expresamente.
  Asociación Territorios Vivos se reserva el derecho a modificar, suspender, cancelar o restringir el contenido de www.somosawaq.org, los vínculos o la información obtenida a través del sitio Web, sin necesidad de previo aviso.
  Tanto el acceso a la web como el uso inconsentido que pueda efectuarse de la información contenida en la misma es de exclusiva responsabilidad de quien lo realiza y Awaq no responderá de ninguna consecuencia, daño o perjuicio que pudiera derivarse de dicho acceso o uso.
  
  **PROTECCIÓN DE DATOS**
  
  Awaq cumple con las directrices de la Ley Orgánica 15/1999 de 13 de diciembre de Protección de Datos de Carácter Personal, el Real Decreto 1720/2007 de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario. Para ello, junto a cada formulario de recabo de datos de carácter personal, en los servicios que el usuario pueda solicitar a info@somosawaq.org, hará saber al usuario de la existencia y aceptación de las condiciones particulares del tratamiento de sus datos en cada caso, informándole de la responsabilidad del fichero creado, la dirección del responsable, la posibilidad de ejercer sus derechos de acceso, rectificación, cancelación u oposición, la finalidad del tratamiento y las comunicaciones de datos a terceros en su caso.
  Asimismo, Awaq informa que da cumplimiento a la Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico y le solicitará su consentimiento al tratamiento de su correo electrónico con fines comerciales en cada momento. 
  Usted puede consultar toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de [Política de Privacidad](/politica-de-privacidad).
  
  **PROPIEDAD INTELECTUAL E INDUSTRIAL**
  
  Awaq por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma: a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc., titularidad de Awaq o bien de sus licenciantes.
  Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Awaq. El USUARIO se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de Awaq. Podrá visualizar los elementos del portal e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. El USUARIO deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en las páginas de Awaq.
  La utilización no autorizada de la información contenida en esta website, su reventa, así como la lesión de los derechos de propiedad intelectual o industrial de AGENCIA EFE dará lugar a las responsabilidades legalmente establecidas. 
  
  **EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD**
  
  Awaq no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, caídas de la red, pérdidas de negocio a consecuencia de dichas caídas, suspensiones temporales de fluido eléctrico o cualquier otro tipo de daño indirecto que te pueda ser causado por causas ajenas a el Titular, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.

  **MODIFICACIONES**

  Awaq se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
  
  **POLÍTICA DE COOKIES**
  
  En la página [Política de Cookies](/politica-de-cookies/) puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies.
  
  **ENLACES A OTROS SITIOS WEB**
  
  Awaq puede proporcionarle acceso a sitios Web de terceros mediante enlaces o hipervínculos con la finalidad exclusiva de informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos ofrecidos en el sitio Web.
  Estos enlaces a otros sitios Web no suponen en ningún caso una sugerencia o recomendación para que usted visite las páginas web de destino, que están fuera del control del Titular, por lo que Awaq no ejerce ningún tipo de control sobre dichos sitios y contenidos de los sitios web vinculados ni del resultado que obtenga al seguir los enlaces.
  Asimismo, Awaq no responde de los links o enlaces ubicados en los sitios web vinculados a los que le proporciona acceso.
  En ningún caso Awaq asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet. Igualmente la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas, ni la aceptación o aprobación por parte del Titular de sus contenidos o servicios.
  Si accede a un sitio Web externo desde un enlace que encuentre en [www.somosawaq.org](http://www.somosawaq.org)  usted deberá leer la propia política de privacidad del otro sitio web que puede ser diferente de la de este sitio Web.
  Todo enlace de terceros a esta website debe serlo a su página principal, quedando expresamente prohibidos los “links profundos”, el “framing” y cualquier otro aprovechamiento de los contenidos de la web a favor de terceros no autorizado. 
  
  **DERECHO DE EXCLUSIÓN**
  
  Awaq se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso. 
  
  **GENERALIDADES**
  Awaq perseguirá el incumplimiento de las presentes condiciones así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.
  
  **MODIFICACIONES**
  
  Awaq se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en sus websites, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de las mismas como la forma en que estos aparezcan presentados o localizados en sus websites. La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta debidamente publicadas. que sean modificadas por otras.
  
  **LEGISLACIÓN APLICABLE Y JURISDICCIÓN**
  
  La relación entre Awaq y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Τribunales de la ciudad de Madrid.
  ![](Aspose.Words.9d7608e7-e600-4011-993f-6e506949a78a.003.png)Awaq ONGD, domicilio en c/Doctor Torres Feced 20, casa 19 – 28770 Colmenar Viejo (España), inscrita en el Registro Nacional de Asociaciones con el no 58891 del Ministerio del Interior, Gobierno de España. Incluida entre las reguladas en el Artículo 16 del Capítulo I del Título III de la ley 49/2002. Inscrita en el registro de Organizaciones No Gubernamentales de Desarrollo (ONGD) de la Agencia Española de Cooperación Internacional para el Desarrollo (AECID) con el número con el no 3288.
  `)

  const docAlEn = (
    ` **__LEGAL NOTICE__**
    
  **IDENTIFICATION DATA**
  
  In compliance with the duty of information contained in Article 10 of Law 34/2002, of 11 July, Services Information Society and Electronic Commerce, then reflect the following information: the owner of the web domain is Awaq ONGD (from now on Awaq), residing for these purposes in c/Doctor Torres Feced 20, house 19 - 28770 Colmenar Viejo (Spain) T.I.C.number: G-54253885 registered in the National Register of Associations with the number 58891 of the Ministry of Interior, Government of Spain. Contact e-mail: [**info@somosawaq.org,**](mailto:info@somosawaq.org) of the website.
  
  **USERS**
  
  By accessing and using the Awaq portal, the User accepts the terms and conditions of this Legal notice. The mentioned conditions will be of application independently of the General Conditions of Contracting that, in his case, are of obligatory fulfillment.
  
  The use of the Website grants the condition of the User and implies the complete acceptance of all the clauses and conditions of use included in the pages:
  
  \- *_[- Legal Notice](/aviso-legal "legal Notice")_*
  
  \- *_[- Privacy policy](/aviso-legal "Privacy Policy")_*
  
  \- *_[- Cookies policy](/aviso-legal "Cookies Policy")_*
  
  You should refrain from using this Website if you do not agree with each of these terms and conditions.
  
  Access to this Website does not imply, in any way, the beginning of a business relationship with Awaq.
  
  Through this Website, the Holder provides access to and use of various contents that the Holder or its collaborators have published online.
  
  To this effect, you are obliged and committed NOT to use any of the contents of the Website for illicit purposes, prohibited in this Legal Notice or by current legislation, harmful to the rights and interests of third parties, or that in any way may damage, disable, overload, deteriorate or impede the normal use of the contents, computer equipment or documents, files and all kinds of content stored on any computer equipment owned or contracted by Awaq, other users or any Internet user.
  
  
  
  **USE OF THE PORTAL**
  
  [www.somosawaq.org](www.somosawaq.org) provides access to a multitude of information, services, programs, or data (from now on, “the contents”) on the Internet belonging to Awaq or its licensors to which the User may have access. The User assumes responsibility for the use of the portal. The above-mentioned responsibility extends to the registry necessary to accede to certain services or contents.
  
  In such registration, the User shall be responsible for providing truthful and lawful information. As a consequence of this registration, the User may be provided with a password for which they will be responsible, undertaking to make diligent and confidential use of it. It is the User’s responsibility to make appropriate use of the contents and services (such as chat services, discussion forums, or newsgroups) that Awaq offers through its portal, including but not limited to not using them for :
  
  1. engaging in activities that are illicit, illegal, or contrary to good faith and public order;
  1. disseminating content or propaganda of a racist, xenophobic, pornographic-illegal nature in support of terrorism or against human rights;
  1. cause damage to the material and analytical systems of Awaq, its suppliers, or third parties, introduce or disseminate computer viruses or any other material or analytical systems that are likely to cause the damage above;
  1. attempt to access and, where appropriate, use the email accounts of other users and modify or manipulate their messages.
  
  Comments and contributions that violate the dignity of individuals are discriminatory, xenophobic, racist, pornographic, violate youth or childhood, public order and safety, or that are not appropriate for publication may be removed by Awaq. In any case, Awaq will not be responsible for the views expressed by users through forums, chats, or other participation tools.
  
  **CONTENTS**
  
  The Holder has obtained the information, multimedia content, and materials included in the Web site from reliable sources. However, while it has taken all reasonable steps to ensure that the information contained is correct, the Holder does not warrant that it is accurate, complete, or up to date. Awaq expressly disclaims any liability for error or omission in the information contained in the pages of this website.
  
  It is forbidden to transmit or send through the website any illegal or illicit content, computer viruses, or messages that, in general, affect or violate the rights of the Holder or third parties.
  
  The contents of www.somosawaq.org are for informational purposes only and under no circumstances should be used or considered as an offer to sell, solicitation of an offer to buy, or recommendation to perform any other transaction unless expressly stated.
  
  Awaq reserves the right to modify, suspend, cancel, or restrict the content of the Website, links, or information obtained through the website without prior notice.
  
  A user is solely responsible if he accesses the website and uses the information contained therein without consent. Awaq shall not be liable for any consequence or damage from such access or use.
  
  **DATA PROTECTION**
  
  Awaq complies with the guidelines of the Organic Law 15/1999 of 13 December on the Protection of Personal Data, Royal Decree 1720/2007 of 21 December, which approves the Regulation of development of the Organic Law and other regulations in force at all times, and ensures the correct use and processing of the User’s personal data. With each form of personal data collection, the User will be informed of the respective conditions of processing their data in each case in the services they can request at info@somosawaq.org. The user will be informed of the responsibility for the file created, the address of the person responsible, and the possibility of exercising their rights of access, rectification, cancellation, or opposition, the purpose of processing, and data communications to third parties where appropriate.
  
  Likewise, Awaq informs that it complies with Law 34/2002 of 11 July 2002 on Information Society Services and Electronic Commerce and will request your consent to process your e-mail for commercial purposes at all times. 
  
  You can consult all the information regarding processing personal data collected by the Holder on the [Privacy Policy](/politica-de-privacidad/) page.
  
  **INTELLECTUAL AND INDUSTRIAL PROPERTY**
  
  Awaq itself or as assignee, owns all intellectual and industrial property rights to its website and all elements contained in it, including images, sound, audio, video, software, or texts. Awaq and its licensors own the trademarks (logos), color schemes, structure, design, materials used, and computer programs necessary to run, access, and use the site.
  
  All rights reserved. By the provisions of articles 8 and 32.1, second paragraph, of the Intellectual Property Law, the reproduction, distribution, and public communication, including making available, of all or part of the contents of this website, for commercial purposes, in any medium, and by any technical means, without the authorization of Awaq, are expressly prohibited. The user undertakes to respect the Intellectual and Industrial Property rights owned by Awaq. The user may view the elements of the portal and even print them, copy them, and store them on their computer’s hard disk or any other physical medium, provided that this is solely and exclusively for their personal and private use. The user must refrain from deleting, altering, evading, or manipulating any protection device or security system installed on the Awaq pages.
  
  Using this website without authorization, reselling it, or infringing on the intellectual or industrial property rights of Awaq will lead to legal liability.
  
  **EXCLUSION OF GUARANTEES AND LIABILITY**
  
  Awaq is not responsible, in any case, for damages of any nature that may cause, but is not limited to: errors or omissions in the contents, lack of availability of the portal, or the transmission of viruses or malicious or harmful programs in the contents, network failures, loss of business as a result of such failures, temporary suspensions of power or any other type of indirect damage that may be caused by causes beyond the Holder, despite having taken all the necessary technological measures to prevent it. 
    
  **MODIFICATIONS**
  
  Awaq reserves the right to make unannounced changes it deems appropriate on its website and may change, delete, or add content and services provided the same way they are presented or located on its website.
  
  **COOKIE POLICY**
  
  On the [Cookies Policy](https://www.somosawaq.org/politica-de-cookies/) page, you can consult all the information related to the policy of collection and treatment of cookies.
  
  **LINKS TO OTHER WEBSITES**
  
  Awaq may provide access to third-party websites using links or hyperlinks to inform you of other sources of information on the Internet where you can find further information.
  
  These links to other websites do not imply in any case a suggestion or recommendation for you to visit the destination web pages, which are beyond the control of the Holder, so Awaq does not exercise any control over such sites and their content or the result you get by following the links.
  
  Likewise, Awaq is not responsible for the links or links located on the linked websites to which it provides access.
  
  In no case will Awaq assume any responsibility for the contents of any link belonging to an external website nor guarantee the technical availability, quality, reliability, accuracy, comprehensiveness, accuracy, validity, and constitutionality of any material or information contained in any such hyperlinks or other Internet sites. Likewise, the inclusion of these external connections does not imply any type of association, merger, or participation with the connected entities, nor the acceptance or approval by the Holder of its contents or services.
  
  If you access an external website from a link you find on www.somosawaq.org, you should read the other website’s privacy policy, which may differ from that of this website.
  
  All third-party links to this website must be to its home page, being expressly prohibited “deep links", "framing", and any other use of the contents of the website in favor of unauthorized third parties.
  
  **RIGHT OF EXCLUSION**
  
  Awaq reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at its own request or the request of a third party, to those users who do not comply with this Legal Notice.
  
  
  
  **GENERAL**
  
  Awaq will pursue the breach of the present conditions as well as any improper use of its portal, exercising all civil and criminal actions that may correspond to it by law.
  
  
  
  **MODIFICATIONS**
  
  Awaq reserves the right to make the modifications it considers appropriate to its websites without prior notice, being able to change, delete, or add both the contents and services provided through the same as well as how they are presented or located on its websites. The changes in the modifications will be in force until duly published or modified by others.
  
  **APPLICABLE LEGISLATION AND JURISDICTION**
  
  The relationship between Awaq and the user shall be governed by current Spanish legislation, and any dispute shall be submitted to the Courts of Madrid.
  ![](Aspose.Words.f2895109-bf75-4e3c-bd91-68b5ad0148cf.003.png) Awaq ONGD, with headquarters at C/Doctor Torres Feced 20, house 19 - 28770 Colmenar Viejo Madrid, registered in the National Register of Associations with number 58891 of the Ministry of the Interior, Government of Spain. Included among those regulated in Article 16 of Chapter I of Title III of Law 49/2002. Registered in the Registry of Non-Governmental Development Organizations (ONGD) of the Spanish Agency for International Cooperation for Development (AECID) with number 3288.
      `)

  useEffect (() => {
    if(typeof window.orientation !== 'undefined'){ //.orientation
      document.getElementById('descargapdf')?.click();
      window.close();
    }
  }, []);
  return (
    <div className='relative w-auto bg-[url("")] bg-no-repeat h-auto '>
      <div className=" h-auto ">
        <section className='textos mx-40 my-40 md:mx-28 sm:mx-16 xs:mx-12 lg:mx-36'>
          <p className=' text-center text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold mb-12 uppercase'>{content?.footer[language].titlePolicie[2].title}</p>
            <Markdown
              className=''>
              {language === "es" ? docAlEs : docAlEn } 
            </Markdown>         
        </section>
      </div> 
    </div>
  )
}
