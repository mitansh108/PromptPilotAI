"use client";

import React from "react";

const phrases = [
  "Create SEO-friendly blogs",
  "Create social posts",
  "Create emails",
  "Create marketing copy",
  "Blog Title",
  "Blog Content",
  "Blog Topic Ideas",
  "YouTube SEO Title",
  "YouTube Description",
  "Rewrite Article (Plagiarism Free)",
  "Add Emojis to Text",
  "Instagram Post/Reel Idea",
  "English Grammar Check",
  "Explain Code",
  "Tagline Generator",
  "Product Description",
  "Save time",
  "Drive results",
];

export default function ScrollingFeatures() {
  return (
    <div className="overflow-hidden w-full bg-gray-900 rounded-lg py-3 px-4 mt-8 mb-12">
      <div className="flex w-max animate-marquee gap-x-10 text-purple-400 font-semibold text-lg md:text-xl">
        {[...phrases, ...phrases].map((phrase, i) => (
          <span key={i} className="select-none whitespace-nowrap">
            {phrase}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
