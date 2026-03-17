/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Наши кастомные цвета BURONKA
        'dark-bg': '#0a0b10',    // Глубокий темный
        'card-bg': '#161923',    // Цвет карточек игр
        'gold-main': '#facc15',  // Золото для Tickets
        'neon-purple': '#8b5cf6' // Фиолетовый акцент
      },
      borderRadius: {
        'tma': '20px', // Закругление как в Telegram
      }
    },
  },
  plugins: [],
}
