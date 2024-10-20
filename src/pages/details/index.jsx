import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './index.module.css';
import '../../global.css'

import { Menu } from '../../components/Menu';
import { moviesURL, apiKey } from '../../config';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi"
import { FaRegStar } from "react-icons/fa";
const imgClassificacaoLivre = "https://ottvsimg.ottvs.com.br/res/rating/0.png";
const imgClassificacaoAcima18 = "https://ottvsimg.ottvs.com.br/res/rating/A18.png";


export function Details(){
   const [detalhes, setDetalhes] = useState({});
   const [trailerUrl, setTrailerUrl] = useState(null);
   const [diretor, setDiretor] = useState("");
   const [atores, setAtores] = useState("");
   const { id } = useParams();
   const {title:titulo, overview: sinopse, runtime:duracao, genres, release_date, adult, production_countries } = detalhes;

   const generos = genres && genres.length > 0 ? genres.map(item => item.name).join(" | ") : 'Sem gêneros disponíveis';
   const pais = production_countries && production_countries.length > 0 ? production_countries[0].name : 'País não disponível';
   const ano_lancamento = new Date(release_date).getFullYear();
   const classificacao = adult ? imgClassificacaoAcima18 : imgClassificacaoLivre;

   const getDetalhes = async (id) => {
      const url = `${moviesURL}${id}?${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setDetalhes(data);
      console.log(data);
   }

   // Função para buscar trailer do filme
   const getTrailer = async (movieId) => {
      const url = `${moviesURL}${movieId}/videos?${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();

      // Procura o trailer entre os vídeos
      const trailer = data.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      if (trailer)
         setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&mute=1&loop=1&playlist=${trailer.key}`);
    };

   // Função para buscar dos creditos do filme (atores, diretor)
   const getCreditos = async (movieId) => {
      const url = `${moviesURL}${movieId}/credits?${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();

       // 5 atores pricipais
      const atores = data.cast.slice(0, 5).map((ator) => ator.name).join(' | ');
      // Diretor
      const diretor = data.crew.find((membro) => membro.job === 'Director').name;
      setAtores(atores);
      setDiretor(diretor);
   };

   useEffect(() => {
      getDetalhes(id);
      getTrailer(id);
      getCreditos(id);
   }, [id]);

   return (
      <div className={styles.container}>
         <Menu />
         {trailerUrl ? (
         <div className={styles.videoBackground}>
            <iframe className={styles.videoIframe}
               src={trailerUrl}
               title="Trailer do filme"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            ></iframe>
         </div>
         ) : (
         <p>Nenhum trailer disponível</p>
         )}

         <div className={styles.content}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <div className={styles.line}>
               <BiLike className={styles.icon}/>
               <BiDislike className={styles.icon}/>
               <FaRegStar className={styles.icon}/>
            </div>
            <div className={styles.line}>
               <div className={styles.lineInline}>
                  <img className={styles.imgClassificacao} src={classificacao} alt="imagem classificacao" />
                  <h3 className={styles.subTitulo}>{pais}</h3>
               </div>
               <h3 className={styles.subTitulo}>{ano_lancamento} | {duracao} minutos</h3>
            </div>
            <div className={styles.lineInline}>
               <h2 className={styles.subTitulo}>Gênero:</h2>
               <p>{generos}</p>
            </div>
            <div className={styles.line}>
               <p>{sinopse}</p>
            </div>
            <div className={styles.line}>
               <h2 className={styles.subTitulo}>Estrelando:</h2>
               <p>{atores}</p>
            </div>
            <div className={styles.line}>
               <h2 className={styles.subTitulo}>Direção:</h2>
               <p>{diretor}</p>
            </div>
         </div>
      </div>
   )
}