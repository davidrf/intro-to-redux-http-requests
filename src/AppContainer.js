import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { createGrocery } from './reducers/groceries';
import {
  fetchGroceryRequest,
  fetchGroceryRequestSuccess,
  fetchGroceryRequestFailure,
} from './reducers/groceries';

class AppContainer extends Component {
  state = { value: '' }

  componentDidMount() {
    this.props.fetchGroceryRequest();

    fetch('https://intro-to-redux-groceries-api.herokuapp.com/groceries')
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('request failed');
    })
    .then(
      body => this.props.fetchGroceryRequestSuccess(body),
      () => this.props.fetchGroceryRequestFailure,
    );
  }

  onChangeValue = ({ target: { value } }) => this.setState({ value });

  onSubmit = event => {
    const { value } = this.state;
    event.preventDefault();

    if (value) {
      this.props.createGrocery(value);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <App
        groceries={this.props.groceries}
        onChangeValue={this.onChangeValue}
        onSubmit={this.onSubmit}
        value={this.state.value}
      />
    );
  }
}

const mapStateToProps = ({ groceries }) => ({
  groceries: groceries.all,
});

export default connect(mapStateToProps, {
  fetchGroceryRequest,
  fetchGroceryRequestFailure,
  fetchGroceryRequestSuccess,
  createGrocery,
})(AppContainer);
