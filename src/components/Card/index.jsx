import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from './Card.module.sass'

const Card = ({ id, name, description, thumbnail }) => {
  const [favoriteHero, setFavoriteHero] = useState(JSON.parse(localStorage.getItem('@app-Marvel/YourTeam')) || [])

  const favorite = e => {
    e.preventDefault()

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
  }

  useEffect(() => localStorage.setItem('@app-Marvel/YourTeam', JSON.stringify(favoriteHero)), [favoriteHero])
  console.log(favoriteHero)
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
