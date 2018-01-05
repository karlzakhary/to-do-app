import React, { Component } from 'react';

import './App.css';


import { Routes } from './Routes'



import { Provider } from 'react-redux'


import { configureStore } from './store/configureStore'

import * as TodoActions from './todos/actions/todoActions'

import AppBar from 'material-ui/AppBar';



const store = configureStore()



store.dispatch(TodoActions.GetTodos())

const App = (props) => {
  return (
    

      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;