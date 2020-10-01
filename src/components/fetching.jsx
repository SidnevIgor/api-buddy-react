import React, {Component} from 'react';
import fetchData from '../services/fetchData';

export default class Fetching extends Component {
  state = {
    items: [],
    query: 'fetch(https://api-buddy.herokuapp.com/api/customers)'
  };
  render() {
    return (
      <React.Fragment>
        <h1>Fetch is here!</h1>
        <input type='text' style={{height: "400px", width: "300px"}} className="m-3"
          value={this.state.query}
          onChange={(event) => this.handleChange(event)}
          ></input>
        <input type='text' style={{height: "400px", width: "300px"}} className="m-3"
          value={this.state.items}
          onChange={() => {}}></input>
        <input type="submit" value="Fetch data" style={{display: "block"}} className="m-3" onClick={(event)=> this.handleSubmit(event)}/>
      </React.Fragment>
    );
  }
  handleChange = (event) => {
    this.setState({query: event.target.value})
  }
  handleSubmit = (event) => {
    //console.log(event);
    fetchData('customers','GET').then(data => {
      console.log(data);
      this.setState({items: JSON.stringify(data)});
    });
  }
}
