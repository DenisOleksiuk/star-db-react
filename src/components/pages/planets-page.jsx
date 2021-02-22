import React, { Component } from 'react';
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../row-wrraper';

export default class PlanetsPage extends Component {

  state = {
    selectedPlanet: 3,
  }

  onPlanetSelected = (selectedPlanet) => this.setState({ selectedPlanet });

  render() {
    const { selectedPlanet } = this.state;
    return (
      <Row left={ <PlanetList onItemSelected={this.onPlanetSelected} /> }
        right={ <PlanetDetails selectedItem={ selectedPlanet } /> }
      />
    )
  }
}
