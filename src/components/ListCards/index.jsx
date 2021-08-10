import React from 'react'
import css from './ListCards.module.sass'
import Card from '../Card'

const ListCards = () => (
  <section className={css.listCards}>
    <div className={css.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
)

export default ListCards
