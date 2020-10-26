import React, {Component} from 'react';

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
    query: `fetch(https://api-buddy.herokuapp.com/api/${this.props.route})\n  .then((data) => console.log(data))`,
    mainColor: this.props.backgroundClr,
    secondaryColor: this.props.headingClr,
    refernce: ''
  };
  render() {
    return (
      <div style = {{ fontFamily: "Inter", backgroundColor: this.props.backgroundClr, height: "100%", width: "100%", display: "inline-block"}}>
        <h1 style = {{color: this.props.headingClr}} className="pl-5 pb-3 pt-4">{this.props.heading}</h1>
        <h3 className="pl-5" style = {{fontWeight: "300", color: this.props.headingClr}}>{this.props.addHeading}</h3>
        <div className="d-flex justify-content-center">

          <textarea type='text' style={{ height: "400px", width: "550px", backgroundColor: this.props.headingClr, color: this.props.backgroundClr, resize: "none", fontSize: "18px" }}
            data-gramm_editor="false"
            className="m-5"
            value={this.state.query}
            onChange={(event) => this.handleChange(event)}
          ></textarea>

        <textarea type='text' style={{ height: "400px", width: "550px", backgroundColor: this.props.headingClr, color: this.props.backgroundClr, resize: "none", fontSize: "18px" }}
            data-gramm_editor="false"
            className="m-5"
            value={this.state.items}
            onChange={() => {}}
          ></textarea>

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
    fetchData(`${this.props.route}`,'GET','',this.props.token).then(data => {
      let itemsStr = pretifyCode(this, data);
      this.setState({items: itemsStr});
    });
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
