import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'

const About = () => (
  <div>
  <Container>
  <h1>So why VSCodeMac?</h1>
    <p>About content will go here. </p>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="page-2">Go back to page-2</Link>
  </Container>
    
  </div>
)

export default About
