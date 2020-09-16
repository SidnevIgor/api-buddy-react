import React, {Component} from 'react';
import fetchData from '../services/fetchData';

class App extends Component {
  render() {
    this.getData();
    return (
      <div>Hello</div>
    );
  }
  getData() {
    fetchData('employees','POST', {
      "employeeId": 7,
      "firstName": "Codie",
      "lastName": "Stembridge",
      "position": "consultant",
      "storeId": 1
    }).then(data => {
      console.log(data);
    });
  }
}

export default App;
