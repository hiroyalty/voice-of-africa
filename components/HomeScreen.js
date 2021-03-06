import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import TabBarIcon from '../constants/TabBarIcon';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import Layout from '../constants/Layout';
import LogoTitle from '../constants/LogoTitle';

//import { ThemeProvider } from '@react-navigation/native';


const source = { uri: 'http://165.22.232.151:8000' };

class HomeScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerTitle: <LogoTitle />,
  //     headerRight: () => (
  //       <Button onPress={() => alert('beep')} title="Update count" />
  //     ),
  //   }
  // };

  state = {
    playingStatus: "nosound"
  };

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
  }
  
  async _playRecording() {
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      {
        shouldPlay: true,
        isLooping: false,
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
      //activateKeepAwake();
    } else if (!status.isPlaying && this.state.playingStatus === "playing") {
      this.setState({ playingStatus: "paused" });
      //deactivateKeepAwake();
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
        //deactivateKeepAwake();
      } else {
        console.log('playing...');
        await this.sound.playAsync();
        console.log('playing!');
        this.setState({
          playingStatus: 'playing',
        });
        //activateKeepAwake();
      }
    }
  }
  
  _syncPauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'playing') {
        this.sound.pauseAsync();
        //deactivateKeepAwake();
      } else {
        this.sound.playAsync();
        //activateKeepAwake();
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
      //const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.theme.colors.backdrop }}>
      <View>
        <Image style={styles.carousel} 
          source={require('../assets/voa1.png')} 
        />
        <TouchableOpacity style={styles.controlWrapper} >
          <Ionicons name={this.state.playingStatus === "playing" ? 'md-pause' : 'md-play' } 
            size={46} 
            color={this.props.theme.colors.myBlack} 
            onPress={this._playAndPause} />
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}
  
  const styles = StyleSheet.create({
    controlWrapper: {
      //flex: 1,
      paddingTop: 50,
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
    carousel: {
      width: Layout.window.width - 10,
      height: Layout.window.height / 2,
    }
  });
  
  export default withTheme(HomeScreen);