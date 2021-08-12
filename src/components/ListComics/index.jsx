import React from 'react'
import css from './ListComics.module.sass'
import Comic from '../Comic'

const ListComics = () => (
  <section className={css.listComics}>
    <div className={css.container}>
      <Comic />
      <Comic />
      <Comic />
      <Comic />
    </div>
  </section>
)

export default ListComics
