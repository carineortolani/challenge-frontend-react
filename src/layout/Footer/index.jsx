import React from 'react'
import css from './Footer.module.sass'

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <p>Data provided by Marvel. © 2020 MARVEL</p>
      <p>Developed by
        <a
          className={css.developer}
          href="https://www.linkedin.com/in/carine-ortolani-9615ab148/"
          target="_blank"
          rel="noopener noreferrer"
        >
            Carine Ortolani
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
