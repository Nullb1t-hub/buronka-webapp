import React from 'react';
import { Rocket, Bomb, CircleDollarSign, Trophy } from 'lucide-react';

const Home = () => {
  const games = [
    { id: 'mines', name: 'MINES', icon: <Bomb size={32} />, color: 'from-orange-500', desc: 'Найди иксы' },
    { id: 'crash', name: 'CRASH', icon: <Rocket size={32} />, color: 'from-blue-500', desc: 'Успей забрать' },
    { id: 'coin', name: 'COINFLIP', icon: <CircleDollarSign size={32} />, color: 'from-purple-500', desc: '50 на 50' },
    { id: 'jackpot', name: 'JACKPOT', icon: <Trophy size={32} />, color: 'from-green-500', desc: 'Сорви куш' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Баннер */}
      <div className="relative h-32 rounded-tma bg-gradient-to-r from-neon-purple to-brand-accent p-6 overflow-hidden shadow-lg shadow-purple-500/20">
        <div className="relative z-10">
          <h1 className="text-2xl font-black italic tracking-tighter">BURONKA CASINO</h1>
          <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Твой путь к успеху начинается здесь</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 rotate-12">
          <Trophy size={100} />
        </div>
      </div>

      {/* Сетка игр */}
      <div className="grid grid-cols-2 gap-4">
        {games.map((game) => (
          <button
            key={game.id}
            className={`relative flex flex-col items-center justify-center h-40 rounded-tma bg-card-bg border border-white/5 overflow-hidden group active:scale-95 transition-all`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${game.color} to-transparent opacity-10 group-hover:opacity-20 transition-opacity`} />
            <div className="mb-2 p-3 bg-white/5 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
              {game.icon}
            </div>
            <span className="font-black text-sm tracking-widest uppercase">{game.name}</span>
            <span className="text-[8px] font-bold opacity-40 uppercase mt-1">{game.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
