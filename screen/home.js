import React, { Component } from 'react';
import { FlatList, ScrollView, View, TouchableOpacity, Text, Modal } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Spinner } from '../src/component/common';
import ListItem from '../src/component/ListItem';

import HeaderBar from '../src/headerbar';

class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
          blog: [],
          modalVisible: false,
        }
      }
      componentDidMount() {
        this.fetchBlog();
      }
    
      async fetchBlog() {
        let data = [];
        await firebase.database().ref('write').on('value',
          snapshot => {
            snapshot.forEach(
              snap => {
                const value = snap.val();
                value.id = snap.key;
                data.push(value);
              }
            )
            data.reverse();
            this.setState({ blog: data })
          });
    
      }
    
      renderRow(blog) {
        return <ListItem navigation={this.props.navigation} blog={blog} />;
      }
    
      renderButton() {
        if (false) {
          return <Spinner size="large" />;
        }
        return (
          <Button onPress={() => this.onSubmitPress()}>
            Submit
          </Button>
        );
      }
    
      render() {
        return (
          <View style={{ flex: 1 }}>
          <HeaderBar headtitle="Happy Ways" />
            <ScrollView>
              <FlatList
                data={this.state.blog}
                renderItem={(item) => this.renderRow(item)}
                keyExtractor={item => item.id.toString()}
              />
            </ScrollView>
          </View>
        );
      }
    }
    
    const styles = {
      button: {
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#8BBBDE",
        bottom: 25,
        zIndex: 2,
        right: 15,
        alignItems: "center",
        justifyContent: "center"
      },
      iconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
      }
    }

export default HomeScreen;
