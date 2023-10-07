import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg";
import AboutPg from "./pages/AboutPg";
import CareersPg from "./pages/CareersPg";
import OurPackagesPg from "./pages/OurPackagesPg";
import ServicesPg from "./pages/ServicesPg";
import {ToastContainer} from "react-toastify"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/careers" element={<CareersPg />} />
        <Route path="/our-packages" element={<OurPackagesPg />} />
        <Route path="/services" element={<ServicesPg />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
