import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    AlertIOS,
    TextInput,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Dimensions
} from 'react-native'
import Navbar from './NavBar'
const dismissKeyboard = require('dismissKeyboard');

import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'

import Border from '../utils/styleBorders';

export default class TakeAPhoto extends Component {
    takePicture() {
        this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
    _backButton(){
        this.props.navigator.pop()
    }
    newPhoto(){
        AlertIOS.alert('its working');
    }
    render(){
        return (
            <View style={[styles.container]}>
                <Navbar 
                    iconTouchLeft={() => this._backButton()}
                    iconIcon="#fff"
                    icon="times"
                    orange
                    title="Take a Photo"
                />
                <View style={[styles.textAreaInput]}>
                    <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                        <View>
                            <TextInput 
                                style={styles.textAreaInput}
                                keyboardType='default'
                                multiline={true}
                                placeholder="Photo description"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.containerCamera}>
                    <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    </Camera>
                </View>
                <View style={[styles.button, Border('black')]}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
    },
    textArea: {
        flex: 3
    },
    textAreaInput:{
        height: 55,
        borderColor: 'grey',
        borderWidth: 3
    },
    image: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPhoto: {
        backgroundColor: '#cecece',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 0
    }
})