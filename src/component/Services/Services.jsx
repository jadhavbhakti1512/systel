import React from "react"; 
import { motion } from "framer-motion";
import MSCIT from "../../assets/MSCIT.png";
import klic from "../../assets/klic.webp";
import iLike from "../../assets/ilike.webp";
import DeepPng from "../../assets/deep.webp";

const programs = [
  {
    title: "DIGITAL LITERACY",
    subtitle: "MS-CIT",
    image: MSCIT,
    delay: 0.2,
  },
  {
    title: "KNOWLEDGE LIT CAREERS",
    subtitle: "MKCL KLiC Courses",
    description: "Gateway to Knowledge Lit Careers",
    image: klic,
    delay: 0.3,
  },
  {
    title: "KNOWLEDGE EMPOWERMENT",
    subtitle: "KNOWLEDGE EMPOWERMENT",
    description: "",
    image: iLike,
    delay: 0.4,
  },
  {
    title: "DIGITAL EMPLOYABILITY",
    subtitle: "DEEP",
    description: "Digital Employability Enhancement Program",
    image: DeepPng,
    delay: 0.5,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay,
      ease: "easeInOut",
    },
  },
});

const Services = () => {
  return (
    <section id="Courses" className="bg-white">
      <div className="container pb-14 pt-16 mx-auto px-4">
        <h1 className="text-4xl font-bold text-left pb-3">Courses in Demand</h1>
        <p className="text-gray-800 pb-10">
          Stand out by taking up courses to skill, reskill and upskill.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={SlideLeft(program.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-3 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl text-center"
            >
              {/* Program main image */}
              {program.image && (
                <img
                  src={program.image}
                  alt={program.subtitle}
                  loading="lazy"
                  className="w-full h-40 object-contain mb-2"
                />
              )}

              <h2 className="text-sm font-medium text-gray-500">{program.title}</h2>

              {/* For MS-CIT, MKCL KLiC, KNOWLEDGE EMPOWERMENT, DEEP do NOT show subtitle */}
              {program.subtitle !== "MS-CIT" &&
               program.subtitle !== "MKCL KLiC Courses" &&
               program.subtitle !== "KNOWLEDGE EMPOWERMENT" &&
               program.subtitle !== "DEEP" && (
                <h1 className="text-lg font-semibold text-gray-800">{program.subtitle}</h1>
              )}

              {/* For MS-CIT show external image */}
              {program.subtitle === "MS-CIT" && (
                <img
                  src="https://www.mkcl.org/images/solutions/mscit.webp"
                  alt="MS-CIT Logo"
                  loading="lazy"
                  className="w-full h-20 object-contain mb-2"
                />
              )}

              {/* For MKCL KLiC Courses show external image */}
              {program.subtitle === "MKCL KLiC Courses" && (
                <img
                  src="https://www.mkcl.org/images/solutions/klic.webp"
                  alt="MKCL KLiC Logo"
                  loading="lazy"
                  className="w-full h-20 object-contain mb-2"
                />
              )}

              {/* For KNOWLEDGE EMPOWERMENT show external image */}
              {program.subtitle === "KNOWLEDGE EMPOWERMENT" && (
                <img
                  src="https://www.mkcl.org/images/solutions/ilike.webp"
                  alt="KNOWLEDGE EMPOWERMENT"
                  loading="lazy"
                  className="w-full h-20 object-contain mb-2"
                />
              )}

              {/* For DIGITAL EMPLOYABILITY (DEEP) show external image */}
              {program.subtitle === "DEEP" && (
                <img
                  src="https://www.mkcl.org/images/solutions/deep.webp"
                  alt="DIGITAL EMPLOYABILITY"
                  loading="lazy"
                  className="w-full h-20 object-contain mb-2"
                />
              )}

              {/* Show description only for programs not in above special cases */}
              {program.subtitle !== "MS-CIT" &&
               program.subtitle !== "MKCL KLiC Courses" &&
               program.subtitle !== "KNOWLEDGE EMPOWERMENT" &&
               program.subtitle !== "DEEP" &&
               program.description && (
                <p className="text-sm text-gray-600">{program.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
