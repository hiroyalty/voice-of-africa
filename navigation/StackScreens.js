import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import PrivacyScreen from '../components/PrivacyScreen';
import VideoScreen from '../components/VideoScreen';
import IconClick from '../constants/IconClick';
import LogoTitle from '../constants/LogoTitle';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

export function HomeStackScreen({ navigation }) {
  const onPress = () => alert('am pressed');
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerTitle: <LogoTitle />,
          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              //onPress={onPress}
              onPress={() => navigation.navigate('Video')}
            >
            <IconClick 
              Icon={MaterialIcons} 
              name="live-tv" 
              style={{ paddingRight: 10}}
            />
            </TouchableOpacity>
          ),
        }} 
      />
    </HomeStack.Navigator>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10
  },
})

const AboutStack = createStackNavigator();

export function AboutStackScreen({ navigation }) {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} 
        options={{
          headerTitle: <LogoTitle />,
          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              //onPress={onPress}
              onPress={() => navigation.navigate('Video')}
            >
            <IconClick 
              Icon={MaterialIcons} 
              name="live-tv" 
              style={{ paddingRight: 10}}
            />
            </TouchableOpacity>
          ),
        }} 
      />
    </AboutStack.Navigator>
  );
}

const PrivacyStack = createStackNavigator();

export function PrivacyStackScreen({ navigation }) {
    return (
      <PrivacyStack.Navigator>
        <PrivacyStack.Screen name="Privacy" component={PrivacyScreen} 
           options={{
          headerTitle: <LogoTitle />,
          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              //onPress={onPress}
              onPress={() => navigation.navigate('Video')}
            >
            <IconClick 
              Icon={MaterialIcons} 
              name="live-tv" 
              style={{ paddingRight: 10}}
            />
            </TouchableOpacity>
          ),
        }} 
        />
      </PrivacyStack.Navigator>
    );
}

const VideoStack = createStackNavigator();

export function VideoStackScreen({ navigation }) {
  const onPress = () => alert('am pressed');
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen 
        name="watch" 
        component={VideoScreen} 
        options={{
          headerTitle: 'VOA Live',
        }} 
      />
    </VideoStack.Navigator>
  );
}