import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Video } from 'expo-av';

class VideoScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      <Video
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls={true}
        style={{ width: 300, height: 300 }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VideoScreen;