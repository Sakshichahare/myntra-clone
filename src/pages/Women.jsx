
import BannerSection from "../components/BannerSection"
import Slider from "../components/Slider"
import CategorySection from "../components/CategorySection"
import { homeCategories } from "../data/homeCategory"//change this
import { banners } from "../data/banners"
import FlipOfferCard from "../components/offers/FlipOfferCard"
import { homeProducts } from "../data/homeProducts"

function Women() {
  return (
   <>
    <BannerSection bannerImage={banners.womenBanner} />
    <FlipOfferCard />
    <Slider products={homeProducts}/>
    <CategorySection categories={homeCategories} />
    </>
  )
}

export default Women