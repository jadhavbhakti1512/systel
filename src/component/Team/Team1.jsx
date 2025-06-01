import React from "react";
import BannerPng from "../../assets/T11.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section id= "Team">
      <div className="text-3xl text-center font-bold mb-0">Meet our team!</div>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
        <motion.img
            src={BannerPng}
            alt="Custom Radius"
            className="w-[300px] h-[350px] rounded-[100px] object-cover drop-shadow"
            />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Satish R. Jadhav

            </motion.h1>
            <p className="text-gray-800 lg:max-w-[350px]">Founder of a reputable computer institute with a vision to make technology education accessible and practical. With years of experience in IT training and academic leadership, he has empowered hundreds of students with industry-relevant skills, fostering career growth and digital literacy in the community.</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
