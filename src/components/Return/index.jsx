import React from 'react'
import css from './Return.module.sass'
import iconReturn from '../../assets/icons/return.svg'

const Return = () => (
  <button className={css.btnReturn}>
    Return to previous page
    <img src={iconReturn} alt="Return" className={css.icon}/>
  </button>
)

export default Return
