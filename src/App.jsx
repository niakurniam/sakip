import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Greeting from "./components/Greeting";
import ContactUs from "./components/ContactUs";
import TautanEksternal from "./components/TautanEksternal";
import DokumenAkuntabilitas from "./components/DokumenAkuntabilitas";
import DasarHukum from "./components/DasarHukum";
import VideoSambutan from "./components/VideoSambutan";
import RencanaIndukPengembangan from "./pages/RencanaIndukPengembangan";
import Renstra from "./pages/Renstra";
import PerjanjianKinerja from "./pages/PerjanjianKinerja";
import PerjanjianKinerjaTahunan from "./pages/PerjanjianKinerjaTahunan";
import Renaksi from "./pages/Renaksi";
import LaporanKinerja from "./pages/LaporanKinerja";
import NilaiSakip from "./pages/NilaiSakip";
import PdfViewer from "./pages/PdfViewer";

const MainPage = () => (
  <>
    <Hero />
    <Greeting />
    <VideoSambutan />
    <DasarHukum />
    <DokumenAkuntabilitas />
    <TautanEksternal />
    <ContactUs />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rip" element={<RencanaIndukPengembangan />} />
        <Route path="/pdf-viewer" element={<PdfViewer />} />
        <Route path="/renstra" element={<Renstra />} />
        <Route path="/pk" element={<PerjanjianKinerja />} />
        <Route path="/rkt" element={<PerjanjianKinerjaTahunan />} />
        <Route path="/renaksi" element={<Renaksi />} />
        <Route path="/lakin" element={<LaporanKinerja />} />
        <Route path="/nilai-sakip" element={<NilaiSakip />} />
      </Routes>
    </Router>
  );
}

export default App;