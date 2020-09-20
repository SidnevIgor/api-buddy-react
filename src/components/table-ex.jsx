import React, {Component} from 'react';

import fetchData from '../services/fetchData';

class Table extends Component {
  state = {
    customers: []
  };
  render() {
    if(this.state.customers.length === 0) {
      fetchData('customers','GET').then(data => {
        this.setState({customers: data});
      });
      return <p>There are no customers</p>
    }
    return (
    <div>
      <h1>There are {this.state.customers.length} customers</h1>
      <table style={{width: "700px"}} className="table">
        <thead>
          <tr>
            <th scope="col">customerID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            {this.state.customers.map((customer, i) => { return (
              <tr key={i}>
              <td key={i+1}>{customer.customerId}</td>
              <td key={i+2}>{customer.firstName}</td>
              <td key={i+3}>{customer.lastName}</td>
              <td key={i+4}>{customer.email}</td>
              <td><button className="btn btn-danger" onClick={() => this.deleteRow(i)}>Delete</button></td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
    );
  }
  deleteRow = (id) => {
    let newArr = [...this.state.customers];
    newArr.splice(id,1);
    this.setState({customers: newArr});
  }
}
export default Table;
