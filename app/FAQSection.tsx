"use client"; 
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "What is the AI Prompt Generator?",
    answer:
      "The AI Prompt Generator is a tool that helps you quickly craft effective prompts for AI models like ChatGPT, Claude, and Gemini.",
  },
  {
    question: "How does the AI Prompt Generator work?",
    answer:
      "You simply enter your idea, and the tool structures and enhances it to generate optimized prompts using AI-powered techniques.",
  },
  {
    question: "Can I use the tool for free?",
    answer:
      "Yes, basic features are free to use. However, premium features may be available for advanced prompt enhancements and integrations.",
  },
  {
    question: "What use cases does the tool support?",
    answer:
      "The tool supports blogging, marketing copy, emails, coding assistance, education, social media content, and more.",
  },
  {
    question: "How can I ensure high-quality Prompts?",
    answer:
      "Follow the best practices: define clear objectives, provide proper context, structure your prompt logically, and refine based on output.",
  },
  {
    question: "Do the generated Prompts support all AI models?",
    answer:
      "Yes, the prompts are optimized to work with all major AI models including ChatGPT, Claude, Gemini, and others.",
  },
];

// FAQ Section component
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="mt-24 sm:mt-32 max-w-4xl mx-auto w-full">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-700 transition duration-200 flex justify-between items-center"
            >
              <span className="text-white font-medium">{faq.question}</span>
              <span className="text-purple-400">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-gray-900 text-gray-300 px-6 py-4 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
