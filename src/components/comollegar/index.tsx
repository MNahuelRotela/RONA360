import AerolineaOficial from "./comollegarComponents/AerolineaOficial"
import BannerComoLLegar from "./comollegarComponents/BannerComoLLegar"
import Conclusion from "./comollegarComponents/conclusion"
import PorAire from "./comollegarComponents/porAire"
import PorTierra from "./comollegarComponents/porTierra"
import RecomendacionesAdicionales from "./comollegarComponents/recomendacionesAdicionales"
import RecomendacionesDeAlojamiento from "./comollegarComponents/recomendacionesDeAlojamiento"
import TransporteLocal from "./comollegarComponents/transporteLocal"

const ComoLlegar = () => {
  return (
    <div className="font-open-sans">
        <BannerComoLLegar/>
        <PorAire/>
        <AerolineaOficial/>
        <PorTierra/>
        <TransporteLocal/>
        <RecomendacionesDeAlojamiento/>
        <RecomendacionesAdicionales/>
        <Conclusion/>
    </div>
  )
}

export default ComoLlegar