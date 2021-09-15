import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getProfile } from '../../services/profile'
import { getComics } from '../../services/comics'

import Banner from '../../layout/Banner'
import Character from '../../components/Character'
import Titles from '../../components/Titles'
import Comic from '../../components/Comic'

import css from './Profile.module.sass'

const Profile = () => {
  const [profile, setProfile] = useState([])
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)
  let { id } = useParams()

  useEffect(() => {
    getProfile(id)
      .then(response => setProfile(response))
      .catch(error => console.error(error))

    getComics(id)
      .then(response => {
        setTotal(response.total)
        setComics(response.results)
        setOffset(response.offset + response.limit)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [id])

  const fetchMore = () => {
    getComics(id, offset)
    .then(response => {
      setComics([...comics, ...response.results])
      setOffset(response.offset + response.limit)
    })
    .catch(error => console.error(error))
    .finally(() => setLoading(false))
  }

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
        <Titles title="Comics" subtitle={`${comics?.length || `#`} results`} />

        {loading ?

          <div className={css.comicsList}>
            {Array.from({length: 5}).map((_, key) => (
              <span className={css.comicSkeleton} key={key}/>
            ))}
          </div>

        :

            <InfiniteScroll
            className={css.infiniteScroll}
            dataLength={comics.length}
            next={fetchMore}
            hasMore={comics.length < total ? true : false}
            loader={<span className={css.loader} />}
            endMessage={<p className={css.end}>End :)</p>}
          >

            <div className={css.comicsList}>
              {comics?.map(result => (
                <Comic
                  key={result.id}
                  thumbnail={result.thumbnail}
                  title={result.title}
                  dates={result.dates}
                  pages={result.pages}
                  prices={result.prices}
                  description={result.description}
                />
              ))}
            </div>

          </InfiniteScroll>

        }

      </div>
    </>
  )
}

export default Profile
