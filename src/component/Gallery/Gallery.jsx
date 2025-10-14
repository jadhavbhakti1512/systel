import React from "react";
import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";

const images = [
  { src: g1, title: "Achievement Award", desc: "Honored for achieving the highest number of admissions." },
  { src: g2, title: "Collaboration Award", desc: "Recognized for outstanding teamwork and partnership." },
  { src: g3, title: "Office Pride", desc: "Celebrating our spirit under the Indian flag." },
  { src: g4, title: "Innovative Projects", desc: "Delivering creative and impactful solutions." },
  { src: g5, title: "Team Events", desc: "Building stronger bonds through fun and collaboration." },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-xl">
          Explore our workplace, team, and events. Every picture tells a story of our journey.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8 items-center">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[400px] h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer transition-all duration-500 ease-in-out hover:z-50"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay (always visible, darker on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text content (always visible) */}
              <div className="absolute bottom-5 left-5 right-5 text-white transition-all duration-500 group-hover:bottom-8">
                <h3 className="text-xl font-semibold drop-shadow-md">{img.title}</h3>
                <p className="text-base text-gray-200 mt-1 drop-shadow-md">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: calc(200%);
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .animate-scroll > div {
              width: 250px;
              height: 170px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
