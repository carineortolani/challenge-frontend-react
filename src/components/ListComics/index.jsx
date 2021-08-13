import React from 'react'
import css from './ListComics.module.sass'
import Titles from '../../components/Titles'
import Comic from '../Comic'

const ListComics = () => (
  <section className={css.listComics}>
    <div className={css.container}>
      <Titles title="Comics" subtitle="# results"/>
      <Comic />
      <Comic />
      <Comic />
      <Comic />
    </div>
  </section>
)

export default ListComics
