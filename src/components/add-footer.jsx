import React, { Component } from 'react';

export default class AddFooter extends Component {
  state = {

  };
  render() {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "center"}}>
        <div className = "add-border">
        </div>
        <div style = {{ width: "80%" }} className = "middle-align">
          <p className = "first-p">
            <h3>Get a JWT token by fetching https://api-buddy.com/api/auth</h3>
          </p>
          <p>
            <h3>
              Fetch a resource with a Header parameter 'x-auth-token'
            </h3>
          </p>
          <p>
            <h3>Get a resulting JSON</h3>
          </p>
        </div>
      </div>
    );
  }
}
