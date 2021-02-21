import React, { Component } from 'react'
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    }
    
    componentDidMount() {
      this.props.getData().then((data) => {
        this.setState({ data });
      }).catch(this.onErrorMessage)
    }

    onErrorMessage = (err) => {
      this.setState(({error: true}));
      console.error(err);
    }
    
    render() {
      const { data, error } = this.state;

      if (!data) {
        return <Spinner />
      }

      return <View {...this.props} data={ data } error={ error } />
    }
  }
}

export default withData;