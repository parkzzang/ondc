"use client";

import React from "react";

interface Post {
  rank: number;
  title: string;
  reactions: string;
}

const posts: Post[] = [
  {
    rank: 1,
    title: "헤어지고 나서 너무 힘들어요",
    reactions: "댓글 3·공감 3",
  },
  {
    rank: 2,
    title: "취업 준비가 너무 막막합니다",
    reactions: "댓글 5·공감 7",
  },
  {
    rank: 3,
    title: "가족과의 갈등, 어떻게 해결해야 할까요?",
    reactions: "댓글 2·공감 4",
  },
];

export default function PopularPosts() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.rank}
          className="flex items-center bg-white p-4 rounded-lg shadow-md"
        >
          {/* 순위 */}
          <div className="text-xl font-bold text-blue-500 w-12 text-center">
            {post.rank}위
          </div>

          {/* 글 정보 */}
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.reactions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}