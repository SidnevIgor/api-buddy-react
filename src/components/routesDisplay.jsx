import React, { Component } from 'react';

export default class RoutesDisplay extends Component {
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "600px", textAlign: "center"}}>
        <h1>Available routes</h1>
        <div style={{width: "100%", textAlign: "center", borderStyle: "dashed"}}>
          <table style={{width: "21%", borderStyle: "solid", textAlign: "left", display: "inline-block", fontSize: "20px", color: "#314C5B"}} className="m-5" id = "mainTable">
            <tbody>
              <tr>
                <td id = "row11"></td>
                <td className = "p-3" id = "row12" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/customers</td>
              </tr>
              <tr>
                <td id = "row21"></td>
                <td className = "p-3" id = "row22">/employees</td>
              </tr>
              <tr>
                <td id = "row31">https://api-buddy</td>
                <td className = "p-3" id = "row32">/stores</td>
              </tr>
              <tr>
                <td id = "row41"></td>
                <td className = "p-3" id = "row42">/books</td>
              </tr>
              <tr>
                <td id = "row51"></td>
                <td className = "p-3" id = "row52">/orders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  changeLine = (id) => {
    let table = document.getElementById('mainTable');
    console.log('Full table ', table);
    console.log('The id ', id);
  }
}
