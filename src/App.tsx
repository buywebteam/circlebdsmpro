import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Testimonial from "./Pages/Testimonial";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import DungeonReservationPage from "./Pages/DungeonReservationPage";
import ClassesPage from "./Pages/ClassesPage";
import PlaySessionPage from "./Pages/PlaySessionPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route
          path="/services/dungeon-reservation"
          element={<DungeonReservationPage />}
        />
        <Route path="/services/classes" element={<ClassesPage />} />
        <Route path="/services/play-session" element={<PlaySessionPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
