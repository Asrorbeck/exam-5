import Search from '../../images/search.svg'
import './News.scss'
import { Slider } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Posts from '../../Components/Post-items/Posts';
import PrePosts from '../../Components/Post-items/pre-post';

function News() {

    const onChange = (value) => {
        console.log('onChange: ', value);
      };
      
      const onAfterChange = (value) => {
        console.log('onAfterChange: ', value);
      };

    return(
        <div className="news">
            <div className="news__search-wrapper">
                <img src={Search} alt="" />

                <input type="text" className="news__search-input" placeholder='Введите название обявления или ' />

                <a href="#" className="news__search-link">выберите из списка</a>
            </div>

            <div className="news__color-wrapper">
                <p className="news__color-text news__interest">Интерсное</p>
                <p className="news__color-text news__top">Топ</p>
                <p className="news__color-text news__dogovor">Отличные предложение</p>
                <p className="news__color-text news__costs">Супер цена</p>
                <p className="news__color-text news__tashkent">г.Ташкент</p>
                <p className="news__color-text news__termez">г.Термез</p>
                <p className="news__color-text news__samarkand">г.Самарканд</p>
            </div>

            <span className='news__auto'>
                <p className="news__auto-title">Вы сейчас в рубрике</p>

                <Autocomplete className='news__autocomplete' 
                    multiple
                    id="tags-standard"
                    options={newCategory}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[newCategory[1]]}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder="Favorites"
                    />
                    )}
                />
            </span>
            
            <span className='news__slider-wrapper'>
                <p className='news__slider-text'>Выберите цену от и до</p>
            <Slider className='news__slider'
                range
                step={1}
                defaultValue={[20, 50]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
            </span>

            <div className="news__segment-wrapper">
                <div className="news__selects-wrapper">
                    <select className='news__triple-select'>
                        <option value="1">Состояние</option>
                    </select>

                    <select className='news__triple-select'>
                        <option value="2">Тип объявщика</option>
                    </select>

                    <select className='news__triple-select'>
                        <option value="3">Ташкент {'>'} Мирза улугбекский район</option>
                    </select>
                </div>

                <a href="#" className="news__segment-link">Применить</a>
            </div>

            <div className="news__line"></div>

            <ul className='news__list'>
                <Posts />
            </ul>

            <div className="news__line"></div>

            <a href="#" className="news__see-more">Покозать еще (20)</a>

            <div className="news__search-now">
                <div className="news__search-now-wrapper">
                    <img src={Search} alt="" />

                    <h3 className="news__search-title">СЕЙЧАС ИЩУТ</h3>
                </div>

                <ul className='news__search-list'>
                    <li className='news__search-item'>
                        <a href="#" className="news__search-item-link">
                            <p className="news__search-item-title">купить Мясная продукция</p>

                            <p className="news__search-item-subtitle">2 часа назад</p>
                        </a>
                    </li>

                    <li className='news__search-item'>
                        <a href="#" className="news__search-item-link">
                            <p className="news__search-item-title">купить Мясная продукция</p>

                            <p className="news__search-item-subtitle">2 часа назад</p>
                        </a>
                    </li>

                    <li className='news__search-item'>
                        <a href="#" className="news__search-item-link">
                            <p className="news__search-item-title">купить Мясная продукция</p>

                            <p className="news__search-item-subtitle">2 часа назад</p>
                        </a>
                    </li>

                    <li className='news__search-item'>
                        <a href="#" className="news__search-item-link">
                            <p className="news__search-item-title">купить Мясная продукция</p>

                            <p className="news__search-item-subtitle">2 часа назад</p>
                        </a>
                    </li>
                </ul>
            </div>

            <p className="news__newings">САМОЕ ИНТЕРЕСНОЕ</p>

            <ul className="news__posts">
                <PrePosts />
            </ul>

        </div>
    )
}

export default News


const newCategory = [
    { title: 'Mens wear', year: 1994 },
    { title: 'Womens wear', year: 1972 }];