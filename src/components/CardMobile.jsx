import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdInfoOutline } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import styles from './CardMobile.module.css';
import "../global.css"

export function CardMobile({src}){
   return (
      <div className={styles.container}>
            <div className={styles.div_imagem}>
               <img className={styles.imagem} src={src} alt="" />
            </div>
            <div className={styles.buttons}>
               <MdInfoOutline className={styles.icon}/>
               <HiOutlineDotsVertical className={styles.icon}/>
            </div>
      </div>
   )
}
