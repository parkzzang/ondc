"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";

const challenges = [
  {
    name: "하루에 물 2L 마시기",
    progress: "100일 완료/100일 중",
    status: "리워드 받기",
    statusColor: "text-green-500",
  },
  {
    name: "주변사람들에게 감사 표현하기",
    progress: "30일 완료/100일 중",
    status: "30%",
    statusColor: "text-blue-500",
  },
  {
    name: "8시간 이상 수면하기",
    progress: "30일 완료/100일 중",
    status: "30%",
    statusColor: "text-blue-500",
  },
];

export default function Challenges() {
  const router = useRouter();

  const handleAiRecommendation = () => {
    // 첫 번째 페이지로 이동
    router.push("/ai-recommendation-step1");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="bg-gray-100 flex-1 pt-[80px] pb-[80px] px-4">
        <div className="container mx-auto">
          {/* 현재 진행 중인 챌린지 */}
          <section className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">현재 진행중인 챌린지 3/3</h2>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">{challenge.name}</h3>
                    <p className="text-xs text-gray-600">{challenge.progress}</p>
                  </div>
                  <span className={`text-sm font-bold ${challenge.statusColor}`}>{challenge.status}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 진행 상황 */}
          <section className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">진행상황</h2>
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <p className="text-sm text-gray-600">진행상황을 일기장에 기록 후 챌린지를 완료하세요</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </section>

          {/* 챌린지 선택하기 */}
          <section className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">챌린지 선택하기</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "스트레스 관리",
                "대인관계 개선",
                "감정 표현",
                "자존감 강화",
              ].map((challenge, index) => (
                <button
                  key={index}
                  className="bg-gray-100 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                  {challenge}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
                onClick={handleAiRecommendation}
              >
                AI가 추천하는 챌린지
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

// Page 1: AI Recommendation Step 1
export function AiRecommendationStep1() {
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

// Page 2: AI Recommendation Step 2
export function AiRecommendationStep2() {
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