import Brands from "../Components/Bradns";
import FeaturedCategories from "../Components/FeaturedCategories";
import FeaturedProducts from "../Components/FeaturedProducts";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Offer from "../Components/Offer";
import Testimonal from "../Components/Testimonal";

function Home() {
  return (
    <div>
      <Header />
      <FeaturedCategories />
      <FeaturedProducts />
      <Offer />
      <Testimonal />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
