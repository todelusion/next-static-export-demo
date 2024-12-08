import React from "react";
import Link from "next/link";

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="py-20">
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

          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            了解更多關於我們的服務
          </h1>
          <p className="text-xl text-gray-600">
            探索我們如何幫助您實現業務目標
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                為什麼選擇我們？
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">專業團隊支援</h3>
                    <p className="text-gray-600">
                      我們的專業團隊提供全天候技術支援，確保您的系統運行順暢。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">靈活的方案</h3>
                    <p className="text-gray-600">
                      提供多種客製化方案，滿足不同規模企業的需求。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">定期更新</h3>
                    <p className="text-gray-600">
                      持續改進產品功能，確保您使用最新、最安全的服務。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                常見問題
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">如何開始使用？</h3>
                  <p className="text-gray-600">
                    只需要註冊帳號，選擇適合的方案，即可立即開始使用我們的服務。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    需要綁定合約嗎？
                  </h3>
                  <p className="text-gray-600">
                    我們提供靈活的月付方案，無需長期合約綁定。
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-2 text-xl font-semibold">如何取得協助？</h3>
                  <p className="text-gray-600">
                    我們提供全天候客服支援，您可以透過電話、郵件或線上客服聯繫我們。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            準備好開始了嗎？
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            立即註冊，享受 14 天免費試用
          </p>
          <Link
            href="/get-started"
            className="rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
          >
            立即開始
          </Link>
        </div>
      </section>
    </main>
  );
}
