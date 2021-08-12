import React from 'react'
import Header from '../../layout/Header'
import Banner from '../../layout/Banner'
import Favorites from '../../components/Favorites'
import Footer from '../../layout/Footer'

const TeamFavorite = () => (
  <React.StrictMode>
    <Header />
    <Banner>
      <Favorites />
    </Banner>
    <Footer />
  </React.StrictMode>
)

export default TeamFavorite