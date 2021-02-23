import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { SwapiService } from '../../services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  }
  

  swapiService = new SwapiService();

  state = { 
    planet: {},
    loading: true,
    error: false,
    showPlanet: true,
   }
  
  componentDidMount() {
    const { updateInterval } = this.props;
    setInterval(this.updatePlanet, updateInterval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
    this.setState({ loading: false });
  };

  onErrorMessage = (err) => {
    this.setState(({error: true}));
    this.setState({loading: false});
    console.error(err);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onErrorMessage);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
  
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const planetView = hasData ? <PlanetView planet={ planet } /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {planetView}
        {errorMessage}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
  <React.Fragment>
    <img className="planet-image"
    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
    alt="planet"/>
    <div>
      <h4>{ name }</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population</span>
          <span>{ population }</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{ rotationPeriod }</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{ diameter }</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
  )
}
