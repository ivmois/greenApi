import React from 'react';
import ArrowIcon from '../../icons/arrow';
import styles from './arrow-button.module.css';
interface IArrowButton {
  handleClose: () => void;
}

const ArrowButton = ({ handleClose }: IArrowButton) => {
  return (
    <button onClick={handleClose}>
      <ArrowIcon />
    </button>
  );
};

export default ArrowButton;
