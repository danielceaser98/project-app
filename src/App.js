import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import LoginScreen from './LoginScreen';
import Navigation from './Navigation';

class App extends Component {
  constructor(props){
    super();

    this.state={
      loggedInStatus: 'NOT',
      user: {}
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => ( <LoginScreen {...props}/> )} />
          <Route path="/scanner" render={(props) => ( <StudentPage {...props}/> )} />
          <Route path="/generator" render={(props) => ( <TeacherPage {...props}/> )} />
          <Route component={Error} />
        </Switch>
        </div>
    </BrowserRouter>
    )
  }
}

export default App;