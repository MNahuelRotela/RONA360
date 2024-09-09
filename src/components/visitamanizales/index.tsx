import { ActividadSelector } from "./ActividadSelector"
import { BannerVisit } from "./banner"
import { BannerCTA } from "./bannerCTA"
import { Quehacer } from "./quehacer"



export const VisitManizales = () => {
  return (
    <div className=" overflow-x-hidden overflow-y-hidden">
      <BannerVisit/>
      <Quehacer/>
      <ActividadSelector/>
      <BannerCTA/>
    </div>
  )
}
