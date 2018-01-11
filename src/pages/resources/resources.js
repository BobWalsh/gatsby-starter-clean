import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'

const Resources = () => (
  <Container>
    <h1>The Resources Page1</h1>
    <p>Welcome to all about VSCodeMac, the book.</p>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="page-2">Go back to page-2</Link>
  </Container>
)

export default Resources
