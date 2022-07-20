import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import styles from './main.module.scss'
function Main() {


  
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.hero}>
        <div className={styles.text}>
          <div className={styles.title}>Создай свое портфолио прямо сейчас!</div>
          <div className={styles.subtitle}>Теперь вы можете с легкостью создать и поделиться своим портфолио прямо сейчас</div>
          <Link to="/" className="btn active big">Подробнее</Link>
        </div>
        <div className={styles.img}>
          <img src="https://illustrators.ru/uploads/home_slider/image/9/main_Без_имени-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
