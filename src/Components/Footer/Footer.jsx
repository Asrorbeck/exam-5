import footerLogo from '../../images/footer__log.png'
import AppStore from '../../images/AppStore.png'
import Android from '../../images/Android.png'
import './Footer.scss'
import Container from '../Container/Container'
import ArrowDown from '../../images/arrow-down.svg'

function Footer() {
    return(
        <div className="footer">
        <Container>
        <div className="footer__top">
        <a href='#' className="footer__logo-wrapper">
        <img src={footerLogo} />
        
        <p className="footer__logo-text">Продай, найди, купи все что ты пожелаешь</p>
        </a>
        
        <p className="footer__center-text">Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
        
        <div className="footer__install-wrapper">
        <a href="#"><img src={AppStore} className="footer__install-img" /></a>
        
        <a href="#"><img src={Android} className="footer__install-img" /></a>
        </div>
        </div>
        </Container>
        
        <div className="footer__bottom">
        <Container>
        <div className="footer__main-wrapper">
        <div className="footer__first-main-wrapper">
        <ul className="footer__top-first-list">
        <li className="footer__top-first-item">
        <p className="footer__top-first-title">Автомобили</p>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Легковые авто
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Мото
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Автобусы
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Грузовые авто
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Сельхозтехника
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Запчасти и Аксессуары
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Прицепы и Спецтехника
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Водный и Другой транспортa
        </a>
        </li>
        </ul>
        
        <ul className="footer__bottom-first-list">
        <li className="footer__bottom-first-item">
        <p className="footer__bottom-first-title">
        Дом и Сад
        </p>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Товары для интерьера</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Товары для сада</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Растения</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Продукты питания</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Посуда и Кухонная утварь</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Хоз.инвентарь и Бытовая химия</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Канцтовары и Расходные</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Прочие товары для дома</a>
        </li>
        </ul>
        </div>
        
        <div className="footer__first-main-wrapper">
        <ul className="footer__top-first-list">
        <li className="footer__top-first-item">
        <p className="footer__top-first-title">Недвижимость</p>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Аренда квартир
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Аренда домов
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Аренда гаражей и Стоянок
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Продажа квартир
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Продажа домов
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Продажа земли
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Продажа гаражей/Стоянок
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Аренда помещений
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Продажа помещений
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Прочая недвижимость
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Обмен недвижимости
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Коммерческая недвижимость
        </a>
        </li>
        </ul>
        
        <ul className="footer__bottom-first-list">
        <li className="footer__bottom-first-item">
        <p className="footer__bottom-first-title">
        Товары стройки и ремонта
        </p>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Двери и окна</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Сантехника</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Стройматериалы</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Инструменты</a>
        </li>
        </ul>
        </div>

        <div className="footer__first-main-wrapper">
        <ul className="footer__top-first-list">
        <li className="footer__top-first-item">
        <p className="footer__top-first-title">Электроника</p>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Телефоны
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Компьютеры
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Ноутбуки, планшеты
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Оргтехника и расходники
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        ТВ,Фото,Видео и Аудио
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Игры и Приставки
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Техника для дома и Для себя
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Климатическое оборудование
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Аксессуары и Комплектующие
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Техника для наблюдения
        </a>
        </li>

        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Прочая электроника
        </a>
        </li>
        </ul>
        
        <ul className="footer__bottom-first-list">
        <li className="footer__bottom-first-item">
        <p className="footer__bottom-first-title">
        Хобби, Отдых и Спорт
        </p>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Антиквариат и Коллекции</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Музыкальные инструменты</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Велосипеды</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Товары для спорта и отдыха</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Книги/Журналы</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">CD/DVD/Пластинки/Кассеты</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Билеты и путешествия</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Охота и рыбалка</a>
        </li>
        </ul>
        </div>

        <div className="footer__first-main-wrapper">
        <ul className="footer__top-first-list">
        <li className="footer__top-first-item">
        <p className="footer__top-first-title">Личные вещи</p>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Одежда, обувь, аксессуары
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Детская одежда и обувь
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Детские товары и Игрушки
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Школьникам
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Часы и украшения
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Товары для красоты и здоровья
        </a>
        </li>
        
        <li className="footer__top-first-item">
        <a href="#" className="footer__top-first-link">
        Разные вещи
        </a>
        </li>
        </ul>
        
        <ul className="footer__bottom-first-list">
        <li className="footer__bottom-first-item">
        <p className="footer__bottom-first-title">
        Бизнес и услуги
        </p>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Сырьё и материалы</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Оборудование и аренда</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Производство и обработка</a>
        </li>
        
        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Продажа бизнеса и партнерство</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Финансовые услуги/Бухгалтерия</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Услуги для красоты и здоровья</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Услуги курьера и доставки</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Реклама, Полиграфия и Маркетинг</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Няни, Сиделки и Домработницы</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Обучение, курсы и репетиторы</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Фото, видео, искусство и дизайн</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Перевод и Набор текста</a>
        </li>

        <li className="footer__bottom-first-item">
        <a href="#" className="footer__bottom-first-link">Юридические услуги</a>
        </li>
        </ul>
        </div>
        </div>

        <a href="#" className='footer__main-link'>Покозать еще <img src={ArrowDown} /></a>

        <div className='footer__line'></div>

        <ul className="footer__deep-list">
            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link footer__deep-link--active'>Подать объявление</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>Объявления</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>Магазины</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>Помощь</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>Безопасность</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>Реклама на сайте</a>
            </li>

            <li className='footer__deep-item'>
                <a href="#" className='footer__deep-link'>О компании</a>
            </li>
        </ul>
        </Container>
        </div>

        
        </div>
        )
    }
    
    export default Footer