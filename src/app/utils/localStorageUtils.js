export const saveDiaryEntry = (date, diaryEntry) => {
    localStorage.setItem(date, JSON.stringify(diaryEntry));
  };
  
  export const getDiaryEntry = (date) => {
    const entry = localStorage.getItem(date);
    return entry ? JSON.parse(entry) : null;
  };
  
  export const deleteDiaryEntry = (date) => {
    localStorage.removeItem(date);
  };
  
  export const getAllDiaryEntries = () => {
    return Object.keys(localStorage)
      .filter((key) => /\d{4}.\d{1,2}.\d{1,2}/.test(key)) // 날짜 형식에 맞는 키만 가져오기
      .map((key) => JSON.parse(localStorage.getItem(key)));
  };
  