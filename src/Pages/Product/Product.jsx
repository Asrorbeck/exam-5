import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrePosts from "../../Components/Post-items/pre-post";
import Number from '../../images/number.png'
import './Product.scss'

function Product() {
    const params = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productID}`)
        .then(response => response.json())
        .then(data => {
            setProduct([data])
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return(
        <ul>
            {
                product.map((item) => (
                    <li className="product" key={item.id}>
                        <div className="product__header-wrapper">
                            <div className="product__top-left-wrapper">
                                <select className="product__select">
                                    <option value="1">Любая категория</option>
                                </select>

                                <input type="text" className="product__input" placeholder="Что будем искать ?" />

                                <select className="product__select-second">
                                    <option value="Uzbekistan">По всей Узбекистану</option>
                                </select>

                                <a href="#" className="product__search">Найти</a>
                            </div>

                            <div className="product__top-right-wrapper">
                                <a href="#" className="product__adding">Добавить обьявления</a>
                            </div>
                        </div>

                        <div className="product__nested-link"><Link className="product__home" to={'/'}>Home Page</Link> / <p className="product__nested-page">{item.category}</p></div>

                        <h2 className="product__title">{item.title}</h2>

                        <div className="product__wrapper">
                            <img src={item.image} className="product__main-img" />

                            <div className="product__right-wrapper">
                                <div className="product__top-wrapper">
                                    <p className="product__category-text">Category: {item.category}</p>

                                    <p className="product__category-text">обновлено: 28.04.17 добавлено: 28.04.17</p>
                                </div>

                                <p className="product__price">{item.price} y.e.</p>

                                <a href="#" className="product__address-link">Ташкент, Ташкентская область, Юнусабадский район</a>

                                <div className="product__num-wrapper">
                                    <a href="#"><img src={Number} alt="" /></a>

                                    <a href="#"><img src={Number} alt="" /></a>
                                </div>

                                <p className="product__author">Автор обьявлении: <a href="#" className="product__author-name">Зухриддин Темиров</a></p>

                                <a href="#" className="product__contact-author">Написать автору</a>

                                <a href="#" className="product__contact-author">Предложить свою цену</a>

                                <div className="product__list-wrapper">
                                    <ul className="product__main-list">
                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Количество комнат:</p>

                                            <p className="product__main-item-child">6</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Этажность дома:</p>

                                            <p className="product__main-item-child">6</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Планировка</p>

                                            <a href="#" className="product__main-item-child-link">Раздельная</a>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Санузел</p>

                                            <a href="#" className="product__main-item-child">2 санузла и более</a>
                                        </li>
                                    </ul>

                                    <ul className="product__main-list">
                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Общая площадь:</p>

                                            <p className="product__main-item-child">40 м2</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Состояние квартиры:</p>

                                            <p className="product__main-item-child">Первая сдача </p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Год постройки/сдачи</p>

                                            <a href="#" className="product__main-item-child-link">Сдача в 2017</a>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Меблирована</p>

                                            <a href="#" className="product__main-item-child">Да</a>
                                        </li>
                                    </ul>

                                    <ul className="product__main-list">
                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Этаж:</p>

                                            <p className="product__main-item-child">32</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Этаж:</p>

                                            <p className="product__main-item-child">32</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Ремонт</p>

                                            <p className="product__main-item-child">Авторский проект</p>
                                        </li>

                                        <li className="product__main-item">
                                            <p className="product__main-item-title">Высота потолков</p>

                                            <p className="product__main-item-child">32</p>
                                        </li>
                                    </ul>
                                </div>

                                <p className="product__location-having-title">Рядом есть</p>

                                <a href="#" className="product__location-having-link">Больница, поликлиника, Детская, площадка, Детский сад,Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</a>

                                <p className="product__description-title">About</p>

                                <p className="product__description-body">{item.description}</p>

                                <div className="product__bottom-statics">
                                    <p className="product__viewings">Просмотры: {item.rating.count}</p>

                                    <a href="#" className="product__warning">Пожаловатсия</a>
                                </div>
                            </div>
                        </div>

                        <div className="product__link-second-wrapper">
                            <a href="#" className='product__page-link product__page-link--active'>Просмотренные</a>

                            <a href="#" className='product__page-link'>Выбор редакции</a>

                            <a href="#" className='product__page-link'>Сниженные цены</a>
                        </div>

                        <div className='product__line'></div>

                        <ul className="product__posts">
                            <PrePosts />
                        </ul>
                    </li>
                    ))
            }
        </ul>
    )
}

export default Product