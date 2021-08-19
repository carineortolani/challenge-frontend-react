import React, { useEffect, useState } from 'react'

import { getCharacters } from '../../services/characters'

import Banner from '../../layout/Banner'
import Search from '../../components/Search'
import Titles from '../../components/Titles'
import Card from '../../components/Card'

import css from './Home.module.sass'

const Home = () => {
  const [characters, setCharacters] = useState({})

  useEffect(() => {
    getCharacters()
      .then(response => setCharacters(response))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Banner>
        <Search />
      </Banner>

      <div className={css.container}>
        <Titles title="Characters" subtitle={`${characters.total} results`} />

        <div className={css.cardsList}>
          {characters.results?.map((result, key) => (
            <Card
              key={key}
              name={result.name}
              description={result.description}
              thumbnail={result.thumbnail}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
