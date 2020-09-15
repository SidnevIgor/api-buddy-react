import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <span className={this.getBadges()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.increment}>Increment</button>
      </div>
    );
  }
  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  formatCount = () => {
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
  getBadges = () => {
    let classes = 'badge m-2 badge-';
    return classes += (this.state.count === 0) ? 'warning' : 'primary';
  }
}

export default Counter;
