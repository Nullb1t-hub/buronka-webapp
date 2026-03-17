import { useEffect, useState } from 'react';

const tg = (window as any).Telegram.WebApp;

export const useTelegram = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    tg.ready();
    tg.expand();
    if (tg.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return {
    tg,
    user,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
