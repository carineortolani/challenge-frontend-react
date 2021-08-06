import React from 'react'
import css from './Section.module.sass'

const Section = ({children}) => (
  <section className={css.section}>
    <div className={css.container}>
      {children}
    </div>
  </section>
)

export default Section
