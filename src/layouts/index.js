import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import PageContainer from '../components/PageContainer'

const TemplateWrapper = ({ children }) => (
  <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    minWidth: 960px;
    margin: auto;
    font-family: sans-serif;
    `}>
    <Helmet>
      <title>The Shonda Project</title>
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    </Helmet>
    <Header
      title="The Shonda Project"
      strapline="Educating children out of poverty"
      charityNumber="1075035" />
    <PageContainer>
      <Navbar />
      <div>{children()}</div>
    </PageContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
