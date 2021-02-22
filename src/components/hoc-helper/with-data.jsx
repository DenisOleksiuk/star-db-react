import React, { Component } from 'react'
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    }
    
    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false
      });

      this.props.getData().then((data) => {
        this.setState({ data, loading: false });
      }).catch(this.onErrorMessage);
    }

    onErrorMessage = (err) => {
      this.setState(({error: true, loading: false}));
      console.error(err);
    }
    
    render() {
      const { data, error, loading } = this.state;

      if (loading) {
        return <Spinner />
      }

      return <View {...this.props} data={ data } error={ error } />
    }
  }
}

export default withData;