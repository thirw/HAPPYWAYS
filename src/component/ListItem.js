import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { Location, name, blogdescription, img } = this.props.blog.item;
        return (
            <TouchableOpacity style={{ flex: 1, backgroundColor: "#fff" }} onPress={() => this.props.navigation.navigate('Place', { showItem: this.props.blog.item })}>
                <View style={{ flex: 1, marginHorizontal: 5, marginTop: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, margin: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}></Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri: img }} style={styles.imgStyle} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text numberOfLines={2} style={{ flex: 1, marginVertical: 5, fontSize: 17, fontWeight: '500' }}>{name}</Text>
                        <Text>{Location}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: '#778899', lineHeight: 21 }}>{blogdescription}</Text>
                    </View>
                    <View style={{ marginBottom: 5 }} />
                    <View style={styles.seperateLine} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    imgStyle: {
        height: 160,
        width: null,
        borderRadius: 5,
        overflow: "hidden",
        marginVertical: 5
    },
    head: {
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginTop: 5
    },
    seperateLine: {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 0.5,
        marginTop: 5
    },
    blogTitle: {
        marginTop: 5,
        color: "red",
        fontSize: 18
    },
    blogDescription: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        color: 'grey',
        fontSize: 12
    },
    textHeader: {
        color: 'grey',
        fontSize: 14
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
    },
    nameText: {
        fontSize: 14,
        color: "red",
        fontWeight: 'bold'
    }
}

export default ListItem;
