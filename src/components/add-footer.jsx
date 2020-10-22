import React, { Component } from 'react';
import pretifyCode from '../services/pretifyCode';

export default class AddFooter extends Component {
  state = {
    query: "fetch(https://api-buddy.herokuapp.com/api/auth, {\n  method: 'POST'\n})\n  .then((data) => console.log(data))",
    items: {
      'x-auth-token':'eyJhbGciOiJIUzIs.JpYXQiOjE2MDV9.PjPqjLi221SN2H_E'
    },
    itemsNew: "fetch(https://api-buddy.herokuapp.com/api/auth/customers/1, {\n  method: 'GET',\n  headers: {\n     x-auth-token: eyJhbGciOiJIUzI1NiIs.JpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN2H_hGC8n_R3ORE\n  }\n}).then((data) => console.log(data))",
    itemsAnswer: {
      "customerId": 1,
      "firstName": "Evy",
      "lastName": "Maxted",
      "email": "emaxted0@theatlantic.com",
      "tel": "266-846-9674",
      "password": "zKEEMj"
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

                <textarea type='text' style={{ height: "400px", width: "40%", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor = "false"
                  className = "m-4"
                  value = { this.state.query }
                  onChange = {(event) => this.handleChange(event)}
                ></textarea>

              </div>
          </p>
          <p>
            <h3>
              Fetch a resource with a Header parameter 'x-auth-token'
            </h3>
            <div className = "d-flex justify-content-center">
              <textarea type='text' style={{ height: "400px", width: "70%", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor = "false"
                  className = "m-5"
                  value = { this.state.itemsNew }
                  onChange = {() => {}}
                ></textarea>
            </div>
          </p>
          <p>
            <h3>Get a resulting JSON</h3>
            <div className = "d-flex justify-content-center">
              <textarea type='text' style={{ height: "400px", width: "40%", backgroundColor: 'white', color: 'black', resize: "none", fontSize: "18px" }}
                  data-gramm_editor = "false"
                  className = "m-5"
                  value = { pretifyCode({},this.state.itemsAnswer) }
                  onChange = {() => {}}
                ></textarea>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
