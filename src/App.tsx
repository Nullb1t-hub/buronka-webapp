import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TonConnectButton } from '@tonconnect/ui-react';
import { LayoutGrid, Wallet, Gift, User, Star } from 'lucide-react';
import { useUserStore } from './store/useUserStore';
import { useTelegram } from './hooks/useTelegram';

const App = () => {
  const { tickets } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <LayoutGrid />, label: 'Игры' },
    { path: '/shop', icon: <Wallet />, label: 'Касса' },
    { path: '/bonuses', icon: <Gift />, label: 'Бонусы' },
    { path: '/profile', icon: <User />, label: 'Профиль' },
  ];

  return (
    <div className="flex flex-col h-[100dvh] bg-dark-bg text-white overflow-hidden">
      <header className="p-4 flex justify-between items-center border-b border-white/5 bg-card-bg/30">
        <div className="flex items-center gap-2">
          <Star className="text-gold-main fill-gold-main" size={20} />
          <span className="text-xl font-black text-gold-main">{tickets}</span>
          <span className="text-[10px] text-gold-main/60 font-bold uppercase mt-1">Tickets</span>
        </div>
        <TonConnectButton />
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-24">
        <Routes>
          <Route path="/" element={<div className="text-center py-10">🎰 Список игр скоро здесь</div>} />
          <Route path="/shop" element={<div className="text-center py-10">💰 Магазин билетов</div>} />
          <Route path="/bonuses" element={<div className="text-center py-10">🎁 Твои награды</div>} />
          <Route path="/profile" element={<div className="text-center py-10">👤 Настройки аккаунта</div>} />
        </Routes>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 p-4 glass flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              location.pathname === item.path ? 'text-neon-purple' : 'text-gray-500'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
