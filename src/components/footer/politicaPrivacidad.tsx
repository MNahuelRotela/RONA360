import { useTranslation } from '../../context/TraslationContext';
import { useEffect } from 'react';
import Markdown from 'react-markdown'


export const PoliticaPrivacidad = () => {
  const { language, content } = useTranslation();

  const docPpEs = (
    `
  **POLÍTICA DE PRIVACIDAD**
  
  Awaq ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de privacidad explica cómo Awaq recopila, usa y divulga su información personal.
  
  Esta Política de privacidad se aplica a nuestro sitio web, [www.somosawaq.org](http://www.somosawaq.org) y sus subdominios asociados (colectivamente, nuestro "Servicio"). Al acceder o utilizar nuestro Servicio, usted indica que ha leído, comprendido y aceptado nuestra recopilación, almacenamiento, uso y divulgación de su información personal como se describe en esta Política de privacidad y en nuestros Términos de servicio.
  
  **Definiciones y Términos clave**
  
  Para ayudar a explicar las cosas de la manera más clara posible en esta Política de privacidad, cada vez que se hace referencia a cualquiera de estos términos, se definen estrictamente como:
  
  - Cookie: pequeña cantidad de datos generados por un sitio web y guardados por su navegador web. Se utiliza para identificar su navegador, proporcionar análisis, recordar información sobre usted, como su preferencia de idioma o información de inicio de sesión.
  - Compañía: cuando esta política menciona "Compañía", "nosotros", "nos" o "nuestro", se refiere a Awaq Estaciones Biológicas, C/Doctor Torres Feced 20, Casa19 - 28770 que es responsable de su información en virtud de esta Política de privacidad.
  - Plataforma: el sitio web de Awaq en Internet (www.somosawaq.org), aplicación web o aplicación digital de cara al público.
  - País: donde se encuentra Awaq o sus propietarios / fundadores, en este caso es España.
  - Cliente: se refiere a la empresa, organización o persona que se registra para utilizar el Servicio de Awaq para gestionar las relaciones con sus consumidores o usuarios del servicio.
  - Dispositivo: cualquier dispositivo conectado a Internet, como un teléfono, tablet, computadora o cualquier otro dispositivo que se pueda usar para visitar www.somosawaq.org y usar los servicios.
  - Dirección IP: a cada dispositivo conectado a Internet se le asigna un número conocido como dirección de protocolo de Internet (IP). Estos números generalmente se asignan en bloques geográficos. A menudo, se puede utilizar una dirección IP para identificar la ubicación desde la que un dispositivo se conecta a Internet.
  - Personal: se refiere a aquellas personas que son empleadas por Awaq o están bajo contrato para realizar un servicio en nombre de una de las partes.
  - Datos personales: cualquier información que directa, indirectamente o en conexión con otra información, incluido un número de identificación personal, permita la identificación de una persona física.
  - Servicio: se refiere al servicio brindado por Awaq como se describe en los términos relativos (si están disponibles) y en esta plataforma.
  - Terceros: se refiere a anunciantes, patrocinadores de concursos, socios promocionales y de marketing, y otros que brindan nuestro contenido o cuyos productos o servicios que creemos que pueden interesarle.
  - Sitio web: el sitio de www.somosawaq.org, al que se puede acceder a través de esta URL: https://www.somosawaq.org/
  - Usted: una persona o entidad que está registrada con [www.somosawaq.org](http://www.somosawaq.org) para utilizar los Servicios.
  
  
  
  
  **¿Qué información recopilamos?**
  
  Recopilamos información suya, siempre con su autorización, cuando visita nuestra plataforma, se registra en nuestro sitio, solicita información, se suscribe a nuestro boletín, responde a una encuesta o completa un formulario. Dependiendo de la naturaleza de nuestra relación contigo, trataremos datos en mayor o menor medida, siendo estos necesarios, adecuados y pertinentes en todo caso, de acuerdo con la finalidad perseguida. Según lo expuesto anteriormente, podremos tratar los siguientes datos: 
  
  - Nombre 
  - Números de teléfono
  - Correo electrónico
  
  **¿Dónde y cuándo se recopila la información de los clientes y usuarios finales?**
  
  Awaq recopilará la información personal que nos envíe. También podemos recibir información personal sobre usted de terceros como se describe anteriormente.
  
  **¿Cómo usamos la información que recopilamos?**
  
  Cualquiera de la información que recopilamos de usted puede usarse de una de las siguientes maneras:
  
  - Para personalizar su experiencia (su información nos ayuda a responder mejor a sus necesidades individuales)
  - Para mejorar nuestra plataforma (nos esforzamos continuamente por mejorar lo que ofrece nuestra plataforma en función de la información y los comentarios que recibimos de usted)
  - Para mejorar el servicio al cliente (su información nos ayuda a responder de manera más efectiva a sus solicitudes de servicio al cliente y necesidades de soporte)
  - Para enviar correos electrónicos periódicos siempre que así lo marque en su elección
  
  
  **¿Cómo utilizamos su dirección de correo electrónico?**
  
  Al enviar su dirección de correo electrónico en esta plataforma, acepta recibir nuestros correos electrónicos. Puede cancelar su participación en cualquiera de estas listas de correo electrónico en cualquier momento haciendo clic en el enlace de exclusión voluntaria u otra opción para cancelar la suscripción que se incluye en el correo electrónico respectivo. Solo enviamos correos electrónicos a personas que nos han autorizado a contactarlos directamente. Al enviar su dirección de correo electrónico, también acepta permitirnos usar su dirección de correo electrónico para la orientación de la audiencia del cliente en sitios como Facebook, donde mostramos publicidad personalizada a personas específicas que han optado por recibir nuestras comunicaciones. 
  
  **Nota**: Si en algún momento desea cancelar la suscripción para no recibir correos electrónicos futuros, incluimos instrucciones detalladas para cancelar la suscripción en la parte inferior de cada correo electrónico.
  
  **¿Cuánto tiempo conservamos su información?**
  
  Conservaremos tu información personal el tiempo necesario o permitido en atención a los fines para los cuales se haya obtenido. Este también es el caso de cualquier persona con la que compartamos su información y que lleve a cabo servicios en nuestro nombre. Cuando ya no necesitemos usar su información y no sea necesario que la conservemos para cumplir con nuestras obligaciones legales o reglamentarias, la eliminaremos de nuestros sistemas o la despersonalizaremos para que no podamos identificarlo.
  
  **¿Cómo protegemos su información?**
  
  Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal cuando ingresa, envía o accede a su información personal. Sin embargo, no podemos garantizar la seguridad absoluta de la información que transmita a Awaq ni garantizar que su información en el servicio no sea accedida, divulgada, alterada o destruida por una infracción de cualquiera de nuestras condiciones físicas, salvaguardias técnicas o de gestión.
  
  
  **¿Cuáles son tus derechos?**
  
  Puedes ejercitar tus derechos de acceso, rectificación, supresión y portabilidad, limitación y/u oposición al tratamiento, a través de las direcciones postal y electrónicas indicadas. Esto significa que tienes derecho a:
  
  - A saber si estamos tratando tus datos o no.
  - A acceder a tus datos personales.
  - A solicitar la rectificación de tus datos si son inexactos.
  - A solicitar la supresión de tus datos si nos retiras el consentimiento otorgado.
  - A remitirte los datos que guardamos sobre ti en Awaq en un formato estructurado, de uso común o lectura mecánica.
  - A revocar el consentimiento para cualquier tratamiento para el que hayas consentido, en cualquier momento.
  
  Asimismo, si consideras que el tratamiento de tus datos personales vulnera la normativa o tus derechos de privacidad, puedes presentar una reclamación:
  
  - Para más información sobre las garantías a tu privacidad, puedes dirigirte a Awaq a través de info@somosawaq.org
  - Ante la Agencia Española de Protección de Datos, a través de su sede electrónica, o de su dirección postal.
  
  **¿Cuándo cede Awaq la información del cliente a terceros?**
  
  Nunca venderemos, alquilaremos o cederemos tus datos personales, pero estos podrán ser facilitados a los destinatarios que se indican a continuación, por los motivos que a continuación se explican:
  
  - Administraciones Públicas: para el cumplimiento de las obligaciones legales a las que Awaq está sujeta por su actividad.
  - Proveedores y otras Organizaciones no Gubernamentales que precisen acceder a tus datos para la prestación de servicios que Awaq haya contratado a dichos proveedores, y con los cuales Awaq tiene suscritos los contratos de confidencialidad y de tratamiento de datos personales necesarios y exigidos por la normativa para proteger su privacidad.
  
  Si en el futuro Awaq realizara otras cesiones de datos personales, te informará oportunamente y en caso de que resulte necesario solicitará tu consentimiento.
  
  **¿Podría transferirse mi información a otros países?**
  
  Awaq está incorporada en España. La información recopilada a través de nuestro sitio web, a través de interacciones directas con usted o del uso de nuestros servicios de ayuda puede transferirse de vez en cuando a nuestras oficinas o personal, o a terceros, ubicados en todo el mundo, y puede verse y alojarse en cualquier lugar del mundo, incluidos los países que pueden no tener leyes de aplicación general que regulen el uso y la transferencia de dichos datos. En la mayor medida permitida por la ley aplicable, al utilizar cualquiera de los anteriores, usted acepta voluntariamente la transferencia transfronteriza y el alojamiento de dicha información.
  
  **¿La información recopilada a través del Servicio de Awaq es segura?**
  
  Tomamos precauciones para proteger la seguridad de su información. Contamos con procedimientos físicos, electrónicos y administrativos para ayudar a salvaguardar, prevenir el acceso no autorizado, mantener la seguridad de los datos y usar correctamente su información. Sin embargo, ni las personas ni los sistemas de seguridad son infalibles. Por lo tanto, aunque hacemos todos los esfuerzos razonables para proteger su información personal, no podemos garantizar su seguridad absoluta. Si la ley aplicable impone algún deber irrenunciable de proteger su información personal, usted acepta que la mala conducta intencional serán los estándares utilizados para medir nuestro cumplimiento con ese deber.
  
  **¿Puedo actualizar o corregir mi información?**
  
  Los derechos que tienes para solicitar actualizaciones o correcciones de la información que recopila Awaq dependen de tu relación con Awaq. El personal puede actualizar o corregir su información según se detalla en nuestras políticas de empleo internas de la empresa.
  
  Los clientes tienen derecho a solicitar la restricción de ciertos usos y divulgaciones de información de identificación personal de la siguiente manera. Puede comunicarse con nosotros para 
  
  1. actualizar o corregir su información de identificación personal, 
  1. cambiar sus preferencias con respecto a las comunicaciones y otra información que recibe de nosotros, o 
  1. eliminar la información de identificación personal que se mantiene sobre usted en nuestro sistema (sujeto al siguiente párrafo), cancelando su cuenta.
  
  Dichas actualizaciones, correcciones, cambios y eliminaciones no tendrán ningún efecto sobre otra información que mantenemos o información que hayamos proporcionado a terceros de acuerdo con esta Política de privacidad antes de dicha actualización, corrección, cambio o eliminación. Para proteger su privacidad y seguridad, podemos tomar medidas razonables (como solicitar una contraseña única) para verificar su identidad. Usted es responsable de mantener en secreto su contraseña única y la información de su cuenta en todo momento.
  
  Debe tener en cuenta que tecnológicamente no es posible eliminar todos y cada uno de los registros de la información que nos ha proporcionado de nuestro sistema. La necesidad de realizar copias de seguridad de nuestros sistemas para proteger la información de pérdidas involuntarias significa que puede existir una copia de su información en una forma que no se pueda borrar y que será difícil o imposible de localizar para nosotros. Inmediatamente después de recibir su solicitud, toda la información personal almacenada en las bases de datos que usamos activamente y otros medios fácilmente buscables se actualizará, corregirá, cambiará o eliminará, según corresponda, tan pronto como y en la medida en que sea razonable y técnicamente posible.
  
  
  **Personal**
  
  Si es un trabajador o solicitante de Awaq, recopilamos la información que nos proporciona voluntariamente. Usamos la información recopilada con fines de recursos humanos para administrar los beneficios a los trabajadores y seleccionar a los solicitantes.
  
  Puede comunicarse con nosotros para 
  
  - actualizar o corregir su información, 
  - cambiar sus preferencias con respecto a las comunicaciones y otra información que reciba de nosotros, o 
  - recibir un registro de la información que tenemos relacionada con usted. 
  
  Dichas actualizaciones, correcciones, cambios y eliminaciones no tendrán ningún efecto sobre otra información que mantenemos o información que hayamos proporcionado a terceros de acuerdo con esta Política de privacidad antes de dicha actualización, corrección, cambio o eliminación.
  
  **Ley que Rige**
  
  Esta Política de privacidad se rige por las leyes de España sin tener en cuenta su disposición sobre conflicto de leyes. Usted acepta la jurisdicción exclusiva de los tribunales en relación con cualquier acción o disputa que surja entre las partes en virtud de esta Política de privacidad o en relación con ella, excepto aquellas personas que puedan tener derecho a presentar reclamaciones en virtud del Escudo de privacidad o el marco suizo-estadounidense.
  
  Las leyes de España, excluyendo sus conflictos de leyes, regirán este Acuerdo y su uso de la plataforma. Su uso de la plataforma también puede estar sujeto a otras leyes locales, estatales, nacionales o internacionales.
  
  Al usar www.somosawaq.org o comunicarse con nosotros directamente, significa que acepta esta Política de privacidad. Si no está de acuerdo con esta Política de privacidad, no debe interactuar con nuestro sitio web ni utilizar nuestros servicios. El uso continuo del sitio Web, la interacción directa con nosotros o después de la publicación de cambios en esta Política de privacidad que no afecten significativamente el uso o divulgación de su información personal significará que acepta esos cambios.
  
  **Tu consentimiento**
  
  Hemos actualizado nuestra Política de privacidad para brindarle total transparencia sobre lo que se establece cuando visita nuestro sitio y cómo se utiliza. Al utilizar nuestra plataforma, registrar una cuenta, por la presente acepta nuestra Política de privacidad y acepta sus términos.
  
  
  **Enlaces a otros Sitios Web**
  
  Esta Política de privacidad se aplica solo a los Servicios. Los Servicios pueden contener enlaces a otros sitios web que Awaq no opera ni controla. No somos responsables por el contenido, la precisión o las opiniones expresadas en dichos sitios web, y dichos sitios web no son investigados, monitoreados o verificados por nuestra precisión o integridad. Recuerde que cuando utiliza un enlace para ir desde los Servicios a otro sitio web, nuestra Política de privacidad deja de estar en vigor. Su navegación e interacción en cualquier otro sitio web, incluidos aquellos que tienen un enlace en nuestra plataforma, están sujetos a las propias reglas y políticas de ese sitio web. Dichos terceros pueden utilizar sus propias cookies u otros métodos para recopilar información sobre usted.
  
  **Privacidad de los Niños**
  
  No nos dirigimos a ninguna persona menor de 13 años. No recopilamos información de identificación personal de ninguna persona menor de 13 años. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado Datos Personales, comuníquese con nosotros. Si nos damos cuenta de que hemos recopilado datos personales de cualquier persona menor de 13 años sin la verificación del consentimiento de los padres, tomamos medidas para eliminar esa información de nuestros servidores.
  
  
  **Cambios en nuestra Política de Privacidad**
  
  Podemos cambiar nuestro Servicio y nuestras políticas, y es posible que debamos realizar cambios en esta Política de privacidad para que reflejen con precisión nuestro Servicio y nuestras políticas. A menos que la ley exija lo contrario, le notificaremos (por ejemplo, a través de nuestro Servicio) antes de realizar cambios en esta Política de privacidad y le daremos la oportunidad de revisarlos antes de que entren en vigencia. Luego, si continúa utilizando el Servicio, estará sujeto a la Política de privacidad actualizada. Si no desea aceptar esta o cualquier Política de privacidad actualizada, puede eliminar su cuenta.
  
  
  **Servicios de terceros**
  
  Podemos mostrar, incluir o poner a disposición contenido de terceros (incluidos datos, información, aplicaciones y otros servicios de productos) o proporcionar enlaces a sitios web o servicios de terceros ("Servicios de terceros").
  
  Usted reconoce y acepta que Awaq no será responsable de ningún Servicio de terceros, incluida su precisión, integridad, puntualidad, validez, cumplimiento de los derechos de autor, legalidad, decencia, calidad o cualquier otro aspecto de los mismos.  Awaq no asume ni tendrá ninguna obligación o responsabilidad ante usted o cualquier otra persona o entidad por los Servicios de terceros.
  
  Los Servicios de terceros y los enlaces a los mismos se brindan únicamente para su conveniencia y usted accede a ellos y los usa completamente bajo su propio riesgo y sujeto a los términos y condiciones de dichos terceros.
  
  
  **Tecnologías de Seguimiento** 
  
  - Almacenamiento Local
  
  El almacenamiento local, a veces conocido como almacenamiento DOM, proporciona a las aplicaciones web métodos y protocolos para almacenar datos del lado del cliente. El almacenamiento web admite el almacenamiento de datos persistente, similar a las cookies, pero con una capacidad muy mejorada y sin información almacenada en el encabezado de solicitud HTTP.
  
  **Información sobre el Reglamento general de protección de datos (RGPD)**
  
  Es posible que recopilemos y utilicemos información suya si pertenece al Espacio Económico Europeo (EEE), y en esta sección de nuestra Política de privacidad vamos a explicar exactamente cómo y por qué se recopilan estos datos, y cómo los mantenemos bajo protección contra la replicación o el uso incorrecto.
  
  **¿Qué es RGPD?**
  
  RGPD es una ley de privacidad y protección de datos en toda la UE que regula cómo las empresas protegen los datos de los residentes de la UE y mejora el control que los residentes de la UE tienen sobre sus datos personales. El GDPR protege los datos de sus ciudadanos y residentes, incluso si se transfieren fuera de la zona de la UE, lo que significa que el GDPR se aplica a todas las organizaciones de la UE y de fuera de la UE, que procesan la información personal de los ciudadanos europeos.
  
  **¿Qué son los Datos Personales?**
  
  Cualquier dato que se relacione con un individuo identificable o identificado. El RGPD cubre un amplio espectro de información que podría usarse por sí sola o en combinación con otras piezas de información para identificar a una persona. Los datos personales van más allá del nombre o la dirección de correo electrónico de una persona. Algunos ejemplos incluyen información financiera, opiniones políticas, datos genéticos, datos biométricos, direcciones IP, dirección física, orientación sexual y origen étnico.
  
  Los principios de protección de datos incluyen requisitos tales como:
  
  - Los datos personales recopilados deben procesarse de manera justa, legal y transparente y solo deben usarse de la manera que una persona esperaría razonablemente.
  - Los datos personales solo deben recopilarse para cumplir con un propósito específico y solo deben usarse para ese propósito. Las organizaciones deben especificar por qué necesitan los datos personales cuando los recopilan.
  - Los datos personales no deben conservarse más tiempo del necesario para cumplir con su propósito.
  - Las personas cubiertas por el RGPD tienen derecho a acceder a sus propios datos personales. También pueden solicitar una copia de sus datos y que sus datos se actualicen, eliminen, restrinjan o muevan a otra organización.
  
  **¿Por qué es importante el RGPD?**
  
  RGPD agrega algunos requisitos nuevos con respecto a cómo las empresas deben proteger los datos personales de las personas que recopilan y procesan. También aumenta las apuestas para el cumplimiento al aumentar la aplicación e imponer mayores multas por incumplimiento. 
  
  **Derechos individuales del interesado: acceso, portabilidad y eliminación de datos**
  
  Nos comprometemos a ayudar a nuestros clientes a cumplir los requisitos del GDPR en materia de derechos de los interesados. Almacenamos sus datos personales (nombre, número de teléfono, dirección de correo electrónico) y le permitimos acceder a ellos, actualizarlos, recuperarlos y eliminarlos. Siempre le damos acceso a sus datos y a los de sus clientes.
  
  
  **Cambios en la Política de Privacidad**
  
  Awaq se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
  
  Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
  
  **Contáctenos**
  
  No dude en contactarnos si tiene alguna pregunta.
  
  - A través de correo electrónico: [**info@somosawaq.org,**](mailto:info@somosawaq.org) 
  `
  )
  const docPpEn = (
    `
  **PRIVACY POLICY**
  
  Awaq (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how Awaq collects, uses, and discloses your personal information.
  
  This Privacy Policy applies to our website, **www.somosawaq.org**, and its associated subdomains (collectively, our “Service”). By accessing or using our Service, you indicate that you have read, understand, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
  
  **Definitions and Key Terms**
  
  To help explain things as clearly as possible in this Privacy Policy, whenever any of these terms are referred to, they are strictly defined as:
  
  - Cookie: a small amount of data generated by a website and stored by your web browser. It is used to identify your browser, provide analytics, and remember information about you, such as your language preference or login information.
  - Company: when this policy mentions “Company”, “we”, “us”, “us”, or “our”, it refers to Awaq Estaciones Biológicas, C/Doctor Torres Feced 20, Casa19 - 28770, which is responsible for your information under this Privacy Policy.
  - Platform: Awaq’s Internet website (www.somosawaq.org), web application, or public-facing digital application.
  - Country: where Awaq or its owners/founders are located; in this case, it is Spain.
  - Client: refers to the company, organization, or person who registers to use the Awaq’s Service to manage relationships with its consumers or users of the service.
  - Device: any device connected to the Internet, such as a phone, tablet, computer, or any other device that can be used to visit www.somosawaq.org and use the services.
  - IP Address: Each device connected to the Internet is assigned a number known as an Internet Protocol (IP) address. These numbers are generally assigned in geographic blocks. An IP address can often be used to identify the location from which a device connects to the Internet.
  - Personnel: refers to persons employed by Awaq or under contract to perform a service on behalf of one of the parties. 
  - Personal Data: any information that directly, indirectly, or in connection with other information, including a personal identification number, allows the identification of a natural person.
  - Service: refers to the service provided by Awaq as described in the relative terms (if available) and on this platform.
  - Third Parties: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we believe may interest you.
  - Website: the www.somosawaq.org site, accessed through this URL: <https://www.somosawaq.org/>.
  - You: a person or entity registered with www.somosawaq.org to use the Services.
  
  **What information do we collect?**
  
  We collect information from you, always with your permission, when you visit our platform, register on our site, request information, subscribe to our newsletter, respond to a survey, or complete a form. Depending on the nature of our relationship with you, we will process personal data to a greater or lesser extent, being necessary, appropriate, and relevant in any case, in accordance with the purpose pursued. According to the above, we may process the following personal data: 
  
  - Name 
  - Telephone numbers
  - E-mail address
  
  **Where and when is customer and end-user information collected?**
  
  Awaq will collect personal information that you submit to us. We may also receive personal information about you from third parties as described above.
  
  **How do we use the information we collect?**
  
  Any of the information we collect from you may be used in one of the following ways:
  
  - To personalize your experience (your information helps us better respond to your individual needs).
  - To improve our platform (we constantly strive to improve what our platform offers based on the information and feedback we receive from you)
  - To improve customer service (your information helps us to respond more effectively to your customer service requests and support needs)
  - To send emails to you if you mark this in your choice.
  
  
  **How do we use your email address?**
  
  By submitting your email address on this platform, you agree to receive our emails. You may unsubscribe from any of these email lists at any time by clicking on the opt-out link or other unsubscribe options included in the respective email. We only send emails to people who have authorized us to contact them directly. By submitting your email address, you also agree to allow us to use your email address for customer audience targeting on sites such as Facebook, where we display personalized advertising to specific individuals who have opted-in to receive communications from us. 
  
  **Note:** If at any time you wish to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
  
  **How long do we keep your information?**
  
  We will retain your data for as long as necessary or permitted by the purposes for which it was collected. This is also the case for anyone with whom we share your information and who performs services on our behalf. When we no longer need to use your data, and it is no longer necessary for us to retain it to comply with our legal or regulatory obligations, we will delete it from our systems or de-personalize it so that we cannot identify you.
  
  **How do we protect your information?**
  
  We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server. However, we cannot guarantee the absolute security of the information you transmit to Awaq or ensure that your information on the service will not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, technical, or managerial safeguards.
  
  **What are your rights?**
  
  You can exercise your access rights, rectification, deletion, portability, limitation, and/or opposition to treatment, through the postal and electronic addresses indicated. This means that you have the right to:
  
  \- To know if we are processing your data or not.
  
  \- To access your personal data.
  
  \- To request the rectification of your data if they are inaccurate.
  
  \- To request the deletion of your data if you withdraw your consent.
  
  \- To send you the data we hold about you at Awaq in a structured, commonly used, or machine-readable format.
  
  \- To revoke consent for any processing for which you have consented at any time.
  
  Also, if you believe that the processing of your personal data violates the law or your privacy rights, you can file a complaint:
  
  \- For more information about the guarantees of your privacy, contact Awaq at info@somosawaq.org.
  
  \- Before the Spanish Data Protection Agency, through its electronic headquarters or postal address.
  
  **When does Awaq give customer information to third parties?**
  
  We will never sell, rent, or lease your personal information. Still, it may be provided to the recipients listed below for the reasons explained below:
  
  \- Public Administrations: for compliance with the legal obligations to which Awaq is subject due to its activity.
  
  \- Suppliers and other Non-Governmental Organizations that need access to your data for the provision of services that Awaq has contracted with these suppliers and with which Awaq has signed the confidentiality and personal data processing contracts necessary and required by law to protect your privacy.
  
  If, in the future, Awaq carries out other transfers of personal data, it will inform you on time and, if necessary, will request your consent.
  
  **Could my information be transferred to other countries?**
  
  Awaq is based in Spain. Information collected through our website, through direct interactions with you, or from using our support services may be transferred from time to time to our offices, personnel, or third parties located around the world. In this way, your information may be viewed anywhere in the world, including countries that may not have laws of general applicability governing the use and transfer of such data. To the fullest extent permitted by applicable law, by using any of the previous, you voluntarily consent to the cross-border transfer and hosting of such information.
  
  **Is the information collected through the Awaq Service secure?**
  
  We take precautions to protect the security of your information. We have physical, electronic, and managerial procedures to help safeguard, prevent unauthorized access, maintain data security, and correctly use your information. However, neither people nor security systems are infallible. It is human to make mistakes or fail to follow policies. Therefore, while we make reasonable efforts to protect your personal information, we cannot guarantee its absolute security. If applicable law imposes any nonwaivable duty to protect your personal information, you agree that willful misconduct will be the standard to measure our compliance with that duty.
  
  **Can I update or correct my information?**
  
  Your rights to request updates or corrections to the information Awaq collects depend on your relationship with Awaq. Staff may update or correct your information as detailed in our internal company employment policies.
  
  Customers have the right to request restrictions on specific uses and disclosures of personally identifiable information. You may contact us to:
  
  1. Update or correct your personally identifiable information.
  1. Change your preferences concerning communications and other information you receive from us.
  1. Delete personally identifiable information about you in our system (subject to the next paragraph) by terminating your account.
  
  Such updates, corrections, changes, and deletions will have no effect on other information we maintain or information we have provided to third parties in accordance with this Privacy Policy before such updates, corrections, changes, or deletions. To protect your privacy and security, we may take reasonable steps (such as requiring a unique password) to verify your identity. You are responsible for maintaining the secrecy of your unique password and account information at all times.
  
  You should be aware that removing every record of the information you provided us from our system is not technologically possible. The need to back up our systems to protect information from accidental loss means that a copy of your information may exist in a non-erasable form that will be difficult or impossible for us to locate. Immediately upon receipt of your request, all personal information stored in the databases we actively use and other readily searchable media will be updated, corrected, changed, or deleted, as appropriate, as soon as and to the extent reasonably and technically possible.
  
  
  **Human Resources**
  
  If you are an Awaq employee or applicant, we collect the information you voluntarily provide us. We use the information collected for human resources to administer employee benefits and screen applicants.
  
  You may contact us to
  
  1. update or correct your information,
  1. change your preferences regarding communications and other information you receive from us, or
  1. obtain a record of the information we have about you.
  
  Such updates, corrections, changes, and deletions will have no effect on other information we maintain or information we have provided to third parties in accordance with this Privacy Policy before such updates, corrections, changes, or deletions.
  
  
  **Governing Law**
  
  This Privacy Policy is governed by the laws of Spain without regard to its conflict of laws provision. You consent to the exclusive jurisdiction of the courts in connection with any action or dispute arising between the parties under or in connection with this Privacy Policy, except those persons who may be entitled to bring claims under the Privacy Shield or the Swiss-U.S. framework.
  
  The laws of Spain, excluding its conflicts of laws, will govern this Agreement and your use of the Platform. Your use of the Platform may also be subject to other local, state, national, or international laws.
  
  Using www.somosawaq.org or communicating with us directly signifies your acceptance of this Privacy Policy. If you do not agree with this Privacy Policy, you should not interact with our website or use our services. Your continued use of the Website, direct interaction with us, or following the posting of changes to this Privacy Policy that do not materially affect the use or disclosure of your personal information will mean that you accept those changes.
  
  **Your consent**
  
  We have updated our Privacy Policy to provide full transparency about what is stated when you visit our site and how it is used. By using our platform, registering an account, you consent to our Privacy Policy and agree to its terms.
  
  **Links to Other Websites**
  
  This Privacy Policy applies only to the Services. The Services may contain links to other websites that Awaq does not operate or control. We are not responsible for the content, accuracy, or opinions expressed on such websites, and such websites are not investigated, monitored, or checked for accuracy or completeness by us. Please remember that our Privacy Policy is no longer in effect when you use a link to go from the Services to another website. Your browsing and interaction on any other website, including those with a link on our platform, are subject to that website’s rules and policies. Third parties may use their own cookies or other methods to collect information about you.
  
  **Children’s Privacy**
  
  We do not target anyone under the age of 13. We do not collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and know your child has provided us with Personal Data, please get in touch with us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we will take steps to delete that information from our servers.
  
  **Changes to our Privacy Policy**
  
  We may change our Service and our policies, and we may need to make changes to this Privacy Policy to reflect our Service and our policies accurately. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Privacy Policy and allow you to review them before they become effective. After that, if you continue to use the Service, you will be subject to the updated Privacy Policy. If you do not wish to accept this or any updated Privacy Policy, you may delete your account.
  
  **Third Party Services**
  
  We may display, include, or make available third-party content (including data, information, applications, and other product services) or provide links to third-party websites or services (“Third Party Services”).
  
  You acknowledge and agree that Awaq shall not be responsible or liable for any Third Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect. Awaq neither assumes nor shall have any obligation or liability to you or any other person or entity for any Third Party Services.
  
  Third Party Services and links to those are provided solely for your convenience. You access and use them entirely at your own risk and subject to the terms and conditions of such third parties.
  
  **Tracking Technologies** 
  
  \- Local Storage
  
  Local storage, sometimes called DOM storage, provides web applications with methods and protocols for storing client-side data. Web storage supports persistent data storage, similar to cookies, but with greatly enhanced capability and without information stored in the HTTP request header.
  
  **Information about the General Data Protection Regulation (GDPR)**
  
  We may collect and use your information if you are from the European Economic Area (EEA). In this section of our Privacy Policy, we will explain precisely how and why this data is collected and how we keep it under protection against replication or misuse.
  
  **What is GDPR?**
  
  GDPR is an EU-wide privacy and data protection law regulating how companies protect EU residents’ data. It also improves the control EU residents have over their personal data. The GDPR protects the data of its citizens and residents, even if it is transferred outside the EU zone, which means that the GDPR applies to all organizations EU and non-EU that process the personal information of European citizens.
  
  **What is Personal Data?**
  
  Any data that relates to an identifiable or identified individual. The GDPR covers a broad spectrum of information that could be used on its own or in combination with other pieces of information to identify an individual. Personal data goes beyond a person’s name or email address. Examples include financial information, political opinions, genetic data, biometric data, IP addresses, physical address, sexual orientation, and ethnicity.
  
  The data protection principles include requirements such as:
  
  \- Personal data collected must be processed in a fair, lawful, and transparent manner and must only be used in a way that an individual would reasonably expect.
  
  \- Personal data should only be collected to fulfill a specific purpose and should only be used for that purpose. Organizations should specify why they need personal data when they collect it.
  
  \- Personal data should not be kept longer than necessary to fulfill its purpose.
  
  \- Individuals covered by the GDPR have the right to access their own personal data. They can also request a copy of their data and have their data updated, deleted, restricted, or moved to another organization.
  
  **Why is GDPR necessary?**
  
  GDPR adds some new requirements regarding how companies must protect the personal data of the individuals they collect and process. It also raises the stakes for compliance by increasing enforcement and imposing greater fines for non-compliance. 
  
  **Individual data subject rights: data access, portability, and erasure.**
  
  We are committed to helping our customers comply with the data subject rights requirements of GDPR. We store your personal data (name, telephone number, email address) and allow you to access, update, retrieve, and delete personal data. We always give you access to your data and your customer’s data.
  
  **Changes to the Privacy Policy**
  
  Awaq reserves the right to modify this Privacy Policy to adapt it to new legislation, jurisprudence, or industry practices.
  
  These policies will remain in force until other duly published policies modify them.
  
  **Contact us at**
  
  Please do not hesitate to contact us if you have any questions.
  
  - By e-mail: [**info@somosawaq.org,**](mailto:info@somosawaq.org)
  
  
  Awaq ONGD, with headquarters at C/Doctor Torres Feced 20, house 19 - 28770 Colmenar Viejo Madrid, registered in the National Register of Associations with number 58891 of the Ministry of the Interior, Government of Spain. Included among those regulated in Article 16 of Chapter I of Title III of Law 49/2002. Registered in the Registry of Non-Governmental Development Organizations (ONGD) of the Spanish Agency for International Cooperation for Development (AECID) with number 3288.![](Aspose.Words.6e08aa10-e1cc-4af2-8c7b-4455de77f93f.003.png)    
  `
  )


  useEffect (() => {
    if(typeof window.orientation !== 'undefined'){ //.orientation
      document.getElementById('descargapdf')?.click();
      window.close();
    }
  }, []);

  console.log(content?.footer[language].titlePolicie[0].title, "privaciti")
  return (
    <div className='relative w-auto h-auto '>
      <div className=" h-auto ">
      <section className='textos mx-40 my-40 md:mx-28 sm:mx-16 xs:mx-12 lg:mx-36'>
        <p className=' text-center text-4xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold mb-12 uppercase'>{content?.footer[language].titlePolicie[0].title}</p>
          <Markdown
            className=''>
            {language === "es" ? docPpEs : docPpEn } 
          </Markdown>          
        </section>
      </div> 
    </div>
  )
}
