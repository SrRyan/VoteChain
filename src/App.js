import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/HeaderComponent/NavBar';
import Landing from './components/LandingComponent/Landing';
import Footer from './components/FooterComponent/Footer';
import Dashboard from './components/DashboardComponent/Dashboard';
import Login from './components/LoginComponent/Login';
import OrgDashboard from './components/OrgDashboardComponent/OrgDashboard';
import './App.css';

const fakeAuth = {
  isAuthenticated: true,
  // authenticate(cb) {
  //   this.isAuthenticated = true
  // },
  // signout(cb) {
  //   this.isAuthenticated = false
  // }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
)

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/Login' component={Login}/>
          <PrivateRoute path='/dashboard' component={Dashboard}/>
          <PrivateRoute path='/org' component={OrgDashboard}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
