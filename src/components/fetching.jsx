import React, {Component} from 'react';

import fetchData from '../services/fetchData';
import './index.css';

export default class Fetching extends Component {
  state = {
    items: [],
    query: `fetch(https://api-buddy.herokuapp.com/api/${this.props.route})`
  };
  render() {
    return (
      <div style={{fontFamily: "Inter", backgroundColor: this.props.backgroundClr}}>
        <h1 style={{color: this.props.headingClr}} className="p-5">{this.props.heading}</h1>
        <div className="d-flex justify-content-center">
          <textarea type='text' style={{height: "400px", width: "300px" }}
            className="m-5"
            value={this.state.query}
            onChange={(event) => this.handleChange(event)}
            ></textarea>
          <textarea type='text' style={{height: "400px", width: "300px"}}
            className="m-5"
            value={this.state.items}
            onChange={() => {}}
            ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" value="Fetch data" style={{display: "inline-block", backgroundColor: this.props.backgroundClr, "borderColor": this.props.headingClr}} className="m-3 btn rounded-pill btn-info" onClick={(event)=> this.handleSubmit(event)}/>
        </div>
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({query: event.target.value})
  }
  handleSubmit = (event) => {
    fetchData(`${this.props.route}`,'GET','',this.props.token).then(data => {
      console.log(data);
      this.setState({items: JSON.stringify(data)});
    });
  }
}
