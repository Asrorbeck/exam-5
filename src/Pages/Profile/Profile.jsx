import './Profile.scss'
import jpg from '../../images/jpg.png'
import more from '../../images/more.svg'

function Profile() {
    return(
        <div className="profile">
            <div className="profile__header-wrapper">
                <div className="profile__top-left-wrapper">
                    <select className="profile__select">
                        <option value="1">Любая категория</option>
                    </select>
        
                    <input type="text" className="profile__input" placeholder="Что будем искать ?" />
        
                    <select className="profile__select-second">
                        <option value="Uzbekistan">По всей Узбекистану</option>
                    </select>
        
                    <a href="#" className="profile__search">Найти</a>
                </div>
        
                <div className="profile__top-right-wrapper">
                    <a href="#" className="profile__adding">Добавить обьявления</a>
                </div>
            </div>

            <div className="profile__hello-page">
                <p className="profile__name">Здравствуйте Зухриддин Темиров</p>

                <div className="profile__right-wrapper">
                    <p className="profile__right-money">Ваш счет: 2 3000 сум</p>

                    <a href="#" className="profile__add-money">Пополнить</a>
                </div>
            </div>

            <div className="profile__link-second-wrapper">
                <a href="#" className='profile__page-link profile__page-link--active'>Объявления</a>

                <a href="#" className='profile__page-link'>Сообщения</a>

                <a href="#" className='profile__page-link'>Платежи и счёт</a>

                <a href="#" className='profile__page-link'>Настройки</a>

                <a href="#" className='profile__page-link'>Мой бизнес</a>
            </div>

            <div className='profile__line'></div>

            <div className="profile__namings">
                <p className="profile__photo">Фото</p>
                <p className="profile__nazvaniya">Название</p>
                <p className="profile__cost">Цена</p>
                <p className="profile__date">Дата</p>
                <p className="profile__action">Действие</p>
            </div>

            <ul className="profile__list">
                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>

                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>

                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>

                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>

                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>

                <li className="profile__item">
                    <div className="profile__item-top">
                        <img src={jpg} alt="" />

                        <p className="profile__item-title">Срочно нужен программист yii2</p>

                        <p className="profile__cost-text">2 000 000 6000 000 сум</p>

                        <p className="profile__date-text"># 345 002 С: 28 июнь По: 28 июль</p>

                        <a href="#" className="profile__buy-link">Поднять</a>

                        <a href="#" className="profile__ad-link">Рекламировать</a>

                        <a href="#" className="profile__more-link"><img src={more} alt="" /></a>
                    </div>

                    <div className="profile__item-bottom">
                        <p className="profile__stats">Статистика</p>
                        <p className="profile__views">Просмотры: 195</p>
                        <p className="profile__views">Тел.: 200</p>
                        <p className="profile__views">В Избранном: 0</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Profile