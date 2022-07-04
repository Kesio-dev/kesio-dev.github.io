import styles from './header.module.scss'


export default function Header() {
    return (
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
    )
}