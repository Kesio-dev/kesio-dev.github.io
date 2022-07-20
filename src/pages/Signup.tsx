import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styles from './signup.module.scss'
import { ReactComponent as Close } from '../img/close.svg'
import { $updateUser } from '../store/user'


export default function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password2: "",
            password: "",
            firstname: "",
            lastname: ""
        }
    })
    const navigate = useNavigate()
    const [error, setError] = useState<any>()

    const loginFunc = async (data: any) => {
        let err = { message: "not" };
        await axios.post('http://localhost:3001/auth/register', {
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            password: data.password,
        }, { withCredentials: true })
            .then((res) => err = res.data)
            .catch(({ response }) => {
                setError('' + response.data.message)
            })

        await axios.get('http://localhost:3001/auth/getMe', { withCredentials: true })
            .then(req => $updateUser([req.data]))
            .then(req => console.log(req))

        if (err.message === 'success') {
            navigate('/')
        }
    }
    console.log(error)

    const ErrorFunc = () => {
        if (!/.+@.+\.[A-Za-z]+$/.test(watch('email')) && (watch('email').split('').length > 0)) {
            return <div className={styles.error}>Не верная почта1</div>
        }
        console.log(watch('email'))
        if (errors.password2) {
            return <div className={styles.error}>Пароли не совподают</div>
        }
        switch (error) {
            case 'email':
                return <div className={styles.error}>Пользователь с такой почтой уже существует</div>

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
                <div className={styles.title}>Регистрация</div>
                <form onSubmit={handleSubmit(loginFunc)}>
                    <div className={styles.inputs}>
                        <div className={styles.left}>
                            <input {...register('firstname')} className={styles.input} type="text" placeholder='Имя' />
                            <input {...register('lastname')} className={styles.input} type="text" placeholder='Фамилия' />
                            <input {...register('email')} className={styles.input} type="text" placeholder='Почта' />
                        </div>
                        <div className={styles.right}>
                            <input {...register('password')} className={styles.input} placeholder='Пароль' />
                            <input {...register('password2', {
                                required: true,
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })} className={styles.input} placeholder='Повторите пароль' />
                            {
                                ErrorFunc()
                            }
                        </div>
                    </div>
                    <div className={styles.sub}>
                        <input className='btn' type="submit" value="Войти" />
                        <Link to="/auth/login" className={styles.reg}>Уже есть аккаунт??</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}


// /.+@.+\.[A-Za-z]+$/