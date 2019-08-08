import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../styles/style.css';

import storeCloud from '../redux/storeCloud'
import Dashboard from './Dashboard'
import Alert from '../components/layout/Alert';


function App() {
  return (
    <Provider store={storeCloud}>
        <Router>
        <Fragment>
          <Route exact path="/" component={Dashboard} />
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
