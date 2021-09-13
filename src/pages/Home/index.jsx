import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getCharacters } from '../../services/characters'

import Banner from '../../layout/Banner'
import Titles from '../../components/Titles'
import Card from '../../components/Card'

import iconSearch from '../../assets/icons/search.svg'

import css from './Home.module.sass'

const Home = () => {
  const [loading, setLoading] = useState(true)

  const [heroName, setHeroName] = useState('')
  const [heroSearched, setHeroSearched] = useState({active: false, response: []})

  const [characters, setCharacters] = useState([])
  const heros = heroSearched.active ? heroSearched.response : characters?.results || []

  useEffect(() => {
    getCharacters()
    .then(response => setCharacters(response))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }, [])

  const fetchMore = () => {
    getCharacters()
    .then(response => setCharacters([
      ...characters,
      response.results,
      characters.limit + 20,
      characters.count + 20,
      characters.offset + 20
    ]))
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }

  console.log('characters', characters)

  const keyHandler = e => {
    if (e.key === 'Enter') {
      searchHero()
    } else if (e.key === 'Escape') {
      handleClear()
    }
  }

  const searchHero = () => {
    setHeroSearched({
      active: true,
      response: heros.filter(hero => hero.name.toLowerCase().includes(heroName.toLowerCase()))
    })
  }

  const checkHaveHero= () => {

    if(heroSearched.active === true && heroSearched.response.length === 0) {
      return false
    }

    return true
  }

  const handleClear = () => {
    setHeroName('')
    setHeroSearched({active: false, response: []})
  }

  const handleReturnTop = () => window.scrollTo({ top: 0, behavior: 'smooth'})

  useEffect(() => {
    if(heroName.length < 1) handleClear()
  }, [heroName])

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
              value={heroName}
            />
            <button className={css.btnSearch} onClick={searchHero}>
              <img src={iconSearch} alt="Search" />
            </button>
          </div>
        </div>
      </Banner>

      <div className={css.container}>
        <Titles title="Characters" subtitle={`${heros.length || `#`} results`} />

        {loading ?

          <div className={css.cardsList}>
            {Array.from({length: 20}).map((_, key) => (
              <span className={css.cardSkeleton} key={key}/>
            ))}
          </div>

        :

        <InfiniteScroll
          className={css.infiniteScroll}
          dataLength={heros.length}
          next={fetchMore}
          hasMore={heros.length < characters.total ? true : false}
          loader={<span className={`${heros.length === heroSearched.response.length ?  css.noLoader : css.loader}`} />}
          endMessage={<p>End</p>}
        >
          <div className={css.cardsList}>
            {heros?.map((result, key) => (
              <Card
                key={key}
                result={result}
              />
            ))}
          </div>
        </InfiniteScroll>

        }
        <p className={`${checkHaveHero() ? css.withoutWarning : css.warning}`}>Hero not found :(</p>
        <button className={css.btnTop} onClick={handleReturnTop}/>
      </div>
    </>
  )
}

export default Home
