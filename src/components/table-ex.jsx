import React, {Component} from 'react';

import fetchData from '../services/fetchData';

class Table extends Component {
  state = {
    customers: [
      {
        "customerId": 1,
        "firstName": "Evy",
        "lastName": "Maxted",
        "email": "emaxted0@theatlantic.com",
        "tel": "266-846-9674",
        "password": "zKEEMj"
      }
    ]
  };
  render() {
    fetchData('customers','GET').then(data => {
      this.state.customers = data;
      console.log(this.state.customers);
    });
    return (
    <div>
      <h1>There are {this.state.customers.length} customers</h1>
      <table style={{width: "500px"}} className="table">
        <thead>
          <tr>
            <th scope="col">customerID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.customers.map(customer => { return (
              <React.Fragment>
              <td key="customer.customerId">{customer.customerId}</td>
              <td key="customer.firstName">{customer.firstName}</td>
              </React.Fragment>
            )
            })}
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}
export default Table;
