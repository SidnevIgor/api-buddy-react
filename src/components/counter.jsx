import React, {Component} from 'react';

export default class Counter extends Component {
  render() {
    let textClass = 'm-3 bold text-';
    textClass = textClass + (this.props.counter.value === 0 ? 'warning' : 'success');
    return (
      <div>
        <span className= {textClass}>{this.props.counter.value}</span>
        <button className="btn btn-success m-2" onClick = {() =>
            this.props.onIncrement(this.props.counter)}>Add</button>
          <button className="btn btn-warning m-2" disabled = {this.props.counter.value === 0} onClick = {() =>
            this.props.onDecrement(this.props.counter)}>Minus</button>
        <button className="btn btn-danger m-2" onClick={() =>
            this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }
}
