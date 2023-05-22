import { useContext } from 'react';
import { IContact } from '../../../../../../types/types';
import styles from './contact-item.module.css';
import { chatContext } from '../../../../../../context/chatContext';

const ContactsItem = ({ name, tel }: IContact) => {
  const { setActiveChat } = useContext(chatContext);

  const handleClick = () => {
    setActiveChat({ name, tel });
  };
  return (
    <li className={styles.item} onClick={handleClick}>
      <span className={styles.name}>{name}</span>
      <span className={styles.tel}>{tel}</span>
    </li>
  );
};

export default ContactsItem;
