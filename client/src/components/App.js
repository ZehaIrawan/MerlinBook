import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../styles/style.css';
import Categories from './layout/Categories'
import memberBooks from './layout/memberBooks'
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
          <Route exact path="/books" component={memberBooks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/categories" component={Categories} />
          </Switch>
        </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
