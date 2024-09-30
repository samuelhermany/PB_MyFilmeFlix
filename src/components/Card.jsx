import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdInfoOutline } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";

import styles from './Card.module.css';
import "../global.css"

export function Card({src}){
   return (
      <div className={styles.container}>
         <div className={styles.imagem_div}>
            <img className={styles.imagem} src={src} alt="" />
         </div>
         <div className={styles.buttons}>
            <div className={styles.buttons_left}>
               <FaRegStar className={styles.icon}/>
               <FaRegCircleCheck className={styles.icon}/>
            </div>
            <IoAddCircleOutline className={styles.icon}/>
         </div>
      </div>
   )
}
