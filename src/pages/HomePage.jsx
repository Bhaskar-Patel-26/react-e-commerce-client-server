import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import HeroSection from "../components/home/HeroSection";
import TrendingProducts from "../components/shop/TrendingProducts";
import Deals from "../components/home/Deals";
import PromoBanner from "../components/home/PromoBanner";
import Blogs from "../components/blog/Blogs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection />
      <TrendingProducts />
      <Deals />
      <PromoBanner />
      <Blogs />
    </div>
  );
};

export default HomePage;
