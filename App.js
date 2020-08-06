import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, TouchableHighlight } from 'react-native';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import HeaderNavigationBar from './Components/HeaderNavigationBar';
import AboutScreen from './Components/AboutScreen';
import PrivacyScreen from './Components/PrivacyScreen'
import { DrawerNavigator } from 'react-navigation'; 
import { Audio } from 'expo-av';

const source = {
  uri: 'http://165.22.232.151:8000'
};

export class HomeScreen extends Component {
  state = {
    playingStatus: "nosound"
  };
  
  async _playRecording() {
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      {
        shouldPlay: true,
        isLooping: true,
      },
      this._updateScreenForSoundStatus,
    ).catch(error => console.log('radio not reached'));
    this.sound = sound;
    this.setState({
      playingStatus: 'playing'
    });
  }
  
  _updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && this.state.playingStatus !== "playing") {
      this.setState({ playingStatus: "playing" });
      activateKeepAwake();
    } else if (!status.isPlaying && this.state.playingStatus === "playing") {
      this.setState({ playingStatus: "paused" });
      deactivateKeepAwake();
    }
  };
  
  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'playing') {
        console.log('pausing...');
        await this.sound.pauseAsync();
        console.log('paused!');
        this.setState({
          playingStatus: 'paused',
        });
      } else {
        console.log('playing...');
        await this.sound.playAsync();
        console.log('playing!');
        this.setState({
          playingStatus: 'playing',
        });
      }
    }
  }
  
  _syncPauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'playing') {
        this.sound.pauseAsync();
      } else {
        this.sound.playAsync();
      }
    }
  }
  
  _playAndPause = () => {
    switch (this.state.playingStatus) {
      case 'nosound':
        this._playRecording();
        break;
      case 'paused':
      case 'playing':
        this._pauseAndPlayRecording();
        break;
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
        <ImageBackground 
          style={styles.container} 
          source={require("./assets/voa.png")} 
          resizeMode='contain'>
        <TouchableOpacity style={styles.controlWrapper} onPress={this._playAndPause}>
          <Image
            style={styles.control}
            source={ this.state.playingStatus === "playing" ? require("./assets/pause.png") : require("./assets/play.png")}
          />
        </TouchableOpacity>
        </ImageBackground>
        </View>);
    }
  }

export default DrawerNavigator (
    {
      Home:{
        screen:HomeScreen
      },
      About:{
        screen:AboutScreen
      },
      Privacy: {
        screen: PrivacyScreen
      }
    },{
        initialRouteName:'Home'
    }
)

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: undefined,
    width: undefined,
    backgroundColor: "#1e272c"
  },
  controlWrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',

  },
  control: {
    width: 160,
    height:160
  }
  
});