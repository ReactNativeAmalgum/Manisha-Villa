import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Navbar from "./Components/Routes/Navbar";
import GalleryPage from "./Pages/GalleryPage";
import Footer from "./Components/Routes/Footer";
import AboutOwner from "./Pages/AboutOwner";
import Manisha2 from "./Pages/Manisha2";
import Gallery2 from "./Pages/Inc/Gallery2";

function App() {
  return (
    <Router>
    {/* <Navbar /> */}
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutowner" element={<AboutOwner />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery2" element={<Gallery2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manisha2" element={<Manisha2 />} />
        </Routes>
      </>
      <Footer/>
    </Router>
  );
}

export default App;
