import React from 'react'
import Header from '../../layout/Header'
import Banner from '../../layout/Banner'
import Character from '../../components/Character'
import Footer from '../../layout/Footer'
import ListComics from '../../components/ListComics'

const Profile = () => (
  <React.StrictMode>
    <Header />
    <Banner>
      <Character />
    </Banner>
    <ListComics />
    <Footer />
  </React.StrictMode>
)

export default Profile
