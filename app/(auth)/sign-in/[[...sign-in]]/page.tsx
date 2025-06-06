import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4 py-12">
      
      {/* Branding and Message (Always Centered) */}
      <div className="text-center max-w-xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-4">
          Welcome Back to PromptPilot.AI
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-2">
          🚀 Let’s keep creating! Log in to access your dashboard and start generating content instantly.
        </p>
        <p className="text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-purple-400 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>

      {/* Clerk Sign In */}
      <div >
        <SignIn />
      </div>
    </div>
  );
}
