import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    count: this.props.value || 0
  };
  render() {
    let textClass = 'm-3 bold text-';
    textClass = textClass + (this.state.count === 0 ? 'warning' : 'success');
    return (
      <div>
        <span className= {textClass}>{this.state.count}</span>
        <button onClick = {() => this.increment() }>Add</button>
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }
  increment = () => {
    this.setState({
      count: ++this.state.count
    });
  }
}
