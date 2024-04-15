import React from "react";

const Cards = () => {
  return (
    <div className="mt-40 px-20 flex gap-5 w-full h-[70vh] ">
      <div className="card-container h-[50vh] w-1/2">
        <div className="flex items-center justify-center card rounded-xl w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
        </div>
      </div>
      <div className="card-container rounded-xl gap-5 flex w-1/2 h-[50vh]">
        <div className="w-1/2 rounded-xl h-full bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          ></img>
        </div>
        <div className="flex justify-center items-center w-1/2 rounded-xl h-full bg-[#192826] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
