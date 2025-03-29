import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home/Home";
import NavigationBar from "./global/Navbar";


// styles imports
import './assets/css/style.css'
import './assets/css/animate.css'
import './assets/css/flaticon.css'
import './assets/css/over.css'
import './assets/css/slick-theme.css'
import './assets/css/slick.css'
import './assets/css/style.css'


import Footer from "./global/Footer";
import AboutPage from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Career from "./pages/career/Career";

import StandardQuoteForm from "./pages/quote/StandardQuoteForm";
import EventQuoteForm from "./pages/quote/EventQuoteForm";
import Contact from "./pages/contact/Contact";
import ThankYouMessage from "./pages/career/thank_you";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYouMessage />} />
        <Route path="/quote/standard" element={<StandardQuoteForm />} />
        <Route path="/quote/event" element={<EventQuoteForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
