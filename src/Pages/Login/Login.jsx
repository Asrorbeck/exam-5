import './Login.scss'
import kivi from '../../images/kivi.svg'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nameRef = useRef()
    const passwordRef = useRef()
    const { setToken } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = JSON.stringify({
            email: nameRef.current.value,
            password: passwordRef.current.value
        })

        if(nameRef.current.value.length > 0 && passwordRef.current.value.length > 0) {
            fetch(`https://reqres.in/api/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            }).then(res => res.json()).
            then(data => {
                setToken(data)
                navigate('/')
            })
            .catch(err => console.log(err))

            return
        }

        alert("Iltimos Email yokida Passwordni kiriting!!!")
    }

    return(
        <div className="login">
            <div className="login__header-wrapper">
                <div className="login__top-left-wrapper">
                    <select className="login__select">
                        <option value="1">Любая категория</option>
                    </select>
        
                    <input type="text" className="login__input" placeholder="Что будем искать ?" />
        
                    <select className="login__select-second">
                        <option value="Uzbekistan">По всей Узбекистану</option>
                    </select>
        
                    <a href="#" className="login__search">Найти</a>
                </div>
        
                <div className="login__top-right-wrapper">
                    <a href="#" className="login__adding">Добавить обьявления</a>
                </div>
            </div>

            <div className="login__main-wrapper">
                <div className="login__left-wrapper">
                    <h3 className="login__main-title">Ваша регистрация завершена!</h3>

                    <p className="login__main-subtitle">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</p>

                    <form onSubmit={handleSubmit} className='login__form'>
                        <span>
                            <p className="login__input-tel-label">Введите email или номер телефона</p>
                            <input ref={nameRef} type="email" className='login__input-tel' placeholder='example@NajotTalim.org' />
                        </span>

                        <span>
                            <p className="login__input-pass-label">Пароль</p>
                            <input ref={passwordRef} type="password" className='login__input-pass' placeholder='***********' />
                        </span>


                        <button type='submit' className='login__btn'>Войти</button>
                    </form>

                    <a href="#" className="login__reset">Восстоновить ваше пароль</a>
                </div>

                <div className="login__right-wrapper">
                    <div className="login__right">
                        <img src={kivi} width='50' alt="" />

                        <p className="login__right-body">Откройте для себя целую плошадку для продаже</p>

                        <a href="#" className="login__right-link">Как это делать?</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Login