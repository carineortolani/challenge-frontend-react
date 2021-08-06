import React from 'react'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Search from '../../components/Search'
import Titles from '../../components/Titles'

const Home = () => (
  <React.StrictMode>
    <Header />
    <Section>
      <Search />
    </Section>
    <Titles title="Characters" subtitle="# results"/>
  </React.StrictMode>
)

export default Home
