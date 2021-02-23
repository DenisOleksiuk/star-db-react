import { SwapiServiceConsumer } from '../swapi-service-contex';
import ErrorBoundry from '../error-boundry';

const withSwapiService = (mapMethodsToProps) =>  (Wrapped) => {
  return (props) => {
    return (
      <ErrorBoundry>
        <SwapiServiceConsumer>
        {
          (swapiService) => {
            const swapiProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...swapiProps} />
            )
          }
        }
        </SwapiServiceConsumer>
      </ErrorBoundry>
    )
  }
}

export { withSwapiService };
