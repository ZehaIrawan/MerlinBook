import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Alert from '../components/layout/Alert';
import PrivateRoutes from '../components/routing/PrivateRoutes';
import setAuthToken from '../components/utils/setAuthToken';
import { loadUser } from '../redux/actions/auth';
import storeCloud from '../redux/storeCloud';
import '../styles/style.css';
import Dashboard from './Dashboard';
import Categories from './layout/Categories';
import memberBooks from './layout/memberBooks';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    storeCloud.dispatch(loadUser());
  }, []);

  return (
    <Provider store={storeCloud}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path="/" component={Register} />
            <PrivateRoutes exact path="/books" component={memberBooks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoutes exact path="/categories" component={Categories} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
