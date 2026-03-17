import React, { useState } from 'react';
import { useUserStore } from '../../../store/useUserStore';
import { Bomb, Star, TriangleAlert } from 'lucide-react';

const Mines = () => {
  const { tickets, setTickets } = useUserStore();
  const [bet, setBet] = useState(10);
  const [minesCount, setMinesCount] = useState(3);
  const [gameActive, setGameActive] = useState(false);
  const [field, setField] = useState<any[]>(Array(25).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winMultiplier, setWinMultiplier] = useState(1);

  // Инициализация игры
  const startGame = () => {
    if (tickets < bet) return alert('Недостаточно билетов!');
    setTickets(tickets - bet);
    
    const newMines = Array(25).fill(false);
    let placed = 0;
    while (placed < minesCount) {
      const idx = Math.floor(Math.random() * 25);
      if (!newMines[idx]) {
        newMines[idx] = true;
        placed++;
      }
    }
    
    setField(newMines.map(isMine => ({ isMine, revealed: false })));
    setGameActive(true);
    setGameOver(false);
    setWinMultiplier(1);
  };

  const revealCell = (idx: number) => {
    if (!gameActive || field[idx].revealed) return;

    const newField = [...field];
    newField[idx].revealed = true;
    setField(newField);

    if (newField[idx].isMine) {
      setGameActive(false);
      setGameOver(true);
    } else {
      // Простая формула роста икса
      const newMult = winMultiplier * (1 + (minesCount / 10));
      setWinMultiplier(newMult);
    }
  };

  const cashOut = () => {
    const win = Math.floor(bet * winMultiplier);
    setTickets(tickets + win);
    setGameActive(false);
    setField(Array(25).fill(null));
    alert(`Выигрыш: ${win} Tickets!`);
  };

  return (
    <div className="flex flex-col gap-4 animate-in fade-in">
      <div className="flex justify-between items-center bg-card-bg p-4 rounded-tma border border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase">Множитель</span>
          <span className="text-xl font-black text-brand-neon">x{winMultiplier.toFixed(2)}</span>
        </div>
        {gameActive && (
          <button onClick={cashOut} className="bg-green-500 px-6 py-2 rounded-full font-black text-xs">
            ЗАБРАТЬ {Math.floor(bet * winMultiplier)}
          </button>
        )}
      </div>

      {/* Поле 5x5 */}
      <div className="grid grid-cols-5 gap-2 aspect-square">
        {field.map((cell, i) => (
          <button
            key={i}
            onClick={() => revealCell(i)}
            disabled={!gameActive && !gameOver}
            className={`rounded-xl transition-all duration-300 flex items-center justify-center
              ${!cell?.revealed ? 'bg-card-bg hover:bg-white/10 border border-white/5' : 
                cell.isMine ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-brand-neon shadow-lg shadow-neon-purple/50'}`}
          >
            {cell?.revealed && (cell.isMine ? <Bomb size={20} /> : <Star size={20} className="fill-white" />)}
          </button>
        ))}
      </div>

      {/* Настройки */}
      {!gameActive && (
        <div className="flex flex-col gap-3 p-4 bg-card-bg rounded-tma border border-white/5">
          <div className="flex justify-between">
            <span className="text-xs font-bold uppercase">Ставка: {bet}</span>
            <input type="range" min="10" max="100" step="10" value={bet} onChange={(e) => setBet(Number(e.target.value))} />
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-bold uppercase">Мин: {minesCount}</span>
            <input type="range" min="1" max="24" value={minesCount} onChange={(e) => setMinesCount(Number(e.target.value))} />
          </div>
          <button onClick={startGame} className="w-full py-4 bg-brand-neon rounded-tma font-black uppercase text-sm">
            ИГРАТЬ
          </button>
        </div>
      )}
      
      {gameOver && <div className="text-center text-red-500 font-black animate-bounce flex items-center justify-center gap-2"><TriangleAlert /> БУМ! ТЫ ПРОИГРАЛ</div>}
    </div>
  );
};

export default Mines;
