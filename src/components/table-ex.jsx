import React, {Component} from 'react';

import fetchData from '../services/fetchData';
import Like from './like';

class Table extends Component {
  state = {
    customers: [],
    isInit: false
  };
  render() {
    if(!this.state.isInit) {
      this.initComp();
    }
    if(this.state.customers.length === 0) {
      return <h1>There are no customers</h1>
    }
    return (
    <div>
      <h1>There are {this.state.customers.length} customers</h1>
      <table style={{width: "900px"}} className="table">
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
              <td><Like/></td>
              <td><button className="btn btn-danger" onClick={() => this.deleteRow(i)}>Delete</button></td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
    );
  }
  initComp = () => {
    fetchData('auth/customers','GET','', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1NzkxMDA5M2Q4NjAwMTc5NzA5NTMiLCJpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN6TgapD4USzUdm-wHE2H_hGC8n_R3ORE').then(data => {
      this.setState({customers: data});
    });
    this.state.isInit = true;
  }
  deleteRow = (id) => {
    let newArr = [...this.state.customers];
    newArr.splice(id,1);
    this.setState({customers: newArr});
  }
}
export default Table;
