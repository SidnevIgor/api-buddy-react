import React, {Component} from 'react';

import Header from './header.jsx';
import Counters from './counters.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main className="container">
          <Counters/>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
