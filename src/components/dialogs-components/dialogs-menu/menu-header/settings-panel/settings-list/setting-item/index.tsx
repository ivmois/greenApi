import { ChangeEvent } from 'react';
import styles from './setting-item.module.css';
import { requiredSetting } from '../settings-list.services';

interface ISettingsItem {
  name: string;
  isActive: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SettingItem = ({ name, isActive, handleChange }: ISettingsItem) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <span className={styles.text}>{requiredSetting[name]} </span>
        <span className={styles.checkbox}>
          <input className={styles.input} type="checkbox" name={name} checked={isActive === 'yes' ? true : false} onChange={handleChange} />
          <span></span>
        </span>
      </label>
    </li>
  );
};

export default SettingItem;
