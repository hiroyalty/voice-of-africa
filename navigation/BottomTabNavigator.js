import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { HomeStackScreen, AboutStackScreen, PrivacyStackScreen } from './StackScreens';
import { TabBarIcon } from '../constants/TabBarIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator(props) {

  return (
    <BottomTab.Navigator 
      tabBarOptions={{ showLabel: false }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={AntDesign} focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutStackScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={Ionicons} focused={focused} name="ios-information-circle" />,
        }}
      />
      <BottomTab.Screen
        name="Privacy"
        component={PrivacyStackScreen}
        options={{
          title: 'Privacy',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={Ionicons} focused={focused} name="ios-list-box" />,
        }}
      />
       </BottomTab.Navigator>
  );
}