import React, { Component } from 'react';

export default class AddFooter extends Component {
  state = {

  };
  render() {
    return (
      <div style = {{backgroundColor: "#002736", textAlign: "center"}}>
        <div style = {{ borderTop: "10px dashed yellow" }}>
        </div>
        <ol style = {{ color: "white" }}>
          <li style = {{ color: "red" }}>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
      </div>
    );
  }
}
