import React from 'react'
import css from './Titles.module.sass'

const Titles = ({title, subtitle}) => (
  <span className={css.titles}>
    <h2 className={css.title}>{title}</h2>
    <h3 className={css.subtitle}>{subtitle}</h3>
  </span>
)

export default Titles
