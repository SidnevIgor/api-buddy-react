import React, {Component} from 'react';
import swal from 'sweetalert';

import fetchData from '../services/fetchData';
import pretifyCode from '../services/pretifyCode';
import './index.css';

export default class Fetching extends Component {
  constructor(props) {
    super(props);
    this.reference = this.props.reference;
  }
  state = {
    items: [],
    query: `fetch('https://api-buddy.herokuapp.com/api/${this.props.route}')\n  .then((response) => response.json())\n  .then((data) => console.log(data))`,
    mainColor: this.props.backgroundClr,
    secondaryColor: this.props.headingClr,
    refernce: ''
  };
  render() {
    return (
      <div style = {{ fontFamily: "Inter", backgroundColor: this.props.backgroundClr, minHeight: "103%", width: "100%", display: "inline-block"}}>
        <h1 style = {{color: this.props.headingClr}} className="pl-5 pb-3 pt-4">{this.props.heading}</h1>
        <h3 className="pl-5" style = {{fontWeight: "300", color: this.props.headingClr}}>{this.props.addHeading}</h3>
        <div className="d-flex justify-content-center" style = {{width: "100%"}}>

        <div className = "m-5" style = {{width: "30%"}}>
        <textarea type='text' style={{ height: "400px", width: "100%", backgroundColor: this.props.headingClr, color: this.props.backgroundClr, resize: "none", fontSize: "18px" }}
            data-gramm_editor="false"
            value={this.state.query}
            onChange={(event) => this.handleChange(event)}
            id = "codeArea"
          ></textarea>
        <img src = { require(`./images/${this.props.backgroundClr == "#D3E0E9" ? 'copyW' : 'copyB'}.png`)} style = {{position: "relative", bottom: "12%", left: "90%"}} width = "7%" height = "7%" className = "copyimg" onClick = {() => this.handleCopy()}></img>
        </div>

        <div className="d-flex m-5" style = {{width: "30%"}}>
        <textarea type='text' style={{ height: "400px", width: "100%", backgroundColor: this.props.headingClr, color: this.props.backgroundClr, resize: "none", fontSize: "18px" }}
            data-gramm_editor="false"
            value={this.state.items}
            onChange={() => {}}
          ></textarea>
        </div>

        </div>
        <div className = "d-flex justify-content-center">
          <input type = "submit" value="Fetch data"
            style = {{ display: "inline-block", backgroundColor: this.state.mainColor, borderColor: this.state.secondaryColor, color: this.state.secondaryColor }}
            className = "m-4 btn rounded-pill btn-info"
            onClick = {(event)=> this.handleSubmit(event)}
            onMouseEnter = {() => this.changeBtn(true)}
            onMouseLeave = {() => this.changeBtn(false)}
            /><br/>
        </div>
        <div className = "d-flex justify-content-center" style = {{visibility: this.props.addBtn ? 'visible' : 'hidden'}}>
          <a className = "m-3 opener" style = {{ color: '#D1DF2B' }} onClick = {this.props.addBtnClick}>How does it work?</a>
        </div>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({query: event.target.value})
  }
  handleSubmit = (event) => {
    fetchData(`${this.props.route}`,'GET','',this.props.token)
    .then(data => {
      let itemsStr = pretifyCode(this, data);
      this.setState({items: itemsStr});
    }).catch((error) => {
      alert('Sorry, server is unavailable at the moment :(');
    });
  }
  handleCopy = () => {
    let el = document.getElementById('codeArea');
    console.log(el.value);
    el.select();
    document.execCommand('copy');
    swal("Code copied!","", "success");
  }
  changeBtn = (open) => {
    if(open) {
      this.setState({
        mainColor: this.props.headingClr,
        secondaryColor: this.props.backgroundClr
      });
    }
    else {
      this.setState({
        mainColor: this.props.backgroundClr,
        secondaryColor: this.props.headingClr
      });
    }
  }
}
