import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    AlertIOS,
    Platform
} from 'react-native'
import NavBar from './NavBar'
import ImagePicker from 'react-native-image-picker'
import Realm from 'realm'
import destinationList from '../models/todoListModel'

import Border from '../utils/styleBorders';

export default class DestinationView extends Component {
    constructor(props){
        super(props)

        this.state = {
            avatarSource: null 
        }
    }
    _backButton(){
        this.props.navigator.pop();
    }
    _imagePicker(){

        var options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            // You can display the image using either data...
            const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

            // or a reference to the platform specific asset location
            if (Platform.OS === 'ios') {
            const source = {uri: response.uri.replace('file://', ''), isStatic: true};
            } else {
            const source = {uri: response.uri, isStatic: true};
            }

            this.setState({
                avatarSource: source
            });
        }
        });
    }
    _takeAPhoto(){
        this._imagePicker.bind(this)
    }
    render(){
        var data = JSON.stringify(this.props.data)
        return (
            <View style={styles.container}>
                <NavBar 
                    enableRightIcon
                    title={this.props.data.title} 
                    orange 
                    iconTouchLeft={() => this._backButton()}
                    iconTouchRight={() => this._imagePicker()} 
                    colorIcon="#fff" icon="chevron-left" 
                    colorIconRight ="#fff" iconRight="camera"
                />
                <Image
                    style={[styles.header, Border('red')]}
                    source={{uri: this.props.data.image}}>
                </Image>
                <View style={[styles.footer, Border('blue')]}>
                    <Text>Count of Destinations {data}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1,
        backgroundColor: 'white'
    }
})