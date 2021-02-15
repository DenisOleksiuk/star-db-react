import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
  }

  showRandomPlanet = () => {
    this.setState(({showRandomPlanet}) => ({showRandomPlanet: !showRandomPlanet}));
  }

  render() {
    const { showRandomPlanet } = this.state;
    const planet = showRandomPlanet ? <RandomPlanet showPlanet={ showRandomPlanet } /> : null;
    return (
      <div className="container">
        <Header />
        {planet}
        <button 
          type="button"
          className="btn btn-primary toggle-btn"
          onClick={this.showRandomPlanet}
          >Toggle random planet</button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}