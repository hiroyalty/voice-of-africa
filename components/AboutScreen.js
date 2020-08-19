import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

class InfoScreen extends Component {
  state = {
    visible: true
  };
    render() {
      return (
        <SafeAreaView >
          <Banner
            visible={this.state.visible}
            actions={[
              {
                label: 'Watch Along',
                onPress: () => this.setState({ visible: true}),
              },
            ]}
            icon={({size}) => (
              <Image
                source={
                  //uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                  require("../assets/voa1.png")
                }
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}>
            VOA Radio Is Established To Promote And Propagate Authentic Afro-Centric 
            Culture And Connect People Of Black Heritage World-Wide.
          </Banner>
        </SafeAreaView>);
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

export default withTheme(InfoScreen);