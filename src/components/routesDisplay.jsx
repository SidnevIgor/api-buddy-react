import React, { Component } from 'react';

export default class RoutesDisplay extends Component {
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "600px", textAlign: "center"}}>
        <h1>Available routes</h1>
        <table style={{width: "500px", borderStyle: "solid", textAlign: "left"}}>
          <tr>
            <td rowspan="5">https://api-buddy</td>
            <td>/customers</td>
          </tr>
          <tr>
            <td>/employees</td>
          </tr>
          <tr>
            <td>/stores</td>
          </tr>
          <tr>
            <td>/books</td>
          </tr>
          <tr>
            <td>/orders</td>
          </tr>
        </table>
      </div>
    )
  }
}
