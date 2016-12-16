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
  AlertIOS,
  RefreshControl
} from 'react-native';

import Realm from 'realm'
import destinationList from '../models/todoListModel'



export default class IndexApp extends Component {
  constructor(){
    super()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 

    this.state = {
      dataSource: ds.cloneWithRows(this.queryData()),
      refreshing: false
    }
  }
  _onRefresh(){
    this.setState({refreshing: true});
       this.setState({
        refreshing: false,
        dataSource: this.state.dataSource.cloneWithRows(this.queryData())
      });
  }
  setNativeProps(nativeProps){
    this._root.setNativeProps(nativeProps)
  }
  _arrayOfComponents(){
    var componentList = [];
    for(var i = 0; i < LocalStorage.events.length; i++){
      componentList.push(LocalStorage.events[i]);
    }
    console.log(componentList);
    return componentList;
  }
  _touchIconAlert(){
    this.props.navigator.push({
      ident: 'insertDestination',
    })
  }
  renderScene(){
    console.log('this works');
  }
  queryData(){
    var dataList = [];
    let all = destinationList.objects('DestinationList');
    for(var i = 0; i < all.length; i++){
      dataList.push({
        image: all[i].image,
        title: all[i].title,
        location: all[i].place,
        numOfDays: all[i].day
      })
    }
    return dataList;
  }
  render(){
    return (
      <View style={styles.container}>
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } 
      />
        <NavBar iconTouchLeft={() => this._touchIconAlert()} orange icon="align-left" colorIcon="#fff" title="Destination"/>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          } 
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