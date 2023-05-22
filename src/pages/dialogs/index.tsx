import { useContext, useEffect } from 'react';
import Layout from '../../layout';
import styles from './dialogs.module.css';
import DialogsMenu from '../../components/dialogs-components/dialogs-menu';
import Messanger from '../../components/dialogs-components/messanger';
import { useNavigate } from 'react-router-dom';
import { identificationContext } from '../../context/identificationContext';

const Dialogs = () => {
  const { identification } = useContext(identificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!identification) navigate('/');
  }, [identification]);

  return (
    <Layout>
      <div className={styles.dialogs}>
        <DialogsMenu />
        <Messanger />
      </div>
    </Layout>
  );
};

export default Dialogs;
