import Image from "next/image";
import { FaHeart,FaDiscord } from "react-icons/fa";
import LinkDin from "../assets/LinkedIn 2.png";
import Insta from "../assets/Instagram.png";
import Twitter from "../assets/X.png";
import disCord from "../assets/Discord.png";

function Footer() {
  return (
    <div className="footer bg-gradient-to-b from-[#FFD6B8] to-[#cdcac9] w-[100%] h-screen">
      <div className="Main_box flex flex-col items-center gap-3 pt-20">
        <h1 className="text-[50px] font-bold">TOINGG</h1>
        <span className="text-white text-[30px] text-center mb-5">
          We are here to grow your business<FaHeart className="text-red-500 inline" />

        </span>
        <p className="text-xl">Terms and conditions</p>
        <p className="text-xl">Privacy policy</p>
        <p className="text-xl">Help center</p>
        <p className="text-xl">API docs</p>
        <p className="text-xl">Careers</p>
      </div>
      <div className="social_Media_icons w-[100%] h-fit flex items-center justify-center gap-4 mt-12">
        <p>
          <Image src={LinkDin} width={45} height={10} alt="Linkedin" />
        </p>
        <p>
          <Image src={Insta} width={70} height={70} alt="Instagram" />
        </p>
        <p>
          <Image src={Twitter} width={35} height={15} alt="Twitter" />
        </p>
        <p>
          <Image src={disCord} width={60} height={60} alt="Discord" />
        </p>
      </div>
      <div className="endSection mt-[60px] ml-5">
        <p className="text-xl">Copyright © 2024 Toingg</p>
        <p className="text-xl">Inc.All rights reserved.</p>
        <p className="flex gap-2 mt-10 items-center text-xl">join our community <FaDiscord /></p>
      </div>
    </div>
  );
}

export default Footer;
