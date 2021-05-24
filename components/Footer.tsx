import type { FC } from 'react'

export const Footer: FC = () => (
  <footer>
    <style jsx>{`
      footer
        margin 0.8rem
        margin-top 1.75rem

        & p
          opacity 0.75
          margin 0
          font-size 0.75rem
          text-align center
          font-weight 500
    `}</style>

    <p>
      Powered by{' '}
      <a
        href='https://github.com/djsime1/statty'
        target='_blank'
        rel='noopener noreferrer'
      >
        Statty
      </a>
      {' '}& Running on{' '}
      <a
        href='https://railway.app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Railway
      </a>
    </p>
  </footer>
)
