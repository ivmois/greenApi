import { ChangeEvent, useContext, useState } from 'react';
import styles from './identification.module.css';
import Layout from '../../layout';
import { IIdentification } from '../../types/types';
import { getSettings } from '../../api/api';
import IdentificationError from '../../components/identification-components/identification-error';
import { settingContext } from '../../context/settingsContext';
import { useNavigate } from 'react-router-dom';
import { identificationContext } from '../../context/identificationContext';
import { loginDetailsContext } from '../../context/loginDetailsContext';

//вводим данные, получаем настройки и отрправляем их в контекст, отправляем в контекст данные для входа, переохдим на '/dialogs'

const Identification = () => {
  const [inputsValue, setInputsValue] = useState<IIdentification>({
    idInstance: '',
    apiTokenInstance: '',
  });
  const [errorMassage, setErrorMassage] = useState('');

  const { setLoginDetails } = useContext(loginDetailsContext);
  const { setSettingsData } = useContext(settingContext);
  const { setIdentification } = useContext(identificationContext);

  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setInputsValue((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));

    if (errorMassage) setErrorMassage('');
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { idInstance, apiTokenInstance } = inputsValue;

    if (idInstance && apiTokenInstance) {
      try {
        const data = await getSettings({ idInstance, apiTokenInstance });
        console.log(data);
        setLoginDetails(inputsValue);
        setSettingsData(data.data);
        setIdentification(true);
        navigate('/dialogs');
      } catch {
        setErrorMassage('не корректные даннные');
      }

      setInputsValue({ idInstance: '', apiTokenInstance: '' });
    } else {
      setErrorMassage('все поля должы быть заполнены');
    }
  };

  return (
    <Layout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="idInstance">
          <span className={styles.name}>idInstance</span>
          <input className={styles.input} type="text" id="idInstance" name="idInstance" value={inputsValue.idInstance} onChange={handleOnChange} />
        </label>

        <label className={styles.label} htmlFor="apiTokenInstance">
          <span className={styles.name}>apiTokenInstance</span>
          <input
            className={styles.input}
            type="text"
            id="apiTokenInstance"
            name="apiTokenInstance"
            value={inputsValue.apiTokenInstance}
            onChange={handleOnChange}
          />
        </label>
        {errorMassage && <IdentificationError text={errorMassage} />}
        <button className={styles.button} type="submit">
          Войти
        </button>
      </form>
    </Layout>
  );
};

export default Identification;
