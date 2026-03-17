import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TonConnectButton } from '@tonconnect/ui-react';
import { LayoutGrid, Wallet, Gift, User, Star } from 'lucide-react';
import { useUserStore } from './store/useUserStore';
import { useTelegram } from './hooks/useTelegram';

// Импортируем наши страницы
import Profile from './pages/Profile/Profile';
import Shop from './pages/Shop/Shop';

const App = () => {
  const { tickets } = useUserStore();
  const { user } = useTelegram();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <LayoutGrid />, label: 'Игры' },
    { path: '/shop', icon: <Wallet />, label: 'Касса' },
    { path: '/bonuses', icon: <Gift />, label: 'Бонусы' },
    { path: '/profile', icon: <User />, label: 'Профиль' },
  ];

  return (
    <div className="flex flex-col h-[100dvh] bg-dark-bg text-white overflow-hidden font-sans">
      {/* HEADER */}
      <header className="p-4 flex justify-between items-center border-b border-white/5 bg-card-bg/30 backdrop-blur-md sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-white/40 tracking-[3px] uppercase">Buronka</span>
          <div className="flex items-center gap-2">
            <Star className="text-gold-main fill-gold-main" size={18} />
            <span className="text-xl font-black text-gold-main">{tickets.toLocaleString()}</span>
          </div>
        </div>
        <TonConnectButton />
      </header>

      {/* PAGES ROUTING */}
      <main className="flex-1 overflow-y-auto p-4 pb-28">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <LayoutGrid size={48} className="mb-4" />
              <p className="font-bold">ЛОББИ В РАЗРАБОТКЕ</p>
            </div>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bonuses" element={
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <Gift size={48} className="mb-4" />
              <p className="font-bold">СКОРО НОВЫЕ БОНУСЫ</p>
            </div>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 glass flex justify-around z-50">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              location.pathname === item.path ? 'text-neon-purple scale-110' : 'text-gray-500'
            }`}
          >
            <div className={`${location.pathname === item.path ? 'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
