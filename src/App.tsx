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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TelegramIcon from "./Components/TelegramIcon";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
      <TelegramIcon />
      <Footer />
    </>
  );
}

export default App;
