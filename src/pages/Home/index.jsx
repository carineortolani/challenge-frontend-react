import React from 'react'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Search from '../../components/Search'

const Home = () => (
  <React.StrictMode>
    <Header />
    <Section>
      <Search />
    </Section>
  </React.StrictMode>
)

export default Home
