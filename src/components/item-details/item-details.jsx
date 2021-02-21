import React, { Component } from 'react';
import { SwapiService } from '../../services';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
  </li>
  )
}

export { Record };

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateitem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.updateitem();
    }
  }

  updateitem() {
    const { selectedItem, getData, getImageUrl } = this.props;
    
    if (!selectedItem) {
      return;
    }
    
    getData(selectedItem).then((item) => {
      this.setState({ item, image: getImageUrl(selectedItem) })
    });
  }

  render() {
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { item, image } = this.state
    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
        src={image}
        alt="some item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
