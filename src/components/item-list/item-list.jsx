import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          { label }
        </li>
      )
    });

    const error = items ? null : <ErrorIndicator />
    return (
      <ul className="item-list list-group">
        { error }
        { items }
      </ul>
    );
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;
