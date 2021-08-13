import React from 'react'
import css from './Favorites.module.sass'
import { Link } from 'react-router-dom'
import Button from '../Return'
import spider from '../../assets/images/spider.png'

const Favorites = () => (
  <div className={css.container}>
    <Button />
    <h1 className={css.title}>Here is your own strike team choice</h1>
    <div className={css.listFavorites}>
      <Link to="/profile" className={css.card}>
        <img src={spider} alt="" className={css.imgHero} />
        <button className={css.btnFavorite}></button>
        <h4 className={css.hero}> {/* {hero} */} Spider Man </h4>
        <p className={css.description}> {/* {description} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit. </p>
      </Link>
    </div>
  </div>
)

export default Favorites
