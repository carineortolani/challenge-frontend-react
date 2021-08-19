import React from 'react'

import Banner from '../../layout/Banner'
import Character from '../../components/Character'
import ListComics from '../../components/ListComics'

import css from './Profile.module.sass'

const Profile = () => (
  <>
    <Banner>
      <Character />
    </Banner>
    <div className={css.container}>
      <ListComics />
    </div>
  </>
)

export default Profile
