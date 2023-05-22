import React from 'react';
import styles from './identification-error.module.css';

const IdentificationError = ({ text }: { text: string }) => {
  return <span className={styles.error} >{text}</span>;
};

export default IdentificationError;
