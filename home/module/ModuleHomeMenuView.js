/**
 * Created by zhudong on 2017/6/3.
 */
import React, {Component} from 'react';
import {View,
    StyleSheet,
    Buttton,
    Alert,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import { MenuView } from 'xhb-base';

export default class ModuleHomeMenuView extends Component {

    render() {
       return(
           <View style={{
               flex: 1,
               flexDirection: 'row',
               justifyContent: 'space-between'
           }}>
              <MenuView name = '新手入门' onPressButton={onPressButton1}/>
               <MenuView name = '查看赠送' onPressButton={onPressButton2}/>
               <MenuView name = '新闻资讯' onPressButton={onPressButton3}/>
               <MenuView name = '在线客服' onPressButton={onPressButton4}/>
           </View>
       );
    }
}

const onPressButton1 = () => {
    Alert.alert('新手入门');
}
const onPressButton2 = () => {
    Alert.alert('查看赠送');
}
const onPressButton3 = () => {
    Alert.alert('新闻资讯');
}
const onPressButton4 = () => {
    Alert.alert('在线客服');
}
var styles = StyleSheet.create({
    touchView: {
        flex:1,
        backgroundColor: 'red',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginBottom: 10,
        height:50,
        width: 50,
        resizeMode: Image.resizeMode.cover,
    }
})

module.exports = ModuleHomeMenuView;