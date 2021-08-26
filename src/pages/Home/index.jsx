import React, { useEffect, useState } from 'react'

import { getCharacters } from '../../services/characters'

import Banner from '../../layout/Banner'
import Titles from '../../components/Titles'
import Card from '../../components/Card'

import iconSearch from '../../assets/icons/search.svg'

import css from './Home.module.sass'

const Home = () => {
  const [characters, setCharacters] = useState({})
  const [heroName, setHeroName] = useState('')

  const searchHero = () => {
    setCharacters({ active: true, outcomes: characters.filter(heros => heros.name.includes(heroName))})
    console.log(heroName)
  }
console.log(characters)
  useEffect(() => {
    getCharacters()
      .then(response => setCharacters(response))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Banner>
        <div className={css.containerSearch}>
          <h1 className={css.title}>Explore the most powerful characters in Marvel</h1>
          <div className={css.search}>
            <input
              className={css.inputSearch}
              type="text"
              placeholder="Type in a character name"
              onChange={e => setHeroName(e.target.value)}
            />
            <button className={css.btnSearch} onClick={searchHero}>
              <img src={iconSearch} alt="Search" />
            </button>
          </div>
        </div>
      </Banner>

      <div className={css.container}>
        <Titles title="Characters" subtitle={`${characters.total || `#`} results`} />

        <div className={css.cardsList}>
          {characters.results?.map((result, key) => (
            <Card
              key={key}
              id={result.id}
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
