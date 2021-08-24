import React from 'react'
import css from './Comic.module.sass'
import iconInfo from '../../assets/icons/iconInfo.svg'

const Comic = ({ title, thumbnail, prices, dates, pages, description }) => (
  <div className={css.comic}>
    <img src={thumbnail} alt={`Comic book ${title}`} className={css.imgHero} />
    <div className={css.information}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.listInfo}>
        <li>{dates}</li>
        <li><img src={iconInfo} alt="Circle" className={css.iconInfo} />{pages}</li>
        <li><img src={iconInfo} alt="Circle" className={css.iconInfo} />{prices}</li>
      </ul>
      <p className={css.description}>{description || "Description is being created."}</p>
    </div>
  </div>
)

export default Comic
