import { create } from 'zustand';

interface UserState {
  tickets: number;
  username: string;
  avatar: string | null;
  setTickets: (amount: number) => void;
  setProfile: (name: string, img: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  tickets: 0,
  username: 'Guest',
  avatar: null,
  setTickets: (amount) => set({ tickets: amount }),
  setProfile: (name, img) => set({ username: name, avatar: img }),
}));
