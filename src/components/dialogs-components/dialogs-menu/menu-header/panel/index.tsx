import { useEffect, useState } from 'react';
import styles from './panel.module.css';
import SettingsPanel from '../settings-panel';

const DELAY = 100;

interface IPanel {
  isOpen: boolean;
  handleClose: () => void;
}

const Panel = ({ isOpen, handleClose }: IPanel) => {
  const [isActivePanel, setIsActivePanel] = useState(false);

  useEffect(() => {
    if (isOpen) setIsActivePanel(true);

    if (!isOpen) {
      setTimeout(() => setIsActivePanel(false), DELAY);
    }
  }, [isOpen]);

  return (
    <div
      className={styles.panel}
      style={
        isOpen
          ? { transform: 'translateX(0)', transition: `transform ${DELAY}ms ease` }
          : { transform: 'translateX(-100%)', transition: `transform ${DELAY}ms ease` }
      }
    >
      {isActivePanel && <SettingsPanel handleClose={() => handleClose()} />}
    </div>
  );
};

export default Panel;
