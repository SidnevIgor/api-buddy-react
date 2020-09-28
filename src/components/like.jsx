import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Like extends Component {
  state = {
    isChosen: false
  };
  render() {
    return (
      <i className="far fa-heart"></i>
    );
  }
}
