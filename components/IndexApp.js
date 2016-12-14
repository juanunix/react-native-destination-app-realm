/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import NavBar from './NavBar'
import ContentList from './ContentList'
import LocalStorage from '../localStorage'

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight,
  AlertIOS
} from 'react-native';



export default class IndexApp extends Component {
  constructor(){
    super()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 

    this.state = {
      dataSource: ds.cloneWithRows(this._arrayOfComponents())
    }
  }
  setNativeProps(nativeProps){
    this._root.setNativeProps(nativeProps)
  }
  _arrayOfComponents(){
    var componentList = [];
    for(var i = 0; i < LocalStorage.events.length; i++){
      componentList.push(LocalStorage.events[i]);
    }
    return componentList;
  }
  _touchIconAlert(){
    this.props.navigator.push({
      ident: 'insertDestination',
    })
  }
  renderScene(){
    console.log('it works');
  }
  render(){
    //console.log(this._arrayOfComponents());
    return (
      <View style={styles.container}>
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } 
      />
        <NavBar iconTouch={() => this._touchIconAlert()} orange icon="align-left" colorIcon="#fff" title="Destination"/>
        <ListView 
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
  pressedRow(data){
    this.props.navigator.push({
      ident: 'destinationView',
      data
    })
  }
  renderRow(data){
    return (
      <TouchableHighlight
        onPress={() => this.pressedRow(data)}
        underlayColor="transparent"
      >
        <View
          ref={component => this._root = component}>
          <ContentList
            urlImage={data.image}
            titlePlace={data.title}
            place={data.location}
            days={data.numOfDays}
          />
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
})