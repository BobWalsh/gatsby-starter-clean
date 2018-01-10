import React from "react";
import bookart from "./printing-press.png"; // Tell Webpack this JS file uses this image
import Link from 'gatsby-link'



console.log(bookart); // /bookart.84287d09.png

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

// function Bookbox() {
//   // Import result is the URL of your image
//   return <img src={bookart} alt="bookart" />;
// }

export default Bookbox