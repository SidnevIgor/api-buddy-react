import React, { Component } from 'react';
import pretifyCode from '../services/pretifyCode';

export default class AddFooter extends Component {
  state = {
    query: "fetch('https://api-buddy.herokuapp.com/api/auth', {\n  method: 'POST',\n  body: {\n   'firstName': 'John',\n   'lastName': 'Doe',\n   'email': 'john.doe@gmail.com',\n   'tel': '123-456-78',\n   'password': 'Qwerty'\n  }\n})\n  .then((response) => response.json())\n  .then((data) => console.log(data))",
    items: {
      'x-auth-token':'eyJhbGciOiJIUzIs.JpYXQiOjE2MDV9.PjPqjLi221SN2H_E'
    },
    itemsNew: "fetch('https://api-buddy.herokuapp.com/api/auth/customers/1', {\n  method: 'GET',\n  headers: {\n     x-auth-token: eyJhbGciOiJIUzI1NiIs.JpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN2H_hGC8n_R3ORE\n  }\n}).then((response) => response.json())\n  .then((data) => console.log(data))",
    itemsAnswer: {
      "customerId": 1,
      "firstName": "Evy",
      "lastName": "Maxted",
      "email": "emaxted0@theatlantic.com",
      "tel": "266-846-9674",
      "password": "zKEEMj"
    },
    reference: ''
  };
  constructor(props) {
    super(props);
    this.reference = this.props.reference;
  }
  render() {
    return (
      <div style = {{ backgroundColor: "#002736", textAlign: "center", display: this.props.isDisplay }} ref = { this.state.reference } >

        <div style = {{ backgroundColor: "#002736", textAlign: "right" }}>
          <a alt="LinkedIn page" width="40" height="40" href="https://www.linkedin.com/in/igor-sidnev/">
            <img className = "m-1 social1" src={require("./images/linkedin.png")} width="36" height="36" alt="linkedIn page"/>
          </a>
          <a background = { require("./images/footer_facebook.png")} alt="Facebook page" width="40" height="40"
            href="https://www.facebook.com/profile.php?id=100006233297824">
            <img className = "m-1 social2" src={ require("./images/facebook.png") } width="30" height="30" alt="facebook page" style = {{color: "white" }}/>
          </a>
        </div>


        <div className = "add-border">
        </div>
        <div style = {{ width: "80%" }} className = "middle-align">
          <p className = "first-p">
            <h3>Get a JWT token by fetching https://api-buddy.com/api/auth</h3>
              <div className="d-flex justify-content-center">

                <textarea type='text' style={{ height: "400px", width: "40%", backgroundColor: 'white', color: '#002736', resize: "none", fontSize: "18px" }}
                  data-gramm_editor = "false"
                  className = "m-4"
                  value = { this.state.query }
                  onChange = {(event) => this.handleChange(event)}
                ></textarea>

              </div>
          </p>
          <p>
            <h3>
              Fetch an auth-protected resource with a parameter 'x-auth-token'
            </h3>
            <div className = "d-flex justify-content-center">
              <textarea type='text' style={{ height: "400px", width: "70%", backgroundColor: 'white', color: '#002736', resize: "none", fontSize: "18px" }}
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
              <textarea type='text' style={{ height: "400px", width: "40%", backgroundColor: 'white', color: '#002736', resize: "none", fontSize: "18px" }}
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
