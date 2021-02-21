import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { SwapiService, DummySwapiService } from '../../services';
import Row from '../row-wrraper';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-contex';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'

import './app.css';

export default class App extends Component {
  
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: 3,
    selectedPlanet: 3,
    selectedStarship: 10,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  showRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => ({showRandomPlanet: !showRandomPlanet}));
  }

  onPlanetSelected = (selectedPlanet) => this.setState({ selectedPlanet });

  onPersonSelected  = (selectedPerson) => this.setState({ selectedPerson });

  onStarshipSelected  = (selectedStarship) => this.setState({ selectedStarship });

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { showRandomPlanet, selectedPerson, selectedStarship, selectedPlanet } = this.state;

    const planet = showRandomPlanet ? <RandomPlanet showPlanet={ showRandomPlanet } /> : null;

    const personList = (
      <PersonList onItemSelected={ this.onPersonSelected } />
    )

    const planetList = (
      <PlanetList onItemSelected={this.onPlanetSelected} />
    )

    const starshipList = (
      <StarshipList onItemSelected={this.onStarshipSelected} />
    )

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.swapiService }>
          <div className="container">
            <Header />
            {planet}

            <Row left={ personList } right={ <PersonDetails selectedItem={ selectedPerson } /> } />
            <Row left={ planetList } right={ <PlanetDetails selectedItem={ selectedPlanet } /> } />
            <Row left={ starshipList } right={ <StarshipDetails selectedItem={ selectedStarship } /> } />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}