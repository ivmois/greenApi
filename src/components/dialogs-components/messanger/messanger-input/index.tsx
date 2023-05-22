import { KeyboardEvent, useContext } from 'react';
import styles from './messanger-input.module.css';
import { postMessage } from '../../../../api/api';
import { loginDetailsContext } from '../../../../context/loginDetailsContext';
import { IUploadData } from '../../../../types/types';
import { chatContext } from '../../../../context/chatContext';
import { messageType } from '../../../../types/enums';

interface IMessengerInput {
  tel: string;
}

const MessangerInput = ({ tel }: IMessengerInput) => {
  const { loginDetails } = useContext(loginDetailsContext);
  const { setChat } = useContext(chatContext);

  const handleKeyDown = async (event: KeyboardEvent<HTMLDivElement>) => {
    try {
      const messageData: IUploadData = {
        chatId: `${tel}@c.us`,
        message: event.currentTarget.innerText,
      };

      if (event.key === 'Enter') {
        event.preventDefault();
        const response = await postMessage(loginDetails, messageData);
        const idMessage = response.data.idMessage;
        setChat((prev) => {
          return [
            ...prev.map((chat) => {
              return chat.tel === tel
                ? { ...chat, messages: [...chat.messages, { id: idMessage, type: messageType.outgoing, message: messageData.message }] }
                : { ...chat };
            }),
          ];
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.inputPanel}>
      <div
        onKeyDown={handleKeyDown}
        className={styles.input}
        contentEditable={tel ? 'true' : 'false'}
        spellCheck="true"
        title="Введите сообщение"
      ></div>
    </div>
  );
};

export default MessangerInput;
