import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
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
        let all = destinationList.objects('DestinationList');
        let s = JSON.stringify(all);
        return (
            <ScrollView style={styles.containerDestinationView}>
                <Image
                    source={{uri: this.props.data.image}} style={styles.imageView}>
                    <NavBar iconTouch={() => this._backButton()} iconColor="#000" icon="chevron-left" />
                    <Text>{this.props.data.title}</Text>
                    <Text>{this.props.data.location}</Text>
                    <Text>{this.props.data.numOfDays} days later</Text>
                </Image>
                <View style={styles.contentDestinationView}>
                    <Text>Count of Destinations {s}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerDestinationView: {
        flex: 1,
        height: window.height
    },
    /* 
    	border-bottom: 100px solid red;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        height: 0;
        width: 100px;
    */
    imageView: {
        width: window.width,
        height: 320,
    },
    contentDestinationView: {
        backgroundColor: 'skyblue',
        height: window.height
    }
})