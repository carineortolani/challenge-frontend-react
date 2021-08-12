import React from 'react'
import css from './Favorites.module.sass'
import { Link } from 'react-router-dom'
import spider from '../../assets/images/spider.png'

const Card = () => (
  <Link to="/profile" className={css.card}>
    <img src={spider} alt="" className={css.imgHero} />
    <button className={css.btnFavorite}></button>
    <h4 className={css.hero}> {/* {hero} */} Spider Man </h4>
    <p className={css.description}> {/* {description} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit. </p>
  </Link>
)

export default Card
