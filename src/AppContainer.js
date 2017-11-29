import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { createGrocery } from './reducers/groceries';
import {
  fetchGroceries,
} from './reducers/groceries';

    // fetch('https://intro-to-redux-groceries-api.herokuapp.com/groceries', {
      // method: 'POST',
      // headers: {
        // 'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({ }),
    // })

class AppContainer extends Component {
  state = { value: '' }

  componentDidMount() {
    this.props.fetchGroceries();
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
  fetchGroceries,
  createGrocery,
})(AppContainer);
