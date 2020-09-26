import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <button className="btn btn-primary" onClick={() => this.props.onReset()}>Reset</button>
        { this.props.counters.map(counter => {
          return (
            <Counter key={counter.id} counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}/>)
        })}
      </div>
    );
  }
}
