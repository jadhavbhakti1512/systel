import React from "react";
import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";

const images = [
  { src: g1, title: "Office 1", desc: "Our modern workspace" },
  { src: g2, title: "Office 2", desc: "Collaboration in action" },
  { src: g3, title: "Team", desc: "Our talented team" },
  { src: g4, title: "Projects", desc: "Innovative solutions" },
  { src: g5, title: "Events", desc: "Team building moments" },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our workplace, team, and events. Every picture tells a story of our journey.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6 items-center">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 hover:z-50 hover:rotate-1"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm mt-1">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: calc(200%);
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .animate-scroll > div {
              width: 200px;
              height: 150px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
