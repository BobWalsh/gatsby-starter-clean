import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Footer from "../components/footer/footer";

import favicon from "./favicon-temp.png"; 
// has css that is overriding typography.js 
import './index.scss'
import './sitetheme.scss'


const TemplateWrapper = ({ children, data }) => {
  
  return (
    <div className='App'>
      <Helmet title={data.site.siteMetadata.title}
      link={[
          { rel: 'apple-touch-icon', href: data.apple_touch_icon },
          { rel: 'icon', sizes: '192x192', href: data.favicon },
      ]}
      />
      <Navbar className="navbar-dark bg-primary" color="" light expand="md">
        <Container>
          <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to="/page-2/" className='nav-link'>Guides</Link>
            </li>

            <li className='nav-item'>
              <Link to="/page-2/" className='nav-link'>Resources</Link>
            </li>
            <li className='nav-item'>
              <Link to="/page-2/" className='nav-link'>Blog</Link>
            </li>
            <li className='nav-item'>
              <Link to="/page-2/" className='nav-link'>The Book</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
          </ul>
        </Container>
        </Navbar>
        <Footer/>
      <div className='pageContent'>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
