import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    count: this.props.value,
    textClass: 'text-danger m-3'
  };
  render() {
    return (
      <div>
        <span className= {this.state.textClass}>{this.state.count}</span>
        <button onClick = {() => this.increment() }>Add</button>
      </div>
    );
  }
  increment = () => {
    this.setState({
      textClass: 'text-success m-3',
      count: ++this.state.count
    });
  }
}
