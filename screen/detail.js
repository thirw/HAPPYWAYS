import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import HeaderBar from '../src/headerbar';

class DetailScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <HeaderBar backButton navigation={this.props.navigation} headtitle="ACCOMMODATIONS" />
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default DetailScreen;
