import React, { Component } from 'react';
import './index.css';

export default class Social extends Component {
  render () {
    return (
      <div style = {{ backgroundColor: "#002736", textAlign: "right", display: this.props.isDisplay }}>
        <a alt="LinkedIn page" width="40" height="40" href="https://www.linkedin.com/in/igor-sidnev/">
          <img className = "m-1 social1" src={require("./images/linkedin.png")} width="36" height="36" alt="linkedIn page"/>
        </a>
        <a background = { require("./images/footer_facebook.png")} alt="Facebook page" width="40" height="40"
          href="https://www.facebook.com/profile.php?id=100006233297824">
          <img className = "m-1 social2" src={ require("./images/facebook.png") } width="30" height="30" alt="facebook page" style = {{color: "white" }}/>
        </a>
      </div>
    )
  }
}
