import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default class Like extends Component {
  state = {
    isChosen: false
  };
  render() {
    return (
      <FontAwesomeIcon icon={ faHeart } style={{ color: this.state.isChosen?"red":"black"}} onClick={() => this.changeColor()}/>
    );
  }
  changeColor = () => {
    this.setState({isChosen: this.state.isChosen?false:true});
  }
}
