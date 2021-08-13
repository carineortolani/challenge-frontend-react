import React from 'react'
import css from './ListCards.module.sass'
import Titles from '../../components/Titles'
import Card from '../Card'

const ListCards = () => (
  <section className={css.listCards}>
    <Titles title="Characters" subtitle="# results"/>
    <div className={css.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
)

export default ListCards
