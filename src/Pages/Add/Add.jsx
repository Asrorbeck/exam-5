import { PhotoCamera } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Add.scss'

function Add() {
    const costRef = useRef()
    const valuteRef = useRef()
    const dogovorRef = useRef()
    const numberOfRoomsRef = useRef()
    const floorRef = useRef()
    const roofRef = useRef()
    const yardRef = useRef()
    const typeRef = useRef()
    const electrRef = useRef()
    const textAreaRef = useRef()
    const PhoneNumRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const LocationCityRef = useRef()
    const LocationDistrictRef = useRef()

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(
            'narx:' + costRef.current.value,'\n',
            'valuta: ' + valuteRef.current.value, '\n',
            'dogovor: ' + dogovorRef.current.checked,'\n',
            'xonalar soni: ' + numberOfRoomsRef.current.value,'\n',
            'Этажность дома: ' + floorRef.current.value,'\n',
            'Высота потолков: ' + roofRef.current.value,'\n',
            'Площадь участка: ' + yardRef.current.value,'\n',
            'Тип дома: ' + typeRef.current.value,'\n',
            'Электричество: ' + electrRef.current.value,'\n',
            'Textarea: ' + textAreaRef.current.value,'\n',
            'Phone number: ' + PhoneNumRef.current.value,'\n',
            'email: ' + emailRef.current.value,'\n',
            'Name of Person: ' + nameRef.current.value,'\n',
            'Location of City: ' + LocationCityRef.current.value,'\n',
            'Location of District: ' + LocationDistrictRef.current.value,
            );
    }
    return(
        <div className="add">
            <form onSubmit={handleSubmit} className='add__form'>
                <div className="add__cost-wrapper">
                    <p className="add__label-name">Цена</p>

                    <div className="add__cost-input-wrapper">
                        <input ref={costRef} type="text" className="add__input-text" />

                        <select ref={valuteRef} className="add__select">
                            <option value="Сум">Сум</option>
                        </select>

                        <input ref={dogovorRef} type="checkbox" name="cost__checkbox" />
                        <label htmlFor="cost__checkbox">Договорная</label>
                    </div>
                </div>


                    <div className="add__room-wrapper">
                        <p className="add__label-name">Количество комнат*</p>

                        <div className="add__room-input-wrapper">
                            <input ref={numberOfRoomsRef} type="number" className="add__input-text" />

                            <input type="number" className="add__input-text" />

                            <input type="number" className="add__input-text" />
                        </div>

                    </div>

                    <div className="add__chekbox-wrapper">
                        <p className="add__label-name">Расположение*</p>


                        <div className="add__checkbox-input-wrapper" >
                            <input type="checkbox" id='cityID' />
                            <label className='add__select-label' htmlFor="cityID">В городе</label>

                            <input type="checkbox" id='shosseID' />
                            <label className='add__select-label' htmlFor="shosseID">Вдоль трассы</label>

                            <input type="checkbox" id='massiveID' />
                            <label className='add__select-label' htmlFor="massiveID">В дачном массиве</label>

                            <input type="checkbox" id='climateID' />
                            <label className='add__select-label' htmlFor="climateID">В пригороде</label>

                            <input type="checkbox" id='vodemaID' />
                            <label className='add__select-label' htmlFor="vodemaID">Возле водоема, реки</label>

                            <input type="checkbox" id='closedID' />
                            <label className='add__select-label' htmlFor="closedID">На закрытой территории</label>

                            <input type="checkbox" id='locationID' />
                            <label className='add__select-label' htmlFor="locationID">В сельской местности</label>

                            <input type="checkbox" id='lastID' />
                            <label className='add__select-label' htmlFor="lastID">В предгорьях</label>        
                        </div>
                    </div>

                    <div className="add__main-wrapper">
                        <div className="add__floor-wrapper">
                            <p className="add__label-name">Этажность дома*</p>

                            <input ref={floorRef} type="number" className="add__input-text" />
                        </div>

                        <div className="add__floor-wrapper">
                            <p className="add__label-name">Высота потолков</p>

                            <input ref={roofRef} type="text" className="add__input-text" />
                        </div>
                        
                        <div className="add__floor-wrapper">
                            <p className="add__label-name">Площадь участка*</p>

                            <input ref={yardRef} type="number" className="add__input-text" />
                        </div>
                    </div>

                    <div className="add__chekbox-wrapper">
                        <p className="add__label-name">Расположение*</p>


                        <div className="add__checkbox-input-wrapper">
                            <input type="checkbox" id='cityID' />
                            <label className='add__select-label' htmlFor="cityID">В городе</label>

                            <input type="checkbox" id='shosseID' />
                            <label className='add__select-label' htmlFor="shosseID">Вдоль трассы</label>

                            <input type="checkbox" id='massiveID' />
                            <label className='add__select-label' htmlFor="massiveID">В дачном массиве</label>

                            <input type="checkbox" id='climateID' />
                            <label className='add__select-label' htmlFor="climateID">В пригороде</label>

                            <input type="checkbox" id='vodemaID' />
                            <label className='add__select-label' htmlFor="vodemaID">Возле водоема, реки</label>

                            <input type="checkbox" id='closedID' />
                            <label className='add__select-label' htmlFor="closedID">На закрытой территории</label>

                            <input type="checkbox" id='locationID' />
                            <label className='add__select-label' htmlFor="locationID">В сельской местности</label>

                            <input type="checkbox" id='lastID' />
                            <label className='add__select-label' htmlFor="lastID">В предгорьях</label>        
                        </div>
                    </div>

                    <div className="add__main-wrapper">
                        <div className="add__floor-wrapper">
                            <p className="add__label-name">Тип дома</p>

                            <input ref={typeRef} type="text" className="add__input-text" />
                        </div>

                        <div className="add__floor-wrapper">
                            <p className="add__label-name">Электричество</p>

                            <input ref={electrRef} type="text" className="add__input-text" />
                        </div>
                    </div>

                    <div className="add__chekbox-wrapper">
                        <p className="add__label-name">Расположение*</p>


                        <div className="add__checkbox-input-wrapper">
                            <input type="checkbox" id='cityID' />
                            <label className='add__select-label' htmlFor="cityID">В городе</label>

                            <input type="checkbox" id='shosseID' />
                            <label className='add__select-label' htmlFor="shosseID">Вдоль трассы</label>

                            <input type="checkbox" id='massiveID' />
                            <label className='add__select-label' htmlFor="massiveID">В дачном массиве</label>

                            <input type="checkbox" id='climateID' />
                            <label className='add__select-label' htmlFor="climateID">В пригороде</label>

                            <input type="checkbox" id='vodemaID' />
                            <label className='add__select-label' htmlFor="vodemaID">Возле водоема, реки</label>

                            <input type="checkbox" id='closedID' />
                            <label className='add__select-label' htmlFor="closedID">На закрытой территории</label>

                            <input type="checkbox" id='locationID' />
                            <label className='add__select-label' htmlFor="locationID">В сельской местности</label>       
                        </div>
                    </div>

                    <div className="add__textarea-wrapper">
                        <p className="add__label-name">Электричество</p>

                        <textarea ref={textAreaRef} className='add__textarea' placeholder='Есть возможность подключения' cols="60" rows="10"></textarea>
                    </div>

                    <span className="add__upload">
                        <IconButton sx={{padding: '35px'}} color="primary"  aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                        </IconButton>
                    </span>

                    <h3 className="add__location-address">Местоположение объекта</h3>

                    <div className="add__location-select-wrapper">
                        <select ref={LocationCityRef} className='add__select'>
                            <option value="Ташкент">Ташкент</option>
                        </select>

                        <select ref={LocationDistrictRef} className='add__select'>
                            <option value="Мирза Улугбекский район">Мирза Улугбекский район</option>
                        </select>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38336.80451000451!2d69.31497744136624!3d41.33482133415096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4431777da7b%3A0x289db26806f061e!2z0JzQuNGA0LfQvi3Qo9C70YPQs9Cx0LXQutGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1665569836361!5m2!1sru!2s" width="654" height="376"></iframe>

                    <p className="add__label-name">Телефонный номер</p>

                    <input ref={PhoneNumRef} type="text" className="add__input-text" placeholder='+998935662002' />

                    <p className="add__label-name">Email-адрес</p>

                    <input ref={emailRef} type="email" className="add__input-text" placeholder='google.com@gmail.com' />

                    <p className="add__label-name">Контактный лицо</p>

                    <input ref={nameRef} type="text" className="add__input-text" placeholder='Зухриддин' />

                    <div className="add__bottom-wrapper">
                        <button type='submit' className='add__adding-link'>Добавить обьявления бесплатно</button>
                        
                        <a href="#" className="add__watching-link">Предпросмотр</a>
                    </div>
                
            </form>
        </div>
    )
}

export default Add