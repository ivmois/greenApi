import ConversationList from './conversation-list';
import styles from './conversation.module.css';

const Conversation = () => {
  return (
    <div className={styles.conversation}>
      <ConversationList />
    </div>
  );
};

export default Conversation;
