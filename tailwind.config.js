/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 다크모드를 class 방식으로 설정
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#FF7F50', // Coral (주황색 계열)
        'gradient-end': '#FF4500',   // OrangeRed (빨간색 계열)
      },
      fontSize: {
        'logo': '2rem', // 로고용 큰 글씨 크기
      },
    },
  },
  plugins: [],
}

