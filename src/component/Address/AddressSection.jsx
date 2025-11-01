import React from "react";

const AddressSection = () => {
  return (
    <div className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-lg">
        {/* LEFT SIDE - Addresses */}
        <div className="space-y-10">
          {/* Systel Computer Centre */}
          <div>
            <a href="#Home" className="font-bold text-2xl">
              Systel Computer Centre
            </a>
            <br />
            📍 Mangaldas Park, Near State Bank, A/P Navapur, 425418
            <br />
            ✉️ 31210011@mkcl.org
            <br />
            📞 9890502843
          </div>

          {/* Systel Digital Hub */}
          <div>
            <a href="#Home" className="font-bold text-2xl">
              Systel Digital Hub
            </a>
            <br />
            📍 Shanti Nagar, Near Vanita School, College Road, 425418
            <br />
            ✉️ 31210099@mkcl.org
            <br />
            📞 9923181557
          </div>
        </div>

        {/* RIGHT SIDE - Map */}
        <div className="w-full h-[400px]">
          <iframe
            title="Systel Combined Locations"
            src="https://www.google.com/maps/d/embed?mid=1bSXWsqsBwdZT8DF60GaZE3oZOYcL1d0"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
