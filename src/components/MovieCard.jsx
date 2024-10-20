import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import "../global.css"
import styles from './MovieCard.module.css';

import { imageURL } from '../config';

export function MovieCard({movie, showLink = true}) {
   return (
      <div className={styles.container}>
         <div className={styles.imagem_div}>
            <img className={styles.imagem} src={imageURL + movie.poster_path} alt={movie.title} />
         </div>
         <h2>{movie.title}</h2>
         <p>
            <FaStar /> {movie.vote_average}
         </p>
         {/* {showLink && (
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
         )} */}
      </div>
   )
}
