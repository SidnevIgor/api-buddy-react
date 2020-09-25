import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <button className="btn btn-primary" onClick={() => this.handleReset()}>Reset</button>
        { this.state.counters.map(counter => {
          return (
            <Counter key={counter.id} counter={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}/>)
        })}
      </div>
    );
  }
}
