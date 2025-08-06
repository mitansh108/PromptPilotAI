import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import ScrollingFeatures from "./ScrollingFeatures";
import FAQSection from "./FAQSection";





export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 flex flex-col">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-y-4 mb-16 sm:mb-20">
  <h1 className="text-2xl sm:text-3xl font-bold text-purple-400">
    PromptPilot.AI
  </h1>
  <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
    <Link href="/features" className="hover:text-purple-400">
      Features
    </Link>
    <Link href="/pricing" className="hover:text-purple-400">
      Pricing
    </Link>
    <Link href="/contact" className="hover:text-purple-400">
      Contact
    </Link>
    <Link href="/dashboard">
      <Button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-full px-6 py-2 shadow-lg text-sm sm:text-base">
        Get Started 🚀
      </Button>
    </Link>
  </nav>
</header>


      {/* Hero Section */}
      <section className="text-center w-full max-w-4xl mx-auto flex-grow flex flex-col items-center">
        <p className="text-xs sm:text-sm text-purple-400 font-semibold mb-3 sm:mb-4">
          ✨ The ultimate AI content engine
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Generate High-Quality Content <br className="hidden sm:block" /> and
          Grow Traffic on Autopilot
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl sm:max-w-3xl">
          With <span className="text-white font-semibold">PromptPilot.AI</span>, create
          SEO-friendly blogs, social posts, emails, and marketing copy in
          minutes. Save time. Drive results.
        </p>

        <ScrollingFeatures />

        <Link href="/sign-up" className="mt-4">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition shadow-xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            ✍️ Generate Your First Post
          </Button>
        </Link>
        <p className="text-xs sm:text-sm text-gray-400 mt-3">
          No credit card required
        </p>
      </section>

      {/* Prompt Guide Section */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Essential Steps for Writing AI Prompts</h2>
        <p className="text-gray-300 mb-10">Follow these proven steps to create effective AI prompts</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "01", title: "Define Clear Objectives", desc: "Start with a clear goal and specific requirements for your prompt" },
            { number: "02", title: "Provide Context", desc: "Include relevant background information and specific details" },
            { number: "03", title: "Structure Your Prompt", desc: "Organize information logically with clear sections and formatting" },
            { number: "04", title: "Refine and Test", desc: "Iterate and improve your prompt based on the results" },
          ].map((step) => (
            <div key={step.number} className="bg-white bg-opacity-5 p-6 rounded-2xl shadow-md text-left">
              <h3 className="text-purple-400 font-bold text-lg mb-2">{step.number}</h3>
              <h4 className="text-white font-semibold mb-1">{step.title}</h4>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Prompt Builder */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Create Perfect AI Prompts in Seconds</h2>
        <p className="text-gray-300 mb-10">Follow these simple steps to create optimized Prompts for AI models in seconds.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Enter Your Idea",
              desc: "Simply input your task, goal, or a simple prompt. Our tool works with any type of input to create custom AI instructions."
            },
            {
              title: "AI-Powered Enhancements",
              desc: "Our AI analyzes your input and generates a comprehensive, optimized prompt tailored for various AI models."
            },
            {
              title: "Usage and Refinement",
              desc: "You can instantly view the generated prompt. Copy and paste it directly into ChatGPT, Claude, Gemini, or any other AI model."
            }
          ].map((card) => (
            <div key={card.title} className="bg-white bg-opacity-5 p-6 rounded-2xl shadow-md text-left">
              <h4 className="text-white font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
          <FAQSection />
      {/* Footer */}
      <footer className="mt-24 sm:mt-32 text-center text-xs sm:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PromptPilot.AI. All rights reserved.
      </footer>
    </main>
  );
}
