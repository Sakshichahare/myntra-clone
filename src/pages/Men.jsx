
import BannerSection from "../components/BannerSection"
import FlipOfferCard from "../components/offers/FlipOfferCard"
import Slider from "../components/Slider"
import CategorySection from "../components/CategorySection"
import { homeCategories } from "../data/homeCategory"//change this
import { banners } from "../data/banners"

import { homeProducts } from "../data/homeProducts"

function Men() {
  return (
 <>
    <BannerSection bannerImage={banners.menBanner} />
    <FlipOfferCard />
    <Slider products={homeProducts} />
    <CategorySection categories={homeCategories}/>
    
    
    </>

    
  )
}

export default Men