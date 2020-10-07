import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <FontAwesomeIcon icon={ faLinkedin } style={{color: "grey", width: "50px", height: "50px"}}/>
        <FontAwesomeIcon icon={ faFacebookSquare } style={{color: "grey", width: "50px", height: "50px"}}/>
      </React.Fragment>
    )
  }
}
