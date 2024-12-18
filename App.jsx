import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Mid from './components/Mid/Mid';
import About from './components/About/About';
import Services from "./components/Services/Services";
import About2 from './components/About/About2';
import Contact from './components/Contact/Contact';
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar/>
      <Mid/>
      <About/>
      <About2/>
      <About/>
      <Contact/>
      <Services/>
      <AppStoreBanner/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;

