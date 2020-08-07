import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HeaderNavigationBar from './HeaderNavigationBar'

export default class InfoScreen extends Component {
    render() {
      return (
        <View style={styles.container}> 
          <HeaderNavigationBar {...this.props} />
        <View style={styles.aboutView}>
          <Text style={styles.title}>
            Voice Of Africa Radio 
          </Text>
          <Text style={styles.content}>
          VOA Radio Is Established To Promote And Propagate Authentic Afro-Centric 
          Culture And Connect People Of Black Heritage World-Wide.
          </Text>
          </View>
      </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  aboutView: {
    flex: 1,
    backgroundColor: '#1e272c',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 22, 
    color: 'white'
  },
  content: {
    fontSize: 20,
    color: 'white', 
    textAlign: 'justify',
    margin: Constants.statusBarHeight,
  },
})