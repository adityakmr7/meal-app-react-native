import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from "./navigation/MealsNavigator";

//To optimize speed of screens
import {useScreens} from 'react-native-screens';
useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  })
};



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded) {
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
    />
  }
  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
