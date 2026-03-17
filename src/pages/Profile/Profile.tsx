import React, { useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { Camera, Mail, ShieldCheck, User as UserIcon } from 'lucide-react';

const Profile = () => {
  const { username, avatar, setProfile } = useUserStore();
  const [email, setEmail] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfile(username, reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-card-bg border-2 border-neon-purple overflow-hidden flex items-center justify-center">
            {avatar ? <img src={avatar} className="w-full h-full object-cover" /> : <UserIcon size={40} className="text-gray-600" />}
          </div>
          <label className="absolute bottom-0 right-0 p-2 bg-neon-purple rounded-full cursor-pointer hover:scale-110 transition-transform">
            <Camera size={16} />
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
          </label>
        </div>
        <h2 className="text-xl font-black tracking-tight">{username}</h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-card-bg rounded-tma border border-white/5 flex items-center gap-4">
          <Mail className="text-neon-purple" />
          <input 
            type="email" 
            placeholder="Привязать Email" 
            className="bg-transparent border-none outline-none flex-1 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-4 bg-card-bg rounded-tma border border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-500" />
            <span className="text-sm font-bold">Верификация</span>
          </div>
          <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-1 rounded-full uppercase">Готово</span>
        </div>
      </div>

      <button className="w-full py-4 bg-neon-purple rounded-tma font-black text-sm shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
        СОХРАНИТЬ ИЗМЕНЕНИЯ
      </button>
    </div>
  );
};

export default Profile;
