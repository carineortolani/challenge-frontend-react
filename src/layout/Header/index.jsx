import React from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.sass'
import logo from '../../assets/logo.svg'
import iconUsers from '../../assets/icons/users.svg'

const Header = () => (
  <header className={css.header}>
    <div className={css.container}>

      <Link to="/home">
        <img src={logo} alt="Logo" className={css.logo} />
      </Link>

      <Link to="/favorites">
        <button className={css.btnTeam}>
          Your team
          <img
            src={iconUsers}
            alt="Icon Users"
            className={css.btnTeamIcon}
          />
        </button>
      </Link>

    </div>
  </header>
)

export default Header
