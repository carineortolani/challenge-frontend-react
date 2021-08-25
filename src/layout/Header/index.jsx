import React from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.sass'
import logo from '../../assets/logo.svg'
import iconLogo from '../../assets/icons/iconLogo.svg'
import iconUsers from '../../assets/icons/users.svg'

const Header = () => (
  <header className={css.header}>
    <div className={css.container}>

      <Link to="/home">
        <img
          src={logo}
          alt="Logo"
          className={css.logo}
        />
        <img
          src={iconLogo}
          alt="Icon Iron Man"
          className={css.iconlogo}
        />
      </Link>

      <Link to="/favorites">
        <button className={css.btnTeam} title="Your favorite team">
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
