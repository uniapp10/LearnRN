/**
 * Created by zhudong on 2017/6/3.
 */
import React, {Component} from 'react';
import {ScreenUtils} from 'xhb-base';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ModuleHomeADView extends Component {
    render() {
        return (
            <Image style={[styles.image]}
                   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} />
        );
    }
}

var styles = StyleSheet.create({
    bgView: {
        flex: 1,
        height: ScreenUtils.scaleSize(95),
        width: 100,
        backgroundColor: 'red'
    },
    image: {
        top: 8,
        marginBottom: 8,
        width: Dimensions.get('window').width,
        height: 90,
        borderColor: 'green',
        borderWidth: 1,
    }
})
module.exports = ModuleHomeADView;