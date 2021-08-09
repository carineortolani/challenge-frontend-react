import React from 'react'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Search from '../../components/Search'
import Titles from '../../components/Titles'
import ListCards from '../../components/ListCards'

const Home = () => (
  <React.StrictMode>
    <Header />
    <Section>
      <Search />
    </Section>
    <Titles title="Characters" subtitle="# results"/>
    <ListCards />
  </React.StrictMode>
)

export default Home
