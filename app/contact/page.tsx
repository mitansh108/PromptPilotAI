import Link from "next/link";

function BackButton() {
  return (
    <div className="mb-8">
      <Link
        href="/"
        className="inline-block text-purple-400 hover:text-purple-300 text-sm sm:text-base"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
      <BackButton />
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4 text-center">
        📫 Contact Us
      </h1>
      <p className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto mb-10">
        We'd love to hear from you! Whether you're a user, partner, or enthusiast—reach out anytime.
      </p>

      <form className="max-w-lg mx-auto text-left space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full shadow-lg font-medium"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
