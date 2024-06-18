import Image from "next/image";
import Security from "../assets/Security Shield.png";
import { FaPhoneAlt } from "react-icons/fa";
import Filter from "../assets/Filter and Sort.png";
import Scales from "../assets/Scales.png";
import Analyze from "../assets/Analyze.png";

function Trust() {
  return (
    <>
      <div className="Trust_container_page p-6 w-[100%] h-[100vh] ">
        <div className="start_image mt-10 ">
          <center>
            <Image
              src={Security}
              alt="Security Shield"
              width={100}
              height={100}
            />
          </center>
        </div>
        <h1 className="text-2xl font-semibold text-center mt-5">
          The highest standards of trust and safety.
        </h1>
        <p className="text-lg text-center mt-7 p-4">
          We continue to actively restrict the calls we support, ensuring that
          our AI phone call technology continues to benefit consumers,
          businesses, and society as a whole.
        </p>

        <div className="contacts_division w-[100%] h-fit flex flex-wrap justify-center gap-10  mt-10">
          {/* -------------------------------------- */}
         <div className="first_set_icons flex gap-5">
         <div className="pfone flex flex-col w-fit h-fit items-center justify-center gap-2">
            <div className="phone text-white w-[60px] h-[60px] rounded-[50%] bg-orange-500 flex justify-center items-center">
              <FaPhoneAlt size={30} />
            </div>
            <h1 className="text-lg">Call Monitoring</h1>
          </div>

          {/* -------------------------------------------*/}
          <div className="pfone flex flex-col w-fit h-fit justify-center items-center gap-2">
            <div className="phone text-white w-[60px] h-[60px] rounded-[50%] cursor-pointer bg-orange-500 flex justify-center items-center">
              <Image
                src={Filter}
                width={30}
                height={30}
                alt="Filter and Sorting"
              />
            </div>
            <h1 className="text-lg">Prompt Injection</h1>
          </div>
         </div>
          {/* ----------------------------------------- */}
        <div className="second_set_icons flex gap-8 pl-10">
        <div className="pfone flex flex-col w-fit h-fit justify-center items-center gap-2">
            <div className="phone text-white w-[60px] h-[60px] rounded-[50%] bg-orange-500 flex justify-center items-center cursor-pointer">
              <Image
                src={Scales}
                width={30}
                height={30}
                alt="Filter and Sorting"
              />
            </div>
            <h1 className="text-lg">Rate Limits </h1>
          </div>
          {/* --------------------------------------- */}
          <div className="pfone flex flex-col w-fit h-fit justify-center items-center gap-2">
            <div className="phone text-white w-[60px] h-[60px] rounded-[50%] bg-orange-500 flex justify-center items-center cursor-pointer">
              <Image
                src={Analyze}
                width={30}
                height={30}
                alt="Filter and Sorting"
              />
            </div>
            <h1 className="text-lg">Internal Hard Audits</h1>
          </div>
        </div>
          {/*--------------------------------------  */}
        </div>
      </div>
    </>
  );
}

export default Trust;
