import React from 'react'
import css from './Comic.module.sass'
import spiderBlack from '../../assets/images/spiderBlack.png'
import iconInfo from '../../assets/icons/iconInfo.svg'

const Comic = () => (
  <div className={css.comic}>
    <img src={spiderBlack} alt="" className={css.imgHero} />
    <div>
      <h3 className={css.title}> {/* {title} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor. </h3>
      <ul className={css.listInfo}>
        <li>01/01/1990</li>
        <li><img src={iconInfo} alt="" className={css.iconInfo} /> 74 pages</li>
        <li><img src={iconInfo} alt="" className={css.iconInfo} /> U$0.90</li>
      </ul>
      <p className={css.description}> {/* {description} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit. </p>
    </div>
  </div>
)

export default Comic
