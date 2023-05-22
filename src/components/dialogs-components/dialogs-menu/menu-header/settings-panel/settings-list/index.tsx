import { ChangeEvent, useContext } from 'react';
import { settingContext } from '../../../../../../context/settingsContext';
import { getSettingList, requiredSetting } from './settings-list.services';
import SettingItem from './setting-item';
import styles from './settings-list.module.css';
import { loginDetailsContext } from '../../../../../../context/loginDetailsContext';
import { postSettings } from '../../../../../../api/api';

const SettingsList = () => {
  const { settingsData, setSettingsData } = useContext(settingContext);
  const { loginDetails } = useContext(loginDetailsContext);

  const settingsList = getSettingList(settingsData, requiredSetting);

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const currentName = event.target.name;
      const currentValue = event.target.checked;
      await postSettings(loginDetails, { name: currentName, value: currentValue ? 'yes' : 'no' });
      setSettingsData((prev) => ({
        ...prev,
        [currentName]: currentValue ? 'yes' : 'no',
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={styles.list}>
      {settingsList.map((setting) => (
        <SettingItem key={setting.name} name={setting.name} isActive={setting.value} handleChange={onChange} />
      ))}
    </ul>
  );
};

export default SettingsList;
