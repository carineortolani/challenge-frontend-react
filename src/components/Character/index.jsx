import React from 'react'
import Button from '../Return'
import css from './Character.module.sass'

const Character = ({ name, description, thumbnail }) => {

  return (
    <div className={css.container}>
      <Button />
      <h1 className={css.title}>Discover all comics this character took part in</h1>
      <div className={css.profile}>
        <img
          src={thumbnail}
          alt={name}
          className={css.imgHero}
        />
        <div  className={css.description}>
          <h2 className={css.name}>{name}</h2>
          <p className={css.text}>{description}</p>
        </div>
      </div>
    </div>
)}

export default Character
