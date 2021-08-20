import React from 'react'
import { Link } from 'react-router-dom'
import css from './Card.module.sass'

const Card = ({ id, name, description, thumbnail }) => {
  return (
    <Link to="/profile" className={css.card}>
      <img
        src={thumbnail}
        alt={name}
        className={css.imgHero}
      />
      <button
        className={css.btnFavorite}
        title="Favorite Hero"
        onClick={e => e.preventDefault()}
      />
      <h4 className={css.hero} title={name}>{name}</h4>
      <p className={css.description} title="Click to see profile and comics">
        {description || "Description is being created."}
      </p>
    </Link>
  )
}

export default Card
