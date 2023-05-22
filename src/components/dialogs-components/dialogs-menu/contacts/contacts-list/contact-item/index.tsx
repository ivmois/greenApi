import { useContext } from 'react';
import { currentChatContext } from '../../../../../../context/currentChat';
import { IContact } from '../../../../../../types/types';
import styles from './contact-item.module.css';

const ContactsItem = ({ name, tel }: IContact) => {
  const { setContact } = useContext(currentChatContext);

  const handleClick = () => {
    setContact({ name, tel });
  };
  return (
    <li className={styles.item} onClick={handleClick}>
      <span className={styles.name}>{name}</span>
      <span className={styles.tel}>{tel}</span>
    </li>
  );
};

export default ContactsItem;
