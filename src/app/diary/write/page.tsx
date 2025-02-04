"use client"

import React, { useRef, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Pencil, Minus } from 'lucide-react';
import { saveDiaryEntry } from '../../utils/localStorageUtils';
import { useRouter, usePathname } from 'next/navigation';

export default function AddImageButton() {
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState({
    water: false,
    gratitude: false,
    sleep: false,
  });
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImagePreviews(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleChallengeToggle = (key) => {
    setSelectedChallenges((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const handleSave = () => {
    const formattedDate = formatDate(selectedDate);
    const diaryEntry = {
      date: formattedDate,
      title,
      content,
      images: imagePreviews,
      challenges: selectedChallenges,
    };
  
    localStorage.setItem(formattedDate, JSON.stringify(diaryEntry));  // 날짜를 키로 저장
    saveDiaryEntry(selectedDate.toLocaleDateString(), diaryEntry);
    alert('일기가 저장되었습니다.');
    router.push('/diary');
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 text-gray-900 overflow-y-auto p-4 mt-14 mb-14 bg-gray-100">
        <h1 className="text-lg font-bold mb-4">일기 작성하기</h1>

        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm font-bold">날짜:</span>
            <button 
              className="flex items-center space-x-1 text-blue-500 text-sm font-bold"
              onClick={toggleDatePicker}
            >
              <span>{selectedDate.toLocaleDateString()}</span>
              <Pencil className="h-4 w-4" />
            </button>
          </div>

          {isDatePickerOpen && (
            <DatePicker 
              selected={selectedDate} 
              onChange={(date) => {
                setSelectedDate(date);
                setIsDatePickerOpen(false);
              }} 
              inline 
            />
          )}

<input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-100 p-2 rounded-md mb-4 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

<textarea
            placeholder="일기를 작성하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-gray-100 p-2 rounded-md mb-4 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />

          <div className="flex overflow-x-auto gap-2 mt-4 pb-3">
            {imagePreviews.map((src, index) => (
              <div key={index} className="relative flex-shrink-0 w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
                <button 
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 flex items-center justify-center"
                  onClick={() => handleRemoveImage(index)}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <img src={src} alt={`preview-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <button 
            className="flex items-center space-x-2 text-blue-500 text-sm font-bold mt-2"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="8" y1="12" x2="12" y2="12"></line>
            </svg>
            <span>이미지 추가하기</span>
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-sm font-bold mb-4">챌린지 진행상황 체크</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedChallenges.water}
                onChange={() => handleChallengeToggle("water")}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>하루에 물 2L 마시기</span>
            </label>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedChallenges.gratitude}
                onChange={() => handleChallengeToggle("gratitude")}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>주변사람들에게 감사 표현하기</span>
            </label>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedChallenges.sleep}
                onChange={() => handleChallengeToggle("sleep")}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>8시간 이상 수면하기</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleSave}
           className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600">
        저장하기
      </button>
      </main>

      <Footer />
    </div>
  );
}
