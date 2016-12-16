import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    AlertIOS
} from 'react-native'
import NavBar from './NavBar'
import Realm from 'realm'
import destinationList from '../models/todoListModel'

export default class DestinationView extends Component {
    constructor(props){
        super(props)
    }
    _backButton(){
        this.props.navigator.pop();
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
                    colorIcon="#fff" icon="chevron-left" 
                    colorIconRight ="#fff" iconRight="camera"
                />
                <Image
                    style={[styles.header, this.border('red')]}
                    source={{uri: this.props.data.image}}>
                </Image>
                <View style={[styles.footer, this.border('blue')]}>
                    <Text>Count of Destinations {data}</Text>
                </View>
            </View>
        )
    }
    border(color){
        return {
            borderColor: color,
            borderWidth: 4
        }
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