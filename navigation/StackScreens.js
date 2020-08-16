import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import PrivacyScreen from '../components/PrivacyScreen';
import VideoScreen from '../components/VideoScreen';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Video" component={VideoScreen} />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

export function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
      <AboutStack.Screen name="Video" component={VideoScreen} />
    </AboutStack.Navigator>
  );
}

const PrivacyStack = createStackNavigator();

export function PrivacyStackScreen() {
    return (
      <PrivacyStack.Navigator>
        <PrivacyStack.Screen name="Privacy" component={PrivacyScreen} />
        <PrivacyStack.Screen name="Video" component={VideoScreen} />
      </PrivacyStack.Navigator>
    );
}