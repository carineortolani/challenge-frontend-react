import React from 'react'
import { Link } from 'react-router-dom'
import css from './Return.module.sass'
import iconReturn from '../../assets/icons/return.svg'

const Return = () => (
  <Link to="/">
    <button className={css.btnReturn}>
      Return to previous page
      <img src={iconReturn} alt="Return" className={css.icon}/>
    </button>
  </Link>
)

export default Return
