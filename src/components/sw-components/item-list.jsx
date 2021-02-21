import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunc = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    )
  }
};

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

const PersonList = withSwapiService(withData(withChildFunc(ItemList, renderName)), mapPersonMethodToProps);

const PlanetList = withSwapiService(withData(withChildFunc(ItemList, renderName)),mapPlanetMethodToProps );

const StarshipList = withSwapiService(withData(withChildFunc(ItemList, renderName)), mapStarshipMethodToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};