import Navbar from "./component/Navbar/Navbar"; // <-- Make sure this is imported
import Hero from "./component/Hero/Hero";
import { Analytics } from '@vercel/analytics/react';
import Banner from "./component/Banner/Banner";
import Services from "./component/Services/Services";
import Subscribe from "./component/Subscribe/Subscribe";
import Footer from "./component/Footer/Footer";
import Banner2 from "./component/Banner/Banner2";
import Team1 from "./component/Team/Team1";
import Team2 from "./component/Team/Team2";


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Analytics />
      <Navbar /> {/* Add your navbar at the top */}
      <div className="pt-24"> {/* Add top padding to avoid navbar overlap */}
        <Hero />
        <Services />
        <Banner />
        <Banner2 />
        <Team1/>
        <Team2/>
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
};

export default App;
