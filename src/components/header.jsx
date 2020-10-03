import React, {Component} from 'react';

import fetchData from '../services/fetchData';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div style = {{borderColor: "black", borderStyle: "dashed",width: "100%", height: "600px", display: "inline-block", backgroundColor: "#D3E0E9", fontFamily: "Inter"}}>
        <h1 style={{marginLeft: "250px", marginTop: "50px", fontSize: "90px"}}>API-buddy</h1>
        <p className="lead font-weight-normal" style={{marginLeft: "250px", fontSize: "28px", width:"40%"}}>The service is a free dummy book shop API supporting GET, POST, UPDATE, DELETE requests with the following routes: https://api-buddy/customers</p>
        <a className="btn btn-outline-secondary" style={{marginLeft: "250px", backgroundColor: "#002736", color: "white"}}>Learn more</a>
      </div>
    );
  }
}
export default Header;
