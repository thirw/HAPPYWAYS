import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo"; 

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { navigation, backButton, backButtonColor } = this.props;
        return (
            <View style={styles.title}>
                <View style={styles.lefttitle}>
                    {backButton && (
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <EntypoIcon
                                name="chevron-left"
                                size={28}
                                color={backButtonColor ? backButtonColor : '#fff'}
                            />
                        </TouchableOpacity>
                    )}
                    {this.props.lefttitle}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        {this.props.headtitle}
                    </Text>
                </View>
                <View style={styles.righttitle}>{this.props.righttitle}</View>
            </View>
        );
    }
}

const styles = ({
    title: {
        height: 60,
        paddingTop: 15,
        backgroundColor: 'orange',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    titleContainer: {
        flex: 3,
        // paddingTop: 5,
        // height: 40,
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white'
    },

    lefttitle: {
        flex: 1,
        height: null,
        width: 30,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    righttitle: {
        flex: 1,
        height: null,
        width: 30,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

export default HeaderBar;
