import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div>
    <h1>about page</h1>
    <p>Welcome to page three!</p>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="page-2">Go back to page-2</Link>
  </div>
)

export default About
