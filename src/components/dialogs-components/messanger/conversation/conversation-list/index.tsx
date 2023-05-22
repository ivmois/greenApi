import { useContext } from 'react';
import { chatContext } from '../../../../../context/chatContext';

import styles from './conversation-list.module.css';
import ConversationItem from './conversation-item';

const ConversationList = () => {
  const { chats, activeChat } = useContext(chatContext);

  const currentChat = [...chats].find((chat) => chat.tel === activeChat.tel);
  if (!currentChat) return null;

  return (
    <ul className={styles.list}>
      {currentChat.messages.map((message) => (
        <ConversationItem key={message.id} type={message.type} message={message.message} />
      ))}
    </ul>
  );
};

export default ConversationList;
