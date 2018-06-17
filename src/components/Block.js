import React from 'react'
import Link from 'gatsby-link'
import  styled  from 'react-emotion'

const BlockContainer = styled('div')`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
`

const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
`

const ImageContainer = styled('div')`
  display: block;
  width: 450px;
  img: {
    width: 100%
  }
`

const Title = styled('h1')`
  font-weight: 600;
  font-size: large;
`

const Block = ({ image, alt, title, description, link, url }) => (
  <BlockContainer>
    <ImageContainer><img src={image} alt={alt} /></ImageContainer>
    <TextContainer>
      <Title>{title}</Title>
      <p>{description}</p>
      { link ? <Link to={url}>{link}</Link> : null }
    </TextContainer>
  </BlockContainer>
)

export default Block
