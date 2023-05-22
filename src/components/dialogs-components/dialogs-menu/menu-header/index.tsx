import { useState } from 'react';
import styles from './menu-header.module.css';
import SettingsButton from './settings-button';
import Panel from './panel';


const MenuHeader = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleOpen = () => {
    setIsOpenPanel(true);
  };

  const handleClose = () => {
    setIsOpenPanel(false);
  };

  return (
    <header className={styles.header}>
      <SettingsButton handleOpen={() => handleOpen()} />
      <Panel isOpen={isOpenPanel} handleClose={()=> handleClose()}/>
    </header>
  );
};

export default MenuHeader;
