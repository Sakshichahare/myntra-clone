
import BannerSection from "../components/BannerSection"
import Slider from "../components/Slider"
import CategorySection from "../components/CategorySection"
import { homeCategories } from "../data/homeCategory"
import { homeProducts } from "../data/homeProducts"
import { banners } from "../data/banners"
import FlipOfferCard from "../components/offers/FlipOfferCard"


function Home() {
  return (
    <>
    <BannerSection bannerImage={banners.homeBanner}/>
    <FlipOfferCard />
    <Slider products={homeProducts}/>
    <CategorySection categories={homeCategories} />
    
    </>
  )
}

export default Home