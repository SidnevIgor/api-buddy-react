import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "right"}}>
        <a alt="LinkedIn page" width="40" height="40" href="https://www.linkedin.com/in/igor-sidnev/">
          <img src={require("./images/footer_linkedin.png")} width="40" height="40"/>
        </a>
        <a background = { require("./images/footer_facebook.png")} alt="Facebook page" width="40" height="40"
          href="https://www.facebook.com/profile.php?id=100006233297824">
          <img src={require("./images/footer_facebook.png")} width="40" height="40"/>
        </a>
      </div>
    )
  }
}
