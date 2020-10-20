import React, { Component } from 'react';

export default class AddFooter extends Component {
  state = {
    query: 'fetch(https://api-buddy.herokuapp.com/api/auth)\n  .then((data) => console.log(data))',
    items: [1,2,3]
  };
  render() {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "center"}}>
        <div className = "add-border">
        </div>
        <div style = {{ width: "80%" }} className = "middle-align">
          <p className = "first-p">
            <h3>Get a JWT token by fetching https://api-buddy.com/api/auth</h3>
              <div className="d-flex justify-content-center">

                <textarea type='text' style={{ height: "400px", width: "500px", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor="false"
                  className="m-5"
                  value={this.state.query}
                  onChange={(event) => this.handleChange(event)}
                ></textarea>

              <textarea type='text' style={{ height: "400px", width: "500px", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor="false"
                  className="m-5"
                  value={this.state.items}
                  onChange={() => {}}
                ></textarea>

              </div>
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
