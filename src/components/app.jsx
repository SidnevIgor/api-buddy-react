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
    fetchData('employees/1','DELETE').then(data => {
      console.log(data);
    });
  }
}
export default App;
