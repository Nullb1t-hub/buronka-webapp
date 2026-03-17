import React from 'react';
import { useUserStore } from '../../store/useUserStore';
import { Star, Zap, CreditCard } from 'lucide-react';

const Shop = () => {
  const { setTickets, tickets } = useUserStore();

  const buyTickets = (amount: number) => {
    setTickets(tickets + amount);
    alert(`Куплено ${amount} билетов!`);
  };

  const packs = [
    { amount: 10, price: '10 $', icon: <Star className="text-yellow-400" /> },
    { amount: 50, price: '50 $', icon: <Zap className="text-blue-400" /> },
    { amount: 100, price: '100 $', icon: <CreditCard className="text-purple-400" /> },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-tma border border-white/10">
        <h2 className="text-lg font-black mb-1 text-gold-main">КУПИТЬ БИЛЕТЫ</h2>
        <p className="text-xs text-gray-400">1 билет = 1$. Выбирай пакет и пополняй баланс через TON или Stars.</p>
      </div>

      <div className="grid gap-4">
        {packs.map((pack) => (
          <div key={pack.amount} className="p-4 bg-card-bg rounded-tma border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl">{pack.icon}</div>
              <div>
                <div className="font-black text-lg">{pack.amount} Tickets</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">Цена: {pack.price}</div>
              </div>
            </div>
            <button 
              onClick={() => buyTickets(pack.amount)}
              className="px-6 py-2 bg-white text-black rounded-full font-black text-xs active:scale-90 transition-transform"
            >
              КУПИТЬ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
