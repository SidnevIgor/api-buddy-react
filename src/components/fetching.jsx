import React, {Component} from 'react';

export default class Fetching extends Component {
  state = {
    items: []
  };
  render() {
    return (
      <React.Fragment>
        <h1>Fetch is here!</h1>
        <input type='text' style={{height: "200px", width: "150px"}} className="m-3"></input>
        <input type='text' style={{height: "200px", width: "150px"}} className="m-3"></input>
        <button style={{display: "block"}} className="m-3">Fetch data</button>
      </React.Fragment>
    );
  }
}
