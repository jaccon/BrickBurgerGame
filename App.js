import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

  import { Audio } from 'expo-av';

import Main from './src/main';
import Sounds from './src/components/SoundBackground';


export default class AppContainer extends React.Component {
  state = {
    assetsLoaded: false,
  }

  async componentDidMount() {
    const playbackObject = await Audio.Sound.createAsync(
      require('./assets/sounds/tetris.mp3'),
      { shouldPlay: true, isLooping: true }
    );
    playbackObject.playAsync();
  }

  render() {
    return (
      <View 
        style={{flex: 1, backgroundColor: '#c9232f', width: '100%'}}
      >
          <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});