import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'


export const Header = () => {

  return <header>
    <div className='wrapper__nav'>
      <div className='container__nav'>
        <div className='col10 container__nav_ul'>
          <ul className={'nav__ul'}>
            <li className={'nav__li'}>
              <Link className={'nav__link'} to='/'>О студии</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/disease'>Заболевания</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/services'>Услуги</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/shares'>Акции</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/specialists'>Специалисты</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/reviews'>Отзиви</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/blog'>Блог</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/contacts'>Контакты</Link>
            </li>
            <li>
              <Link className={'nav__link'} to='/prices'>Цены</Link>
            </li>
          </ul>
        </div>
        <div className={'container__but col2'}>
          <button className={'but__but'}>Записаться</button>
        </div>
      </div>
    </div>


  </header>
}
