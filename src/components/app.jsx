import React, {Component} from 'react';

import Header from './header.jsx';
//import Counters from './counters.jsx';
import Fetching from './fetching';
import Footer from './footer';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}
    ]
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== counterId)
    });
  }
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.findIndex((item) => item.id === counter.id);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.findIndex((item) => item.id === counter.id);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }
  handleReset = () => {
    let counters = [...this.state.counters];
    counters = counters.map((counter) => {
      counter.value=0;
      return counter;
    });
    this.setState({counters});
  }
  render() {
    return (
      <React.Fragment>
        <Header
          totalCounters={this.state.counters.filter((counter) => counter.value > 0).length}
          />

        {/*  <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
            />
        */}
            <Fetching
            route='customers'
            heading='Simple request'
            backgroundClr='#E9EEF2'
            headingClr='#1C3B4A'
            />
            <Fetching
              route='auth/employees'
              heading='Auth-protected request'
              token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1NzkxMDA5M2Q4NjAwMTc5NzA5NTMiLCJpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN6TgapD4USzUdm-wHE2H_hGC8n_R3ORE'
              backgroundClr='#002736'
              headingClr='#FEFEFE'
              />
            <Footer />

      </React.Fragment>
    );
  }
}
export default App;
