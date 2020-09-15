import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.increment}>Increment</button>
      </div>
    );
  }
  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;
