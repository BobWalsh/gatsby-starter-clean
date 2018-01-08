import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <Container>
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>pages for the static pages, then have another index file for the blog posts</h1>
    <p>for other index, pull from pages/index.js: </p>
    <p>Posted April 09, 2011</p>
  </div>
  
  <h2>Index</h2>
  <ul>
    {data.allMarkdownRemark.edges.map(post => (
      <li key={post.node.id}>
        <Link
          key={post.node.id} 
          to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ))}
    </ul>
    </Container>
  </div>
)


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: { eq: true }}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }

`

export default IndexPage
