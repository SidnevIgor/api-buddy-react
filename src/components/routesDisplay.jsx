import React, { Component } from 'react';

import getRoute from './models/models';

export default class RoutesDisplay extends Component {
  state = {
    chosenModel: 'Store',
    modelDesc: {}
  }
  constructor() {
    super();
    this.state.modelDesc = getRoute(this.state.chosenModel)
  }
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "600px"}}>
        <h1>Available routes</h1>
        <div style = {{width: "100%", borderStyle: "dashed"}}>
          <div className = "table-container" style = {{display: "inline-block", width: "30%", marginLeft: "40%"}}>
            <table style={{ borderStyle: "solid", textAlign: "left", fontSize: "20px", color: "#314C5B" }} id = "mainTable">
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
          </div>

          <div style = {{width: "400px", minHeight: "360px", border: " 5px solid #840032", display: "inline-block", position: "relative"}}>
            <h3 style = {{position: "absolute", backgroundColor: "#840032", color: "#FFFFFF"}} className = "p-2">{this.state.chosenModel} model example</h3>
            <p style = {{position: "absolute", width: "100px", resize: "none", marginTop: "50px"}}>
              {JSON.stringify(this.state.modelDesc)}
            </p>
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
    let whereToMove = document.getElementById('row'+id[id.length-2]+'1');
    this.setState({
      chosenModel: this.changeChosenModel(id),
      modelDesc: getRoute(this.changeChosenModel(id))
    });

    whereToMove.textContent = 'https://api-buddy';
    whereToMove.style.color = "#E18026";
    whereToMove.style.transition = "1s";

    chosenEl.style.color = "#E18026";
    chosenEl.style.transition = "1s";
  }
  changeChosenModel = (id) => {
    switch(id) {
      case 'row12':
      return 'Customer';

      case 'row22':
      return 'Employee';

      case 'row32':
      return 'Store';

      case 'row42':
      return 'Book';

      case 'row52':
      return 'Order';

      default:
      return 'Store'
    }
  }
}
