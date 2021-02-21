import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="cargoCapacity" label="Cargo Capacity:" />
      <Record field="passengers" label="Passengers:" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImg
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
