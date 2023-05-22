import styles from './settings-panel.module.css';
import ArrowButton from '../../../../../ui/arrow-button';
import SettingsList from './settings-list';

interface ISettingPanel {
  handleClose: () => void;
}

const SettingsPanel = ({ handleClose }: ISettingPanel) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <ArrowButton handleClose={handleClose} />
      </div>
      <div className={styles.menu}>
        <SettingsList />
      </div>
    </div>
  );
};

export default SettingsPanel;
