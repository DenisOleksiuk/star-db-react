import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="eyeColor" label="Eye Color:" />
      <Record field="birthYear" label="Birth Year:" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImg
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
