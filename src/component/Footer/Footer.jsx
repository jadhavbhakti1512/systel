import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {/* Courses Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Courses</h1>
            <ul className="space-y-2 text-lg text-dark">
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Courses">MS-CIT</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Courses">KLiC</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Courses">Knowledge Empowerment</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Courses">Digital Employability</a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Links</h1>
            <ul className="space-y-2 text-lg text-dark">
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Home">Home</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Courses">Courses</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#About">About Us</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Team">Our Team</a>
              </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://wa.me/919923181557">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/systelskr.satish?igsh=MXZ4djhlazd1dWNxOQ==">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://systel.vercel.app/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://youtube.com/@rksystelcomputer7314?si=JhKXVuLrlqiZNKk_">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-dark text-center pt-10">
          © 2025 Systel Computer Centre. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
