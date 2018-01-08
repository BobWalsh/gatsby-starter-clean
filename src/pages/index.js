import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
      <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div>
    <Link to="/page-2/">Go to page 2</Link><br/>
    <Link to="/page-3/">Go to page 3</Link>
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
