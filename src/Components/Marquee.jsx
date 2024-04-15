import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      className="overflow-hidden w-full py-10 text-white bg-[#004d43] "
    >
      <div className="text border-t-2 border-b-2 border-zinc-300  flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[20vw] pr-20 leading-none font-poppins font-bold  pt-5 pb-5 tracking-tighter"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[20vw] pr-20 leading-none font-poppins font-bold  pt-5 pb-5 tracking-tighter"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
