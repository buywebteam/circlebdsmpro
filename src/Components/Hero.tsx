import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const subtitles = [
  "A safe space to explore your deepest desires and fantasies.",
  "Where consent, respect, and authenticity come first.",
  "Join a community that celebrates all kinks and fetishes.",
  "Discreet, risk-aware, and judgment-free exploration.",
  "Real people, real connections, real kink.",
  "Empowering you to embrace your true self.",
  "Discover the art of safe and sane BDSM play.",
  "For every walk of life — your kink journey starts here.",
  "Consent is key. Exploration is encouraged.",
  "Unlock new experiences in a trusted environment.",
];

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/heroimg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl mx-4 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 ">
          Welcome to CIRCLE BDSM{" "}
          <span className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            PRO
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-xl font-semibold transition-opacity duration-500">
          {subtitles[subtitleIndex]}
        </p>
        <Link to="/contact">
          <button className="mt-8 px-8 py-3 bg-white text-black font-semibold text-base rounded-lg cursor-pointer">
            Explore Dungeon Reservation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
