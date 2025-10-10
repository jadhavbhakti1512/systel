import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import { Analytics } from '@vercel/analytics/react';
import Banner from "./component/Banner/Banner";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";
import Banner2 from "./component/Banner/Banner2";
import Team1 from "./component/Team/Team1";
import Contact from "./component/contact/contact";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Analytics />
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Services />
        <Banner />
        <Banner2 />
        <Team1 />
        <Contact /> 
        <Footer />
      </div>
    </main>
  );
};

export default App;
