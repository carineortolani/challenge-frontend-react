import React from 'react'
import ContentLoader from 'react-content-loader'
import css from './ComicSkeleton.module.sass'

const ComicSkeleton = () => {
  return (
    <div className={css.comicSkeleton}>
      <ContentLoader
        speed={3}
        width={1024}
        height={240}
        backgroundColor="#cfcfcf"
        foregroundColor="#ecebeb"
      >
        <rect
          rx="30"
          ry="30"
          width="1024"
          height="240"
        />
      </ContentLoader>
    </div>

  )
}

export default ComicSkeleton
