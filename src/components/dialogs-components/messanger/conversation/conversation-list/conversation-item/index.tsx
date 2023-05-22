import styles from './conversation-item.module.css';

interface IConversationItem {
  type: string;
  message: string;
}

const ConversationItem = ({ type, message }: IConversationItem) => {
console.log(type);
  return (
    <li className={styles.item}>
      <span className={`${styles.message} ${styles[type]}`}>{message} </span>
    </li>
  );
};

export default ConversationItem;
