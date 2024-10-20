import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import '../../global.css'
import { moviesURL, apiKey } from '../../config';

import { Menu } from '../../components/Menu';
import { Card } from '../../components/Card';

export function Home(){
   const [topMovies, setTopMovies] = useState([]);

   const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setTopMovies(data.results);
   };

   useEffect(() => {
      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
      getTopRatedMovies(topRatedUrl);
   }, []);

   return (
      <div>
         <Menu />
         <div className={styles.container_cards}>
            <h1 className={styles.titulo}>Melhores Avaliações</h1>
            <div className={styles.cards}>
               {topMovies.length === 0 && <p>Carregando...</p>}
               {topMovies.map((item) => (
                  <Card key={item.id} movie={item}/>
               ))}
            </div>
         </div>
      </div>
   )
}