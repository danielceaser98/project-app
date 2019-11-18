import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import QRScanner from './QrScanner';
import QRGenerator from './QRGenerator';
import loginScreen from './loginScreen';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={loginScreen} exact />
          <Route path="/scanner" component={QRScanner} />
          <Route path="/generator" component={QRGenerator} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
