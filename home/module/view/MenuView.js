import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    Alert,
} from 'react-native';

export default class MenuView extends Component {
    // static propTypes = {
    //   text: PropTypes.string.isRequired,
    //   imageUrl: PropTypes.string.isRequired,
    // };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableHighlight style={styles.touchView} onPress={this.props.onPressButton} underlayColor={'white'}>
                    <View>
                        <Image style={[styles.image]} source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                        }}/>

                        <Text style={{textAlign: 'center',
                        }}>{this.props.name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
// const onPressButton = () => {
//     Alert.alert('nannande');
// };
var styles = StyleSheet.create({
    touchView: {
        flex: 1,
        backgroundColor: 'white',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginBottom: 10,
        height: 50,
        width: 50,
        resizeMode: Image.resizeMode.cover
    }
})

module.exports = MenuView
