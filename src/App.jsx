import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services"
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Banner2 from "./Components/Banner/Banner2";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>

    </main>
  );
};

export default App;
