import axios from 'axios';
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { $pending, $updateUser, $user } from '../store/user'
import styles from './header.module.scss'


export default function Header() {
  const user = useStore($user);
  const pending = useStore($pending);
  // useEffect(() => {
  //   axios.get('http://localhost:3001/auth/getMe', { withCredentials: true })
  //           .then(req => $updateUser([req.data]))
  //           .then(req => setPending(false))
  // }, [])

  const Logout = () => {
    axios.post('http://localhost:3001/auth/logout', {}, { withCredentials: true })
    $updateUser([])
  }

  return (
    pending ? <div></div> : <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Link to="/" className={styles.logo}>SYP</Link>
          <div className="search">
            <div className="searchIcon searchIcon_search">
              <input className="searchInput" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className={styles.rightHeader}>
          {
            user.length === 0 ?
              <Link to="/auth/login" className="btn">Вход</Link>
              :
              <div className={styles.user}>
                {/* <button onClick={() => Logout()}>Logout</button> */}
                <Link to="/auth/login" className="btn active">Новый пост</Link>
                <Link to={user[0].username} className={styles.name}>{user[0].firstname} {user[0].lastname.split('')[0]}.</Link>
                <Link to={user[0].username} className={styles.image}><img src={'http://localhost:3001' + user[0].image} alt="" /></Link>
              </div>
          }
        </div>
      </div>
    </div>
  )
}