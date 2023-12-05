import React from 'react'
//import { Link } from 'react-router-dom'
import './footer.scss'
import logo from '../icons/desktop/logo-2 1.svg'

export const Footer = () => {

  return <footer>
    <div className='wrapper__footer'>
      <div className='container__footer'>
        <div className='col3 col4-md info'>
          <div className={'info__logo'}>
            <img className={'info__logo_img'} src={logo} alt='logo'/>
          </div>
          <div className={'info__text'}>
            <p>© 2022 osteon.net.ua <br/> Все права защищены</p>
          </div>
          <div className={'info__social'}>
            <ul className={'info__social_webs'}>
              <li><a className={'info__webs_viber'} href=''>
                <div className={'info__webs  info__viber_div'}></div>
              </a></li>
              <li><a className={'social_teleg'} href=''>
                <div className={'info__webs info__teleg_div'}></div>
              </a></li>
              <li><a className={'social_inst'} href=''>
                <div className={'info__webs info__inst_div'}></div>
              </a></li>
              <li><a className={'social_fb'} href=''>
                <div className={'info__webs info__fb_div'}></div>
              </a></li>
            </ul>
          </div>
        </div>
        <div className='col2 col4-md disease'>
          <div className='desears__name'>
            <p className={'info__p'}>Заболевания</p>
          </div>
          <div className='disearse__list'>
            <ul>
              <li className={'info__li'}>Головные боли</li>
              <li className={'info__li'}>Боли в мышцах</li>
              <li className={'info__li'}>Внутренние органы</li>
              <li className={'info__li'}>После травм/операций</li>
              <li className={'info__li'}>ВНЧС</li>
              <li className={'info__li'}>Боли в позвоночнике</li>
              <li className={'info__li'}>Нарушение осанки</li>
              <li className={'info__li'}>Отеки</li>
            </ul>
          </div>
        </div>
        <div className='col2 col4-md servises'>
          <div className='servises__name'>
            <p className={'info__p'}>Услуги</p>
          </div>
          <div className='servises__list'>
            <ul>
              <li className={'info__li'}>Остеопатия</li>
              <li className={'info__li'}>Прикладная кинезиология</li>
              <li className={'info__li'}>Мануальная терапия</li>
              <li className={'info__li'}>Кинезиотейпирование</li>
              <li className={'info__li'}>Массаж</li>
            </ul>
          </div>
        </div>
        <div className='col2 col4-md forPacients'>
          <div className='forPacients__name'>
            <p className={'info__p'}>Пациентам</p>
          </div>
          <div className='forPacients__list'>
            <ul>
              <li className={'info__li'}>О студии</li>
              <li className={'info__li'}>Специалисты</li>
              <li className={'info__li'}>Блог</li>
              <li className={'info__li'}>Цены</li>
              <li className={'info__li'}>Акции</li>
            </ul>
          </div>
        </div>
        <div className='col3 col4-md info_md'>
          <div className={'info__logo'}>
            <img className={'info__logo_img'} src={logo} alt='logo'/>
          </div>
          <div className={'info__text'}>
            <p>© 2022 osteon.net.ua <br/> Все права защищены</p>
          </div>
        </div>
        <div className='col3 col4-md contacts'>
          <div className='contacts__name'>
            <p className={'info__p'}>Контакты</p>
          </div>
          <div className='contacts__list'>
            <div className=' contacts__div'>
              <div className='contacts__img contacts__phone_img'></div>
              <div><p className={'info__li'}>+380983442088</p></div>
            </div>

            <div className={'contacts__div'}>
              <div className={'contacts__img contacts__adress_img'}></div>
              <p className={'info__li'}>г. Киев,ул. Л. Руденко, 6а</p>
            </div>
            <div className={'contacts__div'}>
              <div className='contacts__img contacts__clock_img'></div>
              <p className={'info__li'}>8:00 - 20:00, без выходных</p>
            </div>
            <div className={'contacts__div'}>
              <div className='contacts__img contacts__mail_img'></div>
              <p className={'info__li'}>OsteonOsteopat@gmail.com</p>
            </div>
          </div>
          <div className={'contacts__but'}>
            <button className={'contacts__but_but'}>Записаться</button>
          </div>
        </div>
      </div>
      <div className='container__fotter_sm'>
        <div className='col12-sm footer__sm'>
          <div className={'info__p_div'}>
            <p className={'info__p info__p_sm'}>Услуги</p>
          </div>
          <div>
            <p className={'info__p info__p_sm'}>Заболевания</p>
          </div>
          <div>
            <p className={'info__p info__p_sm'}>Пациентам</p>
          </div>
          <div className='contacts_sm'>
            <div className='contacts__name'>
              <p className={'info__p'}>Контакты</p>
            </div>
            <div className='contacts__list'>
              <div className=' contacts__div'>
                <div className='contacts__img contacts__phone_img'></div>
                <div><p className={'info__li'}>+380983442088</p></div>
              </div>
              <div className={'contacts__div'}>
                <div className={'contacts__img contacts__adress_img'}></div>
                <p className={'info__li'}>г. Киев,ул. Л. Руденко, 6а</p>
              </div>
              <div className={'contacts__div'}>
                <div className='contacts__img contacts__clock_img'></div>
                <p className={'info__li'}>8:00 - 20:00, без выходных</p>
              </div>
              <div className={'contacts__div'}>
                <div className='contacts__img contacts__mail_img'></div>
                <p className={'info__li'}>OsteonOsteopat@gmail.com</p>
              </div>
            </div>
            <div className={'contacts__but'}>
              <button className={'contacts__but_but'}>Записаться</button>
            </div>
          </div>
          <div className='info_sm'>
            <div className={'info__social_sm'}>
              <p className={'info_sm_p'}>Ми в социальних сетях</p>
              <ul className={'info__social_webs'}>
                <li><a className={'info__webs_viber'} href=''>
                  <div className={'info__webs  info__viber_div'}></div>
                </a></li>
                <li><a className={'social_teleg'} href=''>
                  <div className={'info__webs info__teleg_div'}></div>
                </a></li>
                <li><a className={'social_inst'} href=''>
                  <div className={'info__webs info__inst_div'}></div>
                </a></li>
                <li><a className={'social_fb'} href=''>
                  <div className={'info__webs info__fb_div'}></div>
                </a></li>
              </ul>
            </div>
            <div className='col12-sm info_logo_sm'>
              <div className={'info__logo'}>
                <img className={'info__logo_img'} src={logo} alt='logo'/>
              </div>
              <div className={'info__text'}>
                <p>© 2022 osteon.net.ua <br/> Все права защищены</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
}