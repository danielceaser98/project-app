import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage';
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
          <Route path="/scanner" component={StudentPage} />
          <Route path="/generator" component={TeacherPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;