import styles from './header.module.css';
import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <h1 className={styles.title}>BUSINESS CARD MAKER</h1>
    </header>
  );
};

export default Header;
