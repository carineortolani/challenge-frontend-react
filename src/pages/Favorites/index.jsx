import React, { useState, useEffect } from 'react'
import css from './Favorites.module.sass'
import Banner from '../../layout/Banner'

import Card from '../../components/Card'
import Return from '../../components/Return'

const TeamFavorite = () => {
  const [teamFavorite, setTeamFavorite] = useState([])

  useEffect(() => { setTeamFavorite(JSON.parse(localStorage.getItem('@app-Marvel/YourTeam'))) }, [])

  return (
    <>
      <Banner>
        <div className={css.container}>
          <Return />
          <h1 className={css.title}>Here is your own strike team choice</h1>
        </div>
      </Banner>

      <div className={css.listFavorites}>
        {teamFavorite?.map((result, key) => (
          <Card
            key={key}
            id={result.id}
            name={result.name}
            description={result.description}
            thumbnail={result.thumbnail}
          />
        ))}
      </div>
    </>
  )
}

export default TeamFavorite
