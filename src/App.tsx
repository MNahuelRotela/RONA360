import { Helmet } from "react-helmet";
import { ContextProvider } from "./context/ContexProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import {PoliticaPrivacidad} from './components/footer/politicaPrivacidad.tsx'
import {PoliticaCookies} from './components/footer/politicaCookies.tsx'
import {AvisoLegal} from './components/footer/avisoLegal.tsx'
import { AcuerdoConvivencia } from "./components/footer/acuerdoConvivencia.tsx";
import { useEffect, useContext } from "react";
import { TranslationContext } from "./context/TraslationContext";
import { useLocation } from "react-router-dom";
import MarketplaceView from "./components/360/MarketplaceView.tsx";
import AuditorioView from "./components/360/AuditorioView.tsx";
import { Agencies } from "./components/360/catalogo/components/Agencies/index.tsx";
import AgencyProperties from "./components/360/catalogo/components/Property/AgencyProperties.tsx";
import VirtualTourViewer from "./components/360/Visualizador/VirtualTourViewer.tsx";
import { NotFound } from "./components/404/404page.tsx";
// import { DetailNoticias } from "./components/noticias/components/DetailNoticias.tsx";





  const ForceEnglish: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setLanguage } = useContext(TranslationContext);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname.startsWith('/en')) {
        setLanguage('en');
      }
    }, [location.pathname, setLanguage]);
  
    return <>{children}</>;
  };

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ContextProvider>
        <ForceEnglish>
        <Routes>
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />}/>
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/acuerdo-convivencia" element={<AcuerdoConvivencia />} />
          <Route path="/" element={<>
            <Helmet>
              <title>RONA360 | Virtual Tours </title>
              <meta name="description" content="Descubre nuestra misión, visión y valores. Promovemos el bienestar y desarrollo sostenible y la colaboración de las organizaciones." />
            </Helmet>
            <NotFound/>
          </> }/>



          <Route path="/360/marketplace" element={<>
            <Helmet>
              <title>Marketplace 360 view </title>
              <meta name="description" content="Marketplace 360 view" />
            </Helmet>
            <div>
              <MarketplaceView/>
            </div>
          </> }/>

          <Route path="/360/auditory" element={<>
            <Helmet>
              <title>Auditory 360 view </title>
              <meta name="description" content="Auditory 360 view" />
            </Helmet>
            <div>
              <AuditorioView/>
            </div>
          </> }/>

          <Route path="/agencies" element={<>
            <Helmet>
              <title>Clientes</title>
              <meta name="description" content="Clientes" />
            </Helmet>
            <Agencies/>
          </> }/>
          <Route
          path="/agencies/:name"
          element={
            <>
              <Helmet>
                <title>Propiedades de la Agencia | Mi Inmobiliaria</title>
                <meta name="description" content="Propiedades disponibles en la agencia" />
              </Helmet>
              <AgencyProperties />
            </>
          }
        />
        <Route
          path="/agencies/:name/tour/:propertyId"
          element={
            <>
              <Helmet>
                <title>Tour Virtual de la Propiedad | Mi Inmobiliaria</title>
                <meta name="description" content="Tour virtual de la propiedad" />
              </Helmet>
              <VirtualTourViewer />
            </>
          }
        />
          
        </Routes>
        <Helmet>
          <title>RONA360 | Virtual Tours</title>
          <meta name="description" content="Realizamos recorridos virtuales en 360 grados" />
        </Helmet>
        </ForceEnglish>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;