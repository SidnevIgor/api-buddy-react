import React, { Component } from 'react';

//import fetchData from '../services/fetchData';
import './index.css';

class Header extends Component {
  constructor() {
    super();
    this.runAnimation()
  }

  state = {
    buttonClass: "btn btn-outline-secondary",
    routes: [
      'customers',
      'employees',
      'books',
      'orders',
      'stores'
    ],
    chosenRoute: 'customers',
    iterator: 0
  };
  render() {
    return (
      <div style = {{width: "100%", height: "100%", display: "inline-block", backgroundColor: "#D3E0E9", fontFamily: "Inter"}} className = "header">
        <div className = "inline-container" style = {{ display: "inline-block", width: "58%" }}>
          <h1 style={{marginLeft: "180px", marginTop: "50px", fontSize: "90px"}}>API-buddy</h1>
          <p className="lead font-weight-normal" style={{marginLeft: "180px", fontSize: "28px", width:"65%"}}>The service is a free dummy book shop API supporting GET, POST, UPDATE, DELETE requests with the following routes: https://api-buddy/{this.state.chosenRoute}</p>
          <a className={this.state.buttonClass}
            onMouseEnter = {() => this.changeBtn(true)}
            onMouseLeave = {() => this.changeBtn(false)}
            style={{marginLeft: "180px", backgroundColor: "#002736", color: "white", marginTop: "80px", fontSize: "20px"}}>Learn more</a>
        </div>
        <div className="inline-container" style={{display: "inline-block"}}>
          <img src={require('./images/header_image.png')} alt="api-buddy-header-image" width="570px" height="500px"/>
        </div>
      </div>
    );
  }
  changeBtn = (open) => {
    if(open) {
      this.setState({
        buttonClass: this.state.buttonClass += ' rounded-pill'
      })
    }
    else {
      this.setState({
        buttonClass: "btn btn-outline-secondary"
      })
    }
  }
  runAnimation = () => {
    setInterval(() => {
      this.state.iterator = (this.state.iterator + 1) % this.state.routes.length;
      this.state.chosenRoute = this.state.routes[this.state.iterator];
      this.setState({
        iterator: this.state.iterator,
        chosenRoute: this.state.chosenRoute
      });
    }, 2000)
  }
}
export default Header;
