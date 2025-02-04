"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


export default function MyPage() {
    const pathname = usePathname();
const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 flex-1 pt-6 px-4">
        {/* 마이페이지 섹션 */}
        <section className="mb-6">
          <h1 className="text-lg font-bold mb-4">마이페이지</h1>
          {/* 사용자 정보 카드 */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-bold">온도씨 님</p>
                  <p className="text-xs text-gray-500">25세</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm">수정하기</button>
            </div>
            <hr className="my-2" />
            <ul className="space-y-2">
              <li className="text-sm">내 활동 보기</li>
              <li className="text-sm">공지사항</li>
              <li className="text-sm font-bold">FAQ</li>
              <li className="text-sm">고객지원</li>
              <li className="text-sm">로그아웃</li>
            </ul>
          </div>

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
        </section>
      </main>
      <Footer />
    </div>
  );
}