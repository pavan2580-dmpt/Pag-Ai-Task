"use client"

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/6061143-middle.png";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const youtubeUrl = "https://www.youtube.com/watch?v=_La3wQlntgw";
    const videoIdRegex = /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|youtu.be\/)([^\?&"'<>#%\{\}|\\^`[\]]*)/;
    const match = youtubeUrl.match(videoIdRegex);
    if (match && match[1]) {
      setVideoId(match[1]);
    }
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="VideoSection w-full h-screen pt-10 ">
      <h1 className="text-xl text-gray-400 text-center mt-10">
        Automate your agent with 5000+ integrations like
      </h1>
      <div className="flex justify-evenly w-full h-12 mt-10">
        <Image src={icon1} width={50} height={50} alt="Integration 1" />
        <Image src={icon2} width={50} height={50} alt="Integration 2" />
        <Image src={icon3} width={50} height={50} alt="Integration 3" />
        <Image src={icon4} width={50} height={50} alt="Integration 4" />
        <Image src={icon5} width={70} height={70} alt="Integration 5" />
      </div>
      <div className="flex justify-center mt-10 p-3 h-[50vh]">
        {!isPlaying ? (
          <div
            className="relative w-full max-w-4xl h-0 pb-[56.25%] cursor-pointer"
            onClick={handlePlayVideo}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://i.ytimg.com/vi_webp/_La3wQlntgw/hqdefault.webp")',
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <button className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6-3.6A1 1 0 007 8.4v7.2a1 1 0 001.752.832l6-3.6a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            className="w-full max-w-4xl h-auto"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default VideoSection;
