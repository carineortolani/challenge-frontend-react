import React from 'react'
import Header from '../../layout/Header'
import Banner from '../../layout/Banner'
import Character from '../../components/Character'
import Titles from '../../components/Titles'
import Footer from '../../layout/Footer'

const Profile = () => (
  <React.StrictMode>
    <Header />
    <Banner>
      <Character />
    </Banner>
    <Titles title="Comics" subtitle="# results"/>

    <Footer />
  </React.StrictMode>
)

export default Profile
