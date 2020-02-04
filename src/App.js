import React from 'react'
import Navigation from './src/routes'
import { Provider } from 'react-redux'
import STORE from './src/store/createStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={STORE}>
        <Navigation/>
      </Provider>
    )
  }
}