"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Billing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s+/g, "")))
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!formData.expiry.trim())
      newErrors.expiry = "Expiry date is required";
    else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiry))
      newErrors.expiry = "Expiry must be in MM/YY format";

    if (!formData.cvc.trim()) newErrors.cvc = "CVC is required";
    else if (!/^\d{3,4}$/.test(formData.cvc))
      newErrors.cvc = "CVC must be 3 or 4 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      alert("Payment successful!");
    }
  };

  return (
    <main className=" mt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-12 md:px-24">
      {/* Header */}
     

      {/* Pricing Plans */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Free Plan */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Free Plan</h2>
          <p className="text-4xl font-extrabold mb-4">
            $0
            <span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>Basic features</li>
            <li>Limited usage</li>
            <li>Email support</li>
          </ul>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-2xl border-2 border-purple-600 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Pro Plan</h2>
          <p className="text-4xl font-extrabold mb-4">
            $29.99
            <span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Upgrade Now
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Enterprise Plan</h2>
          <p className="text-4xl font-extrabold mb-4">Contact Us</p>
          <ul className="mb-6 space-y-2 text-gray-300">
            <li>Custom solutions</li>
            <li>Dedicated account manager</li>
            <li>24/7 support</li>
          </ul>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Billing Form */}
      <section className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-8 text-center">Billing Information</h1>

        {submitted && (
          <div className="p-4 bg-green-900 text-green-300 rounded mb-8 text-center">
            Thank you for your payment!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-purple-400">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-gray-800 border ${
                errors.name ? "border-red-600" : "border-gray-700"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-purple-400">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-gray-800 border ${
                errors.email ? "border-red-600" : "border-gray-700"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Card Number */}
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block mb-2 font-semibold text-purple-400">
              Card Number
            </label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              maxLength={19}
              value={formData.cardNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-gray-800 border ${
                errors.cardNumber ? "border-red-600" : "border-gray-700"
              } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>

          {/* Expiry and CVC */}
          <div className="flex gap-6 mb-8">
            <div className="flex-1">
              <label htmlFor="expiry" className="block mb-2 font-semibold text-purple-400">
                Expiry Date (MM/YY)
              </label>
              <input
                id="expiry"
                name="expiry"
                type="text"
                maxLength={5}
                value={formData.expiry}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-gray-800 border ${
                  errors.expiry ? "border-red-600" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
                placeholder="MM/YY"
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block mb-2 font-semibold text-purple-400">
                CVC
              </label>
              <input
                id="cvc"
                name="cvc"
                type="text"
                maxLength={4}
                value={formData.cvc}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded bg-gray-800 border ${
                  errors.cvc ? "border-red-600" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition`}
                placeholder="123"
              />
              {errors.cvc && (
                <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition text-white font-semibold py-3 rounded-full shadow-lg"
          >
            Pay Now
          </Button>
        </form>
      </section>
    </main>
  );
}
