import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4 py-12">
      
      {/* Centered Message */}
      <div className="text-center max-w-xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4">
          Welcome to PromptPilot.AI
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-2">
          ✍️ Create powerful, AI-generated content in seconds. Boost productivity, save time, and scale your ideas effortlessly.
        </p>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-purple-400 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>

      {/* Clean, Centered SignUp Component */}
      <div className="w-full max-w-md">
        <SignUp redirectUrl="/dashboard" />
      </div>
    </div>
  );
}
