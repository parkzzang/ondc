"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("/");

  const tabs = [
    { label: "홈", icon: "/icon/home.svg", path: "/" },
    { label: "일기장", icon: "/icon/diary.svg", path: "/diary" },
    { label: "챌린지", icon: "/icon/challenge.svg", path: "/challenges" },
    { label: "커뮤니티", icon: "/icon/community.svg", path: "/community" },
    { label: "마이페이지", icon: "/icon/mypage.svg", path: "/mypage" },
  ];

  return (
    <div className="bg-white shadow-md fixed bottom-0 left-0 w-full flex justify-around py-2">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex flex-col items-center cursor-pointer transition-transform ${
            activeTab === tab.path
              ? "text-blue-500 scale-105"
              : "text-gray-600 hover:scale-105"
          }`}
          onClick={() => {
            setActiveTab(tab.path); // 활성화된 탭 업데이트
            router.push(tab.path); // 경로 이동
          }}
        >
          <img
            src={tab.icon}
            alt={tab.label}
            className={`w-6 h-6 ${
              activeTab === tab.path ? "brightness-125" : "brightness-75"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              activeTab === tab.path ? "font-bold" : ""
            }`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}
