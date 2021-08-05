import React from 'react'
import css from './Section.module.sass'
import Search from '../Search'

const Section = () => (
  <section className={css.section}>
      <Search></Search>
  </section>
)

export default Section
