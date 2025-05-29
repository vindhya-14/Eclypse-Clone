import BrandOverview from "./components/BrandOverview";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductBenefits from "./components/ProductBenefits";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandOverview />
      <ProductGrid />
      <ProductCard />
      <ProductBenefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
