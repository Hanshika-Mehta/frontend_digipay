import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Carousel from "./CarouselComponent";
import Navbar from "./Navbar1";

function LandingPage1() {
  return (
    <div className="App">
    <Navbar />
    <div >
    <Carousel/>
    </div>
    
    </div>
  );
}

export default LandingPage1;