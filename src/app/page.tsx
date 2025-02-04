"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyChallenges from "../components/MyChallenges"; // '내 챌린지' 컴포넌트
import PopularPosts from "../components/PopularPosts"; // '인기글' 컴포넌트
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="bg-gray-100 flex-1 pt-[80px] pb-[80px] px-4">
        <div className="bg-gray-100 min-h-screen">
          {/* 온도씨 구독하기 */}
          <section
            className="bg-white py-4 px-4 mb-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-50 active:scale-95 transition-transform cursor-pointer"
            onClick={() => router.push("/subscribe")}
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800">온도씨 구독하기</h2>
            </div>
            <ChevronRight className="text-gray-500 w-6 h-6" />
          </section>

          {/* 내 챌린지 */}
          <section className="py-8 mb-4">
            <div className="container mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">내 챌린지</h2>
              <MyChallenges /> {/* 분리된 컴포넌트 사용 */}
            </div>
          </section>

          {/* 일기 버튼 */}
          <section className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h1 className="text-lg font-bold">일기 쓰기</h1>
          <button
            onClick={() => router.push("/diary/write")}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
          >
            일기 쓰기
          </button>
        </section>

          {/* 인기글 */}
          <section className="py-8 mb-4">
            <div className="container mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">인기글</h2>
              <PopularPosts /> {/* 분리된 컴포넌트 사용 */}
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
