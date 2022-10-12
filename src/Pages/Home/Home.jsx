import Posts from '../../Components/Post-items/Posts'
import './Home.scss'
import sliderOne from '../../images/slider-1.png'
import sliderTwo from '../../images/slider-2.png'
import sliderThree from '../../images/slider-3.png'
import Container from '../../Components/Container/Container'
import PrePosts from '../../Components/Post-items/pre-post'

function Home() {
    return(
        <div className="home">
            <ul className="home__menu-list">
                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                        Автомобили  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                        Недвижимость  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Электроника  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Работа  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Личные вещи  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Дом и Сад  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Стройка и ремонт  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Хобби и Спорт  
                    </a>
                </li>

                <li className="home__menu-item">
                    <a href="#" className="home__menu-title">
                    Бизнес и услуги  
                    </a>
                </li>
            </ul>

            <div className="home__link-wrapper">
                <a href="#" className='home__page-link home__page-link--active'>Новые объявления</a>

                <a href="#" className='home__page-link'>Лучщие предложение</a>
            </div>

            <div className='home__line'></div>

            <ul className="home__posts">
                <Posts />
            </ul>

            <div className='home__line'></div>

            <div className="home__slider">
                <Container>
                    <div className="home__slider-wrapper">
                        <a href="#"><img src={sliderOne} alt="" /></a>
                
                        <a href="#"><img src={sliderTwo} alt="" /></a>

                        <a href="#"><img src={sliderThree} alt="" /></a>
                    </div>
                </Container>
            </div>

            <div className="home__link-second-wrapper">
                <a href="#" className='home__page-link home__page-link--active'>Просмотренные</a>

                <a href="#" className='home__page-link'>Выбор редакции</a>

                <a href="#" className='home__page-link'>Сниженные цены</a>
            </div>

            <div className='home__line'></div>

            <ul className="home__posts">
                <PrePosts />
            </ul>

            <div className='home__line'></div>
        </div>
    )
}

export default Home