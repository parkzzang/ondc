"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AiRecommendationStep2() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 flex-1 px-4 py-8">
        <h1 className="text-lg font-bold mb-4">AI의 챌린지 추천</h1>
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-sm font-bold mb-2">AI가 추천하는 챌린지예요</h2>
          <div className="space-y-2">
            {[
              "추천1: 매일 물 2L 마시고 인증샷 업로드",
              "추천2: 핸드폰 사용시간 5시간으로 줄이기",
              "추천3: 하루에 30분 산책",
            ].map((recommendation, index) => (
              <div
                key={index}
                className="bg-gray-100 py-2 px-4 rounded-lg shadow-sm text-sm text-gray-800"
              >
                {recommendation}
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg font-bold">
          추천이 필요하지 않아요
        </button>
      </main>
      <Footer />
    </div>
  );
}
