import React from 'react'
import ContentLoader from 'react-content-loader'
import css from './CardSkeleton.module.sass'

const CardSkeleton = () => {
  return (
    <div className={css.cardSkeleton}>
      <ContentLoader
        speed={3}
        width={242}
        height={340}
        backgroundColor="#cfcfcf"
        foregroundColor="#ecebeb"
      >
        <rect
          rx="30"
          ry="30"
          width="242"
          height="340"
        />
      </ContentLoader>
    </div>

  )
}

export default CardSkeleton
