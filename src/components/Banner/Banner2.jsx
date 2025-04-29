import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[650px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Systel Computer Centre
            </h1>
            <p className="text-dark2">
            Systel Computer Centre, Navapur, was established on 19th August 1999 with a mission to promote
            computer literacy, especially among the Adivasi community. In 2000, the centre became affiliated
            with Yashwantrao Chavan Maharashtra Open University (YCMOU), Nashik. The following year, in
            2001, we partnered with MKCL and introduced the MS-CIT course-one of the key tools in advancing
            digital education in remote areas of Nandurbar district.
            </p>
            <p className="text-dark2">
            In the second phase of our journey, we focused on transforming IT-literate youth into job-ready and
            career-ready professionals through MKCL's KLiC Courses, KLiC Diploma, and YCMOU's online and
            offline courses.
            </p>
            <p className="text-dark2">
            Since 1999, we have educated more than 15,000 learners, with hundreds of students successfully
            building careers in the IT sector. Our next goal is to expand our services further and provide
            comprehensive IT solutions to society.
            </p>
            <a
              href="https://wa.me/919923181557"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
