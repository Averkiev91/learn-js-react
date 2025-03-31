import React from 'react';
import styles from './menuTabButton.module.css';
import classNames from 'classnames';

const MenuTabButton = ({ active, onClick, children }) => {
  const buttonClasses = classNames(
    styles.button,
    active ? styles.buttonActive : styles.buttonInactive
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default MenuTabButton;
