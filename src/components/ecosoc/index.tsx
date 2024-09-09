import { AwaqAndEcosoc } from "./components/AwaqAndEcosoc"
import BannerEcosoc from "./components/BannerEcosoc"
import { Certificate } from "./components/Certificate"
import { SobreEcosoc } from "./components/SobreEcosoc"

export const Ecosoc = () => {
  return (
    <div>
        <BannerEcosoc/>
        <SobreEcosoc/>
        <AwaqAndEcosoc/>
        <Certificate/>
    </div>
  )
}
