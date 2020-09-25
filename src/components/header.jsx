import React, {Component} from 'react';
import fetchData from '../services/fetchData';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top m-2" style={{position: 'relative'}}>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" >Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" >Action</a>
              <a className="dropdown-item" >Another action</a>
              <a className="dropdown-item" >Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    );
  }
}
export default Header;
