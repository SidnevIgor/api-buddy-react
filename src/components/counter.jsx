import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span className="text-success m-3">{this.state.count}</span>
        <button onClick = {() => this.increment() }>Add</button>
      </div>
    );
  }
  increment = () => {

    this.setState({count: ++this.state.count});
  }
}
