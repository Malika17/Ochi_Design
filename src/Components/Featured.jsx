import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-10">
      <div className=" w-full px-20 border-b-[1px] border-zinc-300 pb-20">
        <h1 className="text-[#212121] mb-10 text-8xl font-poppins uppercase tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards  w-full flex gap-10">
          <div className="w-1/2">
            <p>FYDE</p>
            <div className="cardcontainer rounded-lg overflow-hidden mt-10 h-[80vh] bg-red-500 transition duration-500 hover:scale-110">
              <div className="w-full rounded-xl h-full bg-green-600 ">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p>VISE</p>
            <div className="  transition duration-500 hover:scale-110 cardcontiner overflow-hidden rounded-lg mt-10 h-[80vh] bg-red-500">
              <div className="w-full rounded-xl h-full bg-green-600">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
