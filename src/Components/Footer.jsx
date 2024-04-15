import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5 w-full h-screen p-20">
      <div className="w-1/2 flex flex-col justify-between h-full text-zinc-700 font-poppins">
        <div className="heading">
          <h1 className="mb-10 text-[5vw] font-bold uppercase leading-none -mb-10">
            Eye-
          </h1>
          <h1 className="mb-10 text-[5vw] font-bold uppercase leading-none -mb-10">
            Opening
          </h1>
        </div>
        <h3>Ochi.</h3>
        {/* Links */}
        <div className="flex gap-10 mt-10 space-y-2"></div>
      </div>
      <div className="w-1/2">
        <h1 className="mb-10 font-poppins text-zinc-700 text-[5vw] font-bold uppercase leading-none -mb-10">
          Locations
        </h1>
        {/* Locations */}
        <div className="font-poppins dets mt-10 space-y-2">
          <p className="text-lg font-light">202-1965 W 4th Ave</p>
          <p className="text-lg font-light">Vancouver, Canada</p>
          <p className="text-lg font-light">30 Chukarina St</p>
          <p className="text-lg font-light">Lviv, Ukraine</p>
        </div>
        {/* Email */}
        <div className="font-poppins mt-10">
          <h1 className="mb-10 font-poppins text-zinc-700 text-[5vw] font-bold uppercase leading-none -mb-10">
            Contact
          </h1>
          <p className="text-lg font-light">hello@ochi.design</p>
          <a
            className="mt-10 text-lg font-light"
            href="https://www.instagram.com/"
          >
            Instagram <br></br>
          </a>
          <a className="text-lg font-light" href="https://www.behance.net/">
            Behance <br></br>
          </a>
          <a className="text-lg font-light" href="https://www.facebook.com/">
            Facebook <br></br>
          </a>
          <a className="text-lg font-light" href="https://www.linkedin.com/">
            Linkedin <br></br>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
