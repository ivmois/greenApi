import { createContext, useState } from 'react';
import { IContact, IContactChat } from '../types/types';

interface IChatContext {
  chats: IContactChat[];
  setChat: (value: IContactChat[] | ((value: IContactChat[]) => IContactChat[])) => void;
  activeChat: IContact;
  setActiveChat: (value: IContact | ((value: IContact) => IContact)) => void;
}

export const chatContext = createContext<IChatContext>({ chats: [], setChat: () => {}, activeChat: { name: '', tel: '' }, setActiveChat: () => {} });

export const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChat] = useState<IContactChat[]>([]);
  const [activeChat, setActiveChat] = useState<IContact>({ name: '', tel: '' });

  const state = {
    chats,
    setChat,
    activeChat,
    setActiveChat,
  };

  return <chatContext.Provider value={state}>{children}</chatContext.Provider>;
};
