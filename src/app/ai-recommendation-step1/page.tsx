"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";

export default function AiRecommendationStep1() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 flex-1 px-4 py-8">
        <h1 className="text-lg font-bold mb-4">나에게 맞는 챌린지 찾기</h1>
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-sm font-bold mb-2">어떤 고민이 있나요?</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "자기이해",
              "자아성찰",
              "신체건강",
              "자존감",
              "인간관계",
              "따돌림",
              "가족",
              "부부",
              "육아",
              "직장",
              "취업",
              "진로",
              "사업",
              "연애",
              "이별",
              "결혼",
              "정신건강",
              "불안",
              "우울",
              "스트레스 관리",
              "회복",
              "트라우마",
            ].map((item, index) => (
              <button
                key={index}
                className="bg-gray-100 py-2 rounded-lg shadow-sm text-sm text-gray-800 hover:bg-gray-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
          onClick={() => router.push("/ai-recommendation-step2")}
        >
          다음
        </button>
      </main>
      <Footer />
    </div>
  );
}
