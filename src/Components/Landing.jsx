import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.3"
      className="w-full h-screen flex mt-0 pt-0 font-poppins"
    >
      {/* Left half */}
      <div className="w-1/2">
        <div className="textStructure mt-52 px-10 text-[#212121]">
          {["CRAFTING", "CAPTIVATING", "PRESENTATIONS"].map((item, index) => {
            return (
              <div className="masker" key={index}>
                <div className="w-fit flex items-center">
                  {index === 0 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="bg-cover w-[7vw] rounded-md h-[10vh] relative"
                    >
                      <img
                        className="object-cover"
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      ></img>
                    </motion.div>
                  )}
                  <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              className="text-md font-light tracking-tight leading-none"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="uppercase text-md font-medium">
          <a
            href="/"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50 mt-10 ml-20"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">START</span>
          </a>
        </div>
      </div>

      {/* Right half */}
      <div className=" w-1/2 flex flex-col mt-0 pt-0 justify-center items-center">
        <motion.div
          whileHover={{ rotate: [-5, 5, -5, 0] }}
          className=" cursor-pointer rounded-full h-1/3 mt-0 pt-0 bg-[#e73c37] flex justify-center items-center"
        >
          <h1 className="p-10 text-white text-[3vw] leading-none font-poppins font-semi-bold tracking-tighter">
            ABOUT US
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ rotate: [-5, 5, -5, 0] }}
          className="cursor-pointer  rounded-xl h-1/4 bg-[#004d43] flex justify-center items-center"
        >
          <h1 className=" p-10 text-white text-[3vw] leading-none font-poppins font-semi-bold tracking-tighter">
            FEATURED PROJECTS
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ rotate: [-5, 5, -5, 0] }}
          className="rounded-full h-1/3 bg-[#cdea68] flex justify-center items-center"
        >
          <h1 className="cursor-pointer p-10 text-white text-[3vw] leading-none font-poppins font-semi-bold tracking-tighter">
            CONTACT US
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
