import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}
    ]
  }
  render() {
    return (
      <div>
        { this.state.counters.map(counter => {
          return (
            <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}/>
          )
        })}
      </div>
    );
  }
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== counterId)
    });
  }
}
