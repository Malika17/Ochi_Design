import React from "react";

const About = () => {
  return (
    <div className="xw-full py-20 bg-[#CDEA68] ">
      <h1 className=" text-[#212121] font-['Neue Montreal '] leading-[3.5vw] text-[4vw] ml-10">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="flex gap-5 mt-20 pt-10 w-full border-t-[1px] border-[#212121]">
        <div className="ml-10 w-1/2">
          <h1 className="tracking-tight text-[#212121] uppercase text-7xl">
            Our Approach
          </h1>
          <button className="uppercase flex items-center gap-10 mt-10 px-10 py-6 bg-zinc-900 text-white rounded-full">
            Read more
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="bg-cover overflow-hidden mr-10 w-1/2 rounded-3xl h-[70vh] bg-[#b0c859]">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
