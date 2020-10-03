import React, {Component} from 'react';

import fetchData from '../services/fetchData';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div style = {{borderColor: "black", borderStyle: "dashed",width: "100%", height: "700px", display: "inline-block", backgroundColor: "#D3E0E9", fontFamily: "Inter"}}>
        <div className="inline-container" style={{display: "inline-block", borderStyle: "dashed", width: "50%"}}>
          <h1 style={{marginLeft: "180px", marginTop: "50px", fontSize: "90px"}}>API-buddy</h1>
          <p className="lead font-weight-normal" style={{marginLeft: "180px", fontSize: "28px", width:"70%"}}>The service is a free dummy book shop API supporting GET, POST, UPDATE, DELETE requests with the following routes: https://api-buddy/customers</p>
          <a className="btn btn-outline-secondary" style={{marginLeft: "180px", backgroundColor: "#002736", color: "white", marginTop: "80px"}}>Learn more</a>
        </div>
        <div className="inline-container" style={{display: "inline-block"}}>
          <img src={require('./images/header_image.png')} alt="api-buddy-header-image" width="200px" height="10%"/>
        </div>
      </div>
    );
  }
}
export default Header;
