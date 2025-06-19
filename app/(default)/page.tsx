import { Breadcrumbs } from "../components/BreadCrumbs";
import BestDeals from "./components/BestDeal/BestDeals";
import BestSelling from "./components/BestSelling/BestSelling";
import Favourite from "./components/favourite/Favourite";
import Hero from "./components/Hero";
import HotDeal from "./components/HotDeal";
import LatestNews from "./components/LatestNews";
import ProductHighlight from "./components/ProductHighlight";
import ProductShowcase from "./components/ProductShowcase";
import Promotion from "./components/Promotion";
import RecentlyAdded from "./components/RecentlyAdded/RecentAdded";
import StoreFeatures from "./components/StoreFeatures";

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <Breadcrumbs />
      </div>
        <div className="px-4 lg:px-20">
            <Hero />
            <div className="flex flex-col gap-5">
                <BestDeals />
                <RecentlyAdded />
                <BestSelling />
                <Promotion />
                <StoreFeatures />
                <ProductHighlight />
                <Favourite />
                <HotDeal />
                <ProductShowcase />
            </div>
        </div>
        <LatestNews />
    </div>
  );
}
