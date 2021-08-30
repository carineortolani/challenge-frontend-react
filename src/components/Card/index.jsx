import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from './Card.module.sass'

const Card = ({ result }) => {
  const [favoriteHero, setFavoriteHero] = useState(JSON.parse(localStorage.getItem('@app-Marvel/YourTeam')) || [])

  const { id, name, description, thumbnail } = result

  const toggleFavorite = (e, hero) => {
    e.preventDefault()

    if(favoriteHero.find(hero => hero.id === id)) {
      setFavoriteHero(favoriteHero.filter(hero => hero.id !== id))
    } else {
        const newHero = {
          id: hero.id,
          name: hero.name,
          description: hero.description,
          thumbnail: hero.thumbnail
        }

        const listHerosStorage = JSON.parse(localStorage.getItem('@app-Marvel/YourTeam'))
        const newFavoriteHero = [...listHerosStorage, newHero]

        setFavoriteHero(newFavoriteHero)
      }
  }

  useEffect(() => {
    localStorage.setItem('@app-Marvel/YourTeam', JSON.stringify(favoriteHero))
  }, [favoriteHero])

  return (
    <Link to={`/profile/${id}`} className={css.card}>
      <img
        src={thumbnail}
        alt={name}
        className={css.imgHero}
      />
      <button
        type="button"
        className={css.btnFavorite}
        title="Favorite Hero"
        onClick={e => toggleFavorite(e, result)}
      />
      <h4 className={css.hero} title={name}>{name}</h4>
      <p className={css.description} title="Click to see profile and comics">
        {description || "Description is being created."}
      </p>
    </Link>
  )
}

export default Card
