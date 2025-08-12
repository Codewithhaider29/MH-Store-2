import HeroSection from "./components/home/HeroSection"
import FeaturedProducts from "./components/home/FeaturedProducts"
import ShopByCategory from "./components/home/ShopByCategory"
import PremiumWatches from "./components/home/PremiumWatches"
import WirelessEarbuds from "./components/home/WirelessEarbuds"
import LuxuryHandbags from "./components/home/LuxuryHandbags"
import EssentialAccessories from "./components/home/EssentialAccessories"
import CustomerReviews from "./components/home/CustomerReviews"
import Newsletter from "./components/home/Newsletter"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <ShopByCategory />
      <PremiumWatches />
      <WirelessEarbuds />
      <LuxuryHandbags />
      <EssentialAccessories />
      <CustomerReviews />
      <Newsletter />
    </div>
  )
}
