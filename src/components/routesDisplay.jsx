import React, { Component } from 'react';

export default class RoutesDisplay extends Component {
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "600px", textAlign: "center"}}>
        <h1>Available routes</h1>
        <table style={{width: "500px", borderStyle: "solid", textAlign: "left"}} className="m-5">
          <tr>
            <td className="p-3"></td>
            <td className="p-3">/customers</td>
          </tr>
          <tr>
            <td></td>
            <td className="p-3">/employees</td>
          </tr>
          <tr>
            <td>https://api-buddy</td>
            <td className="p-3">/stores</td>
          </tr>
          <tr>
            <td></td>
            <td className="p-3">/books</td>
          </tr>
          <tr>
            <td></td>
            <td className="p-3">/orders</td>
          </tr>
        </table>
      </div>
    )
  }
}
