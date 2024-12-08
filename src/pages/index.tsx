import React from "react";
import Link from "next/link";

type Props = {};

function Home({}: Props) {
  return (
    <main className="min-h-screen font-pearl-regular">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="text-center">
          <h1 className="mb-6 font-pearl-semibold text-5xl text-gray-900">
            Welcome to <span className="text-blue-600">Your Brand</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Create something amazing with our powerful platform
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/get-started"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-pearl-semibold text-3xl text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-blue-600">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-pearl-medium text-xl">Lightning Fast</h3>
              <p className="text-gray-600">
                Experience blazing fast performance with our optimized platform.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-blue-600">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-pearl-medium text-xl">Secure</h3>
              <p className="text-gray-600">
                Your data is safe with our enterprise-grade security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 text-blue-600">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-pearl-medium text-xl">Scalable</h3>
              <p className="text-gray-600">
                Grow with confidence using our scalable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
