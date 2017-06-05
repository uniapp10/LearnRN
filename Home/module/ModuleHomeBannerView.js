/**
 * Created by zhudong on 2017/6/3.
 */
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { ScreenUtils } from 'xhb-base';
import {AppRegistry, StyleSheet, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ModuleHomeBannerView extends Component {
    render(){
        return(
            <Swiper style={styles.banner} height={ScreenUtils.scaleSize(265)} autoplay={true} showPagination={false}>
                <Image style={[styles.image]} source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}/>
                <Image style={[styles.image]} source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}/>
                <Image style={[styles.image]} source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}/>
            </Swiper>
        );
    }
}

var styles = StyleSheet.create({
    banner: { height: ScreenUtils.scaleSize(265) },
    image: {
        height: ScreenUtils.scaleSize(265),
        resizeMode: Image.resizeMode.cover
    },

})
module.exports = ModuleHomeBannerView