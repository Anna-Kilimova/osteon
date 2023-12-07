import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../icons/desktop/frame.svg'



export const Header = () => {

  return <header>
    <div className='wrapper__nav'>
      <div className=' container__nav'>
        <div className='col12-md nav__menu'>
          <div className={'col6-sm menu__container'}>
            <div className={'menu__container_div'}></div>
            <div className={'menu__container_div'}></div>
            <div className={'menu__container_div'}></div>
          </div>
          <div className='social__lang_menu_md'>
            <a href='#'>RU</a>
            <div className={'social__lang_div_md'}></div>
            <a href='#'>UA</a>
          </div>
          <div className='col2 col4-md, socisal__phone_md'>
            <div className='phone_div_md'></div>
            <p>+380983442088</p>
          </div>
          <div className={'col2 col4-md col6-sm'}>
            <div className='container__but_md'>
              <button className={'but__but'}>Записаться</button>
            </div>
          </div>
        </div>
        <div className='col9 container__nav_ul'>
          <div className='nav__ul'>
            <Link className={'nav__link'} to='/'>О студии</Link>
            <Link className={'nav__link'} to='/disease'>Заболевания</Link>
            <Link className={'nav__link'} to='/services'>Услуги</Link>
            <Link className={'nav__link'} to='/shares'>Акции</Link>
            <Link className={'nav__link'} to='/specialists'>Специалисты</Link>
            <Link className={'nav__link'} to='/reviews'>Отзиви</Link>
            <Link className={'nav__link'} to='/contacts'>Контакты</Link>
            <Link className={'nav__link'} to='/prices'>Цены</Link>
          </div>
        </div>
        <div className={'col3 container__but'}>
          <button className={'but__but'}>Записаться</button>
        </div>
      </div>
    </div>
    <div className='wrapper__contacts'>
      <div className='conteiner__contacts'>
        <div className='col2 col4-md col6-sm'>
          <img className={'contacts__logo contacts_img'} src={ logo } alt='logo'/>
        </div>
        <div className='col2 contacts__adress'>
          <div className={'adress_img'}></div>
          <div className={'contacts_ul_adress'}>
            <div className={'contacts_l1_adress'}>г. Киев,</div>
            <div>ул. Л. Руденко, 6а</div>
          </div>
        </div>
        <div className='col2 contacts__clock'>
          <div className='clock_img'></div>
          <div className={'contacts_ul_clock'}>
            <div className={'contacts_ul_clock'}>8:00 - 20:00,</div>
            <div>без выходных</div>
          </div>
        </div>
        <div className='col4-md'>
          <div className='contacts__adressClock_md'>
            <div className={'adressClock_md_div'}>
              <div className={'adress_img'}></div>
              <p>г. Киев,ул. Л. Руденко, 6а</p>
            </div>
            <div className={'adressClock_md_div'}>
              <div className='clock_img'></div>
              <p>8:00 - 20:00, без выходных</p>
            </div>
          </div>
        </div>
        <div className='col2 col4-md'>
          <div className='contacts__social contacts__social_md'>
            <div className={'contacts__social_md_div'}>
              <p>Мы в социальных сетях:</p>
            </div>
            <div className={'social__webs'} >
              <a href=''>
                <div className={'social__webs viber_div'}></div>
              </a>
              <a href=''>
                <div className={'social__webs teleg_div'}></div>
              </a>
              <a className={'social_inst'} href=''>
                <div className={'social__webs inst_div'}></div>
              </a>
              <a href=''>
                <div className={'social__webs fb_div'}></div>
              </a>
            </div>
          </div>
        </div>
        <div className='col2'>
          <div className='socisal__phone'>
            <div className='phone_div'></div>
            <p>+380983442088</p>
          </div>
        </div>
        <div className='col2 col6-sm'>
          <div className='social__lang'>
            <a href='#'>RU</a>
            <div className={'social__lang_div'}></div>
            <a href='#'>UA</a>
          </div>
        </div>
      </div>
    </div>
  </header>
}
