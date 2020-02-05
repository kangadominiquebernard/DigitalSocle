import React from 'react'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import STORE from './store/createStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={STORE}>
        <Navigation />
      </Provider>
    )
  }
}