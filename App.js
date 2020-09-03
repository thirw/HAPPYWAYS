import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack'

import firebase from 'firebase';

import SplashScreen from './screen/splashscreen';
import HomeScreen from './screen/home';
import PlaceScreen from './screen/place';
import ChatScreen from './screen/chatroom';


const RootStack = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    Home: { screen: HomeScreen },
    Place: { screen: PlaceScreen },
    ChatRoom: { screen: ChatScreen }
  },
  {
    initialRouteName: 'Splash',
  }
);

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBugb-OkKh1jlkcnTrmAyKtUm6pK6TAYDg',
      authDomain: 'happyway12-01.firebaseapp.com',
      databaseURL: 'https://happyway12-01.firebaseio.com',
      projectId: 'happyway12-01',
      storageBucket: 'happyway12-01.appspot.com',
      messagingSenderId: '126324111114'
    });
  }

  render() {
    return <AppContainer />;
  }

}