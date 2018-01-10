import React from "react";
import bookart from "./bookcover-placeholder.jpg"; 
import Link from 'gatsby-link'



console.log(bookart); // /./bookcover-placeholder.jpg

class Bookbox extends React.Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div>
        <img className="card-img-top" src={bookart} alt="bookart" />
        <div className="card-body">
          <h5 className="card-title">VSCode-Mac for Open Source Developers</h5>
          <p className="card-text">Everything you need for happy open source development in VS Code - Mac.</p>
          <Link to="#" className="btn btn-primary">PreOrder Now!</Link>
        </div>
      </div>
    )
  }
}

export default Bookbox