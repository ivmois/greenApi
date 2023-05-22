import React from 'react';
import styles from './dialogs-menu.module.css';
import MenuHeader from './menu-header';
import Contacts from './contacts';

const DialogsMenu = () => {
  return <div className={styles.menu}>
    <MenuHeader />
    <Contacts />
  </div>;
};

export default DialogsMenu;
