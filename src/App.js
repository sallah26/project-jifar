import './App.css';
import 'aos/dist/aos.css';
import "react-datetime/css/react-datetime.css";
import "./index.css"
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import DarkModeToggle from "./components/DarkMode";
import WhatWeDoFirst from "./components/WhatWeDoFirst";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Form from "./components/Form";
import Companies from './components/Companies ';
import logo_bg from "./images/bubble-39.png";
import { RiArrowUpDoubleLine } from "react-icons/ri";
// import Companies from "./components/Companies.jsx";

function App() {
  return (
    <div className="app dark:bg-neutral-800">
      <div className="z-50 hidden fixed lg:flex   top-40 py-3 px-4 rounded-r-full left-0  text-white bg-[#ED7D31]">
        <DarkModeToggle color={"white"} />
      </div>
      <img src={logo_bg} alt='logo background' className='absolute top-0 z-0 left-0 dark:opacity-10'/>
      <Navbar />
      <div className="mt-2">
        <Hero />
      </div>
      <WhatWeDoFirst />
      <Features />
      <Services />
      <Testimonials />
      <Companies />
      <Form />
      <Footer />
      
    </div>
  );
}

export default App;
