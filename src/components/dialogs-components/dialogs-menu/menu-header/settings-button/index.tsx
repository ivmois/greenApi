import React from 'react';
import styles from './settings-button.module.css';
import SettingsIcon from '../../../../../icons/settings';

interface ISettingButton {
  handleOpen: () => void;
}

const SettingsButton = ({ handleOpen }: ISettingButton) => {
  return (
    <button className={styles.button} onClick={handleOpen}>
      <SettingsIcon />
    </button>
  );
};

export default SettingsButton;
