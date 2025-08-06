import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-block text-purple-400 hover:text-purple-300 text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4 text-center">
        💳 Pricing Plans
      </h1>
      <p className="text-gray-300 text-center text-base sm:text-lg max-w-2xl mx-auto mb-10">
        Choose a plan that fits your content goals and scale easily as you grow.
      </p>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            name: "Free",
            price: "$0/mo",
            features: ["5 prompts/day", "Basic AI model", "Community access"],
          },
          {
            name: "Pro",
            price: "$12/mo",
            features: ["Unlimited prompts", "Advanced AI access", "Prompt library", "Priority updates"],
          },
          {
            name: "Enterprise",
            price: "Custom",
            features: ["Team accounts", "API access", "Custom integrations", "Dedicated support"],
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl shadow-md text-left border border-gray-700 hover:shadow-lg transition"
          >
            <h2 className="text-purple-400 text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-white text-2xl font-extrabold mb-4">{plan.price}</p>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
