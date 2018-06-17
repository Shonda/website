import React from 'react'
import { css } from 'emotion'
import Navlink from './Navlink'

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "page" } }}
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `

const Navbar = () => (
  <div className={css`
      width: 100%;
      flex: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      `}>
      <Navlink to="/pages/about/">About Shonda</Navlink>
      <Navlink to="/pages/news/">News &amp; Updates</Navlink>
      <Navlink to="/pages/support/">Support</Navlink>
      <Navlink to="/pages/contact/">Contact Us</Navlink>
  </div>
)

export default Navbar
