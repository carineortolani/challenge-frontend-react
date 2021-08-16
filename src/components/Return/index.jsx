import React from 'react'
import { useHistory } from 'react-router-dom'
import css from './Return.module.sass'
import iconReturn from '../../assets/icons/return.svg'

const Return = () => {
  const history = useHistory()
  const back = () => history.goBack()

  return (
    <button className={css.btnReturn} onClick={back}>
      Return to previous page
      <img src={iconReturn} alt="Return" className={css.icon}/>
    </button>
  )
}


export default Return
