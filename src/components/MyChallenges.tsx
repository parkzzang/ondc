"use client";

import React from "react";

interface Challenge {
  name: string;
  progress: string;
  status: "completed" | "incomplete";
  reward: string;
}

const challenges: Challenge[] = [
  {
    name: "하루에 물 2L 마시기",
    progress: "100일 완료/100일 중",
    status: "completed",
    reward: "리워드 받기",
  },
  {
    name: "매일 30분 운동하기",
    progress: "50일 완료/100일 중",
    status: "incomplete",
    reward: "50%",
  },
  {
    name: "하루에 책 10페이지 읽기",
    progress: "20일 완료/100일 중",
    status: "incomplete",
    reward: "20%",
  },
];

export default function MyChallenges() {
  return (
    <div className="space-y-4">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
        >
          <div>
            <h3 className="text-lg font-bold text-gray-800">{challenge.name}</h3>
            <p className="text-sm text-gray-600">{challenge.progress}</p>
          </div>
          <div>
            <span
              className={`text-blue-500 font-bold text-sm ${
                challenge.status === "completed" ? "cursor-pointer" : ""
              }`}
            >
              {challenge.reward}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
