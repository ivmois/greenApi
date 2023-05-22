import React from 'react';
import styles from './messanger-header.module.css';

const MessangerHeader = ({ text }: { text: string }) => {
  return <header className={styles.header}>{text}</header>;
};

export default MessangerHeader;
