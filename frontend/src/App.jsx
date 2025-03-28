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

function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
