import React from 'react';
import styles from './main.module.scss'
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>SYP</div>
          <div className={styles.rightHeader}>
            <div className="search">
              <div className="searchIcon searchIcon_search">
                <input className="searchInput" type="text" placeholder="Search" />
              </div>
            </div>
            <a href="#" className="btn">Вход</a>
          </div>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.text}>
          <div className={styles.title}>Создай свое портфолио прямо сейчас!</div>
          <div className={styles.subtitle}>Теперь вы можете с легкостью создать и поделиться своим портфолио прямо сейчас</div>
          <a href="#" className="btn active big">Подробнее</a>
        </div>
        <div className={styles.img}>
          <img src="https://illustrators.ru/uploads/home_slider/image/9/main_Без_имени-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
