"use client";

import React from 'react';
import { Search } from 'lucide-react';

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  return (
    <section className="p-10 mt-20 rounded-xl bg-gradient-to-br from-purple-700 via-indigo-700 to-indigo-900 text-white shadow-2xl">
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <h2 className="text-4xl font-extrabold tracking-tight">🚀 Browse All Templates</h2>
        <p className="text-lg opacity-90">Quickly find the perfect tool for your content creation needs.</p>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center bg-white rounded-full shadow-lg w-full max-w-md overflow-hidden ring-2 ring-indigo-500 focus-within:ring-purple-400 transition">
            <div className="p-3">
              <Search className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              onChange={(event) => onSearchInput(event.target.value)}
              className="w-full px-4 py-2 outline-none text-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
