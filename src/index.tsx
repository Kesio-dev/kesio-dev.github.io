import './reset.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './ui.scss'
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';
import { $pending, $updateUser, setPending } from './store/user';
import { useStore } from 'effector-react';


const App = () => {
  const pending = useStore($pending)

  useEffect(() => {
    // const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    // if(cookie.length === 0) {
    //   setPending(false)
    // } else if (cookie.length >= 1) {
      axios.get('http://localhost:3001/auth/getMe', { withCredentials: true })
        .then(req => $updateUser([req.data]))
        .then(req => setPending(false))
        .catch(req => setPending(false))
    // } else {
    //   setPending(false)
    // }

  }, [])
  return (
    pending ? <></> :
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main />} />

          

          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />
          <Route path="/:userId" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
