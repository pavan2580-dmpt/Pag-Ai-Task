"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <div className="w-[100%] h-auto flex flex-col">
      <div className="firstsection w-[100%] h-[90vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-[45px] text-center text-gray-400">
          Build AI Calling Agent that can do
        </h1>
        <h1 className="text-[50px] font-bold">Sales Call</h1>
        <button className="firstButton w-[80%] rounded-md bg-gradient-to-r p-2 box-border text-xl from-[#FFA96B] to-[#de782f]">
          <p className="text-white">Build your own voice agent</p>
          <p>‘It’s free!’</p>
        </button>
        <button className="secondButton border-2 border-gray-500 border-solid w-[50%] text-xl p-2 mt-4 rounded-lg cursor-pointer">
          Hear it in action
        </button>
      </div>

      <div className="secondSection w-[100%] h-fit  flex justify-center items-center">
        <div className="contactSection shadow-xl w-[80%] h-fit flex flex-col  rounded-2xl p-3 bg-gradient-to-b from-[#FFD3B4] to-[#FFFFFF]#] pt-[100px]">
          <h1 className="text-[40px] font-bold">Try now</h1>
          <h1 className="text-gray-400 text-xl">Get a call from Toingg</h1>
          {/* ----------------form-------------------------- */}
          <form >
          <div className="border-2 border-black rounded-md mt-5">
            
          <input
            type="text"
            placeholder="Name"
            className="input bg-transparent border-black border-solid boder-2 h-[40px] text-xl w-full pl-2"
            required
          />
          </div>
          <div className="border-2  border-black rounded-md mt-5 mb-10 bg-transparent ">
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            className=" bg-transparent  h-[40px]"
            required
          />
          </div>
          <div className="w-[100%] h-fit border-2 border-black border-solid rounded-md">
          <select name="" className="w-full h-[40px] bg-transparent" required>
          <option value="">Select your language</option>
            <option value="">English</option>
            <option value="">Telugu</option>
            <option value="">Hindi</option>
            <option value="">Chines</option>
            <option value="">French</option>
            <option value="">Tamil</option>
          </select>
          </div>
          <div className="w-[100%] h-fit flex justify-center items-center">
          <button className="w-[60px] h-[60px] flex justify-center items-center text-white rounded-[50%] bg-orange-500 mt-16">
            <FaPhoneAlt size={30} />
          </button>
          
          </div>
          </form>
          {/* ------------------form end ---------------------- */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
