import { createContext, useState } from 'react';
import { IContactChat } from '../types/types';

interface IChatContext {
  chats: IContactChat[];
  setChat: (value: IContactChat[] | ((value: IContactChat[]) => IContactChat[])) => void;
}

export const chatContext = createContext<IChatContext>({ chats: [], setChat: () => {} });

export const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<IContactChat[]>([]);
  return <chatContext.Provider value={{ chats: data, setChat: setData }}>{children}</chatContext.Provider>;
};
