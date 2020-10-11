import React, { Component } from 'react';

export default class RoutesDisplay extends Component {
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "600px", textAlign: "center"}}>
        <h1>Available routes</h1>
        <div style={{width: "100%", textAlign: "center", borderStyle: "dashed"}}>
          <table style={{width: "23%", borderStyle: "solid", textAlign: "left", display: "inline-block", fontSize: "20px", color: "#314C5B"}} className="m-5" id = "mainTable">
            <tbody>
              <tr>
                <td className = "reqList p-3" id = "row11"></td>
                <td className = "reqOption p-3" id = "row12" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/customers</td>
              </tr>
              <tr>
                <td className = "reqList p-3" id = "row21"></td>
                <td className = "reqOption p-3" id = "row22" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/employees</td>
              </tr>
              <tr>
                <td className = "reqList p-3" id = "row31">https://api-buddy</td>
                <td className = "reqOption p-3" id = "row32" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/stores</td>
              </tr>
              <tr>
                <td className = "reqList p-3" id = "row41"></td>
                <td className = "reqOption p-3" id = "row42" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/books</td>
              </tr>
              <tr>
                <td className = "reqList p-3" id = "row51"></td>
                <td className = "reqOption p-3" id = "row52" onMouseEnter = {(event) => {this.changeLine(event.target.id)}}>/orders</td>
              </tr>
            </tbody>
          </table>
          <div style = {{width: "300px", height: "360px", borderStyle: "dashed", display: "inline-block"}}>
            <h2 style = {{position: "absolute"}}>New model</h2>
          </div>
        </div>
      </div>
    )
  }
  changeLine = (id) => {
    /*Cleaning state*/
    let list = document.getElementsByClassName('reqList');
    let options = document.getElementsByClassName('reqOption');
    for(let i = 0; i < list.length; i++) {
      list[i].textContent = '';
      list[i].style.color = "#314C5B";
      options[i].style.color = "#314C5B";
    }
    /*Setting new style*/
    let chosenEl = document.getElementById(id);
    console.log('Chosen element ', chosenEl);
    let whereToMove = document.getElementById('row'+id[id.length-2]+'1');
    console.log('Where to ', whereToMove);
    whereToMove.textContent = 'https://api-buddy';
    whereToMove.style.color = "#E18026";
    whereToMove.style.transition = "1s";

    chosenEl.style.color = "#E18026";
    chosenEl.style.transition = "1s";
  }
}
