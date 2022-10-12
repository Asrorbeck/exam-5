import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Header.scss'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react' 
import profileImg from '../../images/Temirov.png'

function Header() {
    const { token } = useContext(AuthContext)

    return(
        <div className="header">
            <div >
                <Link className='header__logo-wrapper' to={'/'}>
                    <img src={logo} alt="Logotype of this webpage" />

                    <p className="header__logo-text">Продай, найди, купи все что пожелаешь…</p>
                </Link>
            </div>

            <ul className="header__list">
                <li className="header__item">
                    <Link to={'/products'} className="header__item-link">Объявления</Link>
                </li>

                <li className="header__item">
                    <Link to={'/add-product'} className='header__item-link'>Магазины</Link>
                </li>

                <li className="header__item">
                    <a href="#" className='header__item-link'>Для Бизнеса</a>
                </li>

                <li className="header__item">
                    <a href="#" className='header__item-link'>Помощь</a>
                </li>
            </ul>

            <div className="header__lang-wrapper">
                <a className='header__lang' href="#">Рус</a>

                <span className='header__line'></span>                

                <a href="#" className='header__lang'>Узб</a>
            </div>

            <div className="header__dynamic">
                {token ? <Link to='/profile' className='header__profile-wrapper'>
                    <p className="header__profile-name">Temirov</p>

                    <img src={profileImg} alt="" />
                </Link> : <>

                <Link to={'/login'} className='header__dynamic-link'>Вход</Link>

                <span className='header__dynamic-line'></span>                

                <a className='header__dynamic-link' href="#">Регистрация</a>
                </>}

                
            </div>
        </div>
    )
}

export default Header


{/* <Link to={'/'} className='header__dynamic-link'>Profile</Link> */}