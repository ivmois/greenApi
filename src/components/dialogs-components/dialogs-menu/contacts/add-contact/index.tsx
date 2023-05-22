import { useState } from 'react';
import AddContactForm from './add-contact-form';
import styles from './add-contact.module.css';

const AddContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.addContact}>
      <button className={styles.button} onClick={() => handleOpen()} > + Новый контакт </button>
      {isOpen && <AddContactForm handleClose={() => handleClose()} />}
    </div>
  );
};

export default AddContact;
