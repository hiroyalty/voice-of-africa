import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';


export default class HeaderNavigationBar extends Component {
    render() {
        return (<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../assets/drawer.png")}
                />
            </TouchableHighlight>
        </View>);
    }
}