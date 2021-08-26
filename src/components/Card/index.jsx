import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from './Card.module.sass'

const Card = ({ id, name, description, thumbnail }) => {
  const [favoriteHero, setFavoriteHero] = useState(JSON.parse(localStorage.getItem('@app-Marvel/YourTeam')) || [])

  const favorite = e => {
    e.preventDefault()

    if(!favoriteHero.find(hero => hero.id === id)) {
      setFavoriteHero([
        ...favoriteHero,
        {
          favorite: true,
          id,
          name,
          description,
          thumbnail
        }
      ])
    } else setFavoriteHero(favoriteHero.filter(hero => hero.id !== id))
  }

  useEffect(() => localStorage.setItem('@app-Marvel/YourTeam', JSON.stringify(favoriteHero)), [favoriteHero])

  return (
    <Link to={`/profile/${id}`} className={css.card}>
      <img
        src={thumbnail}
        alt={name}
        className={css.imgHero}
      />
      <button
        className={css.btnFavorite}
        title="Favorite Hero"
        onClick={favorite}
      />
      <h4 className={css.hero} title={name}>{name}</h4>
      <p className={css.description} title="Click to see profile and comics">
        {description || "Description is being created."}
      </p>
    </Link>
  )
}

export default Card
