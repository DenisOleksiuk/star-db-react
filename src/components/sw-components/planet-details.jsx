import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props}>

      <Record field="diameter" label="Diameter:" />
      <Record field="population" label="Population:" />
      <Record field="climate" label="Climate:" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImg
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
