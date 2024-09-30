import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import '../../global.css'

import { Menu } from '../../components/Menu';
import { CardMobile } from '../../components/CardMobile';
import { Card } from '../../components/Card';
import img_card from "../../assets/background_card.png";
import img_card_mobile from "../../assets/background_card_mobile.png";

export function Home(){
   const [isMobile, setIsMobile] = useState(false);

   // Função para verificar o tamanho da tela
   const handleResize = () => {
     if (window.innerWidth <= 768) {
       setIsMobile(true);
     } else {
       setIsMobile(false);
     }
   };

   // useEffect para monitorar o resize da janela
   useEffect(() => {
      handleResize(); // Checa o tamanho inicial
      window.addEventListener('resize', handleResize);

      // Remove o listener quando o componente for desmontado
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div>
         <Menu />
         <div className={styles.container_cards}>
            <h1>Assistidos</h1>
            <div className={styles.cards}>
               {isMobile ? (
               <CardMobile src={img_card_mobile}/>
                  ) : (
                  <Card src={img_card}/>
               )}
               {isMobile ? (
               <CardMobile src={img_card_mobile}/>
                  ) : (
                  <Card src={img_card}/>
               )}
            </div>
         </div>
         {/* <Link to={'/'}>Home</Link>
         <Link to={'/config'}>Configuração</Link>
         <Link to={'/details'}>Detalhes</Link>
         <Link to={'/myList'}>Minha Lista</Link>
         <Link to={'/watched'}>Assistidos</Link> */}

      </div>
   )
}