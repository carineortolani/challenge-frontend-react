import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import iconUsers from '../../assets/icons/users.svg'

const PageHeader = () => (
  <header className="header">
    <div className="container">
      <img src={logo} alt="Logo" className="header--logo"/>
      <button className="header--button-team">
        Your team
        <img class="button--icon" src={iconUsers} alt="Icon Users" />
      </button>
    </div>
  </header>
)

export default PageHeader
