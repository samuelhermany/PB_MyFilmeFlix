import React, { useState } from 'react';
import styles from './Menu.module.css';
import logo from '../assets/logo.png';
import '../global.css'
import { Link } from 'react-router-dom';

export function Menu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <>
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
          <li><Link to='/'>Início</Link></li>
          <li><Link to='/emCartaz'>Em cartaz</Link></li>
          <li><Link to='/assistidos'>Assistidos</Link></li>
          <li><Link to='/minhaLista'>Minha lista</Link></li>
          <li>Em Alta</li>
          {/* <li>Por Gênero</li>
          <li>Por Avaliação</li> */}
        </ul>
      </nav>
    </>
  );
}

{/* <Link to={'/'}>Home</Link>
<Link to={'/config'}>Configuração</Link>
<Link to={'/details'}>Detalhes</Link>
<Link to={'/myList'}>Minha Lista</Link>
<Link to={'/watched'}>Assistidos</Link> */}