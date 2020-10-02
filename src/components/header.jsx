import React, {Component} from 'react';
import fetchData from '../services/fetchData';

class Header extends Component {
  render() {
    return (
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">API-buddy</h1>
        <p className="lead font-weight-normal">The service is a free dummy book shop API supporting GET, POST, UPDATE, DELETE requests with the following routes: https://api-buddy/customers</p>
        <a className="btn btn-outline-secondary" href="#">Try now</a>
      </div>
    );
  }
}
export default Header;
