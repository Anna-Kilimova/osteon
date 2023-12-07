import React from 'react'
import './form.scss'

export const Form = () => {
  return <div className={'wrapper__form wrapper__form_md'}>
    <form className={'form form_md'} action=''>
      <div className={'col4 col11-md'}>
        <p className={'p__form'}>Запишитесь на консультацию</p>
      </div>
      <div className={'col3 col11-md col11-sm'}>
        <input className={'text__form'} type='text' value={'Ваш телефон'}/>
      </div>
      <div className={'col3 col11-md col11-sm'}>
        <input className={'but__form'} type='submit' value={'Записаться'}/>
      </div>
    </form>
  </div>
}