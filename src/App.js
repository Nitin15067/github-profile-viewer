import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Styles
import './App.css';

// Components
import Form from './components/form.js';
import CardWrapper from './components/cardWrapper';
import Filters from './components/filters';

// Action
import { addUser, deleteUser, applyFilter} from './redux/actions/githubUsers.action';

const App = (props) => {
  const formProps = {
    addUser: props.addUser
  }
  const filterProps = {
    applyFilter: props.applyFilter
  }
  const cardWrapperProps = {
    users: props.users,
    deleteUser: props.deleteUser
  }
  return (
    <div className="App">
      <Form {...formProps} />
      <Filters {...filterProps} />
      <CardWrapper {...cardWrapperProps} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({
    addUser,
    deleteUser,
    applyFilter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
