import React, { Component } from 'react';
import pretifyCode from '../services/pretifyCode';

export default class AddFooter extends Component {
  state = {
    query: "fetch(https://api-buddy.herokuapp.com/api/auth, {\n  method: 'POST'\n})\n  .then((data) => console.log(data))",
    items: {
      'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1NzkxMDA5M2Q4NjAwMTc5NzA5NTMiLCJpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN6TgapD4USzUdm-wHE2H_hGC8n_R3ORE'
    }
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
                  value = { this.state.query }
                  onChange={(event) => this.handleChange(event)}
                ></textarea>

              <textarea type='text' style={{ height: "400px", width: "500px", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor = "false"
                  className = "m-5"
                  value = { pretifyCode({}, this.state.items) }
                  onChange = {() => {}}
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
