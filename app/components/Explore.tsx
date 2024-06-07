import Image from "next/image";
import React from "react";
import Demo from "../assets/videoDemo.png"

function Explore() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="h-[90vh] w-[80%] bg-[#FFF6E8] rounded-2xl p-1">
        <div className="video_container w-full h-[45%] flex justify-center items-center flex-nowrap">
          <Image src={Demo}  alt="Demo video" />
        </div>

        <div className="text_container">
          <h1 className="text-[40px] font-bold text-center">Explore TOINGG</h1>
          <h1 className="text-[40px] font-bold text-center">
            in <span className="text-orange-500">GPT</span> Store
          </h1>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Interactive Communication:</span>{" "}
              Engage in single or batch calls using TOINGG GPT.
            </li>
            <li>
              <span className="font-bold">Advanced Features:</span> Leverage GPT
              for real-time sentiment analysis during calls.
            </li>
            <li>
              <span className="font-bold">Data Export:</span> Conveniently
              export call logs to CSV.
            </li>
            <li>
              <span className="font-bold">Enhanced Usability:</span> Tailored
              for users familiar with CSV functionalities.
            </li>
          </ul>
          <center>
            <button className="text-white bg-gradient-to-r from-[#FC9850] to-[#AD4C06] text-2xl p-2 rounded-md cursor-pointer mt-5">
              Explore more
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Explore;
