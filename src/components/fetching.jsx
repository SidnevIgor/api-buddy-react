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
        <h1 style={{color: this.props.headingClr}}>{this.props.heading}</h1>
        <div className="d-flex justify-content-center">
          <input type='text' style={{height: "400px", width: "300px"}} className="m-5"
            value={this.state.query}
            onChange={(event) => this.handleChange(event)}
            ></input>
          <input type='text' style={{height: "400px", width: "300px"}} className="m-5"
            value={this.state.items}
            onChange={() => {}}></input>
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" value="Fetch data" style={{display: "inline-block"}} className="m-2" onClick={(event)=> this.handleSubmit(event)}/>
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
