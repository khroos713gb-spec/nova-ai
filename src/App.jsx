import MainLayout from "./layout/MainLayout";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default App;

