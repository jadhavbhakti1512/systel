import Hero from "./component/Hero/Hero";
import Banner from "./component/Banner/Banner";
import Services from "./component/Services/Services"
import Subscribe from "./component/Subscribe/Subscribe";
import Footer from "./component/Footer/Footer";
import Banner2 from "./component/Banner/Banner2";

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
