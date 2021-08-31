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
  const [heroSearched, setHeroSearched] = useState({active: false, response: null})
  const heros = heroSearched.active ? heroSearched.response : characters.results

  useEffect(() => {
    getCharacters()
    .then(response => setCharacters(response))
    .catch(error => console.error(error))
  }, [])

  const keyHandler = e => {
    if (e.key === 'Enter')
      searchHero()
  }

  const searchHero = () => {
    setHeroSearched({
      active: true,
      response: characters.results.filter(hero => hero.name.toLowerCase().includes(heroName.toLowerCase()))
    })
  }

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
              onKeyUp={keyHandler}
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
          {heros?.map((result, key) => (
            <Card
              key={key}
              result={result}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
