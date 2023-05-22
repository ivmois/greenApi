import { ChangeEvent, useContext, useState } from 'react';
import styles from './add-contact-form.module.css';
import { IContact } from '../../../../../../types/types';
import ArrowButton from '../../../../../../ui/arrow-button';
import { chatContext } from '../../../../../../context/chatContext';

interface IAddContactForm {
  handleClose: () => void;
}

const AddContactForm = ({ handleClose }: IAddContactForm) => {
  const [inputsValue, setInputsValue] = useState<IContact>({
    tel: '',
    name: '',
  });

  const { setChat } = useContext(chatContext);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setInputsValue((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = () => {
    setChat((prev) => [...prev, { name: inputsValue.name, tel: inputsValue.tel, messages: [] }]);
    handleClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ArrowButton handleClose={handleClose} />
      <div className={styles.innerForm}>
        <label className={styles.label}>
          <span className={styles.name}> Номер телефона</span>
          <input className={styles.input} type="tel" name="tel" value={inputsValue.tel} onChange={handleOnChange} />
        </label>
        <label className={styles.label}>
          <span className={styles.name}> Имя</span>
          <input className={styles.input} type="text" name="name" value={inputsValue.name} onChange={handleOnChange} />
        </label>
        <button className={styles.button} type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

export default AddContactForm;
