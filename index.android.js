import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class app4Udemy extends Component {

  render() {

    return (

      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app4Udemy', () => app4Udemy);
