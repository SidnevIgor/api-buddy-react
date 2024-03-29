import React, { Component } from 'react';

import Header from './header.jsx';
import RoutesDisplay from './routesDisplay';
import Counters from './counters.jsx';
import Fetching from './fetching';
import Social from './footer';
import AddFooter from './add-footer';
import fetchData from '../services/fetchData';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}
    ],
    addFooterDisplay: "none",
    socialDisplay: "block"
  };
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.footerRef = React.createRef();
    fetchData('customers','GET').then(() => {
    });
  }
  handleAddFooterOpener = () => {
    this.setState({
      addFooterDisplay: "block",
      socialDisplay: "none"
    });
    setTimeout(() => {
      window.scrollTo({
        top: this.footerRef.current.refs[""].offsetTop,
        behavior: 'smooth'
      });
    }, 100);
  }
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== counterId)
    });
  }
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.findIndex((item) => item.id === counter.id);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.findIndex((item) => item.id === counter.id);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }
  handleReset = () => {
    let counters = [...this.state.counters];
    counters = counters.map((counter) => {
      counter.value=0;
      return counter;
    });
    this.setState({counters});
  }
  handleScroll = () => {
    window.scrollTo({
      top: this.headerRef.current.refs[""].offsetTop,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <React.Fragment>
        <Header
          totalCounters={this.state.counters.filter((counter) => counter.value > 0).length}
          scrollDown = { this.handleScroll }
          />
        <RoutesDisplay
          reference = { this.headerRef }
          ref = { this.headerRef }
          />

        {/*  <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
            />
        */}
            <Fetching
            route = 'customers'
            heading = 'Simple request'
            backgroundClr = '#D3E0E9'
            headingClr = '#1C3B4A'
            addHeading = 'Easily fetch the database with no prerequisites'
            />
            <Fetching
              route = 'auth/employees'
              heading = 'Auth-protected request'
              token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1NzkxMDA5M2Q4NjAwMTc5NzA5NTMiLCJpYXQiOjE2MDE1MzQyMjV9.PjPqjLi221SN6TgapD4USzUdm-wHE2H_hGC8n_R3ORE'
              backgroundClr = '#002736'
              headingClr = '#FEFEFE'
              addHeading = 'Fetch auth-protected routes with a valid JWT token'
              addBtn = 'true'
              addBtnClick = {this.handleAddFooterOpener}
              />
            <Social
              isDisplay = { this.state.socialDisplay }
               />
            <AddFooter
              isDisplay = { this.state.addFooterDisplay }
              reference = { this.footerRef }
              ref = { this.footerRef }
              />
      </React.Fragment>
    );
  }
}
export default App;
