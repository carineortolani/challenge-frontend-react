import React from 'react'
import css from './Search.module.sass'
import iconSearch from '../../assets/icons/search.svg'

const Search = () => (
  <div className={css.container}>
    <h1 className={css.title}>Explore the most powerful characters in Marvel</h1>
    <div className={css.search}>
      <input
        className={css.inputSearch}
        type="text"
        placeholder="Type in a character name"
      />
      <button className={css.btnSearch}>
        <img src={iconSearch} alt="Search" />
      </button>
    </div>
  </div>
)

export default Search
