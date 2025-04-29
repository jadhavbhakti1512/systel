import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "#Home" },
  { id: 2, title: "Courses", path: "#Courses" },
  { id: 3, title: "About Us", path: "#About" },
  { id: 4, title: "Our Team", path: "#Team" },
  { id: 5, title: "Contact Us", path: "#Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <a href="#Home" className="font-bold text-2xl">
            Systel Computer Centre
          </a>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
