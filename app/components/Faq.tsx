"use client";
import { useState } from "react";

function Faq() {
  return (
    <>
      <div className="faq_main_container w-[100%] h-auto p-8">
        <h1 className="text-[40px] font-semibold mb-8">
          Frequently asked questions
        </h1>
        <FAQSection />
      </div>
    </>
  );
}

export default Faq;

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [ShowQues, SetShowQues] = useState(true);
  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
    SetShowQues(!ShowQues);
  };

  return (
    <div>
      <h3
        onClick={toggleAnswerVisibility}
        className=" cursor-pointer text-gray-500 border-b-2 border-gray-500 mb-9 flex justify-between px-4"
      >
        {question}
        <p className="text-2xl">{ShowQues ? "+" : "-"}</p>
      </h3>
      {isAnswerVisible && <p className="mb-5 pl-5">{answer}</p>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs: FAQProps[] = [
    {
      question: "What is Toingg?",
      answer:
        "Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use.",
    },
    {
      question: "Why is Toingg better than others?",
      answer:
        "Toingg differentiates itself through it’s realistic Hindi & English speaking system with interruption, memory, back channeling, database connection, extensive app integration, and customizable solutions and all of this at the lowest price in the market.",
    },
    {
      question: "Does Toingg support your existing database?",
      answer:
        "Yes, Toingg offers customizable solutions that can integrate with your existing database, ensuring seamless data synchronization.",
    },
    {
      question: "How does Toingg ensure security?",
      answer:
        "Toingg prioritizes data security and privacy, adhering to global standards and employing internal hard audits and compliance measures to protect your information",
    },
    {
      question: "How does Toingg address Enterprise solutions?",
      answer:
        "Toingg provides bespoke enterprise solutions with dedicated support for smooth implementation, integration, and customization to meet specific enterprise needs.",
    },
    {
      question: "Does Toingg support your own proprietary LLM model?",
      answer:
        "Yes, we support LLM proprietary models that can be integrated in Toingg, we also offer LLM’s fine tuning with your call recordings and data sets.",
    },
    {
      question: "What is Toingg’s pricing model?",
      answer: `Toingg has three pricing models based on our offerings:
        AI Calling Agent: $0.12/minute (minimum $10 recharge)
        SaaS Platform: $0.12/minute (build your own AI agent)
        API Access: $0.05/minute (bring you own ASR, GPT, TTS)`,
    },
    {
      question: "How can I contact Toingg?",
      answer:
        "For inquiries or more info, you can reach us out at contact@toingg.com and our team will promptly assist you.",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
