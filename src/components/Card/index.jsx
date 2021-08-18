import React from 'react'
import css from './Card.module.sass'
import { Link } from 'react-router-dom'
import spider from '../../assets/images/spider.png'

const Card = () => {

  return (
    <Link to="/profile" className={css.card}>
      <img
        src={spider}
        alt="Hero"
        className={css.imgHero}
      />
      <button
        className={css.btnFavorite}
        title="Favorite Hero"
        onClick={e => e.preventDefault()}
      />
      <h4 className={css.hero}> {/* {hero} */} Spider Man </h4>
      <p className={css.description}> {/* {description} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit. </p>
    </Link>
  )
}

export default Card
