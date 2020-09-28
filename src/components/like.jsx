import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Like extends Component {
  state = {
    isChosen: false
  };
  render() {
    return (
      <i className="far fa-heart" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"></i>
    );
  }
}
