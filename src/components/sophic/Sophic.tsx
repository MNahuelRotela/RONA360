import BannerSophic from "./sophicComponents/BannerSophic"
import Contacto from "./sophicComponents/Contacto"
import Description2Sophic from "./sophicComponents/Description2Sophic"
import DescriptionSophic from "./sophicComponents/DescriptionSophic"
import LineasTematicasSophic from "./sophicComponents/LineasTematicas"
import ProductosCtel from "./sophicComponents/ProductosCtel"

const Sophic = () => {
  return (
    <div className="font-open-sans" >
        <BannerSophic/>
        <DescriptionSophic/>
        <LineasTematicasSophic/>
        <Description2Sophic/>
        <ProductosCtel/>
        <Contacto/>
    </div>
  )
}

export default Sophic