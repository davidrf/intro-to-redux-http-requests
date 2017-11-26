import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { createGrocery } from './reducers/groceries';

class AppContainer extends Component {
  state = { value: '' }

  onChangeValue = ({ target: { value } }) => this.setState({ value });

  onSubmit = event => {
    const { value } = this.state;
    event.preventDefault();

    if (value) {
      this.props.createGrocery(value);
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

export default connect(mapStateToProps, { createGrocery })(AppContainer);
