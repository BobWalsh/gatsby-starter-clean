import React from "react";
import footerart1 from "./47hats-blackred-logo.png"; 
import Link from 'gatsby-link'


console.log(footerart1); // /./bookcover-placeholder.jpg

class Footer extends React.Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div>
        <nav className="stickyfooter navbar fixed-bottom navbar-light bg-light">
          <p className="navbar-text" href="#">VSCodeMac is not part of Microsoft, it's a  <img className="mb-2" src={footerart1} alt="footerart" height='25' width='51'/> project.</p>
          <p className="navbar-text" href="#">&copy; 2018 Bob Walsh. All rights reserved.</p>
        </nav>
      </div>
    )
  }
}

export default Footer