/**
 * Created by zhudong on 2017/6/3.
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { ModuleHomeBannerView, ModuleHomeMenuView, ModuleHomeADView } from 'xhb-base';

export default class home extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <ModuleHomeBannerView/>
                <ModuleHomeMenuView/>
                <ModuleHomeADView/>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    scrollview: {
        backgroundColor: 'steelblue'
    }
})

AppRegistry.registerComponent('RNHighScores', () => home);