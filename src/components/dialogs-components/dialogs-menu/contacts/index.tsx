import styles from './contacts.module.css';
import AddContact from './add-contact';
import ContactsList from './contacts-list';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <AddContact />
      <ContactsList />
    </div>
  );
};

export default Contacts;
