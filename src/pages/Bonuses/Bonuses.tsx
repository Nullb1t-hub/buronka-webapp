import React from 'react';
import { Gift, Calendar, Share2, Sparkles } from 'lucide-react';

const Bonuses = () => {
  const dailyBonuses = [
    { day: 1, amount: 5, status: 'claim' },
    { day: 2, amount: 10, status: 'locked' },
    { day: 3, amount: 15, status: 'locked' },
    { day: 4, amount: 20, status: 'locked' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-500">
      {/* Секция Daily */}
      <div className="p-5 bg-card-bg rounded-tma border border-white/5 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-neon-purple" size={20} />
          <h3 className="font-black text-sm uppercase">Ежедневный вход</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {dailyBonuses.map((b) => (
            <div key={b.day} className={`flex flex-col items-center p-2 rounded-xl border ${b.status === 'claim' ? 'border-neon-purple bg-neon-purple/10' : 'border-white/5 opacity-40'}`}>
              <span className="text-[10px] font-bold mb-1">ДЕНЬ {b.day}</span>
              <span className="text-xs font-black text-gold-main">+{b.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Колесо фортуны (Заглушка визуальная) */}
      <div className="p-6 bg-gradient-to-b from-card-bg to-bg-deep rounded-tma border border-white/5 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full border-8 border-dashed border-neon-purple/30 flex items-center justify-center mb-4 relative">
          <Sparkles className="text-gold-main animate-pulse" size={40} />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-white rounded-full shadow-lg shadow-white/50" />
        </div>
        <h3 className="font-black text-lg mb-1">WHEEL OF FORTUNE</h3>
        <p className="text-[10px] text-gray-500 font-bold mb-4 uppercase">Крути и выигрывай до 1000 Tickets</p>
        <button className="w-full py-3 bg-white text-black rounded-full font-black text-xs active:scale-95 transition-all">
          КРУТИТЬ БЕСПЛАТНО
        </button>
      </div>

      {/* Рефералка */}
      <div className="p-5 bg-neon-purple/10 rounded-tma border border-neon-purple/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Share2 className="text-neon-purple" size={20} />
          <div className="flex flex-col">
            <span className="font-black text-xs uppercase">Пригласи бро</span>
            <span className="text-[10px] font-bold text-gray-400">+50 за каждого</span>
          </div>
        </div>
        <button className="p-2 bg-neon-purple rounded-lg">
          <Gift size={18} />
        </button>
      </div>
    </div>
  );
};

export default Bonuses;
