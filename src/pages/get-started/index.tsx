import React from "react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回首頁
        </Link>

        <h1 className="mb-2 text-4xl font-bold text-gray-900">開始使用</h1>
        <p className="mb-12 text-xl text-gray-600">
          只需簡單幾個步驟，立即開始使用我們的服務
        </p>

        {/* Steps */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              1
            </div>
            <h3 className="mb-2 text-xl font-semibold">建立帳號</h3>
            <p className="text-gray-600">填寫基本資料，立即註冊成為會員</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              2
            </div>
            <h3 className="mb-2 text-xl font-semibold">選擇方案</h3>
            <p className="text-gray-600">選擇最適合您需求的方案</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              3
            </div>
            <h3 className="mb-2 text-xl font-semibold">開始使用</h3>
            <p className="text-gray-600">完成設定後即可開始使用所有功能</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">註冊帳號</h2>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                電子郵件
              </label>
              <input
                disabled
                type="email"
                className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                密碼
              </label>
              <input
                disabled
                type="password"
                className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                確認密碼
              </label>
              <input
                disabled
                type="password"
                className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400"
            >
              立即註冊
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
