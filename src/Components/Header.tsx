import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          <img
            src="https://circlebdsm.com/wp-content/uploads/2022/11/cropped-NicePng_triskelion-png_3043872-141x140.png"
            alt="logo"
            className="lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10"
          />
        </a>

        <ul className="hidden md:flex space-x-6 lg:text-base md:text-xs">
          <li>
            <a
              href="/home"
              className="hover:border-b-2 hover:border-white pb-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:border-b-2 hover:border-white pb-1"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:border-b-2 hover:border-white pb-1"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:border-b-2 hover:border-white pb-1"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:border-b-2 hover:border-white pb-1"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "absolute left-0 w-full z-40 bg-black px-4 h-[250px]"
            : "hidden"
        } md:hidden pt-6`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="/home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={toggleMenu}>
              Testimonial
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
