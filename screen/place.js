import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import HeaderBar from '../src/headerbar';

class PlaceScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showItem: this.props.navigation.state.params.showItem
    };
  }

  render() {
    const { bloguser, name, Detail, img } = this.state.showItem;
    return (
      <View style={{flex: 1}}>
        <HeaderBar headtitle={name} backButton navigation={this.props.navigation} />

        <ScrollView style={{flex: 1}}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 30 }}>

              <Text style={{
                fontSize: 19.5,
                fontWeight: 'bold'
              }}> {name} </Text>
            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
              <Image style={{ width: 300, height: 250 }} source={{ uri: img }} />
              <View style={{ marginTop: 20, marginHorizontal: 5 }}>
              <Text>{Detail}</Text>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

              <Button title="การเดินทาง" color="orange" />

              <Button title="หาเพื่อนเที่ยว" color="orange" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PlaceScreen;
