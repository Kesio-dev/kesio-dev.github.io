import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import { ReactComponent as Close } from '../img/close.svg'
import { useStore } from 'effector-react'
import { $updateUser, $user } from '../store/user'


export default function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [error, setError] = useState<any>()
    const user = useStore($user)


    const loginFunc = async (data: any) => {
        let err = { message: "not" };
        await axios.post('http://localhost:3001/auth/login', {
            email: data.email,
            password: data.password
        }, { withCredentials: true })
            .then((res) => err = res.data)
            .catch(({ response }) => {
                setError('' + response.data.message)
            })
        await axios.get('http://localhost:3001/auth/getMe', { withCredentials: true })
            .then(req => $updateUser([req.data]))
        if (err.message === 'success') {
            navigate('/')
        }
    }

    const ErrorFunc = () => {
        switch (error) {
            case 'email':
                return <div className={styles.error}>Такой почты не существует</div>

            case 'password':
                return <div className={styles.error}>Не верный пароль</div>

            case 'email must be an email,password must be longer than or equal to 8 characters':
                return <div className={styles.error}>Не верная почта</div>

            case 'password must be longer than or equal to 8 characters':
                return <div className={styles.error}>Пароль должен содержать минимум 8 знаков</div>

            case 'email must be an email':
                return <div className={styles.error}>Не верная почта</div>
            default:
                break;
        }
    }
    return (
        <div className={styles.login}>
            <div className={styles.window}>
                <Close className={styles.close} onClick={() => navigate(-1)} />
                <div className={styles.title}>Вход</div>
                <form onSubmit={handleSubmit(loginFunc)}>
                    <input {...register('email')} className={styles.input} type="text" placeholder='Почта' />
                    <div className={styles.errorr}></div>
                    <input {...register('password')} className={styles.input} type="text" placeholder='Пароль' />
                    {
                        ErrorFunc()
                    }
                    <div className={styles.sub}>
                        <input className='btn' type="submit" value="Войти" />
                        <Link to="/auth/signup" className={styles.reg}>Еще нету аккаунта?</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}


// /.+@.+\.[A-Za-z]+$/