import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getProfile } from '../../services/profile'
import { getComics } from '../../services/comics'

import Banner from '../../layout/Banner'
import Character from '../../components/Character'
import Titles from '../../components/Titles'
import Comic from '../../components/Comic'

import css from './Profile.module.sass'

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [comics, setComics] = useState({})
  let { id } = useParams()

  useEffect(() => {
    getProfile(id)
      .then(response => setProfile(response))
      .catch(error => console.error(error))

    getComics(id)
      .then(response => setComics(response))
      .catch(error => console.error(error))
  }, [id])
  console.log(comics)

  return (
    <>
      <Banner>
        {profile.results?.map((result, key) => (
          <Character
            key={key}
            name={result.name}
            description={result.description}
            thumbnail={result.thumbnail}
          />
        ))}
      </Banner>
      <div className={css.container}>
        <Titles title="Comics" subtitle={`${comics.total || `#`} results`} />
        <div className={css.comicsList}>
          {comics.results?.map(result => (
            <Comic
              key={result.id}
              images={result.images}
              title={result.title}
              pages={result.pages}
              description={result.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
