import React from 'react'
import css from './Header.module.sass'
import logo from '../../assets/logo.svg'
import iconUsers from '../../assets/icons/users.svg'

const Header = () => (
  <header className={css.header}>
    <div className={css.container}>
      <img src={logo} alt="Logo" />
      <button>
        Your team
        <img src={iconUsers} alt="Icon Users" />
      </button>
    </div>
  </header>
)

export default Header
