import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { SwapiService, DummySwapiService } from '../../services';
import { SwapiServiceProvider } from '../swapi-service-contex';
import { PeoplePage, PlanestPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetails, PlanetDetails } from '../sw-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() }
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.state.swapiService }>
        <Router>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <Switch>
              <Route path="/" exact render={() => <h2>Welcom to Star DB</h2>} />
              <Route path="/people/:id?" exact component={ PeoplePage} />
              <Route path="/planets" exact component={ PlanestPage } />
              <Route path="/planets/:id"
                render={({match}) => {
                  const {id} = match.params;
                  return <PlanetDetails selectedItem={id} />
                }}
              />
              <Route exact path="/starships" component={ StarshipsPage } />
              <Route path="/starships/:id"
                render={({match}) => {
                  const {id} = match.params;
                  return <StarshipDetails selectedItem={id} />
                }}
              />
              <Route path="/login" render={() => {
                return <LoginPage isLoggendIn={isLoggedIn} onLogin={this.onLogin} />
              }} />
              <Route path="/secret" render={() => {
                return <SecretPage isLoggedIn={isLoggedIn} />
              }} />
              <Route render={() => <h2>Error, you made a mistake in the url path</h2>} />
            </Switch>
          </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
