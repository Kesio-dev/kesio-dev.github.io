import Header from '../Components/Header'
import styles from './portfolio.module.scss'
import { ReactComponent as Telegram } from '../img/telegram.svg';
import { ReactComponent as Discord } from '../img/discord.svg';
// import { ReactComponent as Insta } from './img/insta.svg';
import { ReactComponent as Youtube } from '../img/youtube.svg';
import { useEffect, useState } from 'react';
import Projects from '../Components/Projects';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { $pending, IUser, setPending } from '../store/user';

export default function Portfolio() {
    const [some, setSome] = useState(1)
    const param = useParams()
    const [user, setUser] = useState<IUser[]>([])
    const [pending, setPending] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        const func = async () => {
            await axios.get(`http://localhost:3001/user/getOne/${param.userId}`)
                .then(res => setUser([res.data]))
                .catch(({ response }) => {
                    setError('' + response.data.message)
                })
            setPending(false)
        }
        func()
    }, [])


    const getComponent = () => {
        switch (some) {
            case 1:
                return <Projects />;
            case 2:
                return <Projects />;
            case 3:
                return <Projects />
            default:
                return 'error'
        }
    }
    return (
        error === 'username' ? <>Error</> : pending ? <></> :
            <div className={styles.main}>
                <Header />
                <div className={styles.background}></div>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <img src={'http://localhost:3001' + user[0].image} alt="" />
                    </div>
                    <div className={styles.name}>{user[0].firstname} {user[0].lastname}</div>
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