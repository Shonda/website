import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const Header = ({ title, strapline, charityNumber }) => (
  <div className={css`
      width: 100%;
      flex: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      `}>
      <h1 className={css`margin: 0 0 1em 0;`}>
        <Link to="/" className={css`
          text-decoration: none;
          font-weight: bolder;
          `}>
          {title}
        </Link>
      </h1>
      <div className={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        `}>
        <h2 className={css`font-weight: normal; margin: 0; font-size: medium;`}>{strapline}</h2>
        <h2 className={css`font-weight: normal; margin: 0; font-size: medium;`}>Charity number: {charityNumber}</h2>
      </div>
  </div>
)

export default Header
