import React from 'react'
import css from './Favorites.module.sass'
import Banner from '../../layout/Banner'

// import Card from '../../components/Card'
import Return from '../../components/Return'

const TeamFavorite = () => {


    return (
    <>
      <Banner>
        <div className={css.container}>
          <Return />
          <h1 className={css.title}>Here is your own strike team choice</h1>
        </div>
      </Banner>

      {/* <div className={css.cardsList}>
        {teamFavorite?.map((result, key) => (
          <Card
            key={key}
            id={result.id}
            name={result.name}
            description={result.description}
            thumbnail={result.thumbnail}
          />
        ))}
      </div> */}
    </>
  )
}

export default TeamFavorite
