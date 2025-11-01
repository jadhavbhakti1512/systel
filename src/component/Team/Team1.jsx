import React from "react";
import { motion } from "framer-motion";
import BannerPng1 from "../../assets/T11.png";
import BannerPng2 from "../../assets/T1.png";

// Reusable component
const TeamMember = ({ name, description, image, imageRight = false }) => {
  return (
    <div className="container py-14 md:py-24 flex flex-col md:flex-row items-center md:justify-center gap-20">
      {/* Conditional order */}
      {!imageRight && (
        <>
          {/* Image Left */}
          <div className="flex-shrink-0">
            <motion.img
              src={image}
              alt={name}
              className="w-[300px] h-[350px] rounded-[100px] object-cover drop-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Text Right */}
          <div className="max-w-[400px] text-center md:text-left space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              {name}
            </motion.h1>
            <p className="text-gray-800">{description}</p>
          </div>
        </>
      )}

      {imageRight && (
        <>
          {/* Text Left */}
          <div className="max-w-[400px] text-center md:text-left space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              {name}
            </motion.h1>
            <p className="text-gray-800">{description}</p>
          </div>

          {/* Image Right */}
          <div className="flex-shrink-0">
            <motion.img
              src={image}
              alt={name}
              className="w-[300px] h-[350px] rounded-[100px] object-cover drop-shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </>
      )}
    </div>
  );
};

// Main Banner component
const Banner = () => {
  return (
    <section id="Team">
      <div className="text-3xl text-center font-bold mb-0">Meet our team!</div>
      <div>
            <p className="text-dark text-center mt-3 mb-0 text-l">
            Empowering through Computer Education since 1999.
            </p>
      </div>

      {/* Person 1: Image Left */}
      <TeamMember
        name="Satish R. Jadhav"
        description="Founder of a reputable computer institute with a vision to make technology education accessible and practical. With years of experience in IT training and academic leadership, he has empowered hundreds of students with industry-relevant skills, fostering career growth and digital literacy in the community."
        image={BannerPng1}
        imageRight={false}
      />

      {/* Person 2: Image Right */}
      <TeamMember
        name="Sanjay D. Chaudhari"
        description="Expert in marketing and business strategy with over a decade of experience. He has led multiple successful campaigns and mentoring initiatives, helping teams achieve growth and innovation in competitive markets."
        image={BannerPng2}
        imageRight={true}
      />
    </section>
  );
};

export default Banner;
