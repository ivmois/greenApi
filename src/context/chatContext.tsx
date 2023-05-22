import { createContext, useState } from 'react';
import { IContact, IContactChat, IMessagesData } from '../types/types';

interface IChatContext {
  chats: IContactChat[];
  setChat: (tel: string, name?: string, messageData?: IMessagesData) => void;
  activeChat: IContact;
  setActiveChat: (value: IContact | ((value: IContact) => IContact)) => void;
}

export const chatContext = createContext<IChatContext>({ chats: [], setChat: () => {}, activeChat: { name: '', tel: '' }, setActiveChat: () => {} });

export const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChat] = useState<IContactChat[]>([]);
  const [activeChat, setActiveChat] = useState<IContact>({ name: '', tel: '' });

  const updateChat = (tel: string, name?: string, messageData?: IMessagesData) => {
    if (messageData) {
      const { id, type, message } = messageData;
      if (type === 'incoming') {
        setChat((prev) => {
          if ([...prev].find((chats) => chats.tel === tel)) {
            return [
              ...prev.map((chat) => {
                return chat.tel === tel ? { ...chat, messages: [...chat.messages, { id: id, type: type, message: message }] } : { ...chat };
              }),
            ];
          } else {
            return [...prev, { name: name, tel: tel, messages: [{ id: id, type: type, message: message }] }];
          }
        });
      }

      if (type === 'outgoing') {
        setChat((prev) => {
          return [
            ...prev.map((chat) => {
              return chat.tel === tel ? { ...chat, messages: [...chat.messages, { id: id, type: type, message: message }] } : { ...chat };
            }),
          ];
        });
      }
    } else {
      setChat((prev) => [...prev, { name: name, tel: tel, messages: [] }]);
    }
  };

  const state = {
    chats,
    setChat: updateChat,
    activeChat,
    setActiveChat,
  };

  return <chatContext.Provider value={state}>{children}</chatContext.Provider>;
};
