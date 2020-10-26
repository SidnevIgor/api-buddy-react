import React, { Component } from 'react';

import getRoute from './models/models';
import pretifyCode from '../services/pretifyCode';
import './animations/routesDisplayAnimation.css';

export default class RoutesDisplay extends Component {
  state = {
    chosenModel: 'Store',
    modelDesc: {},
    reference: ''
  }
  constructor(props) {
    super(props);
    this.state.modelDesc = (pretifyCode({},getRoute(this.state.chosenModel)));
    this.reference = this.props.reference;
  }
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: "#E9EEF2", height: "90%", width: "100%", display: "inline-block"}} ref = { this.state.reference }>
        <h1 className = "p-5" style={{color: "#1C3B4A"}}>Available routes</h1>
        <div style = {{ width: "100%" }}>
          <div className = "table-container" style = {{display: "inline-block", width: "40%", marginLeft: "25%"}}>
            <table style={{ textAlign: "left", fontSize: "27px", color: "#314C5B" }} id = "mainTable">
              <tbody>
                <tr>
                  <td className = "reqList p-3" id = "row11"></td>
                  <td className = "reqOption p-3" id = "row12" onMouseEnter = {(event) => {this.changeLine('row12')}}>/customers</td>
                </tr>
                <tr>
                  <td className = "reqList p-3" id = "row21"></td>
                  <td className = "reqOption p-3" id = "row22" onMouseEnter = {(event) => {this.changeLine('row22')}}>/employees</td>
                </tr>
                <tr>
                  <td className = "reqList p-3" id = "row31">https://api-buddy</td>
                  <td className = "reqOption p-3" id = "row32" onMouseEnter = {(event) => {this.changeLine('row32')}}>/stores</td>
                </tr>
                <tr>
                  <td className = "reqList p-3" id = "row41"></td>
                  <td className = "reqOption p-3" id = "row42" onMouseEnter = {(event) => {this.changeLine('row42')}}>/books</td>
                </tr>
                <tr>
                  <td className = "reqList p-3" id = "row51"></td>
                  <td className = "reqOption p-3" id = "row52" onMouseEnter = {(event) => {this.changeLine('row52')}}>/orders</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style = {{width: "35%", minHeight: "400px", border: " 7px #002736", borderStyle: "solid hidden solid solid", display: "inline-block", position: "relative"}}>
            <h3 style = {{position: "absolute", backgroundColor: "#002736", color: "#FFFFFF", width: "100%"}} className = "p-2">     {this.state.chosenModel} model example
            </h3>
              <textarea style = {{ position: "absolute", width: "100%", minHeight: "80%", resize: "none", marginTop: "50px", whiteSpace: "pre-line", backgroundColor: "transparent", border: "none", fontSize: "20px", transitionDuration:"1000ms"}}
                value = {this.state.modelDesc}
                onChange = {() => {}}
                className = { !this.state.modelChanged ? 'fadeIn':'fadeOut' }
                >
              </textarea>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.changeLine('row32');
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
      modelDesc: pretifyCode({},getRoute(this.changeChosenModel(id)))
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
