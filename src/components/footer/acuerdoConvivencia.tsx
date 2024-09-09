import { useTranslation } from "../../context/TraslationContext";
import { useEffect } from "react";
import Markdown from "react-markdown";


export const AcuerdoConvivencia = () => {
const { language, content } = useTranslation();

const docPcEs = (
  `
  Acuerdo de convivencia para el *“1er Congreso Internacional de Organizaciones Ambientales 2024”*
  
  Las  de convivencia en un Congreso Internacional de ONGs (Organizaciones No Gubernamentales) son fundamentales para garantizar un ambiente respetuoso, colaborativo y productivo. Nos comprometemos a fomentar  un ambiente de respeto mutuo, colaboración y aprendizaje durante el congreso, estas normas de convivencia  es a beneficio de todas las partes involucradas de esta manera se busca garantizar un ambiente cordial. Unidos en  la búsqueda de un objetivo común como lo es la protección del ambiente.  
  
  AWAQ ONGD espera que todos los participantes y  todo el personal de operaciones respete las normas  de conducta y actué de forma profesional en el desarrollo del congreso por ello se debe: 
  
  1. **Respeto mutuo:** El fomentar el  respeto mutuo entre los participantes y el personal de operaciones de AWAQ ONGD es el pilar fundamental para el desarrollo del congreso hacia  todos los participantes ponentes y organizadores con respeto y consideración, independientemente de su cargo, origen étnico, género, orientación sexual, edad o afiliación institucional.
  1. **Escucha Activa:** Al escuchar activamente a los demás, respetar sus opiniones, incluso si difieren de las nuestras y no interrumpir  mientras hablan y esperar el turno para expresar nuestras ideas.
  1. **Inclusión:** El Fomentar la diversidad e inclusión, reconociendo y valorando las diferentes perspectivas y experiencias de los participantes.
  1. **Puntualidad:** El ser puntuales en todas las actividades y secciones programadas del congreso, demostrando así respeto por el tiempo de los demás y para no interrumpir el flujo del evento.
  1. **Participación activa:** La participación  de manera activa  en las actividades del congreso, fomentando el intercambio de ideas y el debate constructivo.
  1. **Uso adecuado de las instalaciones y el equipo proporcionado:** El utilizar las instalaciones del congreso de manera adecuada, cuidando de las mismas y manteniendo un ambiente limpio y ordenado.
  1. **Colaboración:** El fomentar la colaboración entre organizaciones y participantes, establecer contactos de manera profesional y buscar oportunidades para trabajar juntos en iniciativas comunes.
  1. **Confidencialidad:** El respetar la confidencialidad de la información sensible compartida por otras organizaciones y participantes.
  1. **Uso responsable de la tecnología**: El utilizar de manera adecuada los dispositivos electrónicos (por ejemplo móviles) de manera responsable durante las sesiones para no distraer ni interrumpir.
  1. **Vestimenta apropiada**: El vestirnos de manera apropiada para el evento, considerando el carácter profesional y  formal de los congresos internacionales.
  1. **Cumplimiento de normativas locales e internacionales:** El cumplir con las leyes y regulaciones del país anfitrión y las normativas internacionales aplicables.
  
  Estas normas son generales y pueden adaptarse según las reglas específicas establecidas por el comité organizador del congreso. Es importante revisar las directrices del evento antes de asistir para asegurarse de cumplir con todas las normativas particulares.
  
  **Consecuencias por el incumplimiento** El incumplimiento de estas normas podrá acarrear consecuencias como  la llama de atención  por parte del personal del evento  hasta la expulsión del congreso, dependiendo de la gravedad de la situación, incluso el llamamiento a las autoridades locales. Al aceptar este acuerdo me comprometo a cumplir con las normas de convivencia establecida para el congreso.
  
  
  `
    )
const docPcEn = (
  `
  # Convivence Agreement for the *"1st International Congress of Environmental Organizations 2024"*

  Conduct guidelines in an International NGO Congress (Non-Governmental Organizations) are fundamental to ensure a respectful, collaborative, and productive environment. We are committed to fostering an atmosphere of mutual respect, collaboration, and learning during the congress. These guidelines are to the benefit of all parties involved, aiming to ensure a friendly environment. United in the pursuit of a common goal, such as protecting the environment.
  
  AWAQ ONGD expects all participants and all operations staff to respect the rules of conduct and act professionally during the congress. To do so:
  
  1. **Mutual Respect:** Fostering mutual respect between participants and AWAQ ONGD operations staff is fundamental to the congress's development. Address all participants, speakers, and organizers with respect and consideration, regardless of their position, ethnic origin, gender, sexual orientation, age, or institutional affiliation.
  2. **Active Listening:** By actively listening to others, respecting their opinions, even if they differ from ours, not interrupting while they speak, and waiting for our turn to express our ideas.
  3. **Inclusion:** Promoting diversity and inclusion, recognizing and valuing participants' different perspectives and experiences.
  4. **Punctuality:** Being punctual for all scheduled activities and sections of the congress, thus demonstrating respect for others' time and not interrupting the event's flow.
  5. **Active Participation:** Actively participating in congress activities, promoting the exchange of ideas and constructive debate.
  6. **Appropriate Use of Facilities and Equipment Provided:** Using congress facilities properly, taking care of them, and maintaining a clean and orderly environment.
  7. **Collaboration:** Fostering collaboration among organizations and participants, establishing contacts professionally, and seeking opportunities to work together on common initiatives.
  8. **Confidentiality:** Respecting the confidentiality of sensitive information shared by other organizations and participants.
  9. **Responsible Use of Technology:** Using electronic devices (e.g., mobile phones) appropriately during sessions to avoid distracting or interrupting others.
  10. **Appropriate Attire:** Dressing appropriately for the event, considering the professional and formal nature of international congresses.
  11. **Compliance with Local and International Regulations:** Complying with the laws and regulations of the host country and applicable international standards.
  
  These rules are general and can be adapted according to specific rules set by the congress's organizing committee. It is important to review the event's guidelines before attending to ensure compliance with all specific regulations.
  
  **Consequences of Non-compliance:** Non-compliance with these rules may result in consequences such as a warning from the event staff or expulsion from the congress, depending on the severity of the situation, even calling local authorities. By accepting this agreement, I commit to complying with the established coexistence rules for the congress.
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
          <p className=' text-center text-4xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold mb-12 uppercase'>{content?.footer[language].titlePolicie[3].title}</p>
            <Markdown
              className=' textEmbe'>
              {language === "es" ? docPcEs : docPcEn } 
            </Markdown>          
          </section>
        </div> 
      </div>
    )
  }
