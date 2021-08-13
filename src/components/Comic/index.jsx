import React from 'react'
import css from './Comic.module.sass'
import spiderBlack from '../../assets/images/spiderBlack.png'
import iconInfo from '../../assets/icons/iconInfo.svg'

const Comic = () => (
  <div className={css.comic}>
    <img src={spiderBlack} alt="Hero" className={css.imgHero} />
    <div className={css.information}>
      <h3 className={css.title}> {/* {title} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor. </h3>
      <ul className={css.listInfo}>
        <li>01/01/1990</li>
        <li><img src={iconInfo} alt="Circle" className={css.iconInfo} /> 47 pages</li>
        <li><img src={iconInfo} alt="Circle" className={css.iconInfo} /> U$0.90</li>
      </ul>
      <p className={css.description}> {/* {description} */} Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium... </p>
    </div>
  </div>
)

export default Comic
