import ItemList from '../item-list';
import { withData, withSwapiService, compose, withChildFunc } from '../hoc-helper';

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunc(renderName)
  )(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunc(renderName)
  )(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunc(renderName)
  )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};