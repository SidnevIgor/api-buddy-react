import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

export default class Footer extends Component {
  render () {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "right"}}>
        <a src = { require("./images/footer_linkedin.png")} alt="LinkedIn page" width="40" height="40"
          href="window.location='https://www.linkedin.com/in/igor-sidnev/'" value="Click here"/>
        <a src = { require("./images/footer_facebook.png")} alt="Facebook page" width="40" height="40"
          href="window.location='https://www.facebook.com/profile.php?id=100006233297824'"/>
      </div>
    )
  }
}
