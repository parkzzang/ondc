"use client";

import React from "react";

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-white shadow py-4 px-6">
        <h1 className="text-lg font-bold text-gray-800">구독하기</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl text-black font-bold mb-2">온도씨 구독 후 모든 컨텐츠를 이용하세요!</h2>
          <p className="text-gray-700 mb-4">1개월 3,900원 / 12개월 30,000원</p>

          <hr className="my-4" />

          <h3 className="text-lg text-black font-bold mb-2">가입 시</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>AI의 일기 피드백 이용</li>
            <li>AI의 추천 미션</li>
            <li>감정 일기 작성 및 간단한 감정 분석</li>
          </ul>

          <h3 className="text-lg text-black font-bold mb-2">온도씨 초기 구독자에게만 드리는 혜택</h3>
          <p className="text-gray-700 mb-4">2025. 1. 20 ~ 2025. 10. 20</p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>서비스 고도화 시 혜택 제공</li>
            <li>온도씨 프리미엄 기프트 무료 제공</li>
            <li>특정 이용 쿠폰 제공</li>
          </ol>
        </div>
      </main>

        {/* Footer Section */}
        <footer className="bg-white shadow py-4 px-6">
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform">
          구독하기
        </button>
      </footer>
    </div>
  );
}
