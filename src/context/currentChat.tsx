import { createContext, useState } from 'react';
import { IContact } from '../types/types';

interface ICurrentChatContext {
  contact: IContact;
  setContact: (value: IContact | ((value: IContact) => IContact)) => void;
}

export const currentChatContext = createContext<ICurrentChatContext>({ contact: { name: '', tel: '' }, setContact: () => {} });

export const CurrentChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<IContact>({ name: '', tel: '' });
  return <currentChatContext.Provider value={{ contact: data, setContact: setData }}>{children}</currentChatContext.Provider>;
};
