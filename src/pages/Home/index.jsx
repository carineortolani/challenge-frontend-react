import React, { useEffect, useRef, useState } from 'react'

import { getCharacters } from '../../services/characters'

import Banner from '../../layout/Banner'
import Titles from '../../components/Titles'
import Card from '../../components/Card'

import iconSearch from '../../assets/icons/search.svg'

import css from './Home.module.sass'

const Home = () => {
  const ref = useRef()

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const [heroName, setHeroName] = useState('')
  const [heroSearched, setHeroSearched] = useState({active: false, response: null})

  const [characters, setCharacters] = useState({})
  const heros = heroSearched.active ? heroSearched.response : characters.results

  useEffect(() => {
    getCharacters()
    .then(response => setCharacters(response))
    .catch(error => console.error(error))
  }, [page])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if(entries.some(entry => entry.isIntersecting)) {
        console.log('Está dando certo')
        setPage(currentValue => currentValue + 1)
      }
    })

    intersectionObserver.observe(ref.current)

    return () => intersectionObserver.disconnect()
  }, [])

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

  const handleClear = () => {
    setHeroName('')
    setHeroSearched({active: false, response: null})
  }

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
        <Titles title="Characters" subtitle={`${characters.total || `#`} results`} />

        <div className={css.cardsList}>
          {heros?.map((result, key) => (
            <Card
              key={key}
              result={result}
            />
          ))}
        </div>
        {loading && <div ref={ref} className={css.Loading}>Loading...</div>}
      </div>
    </>
  )
}

export default Home
