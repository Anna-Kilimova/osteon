import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../icons/desktop/frame.svg'
//import menu from '../icons/desktop/eva_menu-outline.svg'


export const Header = () => {

  return <header>
    <div className='wrapper__nav'>
      <div className='col12-md container__nav'>
        <div className='col12-md nav__menu'>
          <div className={'col2-md col6-sm menu__container'}>
            <div className={'menu__container_div'}></div>
            <div className={'menu__container_div'}></div>
            <div className={'menu__container_div'}></div>
          </div>
          <div className='col2 col2-md social__lang_menu_md'>
            <a href='#'>RU</a>
            <div className={'social__lang_div_md'}></div>
            <a href='#'>UA</a>
          </div>
          <div className='col2 col4-md socisal__phone_md'>
            <div className='phone_div_md'></div>
            <p>+380983442088</p>
          </div>
          <div className={'col2 col4-md col6-sm container__but_md'}>
            <button className={'but__but'}>Записаться</button>
          </div>
        </div>
        <div className='col9 container__nav_ul'>
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
        <div className={'col3 container__but'}>
          <button className={'but__but'}>Записаться</button>
        </div>
      </div>
    </div>
    <div className='wrapper__contacts'>
      <div className='col12-md conteiner__contacts'>
        <div className='col2 col4-md col6-sm contacts__logo'>
          <img className={'contacts_img'} src={ logo } alt='logo'/>
        </div>
        <div className='col2 contacts__adress'>
          <div className={'adress_img'}></div>
          <div><ul className={'contacts_ul_adress'}>
            <li className={'contacts_l1_adress'}>г. Киев,</li>
            <li>ул. Л. Руденко, 6а</li>
          </ul>
          </div>
        </div>
        <div className='col2 contacts__clock'>
          <div className='clock_img'></div>
          <div><ul className={'contacts_ul_clock'}>
            <li className={'contacts_ul_clock'}>8:00 - 20:00,</li>
            <li>без выходных</li>
          </ul>
          </div>
        </div>
        <div className='contacts__adressClock_md col4-md'>
          <div className={'adressClock_md_div'}>
            <div className={'adress_img'}></div>
            <p>г. Киев,ул. Л. Руденко, 6а</p>
          </div>
          <div className={'adressClock_md_div'}>
            <div className='clock_img'></div>
            <p>8:00 - 20:00, без выходных</p>
          </div>
        </div>
        <div className='col2 col4-md contacts__social contacts__social_md'>
          <div className={'contacts__social_md_div'}>
            <p>Мы в социальных сетях:</p>
          </div>
          <ul className={'social__webs'}>
            <li><a className={'social__webs_viber'} href=''>
              <div className={'social__webs  viber_div'}></div>
            </a></li>
            <li><a className={'social_teleg'}href=''>
              <div className={'social__webs teleg_div'}></div>
            </a></li>
            <li><a className={'social_inst'} href=''>
              <div className={'social__webs inst_div'}></div>
            </a></li>
            <li><a className={'social_fb'} href=''>
              <div className={'social__webs fb_div'}></div>
            </a></li>
          </ul>
        </div>
        <div className='col2 socisal__phone'>
          <div className='phone_div'></div>
          <p>+380983442088</p>
        </div>
        <div className='col2 col6-sm social__lang'>
          <a href='#'>RU</a>
          <div className={'social__lang_div'}></div>
          <a href='#'>UA</a>
        </div>
      </div>
    </div>
  </header>
}
