import React, {Component} from 'react';

import Header from './header.jsx';
import Counters from './counters.jsx';

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
        <Header/>
        <main className="container">
          <Counters/>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
