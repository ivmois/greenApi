import { useContext, useEffect } from 'react';
import styles from './messanger.module.css';
import MessangerHeader from './messanger-header';
import Conversation from './conversation';
import MessangerInput from './messanger-input';
import { loginDetailsContext } from '../../../context/loginDetailsContext';
import { chatContext } from '../../../context/chatContext';
import { deleteMessage, getMessage } from '../../../api/api';
import { messageType } from '../../../types/enums';

const Messanger = () => {
  const { loginDetails } = useContext(loginDetailsContext);
  const { setChat, activeChat } = useContext(chatContext);

  useEffect(() => {
    const updateChats = async () => {
      try {
        let response;
        while ((response = await getMessage(loginDetails))) {
          const receiptId = response.data.receiptId;
          const webhookBody = response.data.body;
          const typeMessage = webhookBody.messageData.typeMessage;

          if (webhookBody.typeWebhook === 'incomingMessageReceived' && typeMessage === 'textMessage') {
            const senderTel = String(parseInt(webhookBody.senderData.sender));
            const senderName = webhookBody.senderData.senderName;
            const message: string = webhookBody.messageData.textMessageData.textMessage;
            const idMessage = webhookBody.idMessage;
            if (message) {
              setChat((prev) => {
                if ([...prev].find((chats) => chats.tel === senderTel)) {
                  return [
                    ...prev.map((chat) => {
                      return chat.tel === senderTel
                        ? { ...chat, messages: [...chat.messages, { id: idMessage, type: messageType.incoming, message: message }] }
                        : { ...chat };
                    }),
                  ];
                } else {
                  return [...prev, { name: senderName, tel: senderTel, messages: [{ id: idMessage, type: messageType.incoming, message: message }] }];
                }
              });
            }
          }
          await deleteMessage(loginDetails, receiptId);
        }
      } catch (error) {
        console.log(error);
      }
    };

    updateChats();

    const interval = setInterval(updateChats, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [loginDetails, setChat]);

  return (
    <div className={styles.messenger}>
      <MessangerHeader text={activeChat.name ?? activeChat.tel} />
      <Conversation />
      <MessangerInput tel={activeChat.tel} />
    </div>
  );
};

export default Messanger;
