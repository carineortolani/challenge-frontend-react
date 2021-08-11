import React from 'react'
import css from './Character.module.sass'
import Button from '../Return'
import hero from '../../assets/images/perfilspider.png'


const Character = () => (
  <div className={css.container}>
    <Button />
    <h1 className={css.title}>Discover all comics this character took part in</h1>
    <div className={css.profile}>
      <img src={hero} alt="Hero" className={css.imgHero}/>
      <div  className={css.description}>
        <h2 className={css.name}>Spider Man</h2>
        <p className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra.</p>
      </div>
    </div>
  </div>
)

export default Character
