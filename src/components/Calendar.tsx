"use client";

import React, { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태 관리

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getDayOfWeek = (year, month) => new Date(year, month, 1).getDay();

  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const days = [...Array(daysInMonth(currentYear, currentMonth)).keys()].map(
    (i) => i + 1
  );

  const firstDayOffset = getDayOfWeek(currentYear, currentMonth);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-500"
          onClick={() =>
            setSelectedDate(new Date(currentYear, currentMonth - 1, 1))
          }
        >
          {"<"}
        </button>
        <p className="text-lg font-bold">
          {currentYear}.{currentMonth + 1}
        </p>
        <button
          className="text-gray-500"
          onClick={() =>
            setSelectedDate(new Date(currentYear, currentMonth + 1, 1))
          }
        >
          {">"}
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center text-gray-600 text-sm">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {/* Empty slots for offset */}
        {[...Array(firstDayOffset)].map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDateClick(day)}
            className={`text-sm rounded-full p-2 ${
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === currentMonth
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
