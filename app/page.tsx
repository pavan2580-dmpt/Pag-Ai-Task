import Explore from "./components/Explore";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Slider1 from "./components/Slider1";
import TopBar from "./components/TopBar";
import Trust from "./components/Trust";
import VIdeoSection from "./components/VIdeoSection";
import brain from "./assets/Brain.png";
import Light from "./assets/Lightning Bolt.png";
import Private from "./assets/Private.png";
import path from "./assets/Planned Path.png";
import ScaleUp from "./assets/Scale Up.png";
import key from "./assets/Key.png";

import dynamic from "next/dynamic";

import Tune from "./assets/Tune.png";
import Tools from "./assets/Tools.png";
import Voice from "./assets/Voice.png";
import Slider2 from "./components/Slider2";
import Terminal from "./components/Terminal";

import SliderCard from "./components/SliderCard";

export default function Home() {
  const cards = [
    {
      image: Light,
      title: "Ultra-Fast Response",
      description:
        "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
    },
    {
      image: Private,
      title: "Smart Interruption Management",
      description:
        "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations",
    },
    {
      image: brain,
      title: "Advanced Memory Recall",
      description:
        "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
    },
    {
      image: path,
      title: "Dynamic Conversational Flows",
      description:
        "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
    },
    {
      image: ScaleUp,
      title: "Custom AI Solutions",
      description:
        "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
    },
    {
      image: key,
      title: "Scalability at Your Fingertips",
      description:
        "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
    },
  ];

  const SecondCard = [
    {
      image: Tune,
      title: "Fine tuning",
      description:
        "Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.",
    },
    {
      image: Tune,
      title: "Custom tools",
      description:
        "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
    },
    {
      image: Tune,
      title: "Dedicated infrastructure",
      description:
        "Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.",
    },
  ];
  return (
    <>
      <div className="w-[100%] h-auto overflow-hidden">
        <TopBar />
        <NavBar />
        <HeroSection />
        <VIdeoSection />
        <SliderCard />
        <Slider1 cards={cards} autoSlide autoSlideInterval={3000} />
        <Slider2 cards={SecondCard} autoSlide autoSlideInterval={3000} />
        <Trust />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
