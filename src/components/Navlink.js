import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { colors } from '../design'

const NavLink = ({ to, children }) => (
  <div
    className={css`
      display: block;
      background-color: ${colors.green};
      min-width: 8em;
      padding: 1em;
      text-align: center;
    `}
  >
    <Link
      to={to}
      className={css`
        color: white;
        font-weight: bold;
        text-decoration: none;
        `}>
      {children}
    </Link>
  </div>
)

export default NavLink
