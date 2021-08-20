import React, { useState, useEffect } from 'react'

import { getProfile } from '../../services/profile'

import Banner from '../../layout/Banner'
import Character from '../../components/Character'
// import Titles from '../../components/Titles'

import css from './Profile.module.sass'

const Profile = () => {
const [profile, setProfile] = useState({})

useEffect(() => {
  getProfile()
    .then(response => setProfile(response))
    .catch(error => console.error(error))
}, [])

return (
  <>
    <Banner>
      <Character
        name={profile.name}
        description={profile.description}
        thumbnail={profile.thumbnail}
      />
    </Banner>
    <div className={css.container}>
      {/* <Titles title="Characters" subtitle={`${comics.total || `#`} results`} /> */}
      <div className={css.comicsList}>

      </div>
    </div>
  </>
)}

export default Profile
