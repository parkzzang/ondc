"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 flex-1 pt-6 px-4">
        {/* 커뮤니티 섹션 */}
        <section className="mb-6">
          <h1 className="text-lg font-bold mb-4">커뮤니티</h1>
          {/* 챌린지 공유 */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold">챌린지 공유</h2>
              <button className="text-blue-500 text-sm">더보기</button>
            </div>
            <div className="space-y-2">
              {[
                { user: "한결같은한결", days: 52 },
                { user: "온도씨", days: 28 },
                { user: "고양이좋아", days: 104 },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold">{item.user}</p>
                    <p className="text-xs text-gray-500">챌린지 {item.days}일째 완료 공유합니다.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 인기글 */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold">인기글</h2>
              <button className="text-blue-500 text-sm">더보기</button>
            </div>
            <div className="space-y-2">
              {[
                { rank: 1, title: "헤어지고 나서 너무 힘들어요", comments: 3, likes: 3 },
                { rank: 2, title: "헤어지고 나서 너무 힘들어요", comments: 3, likes: 3 },
                { rank: 3, title: "헤어지고 나서 너무 힘들어요", comments: 3, likes: 3 },
              ].map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <p className="text-sm font-bold">{item.rank}위 {item.title}</p>
                    <p className="text-xs text-gray-500">댓글 {item.comments}·공감 {item.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 자유게시판 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold">자유게시판</h2>
              <button className="text-blue-500 text-sm">더보기</button>
            </div>
            <div className="space-y-2">
              {[
                { category: "이별", title: "헤어지고 나서 너무 힘들어요", comments: 3, likes: 3 },
                { category: "진로", title: "직장에서의 스트레스와 직무변경 고려", comments: 3, likes: 3 },
              ].map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <p className="text-sm font-bold">
                      <span className="text-blue-500">[{item.category}]</span> {item.title}
                    </p>
                    <p className="text-xs text-gray-500">댓글 {item.comments}·공감 {item.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
