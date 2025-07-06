import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/home" className="text-xl font-bold">
          <img
            src="https://circlebdsm.com/wp-content/uploads/2022/11/cropped-NicePng_triskelion-png_3043872-141x140.png"
            alt="logo"
            className="w-14 h-14"
          />
        </NavLink>

        <ul className="hidden md:flex space-x-6 lg:text-base md:text-xs">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1 "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonial"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Testimonial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Contact Us
            </NavLink>
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
            ? "absolute left-0 w-full z-40 bg-teal-900 px-4 h-[200px]"
            : "hidden"
        } md:hidden pt-6`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <NavLink
              to="/home"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-teal-500 pb-1"
                  : "hover:border-b-2 hover:border-teal-500 pb-1"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
