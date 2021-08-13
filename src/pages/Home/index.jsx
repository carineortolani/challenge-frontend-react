import React from 'react'
import Header from '../../layout/Header'
import Banner from '../../layout/Banner'
import Search from '../../components/Search'
import ListCards from '../../components/ListCards'
import Footer from '../../layout/Footer'

const Home = () => (
  <React.StrictMode>
    <Header />
    <Banner>
      <Search />
    </Banner>
    <ListCards />
    <Footer />
  </React.StrictMode>
)

export default Home
