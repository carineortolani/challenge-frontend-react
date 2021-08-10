import React from 'react'
import Header from '../../layout/Header'
import Section from '../../layout/Banner'
import Search from '../../components/Search'
import Titles from '../../components/Titles'
import ListCards from '../../components/ListCards'
import Footer from '../../layout/Footer'

const Home = () => (
  <React.StrictMode>
    <Header />
    <Section>
      <Search />
    </Section>
    <Titles title="Characters" subtitle="# results"/>
    <ListCards />
    <Footer />
  </React.StrictMode>
)

export default Home
