import React, { Component } from 'react';
import {Image} from 'react-native';


export default class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('../assets/voa1.png')}
        style={{ width: 35, height: 35, borderRadius: 10 }}
      />
    );
  }
}