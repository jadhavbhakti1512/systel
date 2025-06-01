import React, { useState, useEffect } from "react";
import BannerPng from "../../assets/education.png";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const skillWords = ["Skill?", "Upskill?", "Reskill?"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skillWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Education Banner"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug inline-flex items-center"
            >
              Looking to&nbsp;
              <span
                className="text-orange-500 relative inline-block"
                style={{
                  width: "100px",
                  height: "1.2em",
                  position: "relative",
                  verticalAlign: "middle",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={skillWords[index]}
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      textAlign: "center",
                    }}
                  >
                    {skillWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <p className="text-black text-xl">
  You have come to the right place. <br />
  Let the search for the right course begin!
</p>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
