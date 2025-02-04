"use client";

import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter, usePathname } from 'next/navigation';

export default function DiaryPage() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToWritePage = () => {
    router.push('/diary/write');
  };

  const [diaryEntries, setDiaryEntries] = useState([]);

  const [markedDates, setMarkedDates] = useState([]);

  // 로컬스토리지에서 저장된 일기 데이터 불러오기
  useEffect(() => {
    const keys = Object.keys(localStorage);
    const savedDates = keys.filter(key => /^\d{8}$/.test(key)) // YYYYMMDD 형식 필터링
      .filter(key => {
        const entry = JSON.parse(localStorage.getItem(key));
        return entry && entry.title; // 일기 데이터가 있는 날짜만 필터링
      });

    setMarkedDates(savedDates);
  }, []);
  

  // 일기가 저장된 날짜에 점 표시

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.getFullYear().toString() + 
                          (date.getMonth() + 1).toString().padStart(2, '0') + 
                          date.getDate().toString().padStart(2, '0');  // YYYYMMDD 형식으로 변환
  
      if (markedDates.includes(dateString)) {
        return <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-1"></div>;
      }
    }
    return null;
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 text-gray-900 overflow-y-auto flex-1 pt-6 mt-14 mb-14 px-4">
        {/* 오늘의 챌린지 */}
        <section className="mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <p className="text-sm font-bold">오늘의 챌린지 하러가기</p>
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

        {/* 오늘의 일기 작성 */}
        <section className="mb-6">
          <h1 className="text-lg font-bold mb-4">📖 오늘의 일기 작성</h1>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <Calendar tileContent={tileContent} />
          </div>
          <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-6">
          <span className="text-m font-bold">{new Date().toLocaleDateString()}</span>
          <button
            onClick={navigateToWritePage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            일기 작성하러 가기
          </button>
        </div>
        </section>

        {/* AI의 기본 피드백 */}
        <section className="pb-10">
          <h1 className="text-lg font-bold mb-4">AI의 기본 피드백</h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <p className="text-sm font-bold">직장에서의 스트레스와 직무변경 고려</p>
              <p className="text-xs text-gray-500">2024.3.16</p>
            </div>
            <p className="text-sm text-gray-800 mb-2">
              직장에서 스트레스를 받고 있으며, 직무 변경을 고려 중입니다.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
              <li>직장에서 스트레스와 많은 어려움을 겪고 계십니다. 스트레스가 신체적, 정신적 건강에 영향을 미치니 주의가 필요합니다.</li>
              <li>직무 변경을 고민하고 계시니, 현재 직무에서 가장 큰 스트레스 원인을 파악해 보세요. 업무량, 환경, 동료와의 관계 등을 분석해 직무 변경이 필요하다면 대안을 찾으세요.</li>
              <li>직무 변경 시 새로운 분야의 장단점을 고려하세요. 또한, 운동, 명상 등 스트레스 관리를 위한 개인적 방법을 실천해 보세요.</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
