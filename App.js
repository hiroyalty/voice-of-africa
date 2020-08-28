// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import { MaterialIcons, Ionicons, MaterialCommunityIcons,FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoStackScreen } from './navigation/StackScreens';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import useLinking from './navigation/useLinking';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00acee',
    accent: '#f1c40f',
    backdrop: '#efebef',
    myBlack: '#000',
    myWhite: '#fff'
  },
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialIcons.font,
          ...MaterialCommunityIcons.font,
          ...FontAwesome.font,
          ...Feather.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'maven-pro-regular': require('./assets/fonts/MavenPro-Regular.ttf'),
          'maven-pro-bold': require('./assets/fonts/MavenPro-Bold.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
  return (
    <PaperProvider theme={theme}>
    <SafeAreaProvider style={styles.container}>
    <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Video" component={VideoStackScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </PaperProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
