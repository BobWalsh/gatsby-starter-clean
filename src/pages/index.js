import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'

import Bookbox from "../components/bookbox/bookbox";
import Mailsignup from "../components/mailsignup/mailsignup";

const IndexPage = ({data}) => (
  <div>
    <Container>
      <div className="row">
      <div className="col-sm-8">
        main area
        </div>
        <div className="col-sm-4">
          <Bookbox/>
          <Mailsignup/>
      </div>

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
