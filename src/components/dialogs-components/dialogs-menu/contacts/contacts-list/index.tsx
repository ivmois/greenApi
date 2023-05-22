import { useContext } from 'react';
import styles from './contacts-list.module.css';
import ContactsItem from './contact-item';
import { chatContext } from '../../../../../context/chatContext';

const ContactsList = () => {
  const { chats } = useContext(chatContext);

  return (
    <ul className={styles.list}>
      {chats.map((contact) => (
        <ContactsItem key={contact.tel} name={contact.name} tel={contact.tel} />
      ))}
    </ul>
  );
};

export default ContactsList;
