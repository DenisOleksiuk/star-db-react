import React, { Component } from 'react'
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row-wrraper';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: 3,
  }

  onPersonSelected  = (selectedPerson) => this.setState({ selectedPerson });

  render() {
    const { selectedPerson } = this.state;
    return (
      <Row left={  <PersonList onItemSelected={ this.onPersonSelected } /> }
      right={ <PersonDetails selectedItem={ selectedPerson } /> } 
    />
    )
  }
}
