import React, { Component } from 'react';
import { StarshipList, StarshipDetails } from '../sw-components';
import Row from '../row-wrraper';

export default class StarshipsPage extends Component {

  state = {
    selectedStarship: 10,
  }

  onStarshipSelected  = (selectedStarship) => this.setState({ selectedStarship });

  render() {
    const { selectedStarship } = this.state;

    return (
      <Row left={ <StarshipList onItemSelected={this.onStarshipSelected} /> }
        right={ <StarshipDetails selectedItem={ selectedStarship } /> }
      />
    )
  }
}
