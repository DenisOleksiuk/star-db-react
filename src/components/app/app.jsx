import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { SwapiService, DummySwapiService } from '../../services';
import { SwapiServiceProvider } from '../swapi-service-contex';
import { PeoplePage, PlanestPage, StarshipsPage } from '../pages';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService(),
  }

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
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.state.swapiService }>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />
            <PlanestPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}