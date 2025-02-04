"use client";

import React, { useState, useEffect } from "react";

const RecommendedCounselors = () => {
  const [activeTab, setActiveTab] = useState("분야별");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = {
    분야별: ["연애", "건강", "가족"],
    시간별: ["오전", "오후", "저녁"],
    가격별: ["1만원 이하", "1~3만원", "3만원 이상"],
  };

  const counselors = [
    { id: 1, name: "홍길동", specialty: "소개1" },
    { id: 2, name: "김철수", specialty: "소개2" },
    { id: 3, name: "이영희", specialty: "소개3" },
  ];

  useEffect(() => {
    // 기본 활성화 상태 설정
    setSelectedCategory("연애");
  }, []);

  return (
    <section className="bg-white py-8 mb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800">추천순 상담가 리스트</h2>
        {/* 탭 */}
        <div className="flex space-x-4 mt-4">
                {Object.keys(categories).map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-m font-semibold ${
                      activeTab === tab ? "text-black font-semibold" : "text-gray-400"
                    }`}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedCategory("");
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

        {/* 카테고리 목록 */}
        {activeTab && (
          <div className="flex space-x-4 mt-4">
            {categories[activeTab].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-3xl border text-semibold ${
                  selectedCategory === category
                    ? "bg-black border-black text-white"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* 상담사 리스트 */}
        {selectedCategory && (
          <div className="mt-6 space-y-4">
            {counselors.map((counselor) => (
              <div
                key={counselor.id}
                className="p-4 bg-gray-100 rounded shadow-lg flex items-center space-x-4"
              >
                <img
                  src={`https://picsum.photos/100/100?random=${counselor.id}`}
                  alt={counselor.name}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-lg font-medium text-black">{counselor.name}</h3>
                  <p className="text-sm text-gray-600">{counselor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedCounselors;
