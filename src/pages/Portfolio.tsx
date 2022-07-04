import Header from '../Components/Header'
import styles from './portfolio.module.scss'
import { ReactComponent as Telegram } from '../img/telegram.svg';
import { ReactComponent as Discord } from '../img/discord.svg';
// import { ReactComponent as Insta } from './img/insta.svg';
import { ReactComponent as Youtube } from '../img/youtube.svg';
import { useState } from 'react';
import Projects from '../Components/Projects';

export default function Portfolio() {
    const [some, setSome] = useState(1)

    const getComponent = () => {
        switch (some) {
            case 1:
                return <Projects />;
            case 2:
                return 'two';
            case 3:
                return 'three'
            default:
                return 'error'
        }
    }
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.background}></div>
            <div className={styles.info}>
                <div className={styles.avatar}>
                    <img src="https://i.ibb.co/zr67tTv/scale-1200.webp" alt="" />
                </div>
                <div className={styles.name}>Иван Грозный</div>
                <div className={styles.date}>На сайте 6 месяцев</div>
                <div className={styles.socialNetworks}>
                    <Telegram />
                    <Discord />
                    {/* <Insta /> */}
                    <Youtube />
                </div>
                <div className={styles.description}>Добрый день, я князь всея Руси, делаю арты на заказ в технике Городецкая роспись.</div>
            </div>
            
            <div className={styles.projects}>
                <div className={styles.tabs}>
                    <div className={styles.tab + (some === 1 ? ' ' + styles.active : '')} onClick={() => setSome(1)}>Портфолио</div>
                    <div className={styles.tab + (some === 2 ? ' ' + styles.active : '')} onClick={() => setSome(2)}>Магазин</div>
                    <div className={styles.tab + (some === 3 ? ' ' + styles.active : '')} onClick={() => setSome(3)}>Посты</div>
                </div>
                {
                    getComponent()
                }
            </div>
        </div>
    )
}