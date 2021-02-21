import ErrorIndicator from '../error-indicator';

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

export default ItemList;
