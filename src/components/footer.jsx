import React, { Component } from 'react';
import './index.css';

export default class Social extends Component {
  render () {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "right"}}>
        <a className = "m-1" alt="LinkedIn page" width="40" height="40" href="https://www.linkedin.com/in/igor-sidnev/">
          <img className = "social1" src={require("./images/linkedin.png")} width="36" height="36" alt="linkedIn page"/>
        </a>
        <a className = "m-1" background = { require("./images/footer_facebook.png")} alt="Facebook page" width="40" height="40"
          href="https://www.facebook.com/profile.php?id=100006233297824">
          <img className = "social2" src={ require("./images/facebook.png") } width="30" height="30" alt="facebook page" style = {{color: "white" }}/>
        </a>
      </div>
    )
  }
}
