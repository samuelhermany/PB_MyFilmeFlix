import React, { useState } from 'react';
import styles from './Menu.module.css';
import logo from '../assets/logo.png';
import '../global.css'

export function Menu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div className={styles.card}>
      <nav className={styles.nav}>
      <img className={styles.logo} src={logo} alt="logo" />
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <label
          className={`${styles.checkbtn} ${isChecked ? styles.checked : ''}`}
          onClick={toggleCheckbox} // Adiciona onClick para alternar o estado
        >
          <i className={isChecked ? 'fa-solid fa-xmark' : 'fas fa-bars'}></i>
        </label>
        <ul className={`${styles.menu} ${isChecked ? styles.visible : styles.hidden}`}>
          <li>Início</li>
          <li>Em cartaz</li>
          <li>Assistidos</li>
          <li>Minha lista</li>
          <li>Em Alta</li>
          {/* <li>Por Gênero</li>
          <li>Por Avaliação</li> */}
        </ul>
      </nav>
    </div>
  );
}